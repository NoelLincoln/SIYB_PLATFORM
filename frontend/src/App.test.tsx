import type { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

// AnimatePresence keeps an exiting child mounted until its exit animation finishes,
// and that animation never completes under jsdom. Render children straight through
// so the splash unmounts as soon as App flips `loading` — which is the logic here.
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion');
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
  };
});

/** The splash overlay, identified by the z-index that lifts it above everything. */
function splashIn(container: HTMLElement) {
  return container.querySelector('.z-\\[9999\\]');
}

function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows the splash loader on first paint', () => {
    const { container } = renderAt('/');
    expect(splashIn(container)).toBeInTheDocument();
  });

  it('keeps the splash up just before the 1800ms mark', () => {
    const { container } = renderAt('/');
    vi.advanceTimersByTime(1799);
    expect(splashIn(container)).toBeInTheDocument();
  });

  it('dismisses the splash loader once 1800ms elapse', async () => {
    const { container } = renderAt('/');
    vi.advanceTimersByTime(1800);
    await waitFor(() => {
      expect(splashIn(container)).not.toBeInTheDocument();
    });
  });

  it('clears the splash timer on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout');
    const { unmount } = renderAt('/');
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });

  it('always renders the navbar and footer around the route', () => {
    renderAt('/');
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  describe('routing', () => {
    it('renders the home page at /', () => {
      renderAt('/');
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Mustard Steps Consulting.'
      );
    });

    it('renders the contact page at /contact', () => {
      renderAt('/contact');
      expect(screen.getByRole('heading', { level: 1, name: 'Contact Us' })).toBeInTheDocument();
    });

    it('renders the not-found page for an unknown route', () => {
      renderAt('/no-such-page');
      expect(screen.getByText('404')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
    });
  });
});
