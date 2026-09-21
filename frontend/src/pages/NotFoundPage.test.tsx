import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NotFoundPage from './NotFoundPage';

function renderPage() {
  return render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
}

describe('NotFoundPage', () => {
  it('shows the 404 code', () => {
    renderPage();
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('explains what happened', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByText(/doesn't exist/)).toBeInTheDocument();
  });

  it('offers a way back to the home route', () => {
    renderPage();
    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/');
  });
});
