import AppKit
import SwiftUI

struct BranchGraphRepresentable: NSViewRepresentable {
    let branches: [Branch]
    let mergeNodes: [MergeNode]
    let directCommits: [DirectCommit]
    let unpushedDirectCommits: [DirectCommit]

    func makeNSView(context: Context) -> BranchGraphView {
        let view = BranchGraphView()
        view.update(
            branches: branches,
            mergeNodes: mergeNodes,
            directCommits: directCommits,
            unpushedDirectCommits: unpushedDirectCommits
        )
        return view
    }

    func updateNSView(_ nsView: BranchGraphView, context: Context) {
        nsView.update(
            branches: branches,
            mergeNodes: mergeNodes,
            directCommits: directCommits,
            unpushedDirectCommits: unpushedDirectCommits
        )
    }
}

final class BranchGraphView: NSView {
    private var branches: [Branch] = []
    private var mergeNodes: [MergeNode] = []
    private var directCommits: [DirectCommit] = []
    private var unpushedDirectCommits: [DirectCommit] = []

    private var zoom: CGFloat = 1
    private var panOffset = CGPoint.zero
    private var lastPanPoint: CGPoint?

    override var acceptsFirstResponder: Bool { true }

    func update(
        branches: [Branch],
        mergeNodes: [MergeNode],
        directCommits: [DirectCommit],
        unpushedDirectCommits: [DirectCommit]
    ) {
        self.branches = branches
        self.mergeNodes = mergeNodes
        self.directCommits = directCommits
        self.unpushedDirectCommits = unpushedDirectCommits
        needsDisplay = true
    }

    override func draw(_ dirtyRect: NSRect) {
        NSColor.windowBackgroundColor.setFill()
        dirtyRect.fill()

        let text = "Branches: \(branches.count) • Merge nodes: \(mergeNodes.count) • Direct commits: \(directCommits.count)"
        let attrs: [NSAttributedString.Key: Any] = [
            .foregroundColor: NSColor.secondaryLabelColor,
            .font: NSFont.systemFont(ofSize: 12, weight: .medium)
        ]
        let origin = CGPoint(x: 16 + panOffset.x, y: bounds.height - 28 + panOffset.y)
        NSString(string: text).draw(at: origin, withAttributes: attrs)

        NSColor.controlAccentColor.withAlphaComponent(0.25).setStroke()
        let laneHeight: CGFloat = 28 * zoom
        let startY = bounds.height - 60 + panOffset.y
        for idx in branches.indices {
            let y = startY - CGFloat(idx) * laneHeight
            let path = NSBezierPath()
            path.move(to: CGPoint(x: 24 + panOffset.x, y: y))
            path.line(to: CGPoint(x: bounds.width - 24 + panOffset.x, y: y))
            path.lineWidth = 2
            path.stroke()
        }
    }

    override func mouseDown(with event: NSEvent) {
        lastPanPoint = convert(event.locationInWindow, from: nil)
    }

    override func mouseDragged(with event: NSEvent) {
        guard let lastPanPoint else { return }
        let point = convert(event.locationInWindow, from: nil)
        let dx = point.x - lastPanPoint.x
        let dy = point.y - lastPanPoint.y
        panOffset.x += dx
        panOffset.y += dy
        self.lastPanPoint = point
        needsDisplay = true
    }

    override func mouseUp(with event: NSEvent) {
        lastPanPoint = nil
    }

    override func magnify(with event: NSEvent) {
        zoom = max(0.5, min(4.0, zoom + event.magnification))
        needsDisplay = true
    }
}
