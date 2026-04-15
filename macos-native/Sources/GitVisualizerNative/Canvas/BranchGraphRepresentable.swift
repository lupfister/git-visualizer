import AppKit
import SwiftUI

struct BranchGraphRepresentable: NSViewRepresentable {
    let defaultBranch: String
    let checkedOutRef: CheckedOutRef?
    let branches: [Branch]
    let mergeNodes: [MergeNode]
    let directCommits: [DirectCommit]
    let unpushedDirectCommits: [DirectCommit]

    func makeNSView(context: Context) -> BranchGraphView {
        let view = BranchGraphView()
        view.update(
            defaultBranch: defaultBranch,
            checkedOutRef: checkedOutRef,
            branches: branches,
            mergeNodes: mergeNodes,
            directCommits: directCommits,
            unpushedDirectCommits: unpushedDirectCommits
        )
        return view
    }

    func updateNSView(_ nsView: BranchGraphView, context: Context) {
        nsView.update(
            defaultBranch: defaultBranch,
            checkedOutRef: checkedOutRef,
            branches: branches,
            mergeNodes: mergeNodes,
            directCommits: directCommits,
            unpushedDirectCommits: unpushedDirectCommits
        )
    }
}

private struct Layout {
    let topInset: CGFloat
    let leftInset: CGFloat
    let laneSpacing: CGFloat
    let rowSpacing: CGFloat
    let nodeSize: CGSize
    let cardSize: CGSize

    static func make(zoom: CGFloat) -> Layout {
        let z = max(0.55, min(3.2, zoom))
        return Layout(
            topInset: 90,
            leftInset: 120,
            laneSpacing: 180 * z,
            rowSpacing: 52 * z,
            nodeSize: CGSize(width: 24 * z, height: 16 * z),
            cardSize: CGSize(width: 230 * z, height: 50 * z)
        )
    }
}

private struct MainClump {
    let key: String
    let commits: [DirectCommit]
    let row: Int
    let rect: NSRect
    let cardRect: NSRect
    let point: CGPoint
    let isCheckedOut: Bool
    let hasUnpushed: Bool
}

private struct BranchVisual {
    let branch: Branch
    let column: Int
    let headRow: Int
    let forkRow: Int
    let headRect: NSRect
    let labelRect: NSRect
    let laneX: CGFloat
    let syntheticRows: [Int]
}

private enum HoverTarget {
    case mainClump(MainClump)
    case branch(BranchVisual)
}

final class BranchGraphView: NSView {
    private var defaultBranch = "main"
    private var checkedOutRef: CheckedOutRef?
    private var branches: [Branch] = []
    private var mergeNodes: [MergeNode] = []
    private var directCommits: [DirectCommit] = []
    private var unpushedShaSet = Set<String>()

    private var zoom: CGFloat = 1
    private var panOffset = CGPoint.zero
    private var lastPanPoint: CGPoint?

    private var mainClumps: [MainClump] = []
    private var branchVisuals: [BranchVisual] = []
    private var commitRowBySha: [String: Int] = [:]
    private var hoverTarget: HoverTarget?
    private var trackingRef: NSTrackingArea?

    override var acceptsFirstResponder: Bool { true }

    func update(
        defaultBranch: String,
        checkedOutRef: CheckedOutRef?,
        branches: [Branch],
        mergeNodes: [MergeNode],
        directCommits: [DirectCommit],
        unpushedDirectCommits: [DirectCommit]
    ) {
        self.defaultBranch = defaultBranch
        self.checkedOutRef = checkedOutRef
        self.branches = branches
        self.mergeNodes = mergeNodes
        self.directCommits = directCommits
        self.unpushedShaSet = Set(unpushedDirectCommits.map(\.fullSha))
        needsDisplay = true
    }

    override func updateTrackingAreas() {
        if let trackingRef {
            removeTrackingArea(trackingRef)
        }
        let area = NSTrackingArea(
            rect: bounds,
            options: [.mouseMoved, .mouseEnteredAndExited, .activeInActiveApp, .inVisibleRect],
            owner: self,
            userInfo: nil
        )
        addTrackingArea(area)
        trackingRef = area
        super.updateTrackingAreas()
    }

