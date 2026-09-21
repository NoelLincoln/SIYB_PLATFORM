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

// Align + Realize share one card on desktop; every pillar stands alone once stacked.
// Single cards carry a left accent rule only; the wide pair is closed off on both sides.
const groups = [
  { items: [pillars[0]], wide: false },
  { items: [pillars[1], pillars[2]], wide: true },
  { items: [pillars[3]], wide: false },
];

export default function MustardPillars() {
  return (
    <section className="pillars-section py-16 sm:py-20">
      <div className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-8 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[#0B2D4D] font-['Montserrat'] font-semibold text-[20px] md:text-[26px] lg:text-[32px] leading-tight">
            The 3 <span className="text-msc-gold">Mustard</span> Pillars
          </h2>
        </motion.div>

        {/* Cards wrapper — narrower than the section, single non-repeating SVG overlay */}
        <div className="relative mx-auto max-w-4xl lg:max-w-none px-6 sm:px-10 lg:px-0">
          <img
            src={pillarsBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {groups.map((group, gi) => (
              /* The group IS the card at every breakpoint — so Align + Realize stay side by
                 side inside one box on mobile too; only the row of groups stacks. */
              <div
                key={group.items.map((p) => p.letter).join('')}
                className={`flex flex-row border-l-2 border-[#00415D]/40 bg-[#00415D]/10 ${
                  group.wide
                    ? 'rounded-[7.5px] border-r-2 lg:flex-2'
                    : 'rounded-l-[7.5px] lg:flex-1'
                }`}
              >
                {group.items.map((pillar, i) => (
                  <motion.div
                    key={pillar.letter}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (gi + i) * 0.12,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-1 flex-col items-center justify-center gap-[7.5px] px-3 py-6 text-center lg:min-h-45.5"
                  >
                    <p className="text-msc-gold font-normal text-4xl sm:text-5xl leading-none">
                      {pillar.letter}
                    </p>
                    <h3 className="text-msc-navy font-bold text-lg leading-snug lg:font-['Montserrat'] lg:font-semibold lg:text-[20px]">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed lg:font-['Montserrat'] lg:font-medium lg:text-[16px]">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
