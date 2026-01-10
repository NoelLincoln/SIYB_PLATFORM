import { useState } from 'react';
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
  { label: 'Training Modules', href: '/modules' },
  { label: 'About', href: '/about' },
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
    label: 'SIYB Game',
    shortLabel: 'Game',
    icon: '🎮',
    description: 'Practical simulation to understand business realities',
    href: '/modules/game',
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SIYB</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg">SIYB Platform</span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.label}
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
                    <a
                      key={module.id}
                      href={module.href}
                      className="block p-3 rounded-lg hover:bg-accent transition-colors border border-transparent hover:border-primary"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{module.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-gray-900">{module.label}</h4>
                          <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Button variant="ghost" size="sm" asChild>
            <a href="/signin">Sign In</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/signup">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button - Only on mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white">
            <div className="flex flex-col gap-6 mt-8">
              {/* Mobile Nav */}
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Auth Actions */}
              <div className="border-t pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <a href="/signin">Sign In</a>
                </Button>
                <Button asChild className="w-full">
                  <a href="/signup">Get Started</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
