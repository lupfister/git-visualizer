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

// Helper to simulate basic terminal carriage returns and backspaces
export function resolveTerminalControls(text: string): string {
  const lines = text.split('\n');
  const processedLines: string[] = [];

  for (const line of lines) {
    const chars: string[] = [];
    let cursor = 0;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '\r') {
        cursor = 0;
      } else if (char === '\b') {
        if (cursor > 0) {
          cursor--;
        }
      } else {
        chars[cursor] = char;
        cursor++;
      }
    }
    processedLines.push(chars.join(''));
  }

  return processedLines.join('\n');
}

const ACS_MAP: Record<string, string> = {
  '_': ' ', // blank
  '`': '◆', // diamond
  'a': '░', // checkerboard
  'b': '␉', // HT
  'c': '␌', // FF
  'd': '␍', // CR
  'e': '␊', // LF
  'f': '°', // degree sign
  'g': '±', // plus/minus sign
  'h': '␤', // NL
  'i': '␋', // VT
  'j': '┘', // lower right corner
  'k': '┐', // upper right corner
  'l': '┌', // upper left corner
  'm': '└', // lower left corner
  'n': '┼', // crossing lines
  'o': '⎺', // horizontal line - scan 1
  'p': '⎻', // horizontal line - scan 3
  'q': '─', // horizontal line - scan 5 / horizontal bar
  'r': '⎼', // horizontal line - scan 7
  's': '⎽', // horizontal line - scan 9
  't': '├', // left tee
  'u': '┤', // right tee
  'v': '┴', // bottom tee
  'w': '┬', // top tee
  'x': '│', // vertical line
  'y': '≤', // less-than-or-equal
  'z': '≥', // greater-than-or-equal
  '{': 'π', // pi
  '|': '≠', // not equal
  '}': '£', // pound sign
  '~': '•', // bullet
};

// Stateful parser to translate Alternative Character Set (ACS) characters and strip ANSI codes
export function translateAcsAndStripAnsi(text: string): string {
  let g0Mode: 'ascii' | 'acs' = 'ascii';
  let g1Mode: 'ascii' | 'acs' = 'ascii';
  let activeSet: 0 | 1 = 0;
  
  let result = '';
  const len = text.length;
  
  for (let i = 0; i < len; i++) {
    const char = text[i];
    
    if (char === '\u001b' || char === '\u009b') {
      // Character Set selection sequences: ESC ( <char> or ESC ) <char>
      if (i + 2 < len && text[i + 1] === '(') {
        const mode = text[i + 2];
        if (mode === '0') {
          g0Mode = 'acs';
        } else if (mode === 'B') {
          g0Mode = 'ascii';
        }
        i += 2;
        continue;
      }
      if (i + 2 < len && text[i + 1] === ')') {
        const mode = text[i + 2];
        if (mode === '0') {
          g1Mode = 'acs';
        } else if (mode === 'B') {
          g1Mode = 'ascii';
        }
        i += 2;
        continue;
      }
      
      // CSI sequences: ESC [ ... <final_char>
      if (i + 1 < len && text[i + 1] === '[') {
        let j = i + 2;
        while (j < len) {
          const code = text.charCodeAt(j);
          if (code >= 0x40 && code <= 0x7E) {
            break;
          }
          j++;
        }
        if (j < len) {
          i = j;
        } else {
          i = len;
        }
        continue;
      }
      
      // OSC sequences: ESC ] ... (BEL or ESC \)
      if (i + 1 < len && text[i + 1] === ']') {
        let j = i + 2;
        let found = false;
        while (j < len) {
          if (text[j] === '\u0007') {
            i = j;
            found = true;
            break;
          }
          if (text[j] === '\u001b' && j + 1 < len && text[j + 1] === '\\') {
            i = j + 1;
            found = true;
            break;
          }
          j++;
        }
        if (!found) {
          i = len;
        }
        continue;
      }
      
      // DCS sequences / Kitty keyboard query: ESC _ ... ESC \
      if (i + 1 < len && text[i + 1] === '_') {
        let j = i + 2;
        let found = false;
        while (j < len) {
          if (text[j] === '\u001b' && j + 1 < len && text[j + 1] === '\\') {
            i = j + 1;
            found = true;
            break;
          }
          j++;
        }
        if (!found) {
          i = len;
        }
        continue;
      }
      
      // Single character ESC sequences
      if (i + 1 < len) {
        i++;
      }
      continue;
    }
    
    // Shift Out (SO) - select G1
    if (char === '\u000e') {
      activeSet = 1;
      continue;
    }
    
    // Shift In (SI) - select G0
    if (char === '\u000f') {
      activeSet = 0;
      continue;
    }
    
    const inAcs = (activeSet === 0 ? g0Mode : g1Mode) === 'acs';
    if (inAcs && char in ACS_MAP) {
      result += ACS_MAP[char];
    } else {
      result += char;
    }
  }
  
  return result;
}

// Helper to strip ANSI codes and clean up raw PTY output leftovers
export function stripAnsi(text: string): string {
  // Translate Alternative Character Set and strip escape codes first
  let clean = translateAcsAndStripAnsi(text);
  
  // Resolve terminal controls (carriage returns \r and backspaces \b) to collapse rewrite frames
  clean = resolveTerminalControls(clean);

  // Strip remaining raw control characters (except newline, carriage return, tab)
  clean = clean.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');

  // Clean up any unicode replacement/unsupported glyph marks left by PTY queries (like ☒[?u q)
  clean = clean.replace(/☒\[\?u\s*q?/g, '');
  clean = clean.replace(/\d+m\d+;\d+u\d+;\d+m\d+;\d+u/g, '');
  clean = clean.replace(/\d+m\d+;\d+u/g, '');
  
  // Strip Braille patterns (accumulated CLI progress spinners)
  clean = clean.replace(/[\u2800-\u28FF]/g, '');
  
  // Replace long repeats of underscores, hyphens, equals signs, or box-drawing lines (>= 10) with a divider token, consuming surrounding newlines
  clean = clean.replace(/\n?[_\-=\u2500\u2501\u2550\u2504\u2505\u2508\u2509\u254c\u254d]{10,}\n?/g, '\n__DIVIDER__\n');

  // Normalize line endings and whitespace-only lines
  clean = clean.split('\n').map(line => line.trimEnd()).join('\n');

  // Normalize consecutive newlines to at most two newlines
  clean = clean.replace(/\n{3,}/g, '\n\n');

  return clean;
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
