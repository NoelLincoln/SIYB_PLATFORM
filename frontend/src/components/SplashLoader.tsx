import { motion } from 'framer-motion';
import logoImg from '@/assets/logo.svg';

export default function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Logo */}
      <motion.img
        src={logoImg}
        alt="Mustard Steps Consulting"
        className="h-16 w-auto mb-5"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Brand name */}
      <motion.p
        className="text-white font-semibold text-base tracking-wide mb-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Mustard Steps Consulting
      </motion.p>

      {/* Progress bar */}
      <div className="w-36 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-msc-gold rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.2, duration: 1.3, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
