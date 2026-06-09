export interface AgentBlock {
  id: string;
  type: 'user' | 'assistant' | 'thinking' | 'tool_call' | 'tool_output' | 'approval_request';
  content: string;
  toolName?: string;
  command?: string;
  filePath?: string;
  status?: 'running' | 'success' | 'failed' | 'pending';
  rawText: string;
}

// Helper to strip ANSI codes
export function stripAnsi(text: string): string {
  return text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
}

/**
 * Parses the raw terminal output of a running agent session (like Claude Code, Aider, or OpenCode)
 * and extracts structured blocks for the chat-like harness UI.
 */
export function parseAgentStream(rawOutput: string, _agentType?: string): AgentBlock[] {
  const clean = stripAnsi(rawOutput);
  const lines = clean.split('\n');
  const blocks: AgentBlock[] = [];

  let currentBlock: AgentBlock | null = null;
  let blockIdCounter = 0;

  const commitBlock = (block: AgentBlock | null): null => {
    if (block) {
      if (block.content.trim() || block.type === 'tool_call' || block.type === 'approval_request') {
        blocks.push(block);
      }
    }
    return null;
  };

  const startBlock = (type: AgentBlock['type'], extra: Partial<AgentBlock> = {}): AgentBlock => {
    blockIdCounter++;
    return {
      id: `block-${blockIdCounter}`,
      type,
      content: '',
      rawText: '',
      ...extra,
    };
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Detect User Prompt Input (commonly starts with a prompt symbol or input prefix)
    // E.g., Aider starts user prompts with ">" or "User:"
    // Claude CLI might print the prompt header
    if (trimmed.startsWith('❯') || (trimmed.startsWith('>') && !trimmed.startsWith('=>')) || trimmed.startsWith('User:')) {
      currentBlock = commitBlock(currentBlock);
      const block = startBlock('user');
      block.content = trimmed.replace(/^[❯>]\s*/, '').replace(/^User:\s*/, '');
      block.rawText = line;
      currentBlock = commitBlock(block);
      continue;
    }

    // 2. Detect Thinking / Reasoning Indicator
    // Claude: "⠋ Thinking..." or "Thinking..."
    if (trimmed.toLowerCase().includes('thinking...') || trimmed.toLowerCase().includes('reasoning...')) {
      if (!currentBlock || currentBlock.type !== 'thinking') {
        currentBlock = commitBlock(currentBlock);
        currentBlock = startBlock('thinking');
      }
      currentBlock.content += (currentBlock.content ? '\n' : '') + trimmed;
      currentBlock.rawText += (currentBlock.rawText ? '\n' : '') + line;
      continue;
    }

    // 3. Detect Tool Calls / Actions
    // Claude Code prints: "Calling tool: read_file" or "✓ Calling tool: run_command"
    // Aider prints: "Executing: ..." or "Applying patch"
    const toolCallMatch = trimmed.match(/(?:Calling tool|✓ Calling tool|Executing|Tool Use):\s*([a-zA-Z0-9_\-]+)/i);
    if (toolCallMatch) {
      const toolName = toolCallMatch[1];
      currentBlock = commitBlock(currentBlock);
      const block = startBlock('tool_call', {
        toolName,
        status: 'running',
      });
      block.content = trimmed;
      block.rawText = line;

      // Check if command is inline (e.g. run_command { command: "npm test" })
      const cmdMatch = trimmed.match(/command:\s*['"]([^'"]+)['"]/i) || trimmed.match(/cmd:\s*['"]([^'"]+)['"]/i);
      if (cmdMatch) {
        block.command = cmdMatch[1];
      }
      const pathMatch = trimmed.match(/path:\s*['"]([^'"]+)['"]/i) || trimmed.match(/filePath:\s*['"]([^'"]+)['"]/i);
      if (pathMatch) {
        block.filePath = pathMatch[1];
      }
      currentBlock = block;
      continue;
    }

    // 4. Detect Tool Output Returns
    // E.g., "Tool run_command returned:" or "Command output:"
    if (trimmed.toLowerCase().includes('returned:') || trimmed.toLowerCase().includes('output:')) {
      if (currentBlock && currentBlock.type === 'tool_call') {
        currentBlock.status = 'success';
      }
      currentBlock = commitBlock(currentBlock);
      currentBlock = startBlock('tool_output');
      currentBlock.content = trimmed;
      currentBlock.rawText = line;
      continue;
    }

    // 5. Detect User Approval / Input Prompts
    // E.g., "Approve command? (y/n)" or "Confirm [y/N]:"
    const isApprovalPrompt = 
      (trimmed.toLowerCase().includes('approve') || 
       trimmed.toLowerCase().includes('confirm') || 
       trimmed.toLowerCase().includes('allow') || 
       trimmed.toLowerCase().includes('should i run') ||
       trimmed.toLowerCase().includes('should i edit')) && 
      (trimmed.includes('(y/n)') || trimmed.includes('[y/N]') || trimmed.includes('[y/n]'));
    
    if (isApprovalPrompt) {
      if (!currentBlock || currentBlock.type !== 'approval_request') {
        currentBlock = commitBlock(currentBlock);
        currentBlock = startBlock('approval_request');
      }
      currentBlock.content += (currentBlock.content ? '\n' : '') + trimmed;
      currentBlock.rawText += (currentBlock.rawText ? '\n' : '') + line;
      continue;
    }

    // Default: append to the current block or start assistant block
    if (!currentBlock) {
      // If we see general output, treat as assistant output
      currentBlock = startBlock('assistant');
    }
    
    currentBlock.content += (currentBlock.content ? '\n' : '') + line;
    currentBlock.rawText += (currentBlock.rawText ? '\n' : '') + line;

    if (currentBlock.type === 'tool_call') {
      const cmdMatch = trimmed.match(/command:\s*['"]([^'"]+)['"]/i) || trimmed.match(/cmd:\s*['"]([^'"]+)['"]/i);
      if (cmdMatch) {
        currentBlock.command = cmdMatch[1];
      }
      const pathMatch = trimmed.match(/path:\s*['"]([^'"]+)['"]/i) || trimmed.match(/filePath:\s*['"]([^'"]+)['"]/i);
      if (pathMatch) {
        currentBlock.filePath = pathMatch[1];
      }
    }
  }

  currentBlock = commitBlock(currentBlock);

  // If the last block is a tool call that is running and the session exited, mark it as completed/failed
  if (blocks.length > 0) {
    const last = blocks[blocks.length - 1];
    // If the stream ends with an unresolved y/n prompt at the very end of the output, keep it as approval request
    const lastLine = clean.trim().split('\n').pop() || '';
    if ((lastLine.includes('(y/n)') || lastLine.includes('[y/N]')) && last.type !== 'approval_request') {
      blocks.push({
        id: `block-${blockIdCounter + 1}`,
        type: 'approval_request',
        content: lastLine,
        rawText: lastLine,
      });
    }
  }

  return blocks;
}