    override func draw(_ dirtyRect: NSRect) {
        NSColor.windowBackgroundColor.setFill()
        dirtyRect.fill()

        if directCommits.isEmpty {
            drawEmpty()
            return
        }

        let layout = Layout.make(zoom: zoom)
        let clumpSize = clumpSizeForZoom(zoom)

        buildGridModel(layout: layout, clumpSize: clumpSize)

        drawHeader(clumpSize: clumpSize)
        drawGridBackground(layout: layout)
        drawMainLane(layout: layout)
        drawBranchLanes(layout: layout)
        drawMergeConnectors(layout: layout)
        drawMainClumps(layout: layout)
        drawBranchNodes(layout: layout)

        if let hoverTarget {
            drawTooltip(for: hoverTarget)
        }
    }

    private func clumpSizeForZoom(_ zoom: CGFloat) -> Int {
        if zoom < 0.72 { return 7 }
        if zoom < 0.9 { return 5 }
        if zoom < 1.2 { return 3 }
        if zoom < 1.45 { return 2 }
        return 1
    }

    private func buildGridModel(layout: Layout, clumpSize: Int) {
        mainClumps = []
        branchVisuals = []
        commitRowBySha = [:]

        let tx = panOffset.x
        let ty = panOffset.y
        let mainLaneX = layout.leftInset + tx

        var row = 0
        var idx = 0
        while idx < directCommits.count {
            let end = min(idx + clumpSize, directCommits.count)
            let group = Array(directCommits[idx..<end])
            let y = layout.topInset + CGFloat(row) * layout.rowSpacing + ty
            let nodeRect = NSRect(
                x: mainLaneX - layout.nodeSize.width / 2,
                y: y - layout.nodeSize.height / 2,
                width: layout.nodeSize.width,
                height: layout.nodeSize.height
            )
            let cardRect = NSRect(
                x: nodeRect.minX - layout.cardSize.width - 36 * zoom,
                y: y - layout.cardSize.height / 2,
                width: layout.cardSize.width,
                height: layout.cardSize.height
            )

            let key = "main-\(idx)-\(end - 1)"
            let checkedOutSha = checkedOutRef?.headSha
            let isCheckedOut = group.contains(where: { $0.fullSha == checkedOutSha })
            let hasUnpushed = group.contains(where: { unpushedShaSet.contains($0.fullSha) })
            let clump = MainClump(
                key: key,
                commits: group,
                row: row,
                rect: nodeRect,
                cardRect: cardRect,
                point: CGPoint(x: mainLaneX, y: y),
                isCheckedOut: isCheckedOut,
                hasUnpushed: hasUnpushed
            )
            mainClumps.append(clump)

            for commit in group {
                commitRowBySha[commit.fullSha] = row
            }

            row += 1
            idx = end
        }

        // Deterministic branch columns: fork row asc, ahead desc, name asc
        let sortedBranches = branches.sorted { lhs, rhs in
            let leftFork = commitRowBySha[lhs.divergedFromSha ?? ""] ?? Int.max
            let rightFork = commitRowBySha[rhs.divergedFromSha ?? ""] ?? Int.max
            if leftFork != rightFork { return leftFork < rightFork }
            if lhs.commitsAhead != rhs.commitsAhead { return lhs.commitsAhead > rhs.commitsAhead }
            return lhs.name.localizedCaseInsensitiveCompare(rhs.name) == .orderedAscending
        }

        for (i, branch) in sortedBranches.enumerated() {
            let column = i + 1
            let forkRow = commitRowBySha[branch.divergedFromSha ?? ""] ?? min(mainClumps.count - 1, 10 + i)
            let rawHeadRow = max(0, forkRow - max(1, branch.commitsAhead / max(1, clumpSize)))
            let headRow = min(forkRow, rawHeadRow)
            let laneX = mainLaneX + CGFloat(column) * layout.laneSpacing
            let y = layout.topInset + CGFloat(headRow) * layout.rowSpacing + ty

            let headRect = NSRect(
                x: laneX - layout.nodeSize.width / 2,
                y: y - layout.nodeSize.height / 2,
                width: layout.nodeSize.width,
                height: layout.nodeSize.height
            )
            let labelRect = NSRect(
                x: laneX - 8 * zoom,
                y: y + 12 * zoom,
                width: 186 * zoom,
                height: 44 * zoom
            )

            // Synthetic clumps that represent ahead commits in this lane.
            let aheadClumps = max(0, Int(ceil(Double(max(0, branch.commitsAhead)) / Double(clumpSize))))
            let syntheticRows = (0..<aheadClumps).map { clumpOffset -> Int in
                let candidate = headRow + clumpOffset
                return min(forkRow - 1, candidate)
            }.filter { $0 >= headRow && $0 < forkRow }

            branchVisuals.append(
                BranchVisual(
                    branch: branch,
                    column: column,
                    headRow: headRow,
                    forkRow: forkRow,
                    headRect: headRect,
                    labelRect: labelRect,
                    laneX: laneX,
                    syntheticRows: Array(Set(syntheticRows)).sorted()
                )
            )
        }
    }

