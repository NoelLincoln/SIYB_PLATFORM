import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the brand name and logo', () => {
    render(<Footer />);
    expect(screen.getByText('Mustard Steps Consulting')).toBeInTheDocument();
    expect(screen.getByAltText('Mustard Steps Consulting')).toBeInTheDocument();
  });

  it('links the email address as a mailto', () => {
    render(<Footer />);
    const email = screen.getByRole('link', { name: /info@mustardsteps\.co\.ke/ });
    expect(email).toHaveAttribute('href', 'mailto:info@mustardsteps.co.ke');
  });

  it('links the phone number as a tel', () => {
    render(<Footer />);
    const phone = screen.getByRole('link', { name: /\+254-738-422-377/ });
    expect(phone).toHaveAttribute('href', 'tel:+254738422377');
  });

  it('shows the tagline', () => {
    render(<Footer />);
    expect(screen.getByText('Empowering Growth. Driving Impact.')).toBeInTheDocument();
  });

  it('renders the current year in the copyright, not a hardcoded one', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2031-06-15T00:00:00Z'));
    render(<Footer />);
    expect(
      screen.getByText(/© 2031 Mustard Steps Consulting Limited\. All rights reserved\./)
    ).toBeInTheDocument();
  });
});
