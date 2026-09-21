import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SplashLoader from './SplashLoader';

describe('SplashLoader', () => {
  it('renders the logo', () => {
    render(<SplashLoader />);
    expect(screen.getByAltText('Mustard Steps Consulting')).toBeInTheDocument();
  });

  it('renders the brand name', () => {
    render(<SplashLoader />);
    expect(screen.getByText('Mustard Steps Consulting')).toBeInTheDocument();
  });

  it('covers the viewport so it hides the app underneath', () => {
    const { container } = render(<SplashLoader />);
    const overlay = container.firstElementChild;
    expect(overlay).toHaveClass('fixed');
    expect(overlay).toHaveClass('inset-0');
  });
});
