import SwiftUI

@main
struct GitVisualizerNativeApp: App {
    @StateObject private var appModel = AppModel()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appModel)
                .task {
                    await appModel.bootstrap()
                }
        }
        .windowResizability(.contentSize)
    }
}
