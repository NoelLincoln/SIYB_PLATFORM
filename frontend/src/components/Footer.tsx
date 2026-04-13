import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import logoImg from '@/assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <img src={logoImg} alt="Mustard Steps Consulting" className="h-10 w-auto" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering Growth. Driving Impact. People-centred training and facilitation committed
              to unlocking individual and team potential.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-msc-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-msc-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-msc-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@mustardsteps.co.ke"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-msc-gold transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-msc-gold/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  info@mustardsteps.co.ke
                </a>
              </li>
              <li>
                <a
                  href="tel:+254738422377"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-msc-gold transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-msc-gold/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  +254-738-422-377
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Mustard Steps Consulting Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Empowering Growth. Driving Impact.</p>
        </div>
      </div>
    </footer>
  );
}
