import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import logoImg from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Mobile: frosted glass background */}
      <div className="absolute inset-0 md:hidden bg-white/10 backdrop-blur-md border-b border-white/15" />
      {/* Desktop: solid white background */}
      <div className="absolute inset-0 hidden md:block bg-white/95 backdrop-blur border-b border-msc-border shadow-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* ── Mobile: hamburger | logo | book a call ── */}
        <div className="md:hidden grid grid-cols-3 items-center w-full">
          {/* Left — hamburger */}
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-msc-gold hover:bg-white/15 hover:text-msc-gold"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-white border-r border-msc-border">
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-msc-navy hover:text-msc-mustard transition-colors px-2 py-2 rounded-md hover:bg-msc-surface"
                  >
                    Home
                  </Link>
                  <div className="border-t border-msc-border pt-4">
                    <Button
                      variant="mustard"
                      asChild
                      className="w-full rounded-full bg-msc-gold hover:bg-msc-gold-dark"
                    >
                      <Link to="/contact" onClick={() => setOpen(false)}>
                        Book a call <Phone className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center — logo */}
          <div className="flex justify-center">
            <Link to="/">
              <img src={logoImg} alt="Mustard Steps Consulting" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Right — Book a call */}
          <div className="flex justify-end">
            <Button
              size="sm"
              variant="mustard"
              className="rounded-full text-xs px-3 h-8 bg-msc-gold hover:bg-msc-gold-dark"
              asChild
            >
              <Link to="/contact">
                Book a call <Phone className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Desktop: logo | home link | book a call ── */}
        <Link to="/" className="hidden md:flex items-center space-x-2 shrink-0">
          <img src={logoImg} alt="Mustard Steps Consulting" className="h-8 w-auto" />
          <span className="font-bold text-msc-navy text-base tracking-tight">
            Mustard Steps Consulting
          </span>
        </Link>

        <nav className="hidden md:flex items-center ml-8">
          <Link
            to="/"
            className="text-sm font-medium text-msc-navy hover:text-msc-mustard transition-colors px-4 py-2 rounded-md"
          >
            Home
          </Link>
        </nav>

        <div className="hidden md:flex items-center ml-auto">
          <Button
            size="sm"
            variant="mustard"
            className="rounded-full bg-msc-gold hover:bg-msc-gold-dark"
            asChild
          >
            <Link to="/contact">
              Book a call <Phone className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
