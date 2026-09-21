import type { ReactElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

function renderNavbar(ui: ReactElement = <Navbar />) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('Navbar', () => {
  it('renders the logo', () => {
    renderNavbar();
    expect(screen.getAllByAltText('Mustard Steps Consulting').length).toBeGreaterThan(0);
  });

  it('links the brand and Home entries to the root route', () => {
    renderNavbar();
    const homeLinks = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '/');
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('points every Book a call button at /contact', () => {
    renderNavbar();
    const ctas = screen.getAllByRole('link', { name: /Book a call/ });
    expect(ctas.length).toBeGreaterThan(0);
    for (const cta of ctas) {
      expect(cta).toHaveAttribute('href', '/contact');
    }
  });

  it('keeps the mobile menu closed initially', () => {
    renderNavbar();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the mobile menu from the hamburger', async () => {
    renderNavbar();
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('closes the menu when the close button is used', async () => {
    renderNavbar();
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
    await userEvent.click(await screen.findByRole('button', { name: 'Close menu' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the menu when the Home link inside it is followed', async () => {
    renderNavbar();
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
    const dialog = await screen.findByRole('dialog');
    const homeLink = within(dialog).getByRole('link', { name: 'Home' });
    await userEvent.click(homeLink);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the menu when the Book a call link inside it is followed', async () => {
    renderNavbar();
    await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
    const dialog = await screen.findByRole('dialog');
    const cta = within(dialog).getByRole('link', { name: /Book a call/ });
    await userEvent.click(cta);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('close button placement', () => {
    // Regression guard: the close button used to sit top-right while the hamburger
    // sits top-left, so opening the menu made the control jump across the screen.
    it('does not render the default top-right close button', async () => {
      renderNavbar();
      await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
      await screen.findByRole('dialog');
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });

    it('positions the close button at the hamburger offsets', async () => {
      renderNavbar();
      await userEvent.click(screen.getByRole('button', { name: 'Toggle menu' }));
      const close = await screen.findByRole('button', { name: 'Close menu' });
      // px-4 on the navbar -> 16px from the left; (h-16 - h-9) / 2 -> 14px from the top.
      expect(close).toHaveClass('left-4');
      expect(close).toHaveClass('top-3.5');
    });

    it('sizes the close button identically to the hamburger', async () => {
      renderNavbar();
      const hamburger = screen.getByRole('button', { name: 'Toggle menu' });
      await userEvent.click(hamburger);
      const close = await screen.findByRole('button', { name: 'Close menu' });
      // Both go through Button size="icon"; if one drifts, the swap visibly jumps.
      for (const cls of ['h-9', 'w-9']) {
        expect(hamburger).toHaveClass(cls);
        expect(close).toHaveClass(cls);
      }
    });
  });
});
