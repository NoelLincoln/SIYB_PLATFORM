import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from './sheet';

function renderSheet(content: React.ReactNode, contentProps = {}) {
  return render(
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent {...contentProps}>
        <SheetTitle>Menu</SheetTitle>
        {content}
      </SheetContent>
    </Sheet>
  );
}

describe('Sheet', () => {
  it('stays closed until the trigger is used', () => {
    renderSheet(<p>Panel body</p>);
    expect(screen.queryByText('Panel body')).not.toBeInTheDocument();
  });

  it('opens on trigger click', async () => {
    renderSheet(<p>Panel body</p>);
    await userEvent.click(screen.getByText('Open'));
    expect(await screen.findByText('Panel body')).toBeInTheDocument();
  });

  it('renders the built-in close button by default', async () => {
    renderSheet(<p>Panel body</p>);
    await userEvent.click(screen.getByText('Open'));
    expect(await screen.findByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('closes when the built-in close button is clicked', async () => {
    renderSheet(<p>Panel body</p>);
    await userEvent.click(screen.getByText('Open'));
    await userEvent.click(await screen.findByRole('button', { name: 'Close' }));
    expect(screen.queryByText('Panel body')).not.toBeInTheDocument();
  });

  it('omits the built-in close button when hideClose is set', async () => {
    renderSheet(<p>Panel body</p>, { hideClose: true });
    await userEvent.click(screen.getByText('Open'));
    await screen.findByText('Panel body');
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('still closes via a caller-supplied SheetClose when hideClose is set', async () => {
    renderSheet(<SheetClose>Dismiss</SheetClose>, { hideClose: true });
    await userEvent.click(screen.getByText('Open'));
    await userEvent.click(await screen.findByText('Dismiss'));
    expect(screen.queryByText('Dismiss')).not.toBeInTheDocument();
  });

  it.each([
    ['top', 'inset-x-0'],
    ['bottom', 'inset-x-0'],
    ['left', 'left-0'],
    ['right', 'right-0'],
  ] as const)('positions the panel for side=%s', async (side, expected) => {
    renderSheet(<p>Panel body</p>, { side });
    await userEvent.click(screen.getByText('Open'));
    expect(await screen.findByRole('dialog')).toHaveClass(expected);
  });

  it('defaults to the right side when no side is given', async () => {
    renderSheet(<p>Panel body</p>);
    await userEvent.click(screen.getByText('Open'));
    expect(await screen.findByRole('dialog')).toHaveClass('right-0');
  });

  it('merges a caller className onto the panel', async () => {
    renderSheet(<p>Panel body</p>, { className: 'w-64 bg-white' });
    await userEvent.click(screen.getByText('Open'));
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toHaveClass('w-64');
    expect(dialog).toHaveClass('bg-white');
  });

  it('renders header, footer, title and description subcomponents', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetHeader className="custom-header">
            <SheetTitle>Title text</SheetTitle>
            <SheetDescription>Description text</SheetDescription>
          </SheetHeader>
          <SheetFooter className="custom-footer">
            <button type="button">Save</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
    expect(await screen.findByText('Title text')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
    expect(screen.getByText('Title text').parentElement).toHaveClass('custom-header');
    expect(screen.getByText('Save').parentElement).toHaveClass('custom-footer');
  });

  it('renders the overlay with a caller className', async () => {
    render(
      <Sheet defaultOpen>
        <SheetOverlay data-testid="overlay" className="custom-overlay" />
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    const overlay = await screen.findByTestId('overlay');
    expect(overlay).toHaveClass('custom-overlay');
    expect(overlay).toHaveClass('fixed');
  });

  it('gives its subcomponents display names', () => {
    expect(SheetHeader.displayName).toBe('SheetHeader');
    expect(SheetFooter.displayName).toBe('SheetFooter');
  });
});
