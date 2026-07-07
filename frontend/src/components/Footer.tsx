import { Mail, Phone } from 'lucide-react';
import logoImg from '@/assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#0B2D4D]" />

      {/* Contact card */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-msc-border p-8 flex flex-col items-center gap-3 text-center">
          <img src={logoImg} alt="Mustard Steps Consulting" className="h-8 w-auto" />
          <p className="text-[#0B2D4D] font-bold text-lg">Mustard Steps Consulting</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md">
            Empowering Growth. Driving Impact. People-centred training and facilitation committed to
            unlocking individual and team potential.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2">
            <a
              href="mailto:info@mustardsteps.co.ke"
              className="flex items-center gap-2 text-[#0B2D4D] text-sm font-medium underline underline-offset-2 hover:text-msc-gold transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              info@mustardsteps.co.ke
            </a>
            <a
              href="tel:+254738422377"
              className="flex items-center gap-2 text-[#0B2D4D] text-sm font-semibold underline underline-offset-2 hover:text-msc-gold transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              +254-738-422-377
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Mustard Steps Consulting Limited. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">Empowering Growth. Driving Impact.</p>
        </div>
      </div>
    </footer>
  );
}
