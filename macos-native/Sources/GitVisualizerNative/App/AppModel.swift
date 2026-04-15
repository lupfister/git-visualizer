import Foundation

@MainActor
final class AppModel: ObservableObject {
    @Published var startupError: String?
    @Published var repoInfo: RepoInfo?
    @Published var defaultBranch: String = "main"
    @Published var checkedOutRef: CheckedOutRef?
    @Published var branches: [Branch] = []
    @Published var mergeNodes: [MergeNode] = []
    @Published var directCommits: [DirectCommit] = []
    @Published var unpushedDirectCommits: [DirectCommit] = []

    private let sidecar = SidecarClient()

    func bootstrap() async {
        do {
            try await sidecar.startAndHandshake()
        } catch {
            startupError = error.localizedDescription
            return
        }

        // Placeholder bootstrap path: the app starts pointed at the current working directory
        // so protocol integration can be validated before the full picker flow is migrated.
        await loadRepo(path: FileManager.default.currentDirectoryPath)
    }

    func clearStartupError() {
        startupError = nil
    }

    func loadRepo(path: String) async {
        do {
            let info: RepoInfo = try await sidecar.call("get_repo_info", params: ["repoPath": path])
            let defaultBranch: String = try await sidecar.call("get_default_branch", params: ["repoPath": path])
            let branches: [Branch] = try await sidecar.call("get_branches", params: ["repoPath": path])
            let checkedOut: CheckedOutRef = try await sidecar.call("get_checked_out_ref", params: ["repoPath": path])
            let mergeNodesResponse: MergeNodesResponse = try await sidecar.call(
                "get_merge_nodes",
                params: ["repoPath": path, "branch": defaultBranch, "page": 0, "perPage": 500]
            )
            let direct: [DirectCommit] = try await sidecar.call(
                "get_direct_commits",
                params: ["repoPath": path, "branch": defaultBranch]
            )
            let unpushed: [DirectCommit] = try await sidecar.call(
                "get_unpushed_direct_commits",
                params: ["repoPath": path, "branchName": defaultBranch]
            )

            repoInfo = info
            self.defaultBranch = defaultBranch
            self.branches = branches
            checkedOutRef = checkedOut
            mergeNodes = mergeNodesResponse.nodes
            directCommits = direct
            unpushedDirectCommits = unpushed
        } catch {
            startupError = error.localizedDescription
        }
    }
}
