import XCTest
@testable import GitVisualizerNative

final class ProtocolVersionTests: XCTestCase {
    @MainActor
    func testProtocolVersionConstant() {
        XCTAssertEqual(SidecarClient.protocolVersion, 1)
    }
}
