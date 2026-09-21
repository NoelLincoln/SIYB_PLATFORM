import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MustardPillars from './MustardPillars';

/** The card box for a pillar is the grandparent of its letter element. */
function groupFor(letter: string): HTMLElement {
  const cell = screen.getByText(letter).parentElement as HTMLElement;
  return cell.parentElement as HTMLElement;
}

describe('MustardPillars', () => {
  it('renders the heading with Mustard highlighted', () => {
    render(<MustardPillars />);
    const heading = screen.getByRole('heading', { name: 'The 3 Mustard Pillars' });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('Mustard')).toHaveClass('text-msc-gold');
  });

  it('renders all four DARE pillars with titles and descriptions', () => {
    render(<MustardPillars />);
    const expected = [
      ['D', 'Discover', 'Create clarity through awareness.'],
      ['A', 'Align', 'Clear alignment between what values and goals.'],
      ['R', 'Realize', 'Create transformation and results.'],
      ['E', 'Evaluate', 'Create sustainability and integration.'],
    ];
    for (const [letter, title, description] of expected) {
      expect(screen.getByText(letter)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    }
  });

  it('spells DARE in order', () => {
    render(<MustardPillars />);
    const headings = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(headings).toEqual(['Discover', 'Align', 'Realize', 'Evaluate']);
  });

  it('puts Align and Realize inside the same card', () => {
    render(<MustardPillars />);
    expect(groupFor('A')).toBe(groupFor('R'));
  });

  it('keeps Discover and Evaluate in cards of their own', () => {
    render(<MustardPillars />);
    const d = groupFor('D');
    const e = groupFor('E');
    const pair = groupFor('A');
    expect(d).not.toBe(e);
    expect(d).not.toBe(pair);
    expect(e).not.toBe(pair);
  });

  it('renders exactly three cards, not four', () => {
    render(<MustardPillars />);
    const groups = new Set([groupFor('D'), groupFor('A'), groupFor('R'), groupFor('E')]);
    expect(groups.size).toBe(3);
  });

  it('closes the wide pair on both sides and rounds it fully', () => {
    render(<MustardPillars />);
    const pair = groupFor('A');
    expect(pair).toHaveClass('border-l-2');
    expect(pair).toHaveClass('border-r-2');
    expect(pair).toHaveClass('rounded-[7.5px]');
  });

  it('gives single cards a left rule only, rounded on the left only', () => {
    render(<MustardPillars />);
    for (const letter of ['D', 'E']) {
      const card = groupFor(letter);
      expect(card).toHaveClass('border-l-2');
      expect(card).not.toHaveClass('border-r-2');
      expect(card).toHaveClass('rounded-l-[7.5px]');
    }
  });

  it('makes the paired card twice the width of a single one on desktop', () => {
    render(<MustardPillars />);
    expect(groupFor('A')).toHaveClass('lg:flex-2');
    expect(groupFor('D')).toHaveClass('lg:flex-1');
    expect(groupFor('E')).toHaveClass('lg:flex-1');
  });

  it('keeps the pair side by side at every breakpoint', () => {
    render(<MustardPillars />);
    // flex-row unprefixed: A and R stay together on mobile too.
    expect(groupFor('A')).toHaveClass('flex-row');
  });

  it('uses a faint rather than solid border colour', () => {
    render(<MustardPillars />);
    expect(groupFor('D')).toHaveClass('border-[#00415D]/40');
  });

  it('hides the decorative background image from assistive tech', () => {
    const { container } = render(<MustardPillars />);
    const decorative = container.querySelector('img[aria-hidden="true"]');
    expect(decorative).toBeInTheDocument();
    expect(decorative).toHaveAttribute('alt', '');
  });
});
