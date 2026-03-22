import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const modules = [
  {
    id: 'gyb',
    label: 'Generate Your Business Idea',
    shortLabel: 'GYB',
    icon: '🌱',
    description: 'Develop a concrete business idea with self-assessment and idea analysis',
    href: '/modules/gyb',
  },
  {
    id: 'syb',
    label: 'Start Your Business',
    shortLabel: 'SYB',
    icon: '📈',
    description: 'Actualize your business idea with systematic business planning',
    href: '/modules/syb',
  },
  {
    id: 'iyb',
    label: 'Improve Your Business',
    shortLabel: 'IYB',
    icon: '💼',
    description: 'Master business management principles for existing businesses',
    href: '/modules/iyb',
  },
  {
    id: 'eyb',
    label: 'Expand Your Business',
    shortLabel: 'EYB',
    icon: '🏆',
    description: 'Scale and grow your business with strategic expansion tools',
    href: '/modules/eyb',
  },
  {
    id: 'game',
    label: 'Business Simulation',
    shortLabel: 'Game',
    icon: '🎮',
    description: 'Practical simulation to understand business realities',
    href: '/modules/game',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-msc-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 bg-msc-navy rounded-md flex items-center justify-center">
            <span className="text-msc-mustard font-bold text-xs tracking-tight">MSC</span>
          </div>
          <span className="hidden sm:inline font-bold text-msc-navy text-base tracking-tight">
            Mustard Steps Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  asChild
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Link to={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Training Modules Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">
                Training Modules
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <div className="p-6 space-y-3 w-max">
                  {modules.map((module) => (
                    <Link
                      key={module.id}
                      to={module.href}
                      className="block p-3 rounded-lg hover:bg-accent transition-colors border border-transparent hover:border-primary"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{module.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-gray-900">{module.label}</h4>
                          <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-msc-navy hover:text-msc-mustard"
          >
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button size="sm" variant="mustard" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-70 bg-white border-l border-msc-border">
            <div className="flex flex-col gap-6 mt-8">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-msc-navy hover:text-msc-mustard transition-colors px-2 py-2 rounded-md hover:bg-msc-surface"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="text-[10px] font-semibold text-msc-slate uppercase tracking-widest mt-3 mb-1 px-2">
                  Training Modules
                </p>
                {modules.map((module) => (
                  <Link
                    key={module.id}
                    to={module.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-slate-600 hover:text-msc-mustard transition-colors flex items-center gap-2 px-2 py-2 rounded-md hover:bg-msc-surface"
                  >
                    <span>{module.icon}</span>
                    <span className="font-medium">{module.shortLabel}</span>
                    <span className="text-msc-slate text-xs">— {module.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="border-t border-msc-border pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/signin" onClick={() => setOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button variant="mustard" asChild className="w-full">
                  <Link to="/signup" onClick={() => setOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
