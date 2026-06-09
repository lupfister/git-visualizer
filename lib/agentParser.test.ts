import { describe, it, expect } from 'vitest';
import { parseAgentStream } from './agentParser';

describe('agentParser', () => {
  it('should parse simple user prompts and thinking blocks', () => {
    const raw = `❯ Hello world\n⠋ Thinking...\nI am thinking about your request`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(2);
    expect(blocks[0].type).toBe('user');
    expect(blocks[0].content).toBe('Hello world');
    expect(blocks[1].type).toBe('thinking');
    expect(blocks[1].content).toBe('⠋ Thinking...\nI am thinking about your request');
  });

  it('should parse tool calls and their inputs', () => {
    const raw = `Calling tool: run_command\ncommand: "npm test"\nTool run_command returned:\nAll tests passed!`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(2);
    expect(blocks[0].type).toBe('tool_call');
    expect(blocks[0].toolName).toBe('run_command');
    expect(blocks[0].command).toBe('npm test');
    expect(blocks[1].type).toBe('tool_output');
    expect(blocks[1].content).toBe('Tool run_command returned:\nAll tests passed!');
  });

  it('should parse approval requests and end of stream prompt indicators', () => {
    const raw = `Should I run the command? (y/n)\nConfirm [y/N]:`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].type).toBe('approval_request');
  });
});
