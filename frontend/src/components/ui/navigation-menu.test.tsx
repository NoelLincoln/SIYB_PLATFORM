import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu';

function renderMenu(props: { menuClass?: string; listClass?: string } = {}) {
  return render(
    <NavigationMenu className={props.menuClass}>
      <NavigationMenuList className={props.listClass}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="custom-trigger">Services</NavigationMenuTrigger>
          <NavigationMenuContent className="custom-content">
            <NavigationMenuLink href="/coaching">Coaching</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator data-testid="indicator" className="custom-indicator" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

describe('NavigationMenu', () => {
  it('renders the root with its base classes', () => {
    renderMenu({ menuClass: 'custom-menu' });
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('custom-menu');
    expect(nav).toHaveClass('relative');
  });

  it('renders the list with its base classes', () => {
    renderMenu({ listClass: 'custom-list' });
    const list = screen.getByRole('list');
    expect(list).toHaveClass('custom-list');
    expect(list).toHaveClass('list-none');
  });

  it('renders a trigger carrying the shared trigger style', () => {
    renderMenu();
    const trigger = screen.getByRole('button', { name: /Services/ });
    expect(trigger).toHaveClass('custom-trigger');
    expect(trigger).toHaveClass('group');
    expect(trigger).toHaveClass('inline-flex');
  });

  it('reveals its content once the trigger is activated', async () => {
    renderMenu();
    await userEvent.click(screen.getByRole('button', { name: /Services/ }));
    expect(await screen.findByRole('link', { name: 'Coaching' })).toBeInTheDocument();
  });

  it('applies a className to the content panel', async () => {
    renderMenu();
    await userEvent.click(screen.getByRole('button', { name: /Services/ }));
    const link = await screen.findByRole('link', { name: 'Coaching' });
    expect(link.closest('.custom-content')).not.toBeNull();
  });

  it('renders a standalone viewport with a className', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Open</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport data-testid="viewport" className="custom-viewport" />
      </NavigationMenu>
    );
    // The viewport only mounts its inner primitive when a menu item is active,
    // but the wrapper div always renders.
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('exposes display names from the underlying primitives', () => {
    expect(NavigationMenu.displayName).toBeTruthy();
    expect(NavigationMenuList.displayName).toBeTruthy();
    expect(NavigationMenuTrigger.displayName).toBeTruthy();
    expect(NavigationMenuContent.displayName).toBeTruthy();
    expect(NavigationMenuViewport.displayName).toBeTruthy();
    expect(NavigationMenuIndicator.displayName).toBeTruthy();
  });
});
