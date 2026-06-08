import { invoke } from '../src/timedInvoke';
import type { TerminalSession } from '../types';

export type CreateTerminalSessionInput = Omit<TerminalSession, 'id' | 'status'>;

export interface TerminalReadResult {
  session: TerminalSession;
  output: string;
}

export const isNativePreviewCommand = (command: string): boolean =>
  command.toLowerCase().includes('tauri dev');

export const listTerminalSessions = (): Promise<TerminalSession[]> =>
  invoke('list_terminal_sessions');

export const createTerminalSession = (session: CreateTerminalSessionInput): Promise<TerminalSession> =>
  invoke('create_terminal_session', {
    session: {
      ...session,
      id: '',
      status: 'running',
    },
  });

export const readTerminalSession = (id: string): Promise<TerminalReadResult> =>
  invoke('read_terminal_session', { id });

export const writeTerminalSession = (id: string, data: string): Promise<void> =>
  invoke('write_terminal_session', { id, data });

export const resizeTerminalSession = (id: string, cols: number, rows: number): Promise<void> =>
  invoke('resize_terminal_session', { id, cols, rows });

export const setTerminalSessionLabel = (id: string, label: string): Promise<void> =>
  invoke('set_terminal_session_label', { id, label });

export const setTerminalSessionTarget = (
  id: string,
  targetId: string,
  targetKind: 'commit' | 'worktree',
): Promise<TerminalSession> =>
  invoke('set_terminal_session_target', { id, targetId, targetKind });

export const restartTerminalSession = (id: string, command: string): Promise<TerminalSession> =>
  invoke('restart_terminal_session', { id, command });

export const terminateTerminalSession = (id: string): Promise<void> =>
  invoke('terminate_terminal_session', { id });

export const activatePreviewTarget = (session: Pick<TerminalSession, 'id' | 'previewUrl' | 'previewAppName'>): Promise<void> =>
  invoke('activate_preview_target', {
    id: session.id,
    url: session.previewUrl ?? null,
    appName: session.previewAppName ?? null,
  });

export const saveTerminalAttachment = (
  fileName: string,
  mimeType: string,
  dataBase64: string,
): Promise<string> => invoke('save_terminal_attachment', { fileName, mimeType, dataBase64 });
