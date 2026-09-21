import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import HomePage from './HomePage';

function renderPage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe('HomePage', () => {
  describe('hero', () => {
    it('renders a single h1, not one per breakpoint', () => {
      renderPage();
      // The hero used to be duplicated as separate desktop and mobile sections,
      // which put two h1 elements in the document at once.
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    });

    it('renders the company name with Mustard highlighted', () => {
      renderPage();
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Mustard Steps Consulting.');
      // Scoped to the hero: "Mustard" is also highlighted in the pillars and
      // "Why Partner with Mustard Steps?" headings further down the page.
      expect(within(h1).getByText('Mustard')).toHaveClass('hero-title-gradient');
    });

    it('renders the taglines', () => {
      renderPage();
      expect(screen.getByText('Empowering Growth. Driving Impact.')).toBeInTheDocument();
      expect(
        screen.getByText('Helping individuals rise, teams align, and organizations transform.')
      ).toBeInTheDocument();
    });

    it('has no hero image', () => {
      renderPage();
      expect(screen.queryByAltText('Mustard Steps Consulting')).not.toBeInTheDocument();
    });
  });

  describe('catalyst and Juliet', () => {
    it('renders the catalyst heading and copy', () => {
      renderPage();
      expect(
        screen.getByRole('heading', { name: 'The Catalyst Of Transformational Growth' })
      ).toBeInTheDocument();
      expect(screen.getByText(/people centered training and facilitation/)).toBeInTheDocument();
    });

    it('introduces Juliet with her role', () => {
      renderPage();
      expect(screen.getByText('Juliet Muthiani')).toBeInTheDocument();
      expect(screen.getByText('Founder & Lead Coach and Trainer')).toBeInTheDocument();
    });

    it('renders all three biography paragraphs', () => {
      renderPage();
      expect(screen.getByText(/who focuses on guiding Individuals and Teams/)).toBeInTheDocument();
      expect(screen.getByText(/certified NLP Master Practitioner/)).toBeInTheDocument();
      expect(screen.getByText(/growth is not just about awareness/)).toBeInTheDocument();
    });

    it('places both columns inside one section', () => {
      renderPage();
      const catalyst = screen.getByRole('heading', {
        name: 'The Catalyst Of Transformational Growth',
      });
      const section = catalyst.closest('section');
      expect(section).not.toBeNull();
      expect(section?.textContent).toContain('Juliet Muthiani');
    });
  });

  describe('pillars', () => {
    it('renders the pillars component', () => {
      renderPage();
      expect(screen.getByRole('heading', { name: 'The 3 Mustard Pillars' })).toBeInTheDocument();
    });
  });

  describe('upcoming events', () => {
    it('names the summit', () => {
      renderPage();
      expect(
        screen.getByRole('heading', { name: 'Goal Mapping Africa Leadership Summit 1.0' })
      ).toBeInTheDocument();
    });

    it('opens the registration link safely in a new tab', () => {
      renderPage();
      const register = screen.getByRole('link', { name: 'https://shorturl.at/ezLg9' });
      expect(register).toHaveAttribute('href', 'https://shorturl.at/ezLg9');
      expect(register).toHaveAttribute('target', '_blank');
      expect(register).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('links the summit email address', () => {
      renderPage();
      expect(
        screen.getByRole('link', { name: 'gmafricasummit@mustardsteps.co.ke' })
      ).toHaveAttribute('href', 'mailto:gmafricasummit@mustardsteps.co.ke');
    });
  });

  describe('closing call to action', () => {
    it('renders the closing heading', () => {
      renderPage();
      expect(
        screen.getByRole('heading', { name: "You don't have to carry the weight alone" })
      ).toBeInTheDocument();
    });

    it('sends every Book a call button to /contact', () => {
      renderPage();
      const ctas = screen.getAllByRole('link', { name: /Book a call/ });
      expect(ctas.length).toBeGreaterThanOrEqual(2);
      for (const cta of ctas) {
        expect(cta).toHaveAttribute('href', '/contact');
      }
    });
  });

  it('marks decorative images as hidden from assistive tech', () => {
    const { container } = renderPage();
    for (const img of container.querySelectorAll('img[aria-hidden="true"]')) {
      expect(img).toHaveAttribute('alt', '');
    }
  });
});
