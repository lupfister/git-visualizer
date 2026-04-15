import Foundation

enum SidecarError: LocalizedError {
    case binaryNotFound
    case notStarted
    case protocolMismatch(expected: Int, actual: Int?)
    case rpc(code: Int, message: String)
    case invalidResponse

    var errorDescription: String? {
        switch self {
        case .binaryNotFound:
            return "Rust sidecar binary not found. Build with `cargo build --bin sidecar` in src-tauri, or set GIT_VIZ_SIDECAR_PATH."
        case .notStarted:
            return "Rust sidecar is not running."
        case let .protocolMismatch(expected, actual):
            return "Protocol mismatch. Expected \(expected), got \(actual.map(String.init) ?? "nil")."
        case let .rpc(_, message):
            return message
        case .invalidResponse:
            return "Invalid sidecar response"
        }
    }
}

private struct RPCRequest: Encodable {
    let jsonrpc = "2.0"
    let id: Int
    let method: String
    let params: [String: AnyEncodable]
    let protocolVersion: Int
}

private struct RPCResponse<T: Decodable>: Decodable {
    struct RPCErrorPayload: Decodable {
        let code: Int
        let message: String
    }

    let protocolVersion: Int
    let id: Int?
    let result: T?
    let error: RPCErrorPayload?
}

struct HandshakeResult: Decodable {
    let protocolVersion: Int
    let app: String
    let supportedMethods: [String]
}

@MainActor
final class SidecarClient {
    static let protocolVersion = 1

    private var process: Process?
    private var stdinPipe: Pipe?
    private var stdoutPipe: Pipe?
    private var nextID = 1
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()

    func startAndHandshake() async throws {
        try startIfNeeded()
        let result: HandshakeResult = try await callRaw(
            method: "system.handshake",
            params: [:],
            protocolVersion: SidecarClient.protocolVersion
        )
        guard result.protocolVersion == SidecarClient.protocolVersion else {
            throw SidecarError.protocolMismatch(expected: SidecarClient.protocolVersion, actual: result.protocolVersion)
        }
    }

    func call<T: Decodable>(_ method: String, params: [String: Any]) async throws -> T {
        let encodedParams = params.mapValues { AnyEncodable($0) }
        return try await callRaw(
            method: method,
            params: encodedParams,
            protocolVersion: SidecarClient.protocolVersion
        )
    }

    private func startIfNeeded() throws {
        if process?.isRunning == true { return }

        let fileManager = FileManager.default
        let cwd = URL(fileURLWithPath: fileManager.currentDirectoryPath)
        guard let candidate = resolveSidecarBinary(from: cwd) else {
            throw SidecarError.binaryNotFound
        }

        // Find repo root from the discovered binary so relative behavior stays stable.
        let repoRoot = candidate
            .deletingLastPathComponent() // debug
            .deletingLastPathComponent() // target
            .deletingLastPathComponent() // src-tauri
            .deletingLastPathComponent() // repo root

        let proc = Process()
        proc.executableURL = candidate
        proc.currentDirectoryURL = repoRoot.appendingPathComponent("src-tauri")

        let input = Pipe()
        let output = Pipe()
        proc.standardInput = input
        proc.standardOutput = output

        try proc.run()

        process = proc
        stdinPipe = input
        stdoutPipe = output
    }

    private func resolveSidecarBinary(from cwd: URL) -> URL? {
        let fileManager = FileManager.default

        if let explicitPath = ProcessInfo.processInfo.environment["GIT_VIZ_SIDECAR_PATH"],
           !explicitPath.isEmpty {
            let explicitURL = URL(fileURLWithPath: explicitPath)
            if fileManager.fileExists(atPath: explicitURL.path) {
                return explicitURL
            }
        }

        var current = cwd
        for _ in 0..<8 {
            let candidate = current
                .appendingPathComponent("src-tauri")
                .appendingPathComponent("target")
                .appendingPathComponent("debug")
                .appendingPathComponent("sidecar")
            if fileManager.fileExists(atPath: candidate.path) {
                return candidate
            }
            let parent = current.deletingLastPathComponent()
            if parent.path == current.path {
                break
            }
            current = parent
        }

        return nil
    }

    private func callRaw<T: Decodable>(method: String, params: [String: AnyEncodable], protocolVersion: Int) async throws -> T {
        guard process?.isRunning == true,
              let stdin = stdinPipe,
              let stdout = stdoutPipe else {
            throw SidecarError.notStarted
        }

        let id = nextID
        nextID += 1

        let req = RPCRequest(id: id, method: method, params: params, protocolVersion: protocolVersion)
        let data = try encoder.encode(req)
        var payload = data
        payload.append(0x0A)
        stdin.fileHandleForWriting.write(payload)

        guard let lineData = try await readLine(from: stdout.fileHandleForReading) else {
            throw SidecarError.invalidResponse
        }

        let envelope = try decoder.decode(RPCResponse<T>.self, from: lineData)
        if let rpcError = envelope.error {
            throw SidecarError.rpc(code: rpcError.code, message: rpcError.message)
        }
        guard envelope.protocolVersion == SidecarClient.protocolVersion else {
            throw SidecarError.protocolMismatch(
                expected: SidecarClient.protocolVersion,
                actual: envelope.protocolVersion
            )
        }
        guard let result = envelope.result else {
            throw SidecarError.invalidResponse
        }
        return result
    }

    private func readLine(from handle: FileHandle) async throws -> Data? {
        var buffer = Data()
        while true {
            let chunk = try handle.read(upToCount: 1)
            guard let chunk else {
                return buffer.isEmpty ? nil : buffer
            }
            if chunk.isEmpty {
                return buffer.isEmpty ? nil : buffer
            }
            if chunk.first == 0x0A {
                return buffer
            }
            buffer.append(chunk)
        }
    }
}

struct AnyEncodable: Encodable {
    private let encodeImpl: (Encoder) throws -> Void

    init(_ value: Any) {
        self.encodeImpl = { encoder in
            var container = encoder.singleValueContainer()
            switch value {
            case let v as String:
                try container.encode(v)
            case let v as Int:
                try container.encode(v)
            case let v as Int64:
                try container.encode(v)
            case let v as Bool:
                try container.encode(v)
            case let v as Double:
                try container.encode(v)
            case let v as [String: Any]:
                try container.encode(v.mapValues(AnyEncodable.init))
            case let v as [Any]:
                try container.encode(v.map(AnyEncodable.init))
            case let v as [String: AnyEncodable]:
                try container.encode(v)
            case let v as [AnyEncodable]:
                try container.encode(v)
            case Optional<Any>.none:
                try container.encodeNil()
            default:
                let ctx = EncodingError.Context(codingPath: container.codingPath, debugDescription: "Unsupported value: \(type(of: value))")
                throw EncodingError.invalidValue(value, ctx)
            }
        }
    }

    func encode(to encoder: Encoder) throws {
        try encodeImpl(encoder)
    }
}
