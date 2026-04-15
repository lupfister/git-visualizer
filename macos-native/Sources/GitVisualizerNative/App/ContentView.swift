import SwiftUI

struct ContentView: View {
    @EnvironmentObject private var model: AppModel

    var body: some View {
        NavigationSplitView {
            SidebarView()
        } detail: {
            VStack(spacing: 0) {
                HeaderBarView()
                Divider()
                GraphContainerView()
            }
        }
        .frame(minWidth: 1200, minHeight: 780)
        .alert("Protocol Error", isPresented: .constant(model.startupError != nil)) {
            Button("OK") { model.clearStartupError() }
        } message: {
            Text(model.startupError ?? "")
        }
    }
}

private struct SidebarView: View {
    @EnvironmentObject private var model: AppModel

    var body: some View {
        List {
            Section("Repository") {
                Text(model.repoInfo?.name ?? "No Repository")
                Text(model.repoInfo?.path ?? "Open a repository to begin")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
            Section("Branches") {
                ForEach(model.branches, id: \.name) { branch in
                    Text(branch.name)
                        .lineLimit(1)
                }
            }
        }
        .listStyle(.sidebar)
    }
}

private struct HeaderBarView: View {
    @EnvironmentObject private var model: AppModel

    var body: some View {
        HStack {
            Text("Git Visualizer Native")
                .font(.headline)
            Spacer()
            if let checkedOut = model.checkedOutRef?.branchName {
                Text("Checked out: \(checkedOut)")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
        }
        .padding(12)
    }
}

private struct GraphContainerView: View {
    @EnvironmentObject private var model: AppModel

    var body: some View {
        BranchGraphRepresentable(
            branches: model.branches,
            mergeNodes: model.mergeNodes,
            directCommits: model.directCommits,
            unpushedDirectCommits: model.unpushedDirectCommits
        )
        .background(Color(nsColor: .windowBackgroundColor))
    }
}
