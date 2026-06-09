import { useEffect, useRef, useState } from 'react';
import { parseAgentStream, type AgentBlock } from '../lib/agentParser';
import { cn } from './grid/mapGridUtils';
import { Send, Check, X, ShieldAlert, Sparkles, Terminal, Cpu, Loader2, Play } from 'lucide-react';

interface Props {
  sessionId: string;
  output: string;
  onWrite: (data: string) => Promise<void>;
  status: 'running' | 'exited';
  agentType?: 'claude' | 'aider' | 'opencode' | 'shell' | null;
  onToggleRaw: () => void;
}

export default function AgentHarnessView({
  sessionId,
  output,
  onWrite,
  status,
  agentType = 'claude',
  onToggleRaw,
}: Props) {
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const blocks = parseAgentStream(output, agentType || 'claude');
  const isTerminated = status === 'exited';

  // Check if last block is an approval request
  const activeApproval = blocks.find((block) => block.type === 'approval_request');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [blocks.length, output]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isSending || isTerminated || activeApproval) return;

    setIsSending(true);
    try {
      await onWrite(inputText + '\n');
      setInputText('');
    } catch (err) {
      console.error('Failed to send input:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleApproval = async (approved: boolean) => {
    if (isTerminated) return;
    try {
      await onWrite(approved ? 'y\n' : 'n\n');
    } catch (err) {
      console.error('Failed to send approval:', err);
    }
  };

  const agentLabel = () => {
    switch (agentType) {
      case 'claude':
        return 'Claude Code';
      case 'aider':
        return 'Aider';
      case 'opencode':
        return 'OpenCode AI';
      default:
        return 'AI Agent';
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      {/* Thread Content Area */}
      <div 
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto px-4 py-3 space-y-4"
      >
        {blocks.length === 0 ? (
          <div className="h-full bg-muted/30 shadow-inner rounded-xl flex items-center justify-center p-6">
            <div className="text-center space-y-2 max-w-xs">
              <Sparkles className="h-8 w-8 text-muted-foreground mx-auto shrink-0 animate-pulse" />
              <p className="text-sm text-foreground font-medium">{agentLabel()} initialized</p>
              <p className="text-xs text-muted-foreground">Type a request below to start collaborating with the agent.</p>
            </div>
          </div>
        ) : (
          blocks.map((block) => {
            switch (block.type) {
              case 'user':
                return (
                  <div key={block.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl bg-primary/10 border border-border/50 px-4 py-2.5 shadow-sm text-sm text-foreground">
                      <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wide">User</p>
                      <p className="whitespace-pre-wrap">{block.content}</p>
                    </div>
                  </div>
                );

              case 'thinking':
                return (
                  <div key={block.id} className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl bg-card border border-border/50 px-4 py-2.5 shadow-sm text-sm text-muted-foreground flex items-start gap-3">
                      <Loader2 className="h-4 w-4 shrink-0 text-muted-foreground animate-spin mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wide">Thinking</p>
                        <p className="whitespace-pre-wrap italic">{block.content}</p>
                      </div>
                    </div>
                  </div>
                );

              case 'tool_call':
                return (
                  <div key={block.id} className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl bg-muted/30 border border-border/50 px-4 py-2.5 shadow-sm text-sm text-foreground flex items-center gap-3">
                      <Cpu className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Tool Executing</p>
                        <p className="truncate font-mono text-xs text-foreground mt-0.5">{block.toolName || 'system task'}</p>
                        {block.command && (
                          <code className="block mt-1 font-mono text-[11px] bg-card px-1.5 py-0.5 rounded border border-border/50 truncate">
                            {block.command}
                          </code>
                        )}
                      </div>
                    </div>
                  </div>
                );

              case 'tool_output':
                return (
                  <div key={block.id} className="flex justify-start">
                    <div className="max-w-[90%] rounded-xl bg-muted/10 border border-border/30 px-3 py-2 shadow-inner text-xs font-mono text-muted-foreground overflow-x-auto max-h-48 whitespace-pre">
                      {block.content}
                    </div>
                  </div>
                );

              case 'approval_request':
                return (
                  <div key={block.id} className="flex justify-start w-full">
                    <div className="w-full max-w-[95%] rounded-2xl border border-amber-400/30 bg-amber-50 dark:bg-amber-900/20 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                      <div className="flex gap-3">
                        <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Action Authorization Required</p>
                          <p className="text-sm text-foreground mt-1 whitespace-pre-wrap font-medium">{block.content}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 self-end md:self-center shrink-0">
                        <button
                          type="button"
                          onClick={() => handleApproval(false)}
                          disabled={isTerminated}
                          className="inline-flex h-8 px-3 items-center justify-center rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted transition-colors"
                        >
                          <X className="h-3.5 w-3.5 shrink-0 mr-1.5" />
                          Deny
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApproval(true)}
                          disabled={isTerminated}
                          className="inline-flex h-8 px-3 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-500/30 text-xs font-medium text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 mr-1.5" />
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                );

              default:
                return (
                  <div key={block.id} className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl bg-card border border-border/50 px-4 py-2.5 shadow-sm text-sm text-foreground">
                      <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wide">{agentLabel()}</p>
                      <p className="whitespace-pre-wrap">{block.content}</p>
                    </div>
                  </div>
                );
            }
          })
        )}
      </div>

      {/* Input / Control Panel */}
      <div className="shrink-0 border-t border-border/50 p-3 bg-card/80 backdrop-blur-sm">
        {activeApproval ? (
          <div className="text-center py-2 text-xs text-muted-foreground font-medium animate-pulse">
            Waiting for action authorization above...
          </div>
        ) : (
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isTerminated ? "Session has exited" : `Send a request to ${agentLabel()}...`}
              disabled={isSending || isTerminated}
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border/80 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isSending || isTerminated}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-border hover:bg-muted transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4 shrink-0" />
            </button>
          </form>
        )}
        <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
          <span>Status: <span className={cn(isTerminated ? "text-red-500" : "text-green-500")}>{status}</span></span>
          <button 
            type="button" 
            onClick={onToggleRaw}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Terminal className="h-3 w-3 shrink-0" />
            Raw Console
          </button>
        </div>
      </div>
    </div>
  );
}
