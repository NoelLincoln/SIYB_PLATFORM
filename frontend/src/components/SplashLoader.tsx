import { motion } from 'framer-motion';

const letters = ['M', 'S', 'C'];

export default function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-msc-navy"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Logo mark */}
      <div className="flex items-center gap-2 mb-6">
        {letters.map((letter, i) => (
          <motion.span
            key={letter}
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.12,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Brand name */}
      <motion.p
        className="text-sm font-semibold tracking-widest uppercase text-msc-mustard mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Mustard Steps Consulting
      </motion.p>

      {/* Animated progress bar */}
      <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-msc-mustard rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
