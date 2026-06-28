import { cn } from './mapGridUtils';
import branchNewSvg from '../../src/assets/icons/icon-branchNew.svg?raw';
import branchNewRootSvg from '../../src/assets/icons/icon-branchNewRoot.svg?raw';
import commitSvg from '../../src/assets/icons/icon-commit.svg?raw';
import newWorktreeSvg from '../../src/assets/icons/icon-newWorktree.svg?raw';
import previewSvg from '../../src/assets/icons/icon-preview.svg?raw';
import projectClosedSvg from '../../src/assets/icons/icon-projectClosed.svg?raw';
import projectNewSvg from '../../src/assets/icons/icon-projectNew.svg?raw';
import projectOpenSvg from '../../src/assets/icons/icon-projectOpen.svg?raw';
import pushMultipleSvg from '../../src/assets/icons/icon-pushMultiple.svg?raw';
import pushSingleSvg from '../../src/assets/icons/icon-pushSingle.svg?raw';
import stashSvg from '../../src/assets/icons/icon-stash.svg?raw';
import terminalSvg from '../../src/assets/icons/icon-terminal.svg?raw';

export type ToolbarMaskIcon =
  | 'commit'
  | 'push-single'
  | 'push-multiple'
  | 'stash'
  | 'preview'
  | 'branch-new-root'
  | 'branch-new'
  | 'new-worktree'
  | 'terminal'
  | 'project-open'
  | 'project-closed'
  | 'project-new';

type Props = {
  icon: ToolbarMaskIcon;
  label?: string;
  loading?: boolean;
  compactLabels?: boolean;
  iconClassName?: string;
};

const ICON_SVG_BY_NAME: Record<ToolbarMaskIcon, string> = {
  commit: commitSvg,
  'push-single': pushSingleSvg,
  'push-multiple': pushMultipleSvg,
  stash: stashSvg,
  preview: previewSvg,
  'branch-new-root': branchNewRootSvg,
  'branch-new': branchNewSvg,
  'new-worktree': newWorktreeSvg,
  terminal: terminalSvg,
  'project-open': projectOpenSvg,
  'project-closed': projectClosedSvg,
  'project-new': projectNewSvg,
};

const ICON_STROKE_WIDTH_BY_NAME: Partial<Record<ToolbarMaskIcon, string>> = {
  'branch-new-root': '1',
  'branch-new': '1',
  'new-worktree': '1',
  terminal: '1',
  commit: '1',
  stash: '1',
  'project-open': '1',
  'project-closed': '1',
  preview: '1',
  'project-new': '1',
};

const normalizeSvgMarkup = (icon: ToolbarMaskIcon, svg: string) => {
  const strokeWidth = ICON_STROKE_WIDTH_BY_NAME[icon] ?? '1.25';
  return svg
    .replaceAll(/stroke="black"/g, 'stroke="currentColor"')
    .replaceAll(/fill="black"/g, 'fill="currentColor"')
    .replaceAll(/stroke-width="1.5"/g, `stroke-width="${strokeWidth}"`)
    .replaceAll(/stroke-width="1"/g, `stroke-width="${strokeWidth}"`)
    .replaceAll(/(<path\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<line\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<polyline\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<polygon\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<rect\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<circle\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`)
    .replaceAll(/(<ellipse\b[^>]*\bstroke="currentColor"(?![^>]*\bstroke-width=)[^>]*)(\/?>)/g, `$1 stroke-width="${strokeWidth}"$2`);
};

function ToolbarSvgIcon({ icon, className }: { icon: ToolbarMaskIcon; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: normalizeSvgMarkup(icon, ICON_SVG_BY_NAME[icon]) }}
    />
  );
}

export default function ToolbarActionContent({
  icon,
  label,
  loading = false,
  compactLabels = false,
  iconClassName,
}: Props) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap">
      <ToolbarSvgIcon icon={icon} className={cn(iconClassName, loading && 'toolbar-action-shimmer__lucide')} />
      {!compactLabels && label ? (
        <span className={cn('min-w-0 truncate', loading && 'toolbar-action-shimmer__text')}>{label}</span>
      ) : null}
    </span>
  );
}

export { ToolbarSvgIcon };