    private func drawHeader(clumpSize: Int) {
        let text = "\(defaultBranch) • branches: \(branches.count + 1) • commits: \(directCommits.count) • clump:\(clumpSize)"
        let attrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.secondaryLabelColor,
            .font: NSFont.systemFont(ofSize: 12, weight: .semibold)
        ]
        NSString(string: text).draw(
            at: CGPoint(x: 18 + panOffset.x, y: bounds.height - 30 + panOffset.y),
            withAttributes: attrs
        )
    }

    private func drawGridBackground(layout: Layout) {
        guard let lastMain = mainClumps.last else { return }
        let maxRow = max(lastMain.row, branchVisuals.map(\.forkRow).max() ?? 0)

        NSColor.tertiaryLabelColor.withAlphaComponent(0.12).setStroke()

        for row in 0...maxRow {
            let y = layout.topInset + CGFloat(row) * layout.rowSpacing + panOffset.y
            let path = NSBezierPath()
            path.move(to: CGPoint(x: layout.leftInset - 100 + panOffset.x, y: y))
            path.line(to: CGPoint(x: layout.leftInset + CGFloat(max(1, branches.count + 1)) * layout.laneSpacing + 120 + panOffset.x, y: y))
            path.lineWidth = 0.8
            path.stroke()
        }

        let cols = max(1, branches.count + 1)
        for col in 0...cols {
            let x = layout.leftInset + CGFloat(col) * layout.laneSpacing + panOffset.x
            let path = NSBezierPath()
            path.move(to: CGPoint(x: x, y: layout.topInset - 40 + panOffset.y))
            path.line(to: CGPoint(x: x, y: layout.topInset + CGFloat(maxRow + 1) * layout.rowSpacing + panOffset.y))
            path.lineWidth = 0.8
            path.stroke()
        }
    }

    private func drawMainLane(layout: Layout) {
        guard let first = mainClumps.first, let last = mainClumps.last else { return }
        NSColor.tertiaryLabelColor.withAlphaComponent(0.35).setStroke()
        let path = NSBezierPath()
        path.move(to: first.point)
        path.line(to: last.point)
        path.lineWidth = max(2, 2 * zoom)
        path.stroke()
    }

    private func drawBranchLanes(layout: Layout) {
        let mainX = layout.leftInset + panOffset.x

        for branch in branchVisuals {
            let forkY = yForRow(branch.forkRow, layout: layout)
            let headY = yForRow(branch.headRow, layout: layout)
            let isCheckedOut = checkedOutRef?.branchName == branch.branch.name

            let lineColor = isCheckedOut
                ? NSColor.controlAccentColor.withAlphaComponent(0.94)
                : NSColor.systemBlue.withAlphaComponent(0.62)
            lineColor.setStroke()

            let curve = NSBezierPath()
            curve.move(to: CGPoint(x: mainX, y: forkY))
            curve.curve(
                to: CGPoint(x: branch.laneX, y: headY),
                controlPoint1: CGPoint(x: mainX + 52 * zoom, y: forkY),
                controlPoint2: CGPoint(x: branch.laneX - 42 * zoom, y: headY)
            )
            curve.lineWidth = max(1.2, 1.45 * zoom)
            curve.stroke()

            // vertical lane segment between head and fork, if there is depth
            if branch.forkRow - branch.headRow > 1 {
                let lanePath = NSBezierPath()
                lanePath.move(to: CGPoint(x: branch.laneX, y: headY))
                lanePath.line(to: CGPoint(x: branch.laneX, y: forkY))
                lanePath.lineWidth = max(0.9, 1.1 * zoom)
                lanePath.stroke()
            }

            drawBranchSyntheticClumps(branch: branch, layout: layout, isCheckedOut: isCheckedOut)
        }
    }

    private func drawBranchSyntheticClumps(branch: BranchVisual, layout: Layout, isCheckedOut: Bool) {
        guard !branch.syntheticRows.isEmpty else { return }
        let color = isCheckedOut ? NSColor.controlAccentColor : NSColor.systemBlue

        for row in branch.syntheticRows {
            let y = yForRow(row, layout: layout)
            let rect = NSRect(
                x: branch.laneX - layout.nodeSize.width / 2,
                y: y - layout.nodeSize.height / 2,
                width: layout.nodeSize.width,
                height: layout.nodeSize.height
            )
            color.withAlphaComponent(0.18).setFill()
            color.withAlphaComponent(0.68).setStroke()
            let p = NSBezierPath(roundedRect: rect, xRadius: 5 * zoom, yRadius: 5 * zoom)
            p.lineWidth = max(0.9, zoom)
            p.fill()
            p.stroke()
        }
    }

    private func drawMergeConnectors(layout: Layout) {
        guard !mergeNodes.isEmpty else { return }

        let laneByHead = Dictionary(uniqueKeysWithValues: branchVisuals.map { ($0.branch.headSha, $0.laneX) })

        NSColor.systemTeal.withAlphaComponent(0.52).setStroke()
        for merge in mergeNodes {
            guard let targetRow = commitRowBySha[merge.fullSha], merge.parentShas.count >= 2 else { continue }
            let target = CGPoint(x: layout.leftInset + panOffset.x, y: yForRow(targetRow, layout: layout))
            let sourceParent = merge.parentShas[1]

            let sourceX = laneByHead[sourceParent] ?? (layout.leftInset + layout.laneSpacing * 0.75 + panOffset.x)
            let sourceY = target.y - layout.rowSpacing * 0.75

            let path = NSBezierPath()
            path.move(to: CGPoint(x: sourceX, y: sourceY))
            path.curve(
                to: target,
                controlPoint1: CGPoint(x: sourceX + 8 * zoom, y: sourceY + 10 * zoom),
                controlPoint2: CGPoint(x: target.x + 36 * zoom, y: target.y - 8 * zoom)
            )
            path.lineWidth = max(1.0, 1.2 * zoom)
            path.stroke()
        }
    }

    private func drawMainClumps(layout: Layout) {
        for clump in mainClumps {
            drawMainNode(clump: clump)
            drawMainCard(clump: clump)
        }
    }

    private func drawMainNode(clump: MainClump) {
        let baseColor: NSColor = {
            if clump.isCheckedOut { return NSColor.controlAccentColor }
            if clump.hasUnpushed { return NSColor.systemOrange }
            return NSColor.quaternaryLabelColor
        }()

        let path = NSBezierPath(roundedRect: clump.rect, xRadius: 5 * zoom, yRadius: 5 * zoom)
        baseColor.withAlphaComponent(clump.isCheckedOut ? 0.34 : 0.24).setFill()
        baseColor.withAlphaComponent(clump.isCheckedOut ? 0.92 : 0.78).setStroke()
        path.lineWidth = max(1.0, zoom)
        path.fill()
        path.stroke()

        if clump.commits.count > 1 {
            let bubbleRect = NSRect(x: clump.rect.maxX + 6 * zoom, y: clump.rect.midY - 8 * zoom, width: 28 * zoom, height: 16 * zoom)
            let bubble = NSBezierPath(roundedRect: bubbleRect, xRadius: 6 * zoom, yRadius: 6 * zoom)
            NSColor.systemBlue.withAlphaComponent(0.14).setFill()
            NSColor.systemBlue.withAlphaComponent(0.66).setStroke()
            bubble.lineWidth = 0.9
            bubble.fill()
            bubble.stroke()

            let attrs: [NSAttributedString.Key: Any] = [
                .foregroundColor: NSColor.systemBlue,
                .font: NSFont.systemFont(ofSize: 9.5 * zoom, weight: .bold)
            ]
            NSString(string: "x\(clump.commits.count)").draw(
                at: CGPoint(x: bubbleRect.minX + 6 * zoom, y: bubbleRect.minY + 3 * zoom),
                withAttributes: attrs
            )
        }
    }

    private func drawMainCard(clump: MainClump) {
        let borderColor: NSColor = {
            if clump.isCheckedOut { return NSColor.controlAccentColor }
            if clump.hasUnpushed { return NSColor.systemOrange.withAlphaComponent(0.9) }
            return NSColor.tertiaryLabelColor
        }()

        let bg = NSBezierPath(roundedRect: clump.cardRect, xRadius: 8 * zoom, yRadius: 8 * zoom)
        if clump.isCheckedOut {
            NSColor.controlAccentColor.withAlphaComponent(0.10).setFill()
        } else if clump.hasUnpushed {
            NSColor.systemOrange.withAlphaComponent(0.09).setFill()
        } else {
            NSColor.controlBackgroundColor.withAlphaComponent(0.56).setFill()
        }
        borderColor.withAlphaComponent(0.72).setStroke()
        bg.lineWidth = max(0.8, 0.95 * zoom)
        bg.fill()
        bg.stroke()

        let first = clump.commits.first!
        let last = clump.commits.last!

        let shaAttrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.secondaryLabelColor,
            .font: NSFont.monospacedSystemFont(ofSize: 10 * zoom, weight: .medium)
        ]
        let titleAttrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.labelColor,
            .font: NSFont.systemFont(ofSize: 11 * zoom, weight: .semibold)
        ]

        let shaText = clump.commits.count == 1
            ? String(first.sha.prefix(8))
            : "\(String(first.sha.prefix(7))) … \(String(last.sha.prefix(7)))"
        NSString(string: shaText).draw(
            at: CGPoint(x: clump.cardRect.minX + 10 * zoom, y: clump.cardRect.maxY - 16 * zoom),
            withAttributes: shaAttrs
        )

        let title = clump.commits.count == 1
            ? truncate(first.message, maxChars: 34)
            : "\(clump.commits.count) commits clumped"
        NSString(string: title).draw(
            in: NSRect(
                x: clump.cardRect.minX + 10 * zoom,
                y: clump.cardRect.minY + 9 * zoom,
                width: clump.cardRect.width - 16 * zoom,
                height: 18 * zoom
            ),
            withAttributes: titleAttrs
        )

        NSColor.tertiaryLabelColor.withAlphaComponent(0.30).setStroke()
        let connector = NSBezierPath()
        connector.move(to: CGPoint(x: clump.cardRect.maxX + 7 * zoom, y: clump.point.y))
        connector.line(to: CGPoint(x: clump.rect.minX - 6 * zoom, y: clump.point.y))
        connector.lineWidth = max(0.8, 0.9 * zoom)
        connector.stroke()
    }

    private func drawBranchNodes(layout: Layout) {
        for branch in branchVisuals {
            let checkedOut = checkedOutRef?.branchName == branch.branch.name
            let color = checkedOut ? NSColor.controlAccentColor : NSColor.systemBlue

            color.withAlphaComponent(0.24).setFill()
            color.withAlphaComponent(0.9).setStroke()
            let head = NSBezierPath(roundedRect: branch.headRect, xRadius: 5 * zoom, yRadius: 5 * zoom)
            head.lineWidth = max(1.0, zoom)
            head.fill()
            head.stroke()

            let label = NSBezierPath(roundedRect: branch.labelRect, xRadius: 8 * zoom, yRadius: 8 * zoom)
            if checkedOut {
                NSColor.controlAccentColor.withAlphaComponent(0.11).setFill()
                NSColor.controlAccentColor.withAlphaComponent(0.74).setStroke()
            } else {
                NSColor.controlBackgroundColor.withAlphaComponent(0.58).setFill()
                NSColor.tertiaryLabelColor.withAlphaComponent(0.52).setStroke()
            }
            label.lineWidth = 0.9
            label.fill()
            label.stroke()

            let titleAttrs: [NSAttributedString.Key: Any] = [
                .foregroundColor: checkedOut ? NSColor.controlAccentColor : NSColor.labelColor,
                .font: NSFont.systemFont(ofSize: 11 * zoom, weight: checkedOut ? .bold : .semibold)
            ]
            let metaAttrs: [NSAttributedString.Key: Any] = [
                .foregroundColor: NSColor.secondaryLabelColor,
                .font: NSFont.systemFont(ofSize: 10 * zoom, weight: .medium)
            ]

            NSString(string: truncate(branch.branch.name, maxChars: 24)).draw(
                at: CGPoint(x: branch.labelRect.minX + 10 * zoom, y: branch.labelRect.maxY - 17 * zoom),
                withAttributes: titleAttrs
            )
            NSString(string: "ahead \(branch.branch.commitsAhead)").draw(
                at: CGPoint(x: branch.labelRect.minX + 10 * zoom, y: branch.labelRect.minY + 7 * zoom),
                withAttributes: metaAttrs
            )
        }
    }

    private func yForRow(_ row: Int, layout: Layout) -> CGFloat {
        layout.topInset + CGFloat(row) * layout.rowSpacing + panOffset.y
    }

    private func drawEmpty() {
        let text = "No commit graph data available for this repository."
        let attrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.secondaryLabelColor,
            .font: NSFont.systemFont(ofSize: 13, weight: .medium)
        ]
        let size = NSString(string: text).size(withAttributes: attrs)
        NSString(string: text).draw(
            at: CGPoint(x: (bounds.width - size.width) * 0.5, y: (bounds.height - size.height) * 0.5),
            withAttributes: attrs
        )
    }

    private func truncate(_ text: String, maxChars: Int) -> String {
        guard text.count > maxChars else { return text }
        return String(text.prefix(max(0, maxChars - 1))) + "…"
    }

    override func mouseMoved(with event: NSEvent) {
        let point = convert(event.locationInWindow, from: nil)

        if let clump = mainClumps.first(where: { $0.rect.contains(point) || $0.cardRect.contains(point) }) {
            hoverTarget = .mainClump(clump)
            needsDisplay = true
            return
        }

        if let branch = branchVisuals.first(where: { $0.headRect.contains(point) || $0.labelRect.contains(point) }) {
            hoverTarget = .branch(branch)
            needsDisplay = true
            return
        }

        if hoverTarget != nil {
            hoverTarget = nil
            needsDisplay = true
        }
    }

    override func mouseExited(with event: NSEvent) {
        if hoverTarget != nil {
            hoverTarget = nil
            needsDisplay = true
        }
    }

    private func drawTooltip(for target: HoverTarget) {
        let lines: [String]
        switch target {
        case let .mainClump(clump):
            if clump.commits.count == 1, let only = clump.commits.first {
                lines = [only.sha, only.message, only.author]
            } else {
                let first = clump.commits.first?.sha ?? ""
                let last = clump.commits.last?.sha ?? ""
                lines = ["\(clump.commits.count) commits", "\(first) … \(last)", "clumped row \(clump.row)"]
            }
        case let .branch(branch):
            lines = [branch.branch.name, "Ahead: \(branch.branch.commitsAhead)", String(branch.branch.headSha.prefix(8))]
        }

        let titleAttrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.labelColor,
            .font: NSFont.systemFont(ofSize: 11, weight: .semibold)
        ]
        let bodyAttrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.secondaryLabelColor,
            .font: NSFont.systemFont(ofSize: 10, weight: .regular)
        ]

        let width = lines.enumerated().map { idx, line in
            NSString(string: line).size(withAttributes: idx == 0 ? titleAttrs : bodyAttrs).width
        }.max()! + 20
        let height = CGFloat(lines.count) * 16 + 12

        let mouse = convert(window?.mouseLocationOutsideOfEventStream ?? .zero, from: nil)
        let rect = NSRect(x: mouse.x + 12, y: mouse.y + 12, width: width, height: height)

        let box = NSBezierPath(roundedRect: rect, xRadius: 8, yRadius: 8)
        NSColor.controlBackgroundColor.withAlphaComponent(0.93).setFill()
        NSColor.tertiaryLabelColor.withAlphaComponent(0.6).setStroke()
        box.lineWidth = 1
        box.fill()
        box.stroke()

        for (idx, line) in lines.enumerated() {
            NSString(string: line).draw(
                at: CGPoint(x: rect.minX + 10, y: rect.maxY - 18 - CGFloat(idx) * 16),
                withAttributes: idx == 0 ? titleAttrs : bodyAttrs
            )
        }
    }

    override func mouseDown(with event: NSEvent) {
        window?.makeFirstResponder(self)
        lastPanPoint = convert(event.locationInWindow, from: nil)
    }

    override func mouseDragged(with event: NSEvent) {
        guard let lastPanPoint else { return }
        let point = convert(event.locationInWindow, from: nil)
        panOffset.x += point.x - lastPanPoint.x
        panOffset.y += point.y - lastPanPoint.y
        self.lastPanPoint = point
        needsDisplay = true
    }

    override func mouseUp(with event: NSEvent) {
        lastPanPoint = nil
    }

    override func magnify(with event: NSEvent) {
        zoom = max(0.55, min(3.2, zoom + event.magnification))
        needsDisplay = true
    }
}
