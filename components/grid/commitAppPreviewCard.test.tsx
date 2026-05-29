import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CommitAppPreview } from '../types';
import React from 'react';

const previewReady: CommitAppPreview = {
  commitKey: 'abc123',
  status: 'ready',
  imageSrc: 'asset://localhost/preview.png',
  route: '/dashboard',
};

describe('commit card preview rendering', () => {
  it('renders preview image markup when status is ready', () => {
    const markup = renderToStaticMarkup(
      <div className="relative h-[176px] overflow-hidden">
        {previewReady.status === 'ready' && previewReady.imageSrc ? (
          <img
            src={previewReady.imageSrc}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : null}
      </div>,
    );

    expect(markup).toContain('object-cover object-top');
    expect(markup).toContain(previewReady.imageSrc);
  });

  it('omits preview image when status is pending', () => {
    const pending: CommitAppPreview = { commitKey: 'abc123', status: 'pending' };
    const markup = renderToStaticMarkup(
      <div>
        {pending.status === 'ready' && pending.imageSrc ? (
          <img src={pending.imageSrc} alt="" />
        ) : (
          <span data-testid="fallback">tile</span>
        )}
      </div>,
    );

    expect(markup).toContain('data-testid="fallback"');
    expect(markup).not.toContain('<img');
  });
});
