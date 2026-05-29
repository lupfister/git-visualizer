import { describe, expect, it } from 'vitest';
import { planOrchestratedSync } from './orchestratedRepoSync';

const peek = { signature: 'abc@@0@@|||0' };

describe('planOrchestratedSync', () => {
  it('reloads when git activity is pending', () => {
    expect(
      planOrchestratedSync(
        { peek, gitActivityPending: true, isBehindPeek: false },
        'catchUp',
      ),
    ).toBe('reload');
  });

  it('reloads when UI is behind peek', () => {
    expect(
      planOrchestratedSync(
        { peek, gitActivityPending: false, isBehindPeek: true },
        'catchUp',
      ),
    ).toBe('reload');
  });

  it('runs full refresh on catch-up when peek matches UI', () => {
    expect(
      planOrchestratedSync(
        { peek, gitActivityPending: false, isBehindPeek: false },
        'catchUp',
      ),
    ).toBe('fullRefresh');
  });

  it('does nothing on peek lane when already caught up', () => {
    expect(
      planOrchestratedSync(
        { peek, gitActivityPending: false, isBehindPeek: false },
        'peekLane',
      ),
    ).toBe('none');
  });

  it('peek lane still reloads when behind', () => {
    expect(
      planOrchestratedSync(
        { peek, gitActivityPending: false, isBehindPeek: true },
        'peekLane',
      ),
    ).toBe('reload');
  });
});
