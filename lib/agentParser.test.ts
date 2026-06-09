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
    expect(blocks[1].content).toBe('Thinking...\nI am thinking about your request');
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

  it('should resolve terminal control carriage returns and backspaces', () => {
    const raw = `Signing in... \u280b\rSigning in... \u2819\rSigning in... \u2839\nDone!`;
    const blocks = parseAgentStream(raw);
    // The spinner characters should be stripped, and \r should collapse the line
    // to just one "Signing in... " entry instead of duplicates.
    expect(blocks).toHaveLength(1);
    expect(blocks[0].content).toContain('Signing in...\nDone!');
  });

  it('should strip complex ANSI escapes ending in any letter like u', () => {
    const raw = `Welcome\x1b[?u\n\x1b[?4m0;1uOther\x1b[?1;1uText`;
    const blocks = parseAgentStream(raw);
    // Everything like \x1b[?u, \x1b[?4m0;1u, and \x1b[?1;1u should be completely stripped
    expect(blocks[0].content).toBe('Welcome\n0;1uOtherText');
    // Wait, let's look at \x1b[?4m0;1u -> \x1b[?4m matches as one escape sequence, leaving 0;1u.
    // If the whole sequence was \x1b[?4;0;1u (terminating in u), it would strip the whole thing.
    // Let's test that:
    const raw2 = `Welcome\x1b[?u\n\x1b[?4;0;1uOther\x1b[?1;1uText`;
    const blocks2 = parseAgentStream(raw2);
    expect(blocks2[0].content).toBe('Welcome\nOtherText');
  });

  it('should convert box-drawing horizontal lines to divider tokens', () => {
    const raw = `Part 1\n──────────────────────────────\nPart 2`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].content).toContain('Part 1\n__DIVIDER__\nPart 2');
  });

  it('should translate alternative character set (ACS) characters and strip their escape sequences', () => {
    const raw = `\x1b(0qqq\x1b(B`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].content).toBe('───');
  });

  it('should parse mixed ACS and ASCII text correctly without corruption', () => {
    const raw = `\x1b(0q\x1b(BStar\x1b(0~\x1b(Brt`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].content).toBe('─Star•rt');
  });

  it('should correctly filter CSI sequences mixed with ACS changes', () => {
    const raw = `\x1b(0\x1b[31mq\x1b[0m\x1b(B`;
    const blocks = parseAgentStream(raw);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].content).toBe('─');
  });
});
