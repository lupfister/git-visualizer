// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "GitVisualizerNative",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "GitVisualizerNative", targets: ["GitVisualizerNative"])
    ],
    dependencies: [],
    targets: [
        .executableTarget(
            name: "GitVisualizerNative",
            path: "Sources/GitVisualizerNative"
        ),
        .testTarget(
            name: "GitVisualizerNativeTests",
            dependencies: ["GitVisualizerNative"],
            path: "Tests/GitVisualizerNativeTests"
        )
    ]
)
