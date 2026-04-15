import Foundation

struct RepoInfo: Codable {
    let name: String
    let path: String
}

struct CheckedOutRef: Codable {
    let branchName: String?
    let headSha: String
    let parentSha: String?
    let hasUncommittedChanges: Bool
}

struct Branch: Codable {
    let name: String
    let commitsAhead: Int
    let commitsBehind: Int
    let createdFromSha: String?
    let createdDate: String?
    let lastCommitDate: String
    let lastCommitAuthor: String
    let status: String
    let remoteSyncStatus: String
    let unpushedCommits: Int
    let headSha: String
    let parentBranch: String?
    let divergedFromSha: String?
    let divergedFromDate: String?
}

struct MergeNode: Codable {
    let sha: String
    let fullSha: String
    let prNumber: Int?
    let prTitle: String?
    let date: String
    let parentShas: [String]
}

struct DirectCommit: Codable {
    let fullSha: String
    let sha: String
    let parentSha: String?
    let message: String
    let author: String
    let date: String
}

struct MergeNodesResponse: Codable {
    let nodes: [MergeNode]
    let hasMore: Bool
}
