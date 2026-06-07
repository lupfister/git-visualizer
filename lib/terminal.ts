import { invoke } from '../src/timedInvoke';
import type { TerminalSession } from '../types';

export type CreateTerminalSessionInput = Omit<TerminalSession, 'id' | 'status'>;

export interface TerminalReadResult {
  session: TerminalSession;
  output: string;
}

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

export const terminateTerminalSession = (id: string): Promise<void> =>
  invoke('terminate_terminal_session', { id });
