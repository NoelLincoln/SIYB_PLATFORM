import { afterEach, describe, expect, it, vi } from 'vitest';

const render = vi.fn();
const createRoot = vi.fn(() => ({ render, unmount: vi.fn() }));

vi.mock('react-dom/client', () => ({
  createRoot,
  default: { createRoot },
}));

// The entry point pulls in font and global stylesheets purely for their side effects.
vi.mock('@fontsource/montserrat/400.css', () => ({}));
vi.mock('@fontsource/montserrat/500.css', () => ({}));
vi.mock('@fontsource/montserrat/600.css', () => ({}));
vi.mock('@fontsource/montserrat/700.css', () => ({}));
vi.mock('./index.css', () => ({}));

describe('main entry point', () => {
  afterEach(() => {
    vi.resetModules();
    createRoot.mockClear();
    render.mockClear();
    document.body.innerHTML = '';
  });

  it('mounts the app into the #root element', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await import('./main');

    expect(createRoot).toHaveBeenCalledOnce();
    expect(createRoot).toHaveBeenCalledWith(root);
    expect(render).toHaveBeenCalledOnce();
  });
});
