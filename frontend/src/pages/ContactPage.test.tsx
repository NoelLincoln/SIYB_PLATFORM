import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders its heading', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Contact Us' })).toBeInTheDocument();
  });

  it('renders the placeholder copy', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Book a discovery call or send us a message/)).toBeInTheDocument();
  });
});
