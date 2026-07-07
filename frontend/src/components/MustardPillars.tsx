import { motion } from 'framer-motion';
import pillarsBg from '@/assets/mustard_step_pillars.svg';

const pillars = [
  {
    letter: 'D',
    title: 'Discover',
    description: 'Create clarity through awareness.',
  },
  {
    letter: 'A',
    title: 'Align',
    description: 'Clear alignment between what values and goals.',
  },
  {
    letter: 'R',
    title: 'Realize',
    description: 'Create transformation and results.',
  },
  {
    letter: 'E',
    title: 'Evaluate',
    description: 'Create sustainability and integration.',
  },
];

export default function MustardPillars() {
  return (
    <section className="pillars-section py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[#0B2D4D] font-['Montserrat'] font-semibold text-[20px] md:text-[26px] lg:text-[32px] leading-tight">
            The Mustard Pillars
          </h2>
        </motion.div>

        {/* Cards wrapper — narrower than the section, single non-repeating SVG overlay */}
        <div
          className="relative mx-auto max-w-4xl px-6 sm:px-10 lg:px-16"
          style={{
            backgroundImage: `url(${pillarsBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '480px 486px',
          }}
        >
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-[7.5px] bg-[#00415D]/10 border-l-2 border-[#00415D] rounded-[7.5px] px-[10.5px] py-[7.5px] text-center"
              >
                <p className="text-msc-gold font-bold text-5xl leading-none">{pillar.letter}</p>
                <h3 className="text-msc-navy font-bold text-lg leading-snug lg:font-['Montserrat'] lg:font-semibold lg:text-[20px]">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed lg:font-['Montserrat'] lg:font-medium lg:text-[16px]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
