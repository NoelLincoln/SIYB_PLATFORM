import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders a native button by default', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('carries the default variant and size classes', () => {
    render(<Button>Go</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-msc-navy');
    expect(button).toHaveClass('h-10');
  });

  it('applies a chosen variant and size', () => {
    render(
      <Button variant="mustard" size="lg">
        Book a call
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-msc-mustard');
    expect(button).toHaveClass('h-12');
  });

  it('merges a caller className over the variant classes', () => {
    render(<Button className="rounded-full">Go</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });

  it('renders its child element instead of a button when asChild is set', () => {
    render(
      <Button asChild>
        <a href="/contact">Contact</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Contact' });
    expect(link).toBeInTheDocument();
    // The styling must transfer onto the slotted child.
    expect(link).toHaveClass('bg-msc-navy');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('fires onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick while disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Go
      </Button>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('forwards a ref to the underlying element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Go</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('exposes a displayName', () => {
    expect(Button.displayName).toBe('Button');
  });
});
