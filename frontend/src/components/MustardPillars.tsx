import { motion } from 'framer-motion';
import pillarImg1 from '@/assets/3-pillars-img-1.svg';
import pillarImg2 from '@/assets/3-pillars-img-2.svg';
import pillarImg3 from '@/assets/3-pillars-img-3.svg';

const pillars = [
  {
    number: '1',
    title: 'Individual Rise (Personal & Leadership Development)',
    description:
      'We empower leaders, entrepreneurs, and staff to clarify their vision, enhance their mindset, and build the resilience required for peak performance through;',
    items: [
      {
        label: '1:1 Transformational Coaching',
        detail: 'Deepening self-awareness and driving behavior change that lasts.',
      },
      {
        label: 'ILO-Start Your Business (ILO-SYB)',
        detail: 'Training entrepreneurs to grow and improve their businesses from the ground up.',
      },
      {
        label: 'Leadership Mindset Workshops',
        detail: 'Cultivating a growth mindset, emotional intelligence, and personal resilience.',
      },
    ],
    image: pillarImg1,
  },
  {
    number: '2',
    title: 'Teams Align (Communication & Cohesion)',
    description:
      'Enhancing trust, communication, and alignment to build resilient, high performing teams that can navigate complexity and conflict productively through:',
    items: [
      {
        label: 'Workshop & Team Building Facilitation',
        detail:
          'Designing and leading engaging, high-energy sessions that translate insights into shared momentum and sustained results.',
      },
      {
        label: 'Training of Trainers',
        detail:
          'Equipping internal managers and leaders with the skills to design and deliver impactful, learner-centered training experiences.',
      },
      {
        label: 'Participatory Facilitation',
        detail:
          'Using Art of Hosting methodologies to ensure every voice is heard and collective intelligence is tapped for better decision-making.',
      },
    ],
    image: pillarImg2,
  },
  {
    number: '3',
    title: 'Organizations Transform (Change Management & Impact)',
    description:
      'Guiding organizations through systemic change, ensuring new strategies are met with ownership and adoption, leading to lasting cultural and operational success through:',
    items: [
      {
        label: 'Change Management Consulting',
        detail:
          'Facilitating organizational transitions, cultural shifts, and strategic conversations.',
      },
      {
        label: 'Social Behavior Change',
        detail:
          'Influencing community-led development and equipping teams with tools for transformational social impact.',
      },
    ],
    image: pillarImg3,
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
          <h2 className="text-msc-navy font-bold leading-tight">
            The 3 <span className="text-msc-gold">Mustard</span>
            <br />
            Pillars
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Card body */}
              <div className="p-6 lg:w-1/2">
                {/* Large number */}
                <p className="pillar-number font-bold leading-none mb-4">{pillar.number}</p>

                {/* Title */}
                <h3 className="text-msc-navy font-bold text-lg leading-snug mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{pillar.description}</p>

                {/* Service items */}
                <div className="space-y-4">
                  {pillar.items.map((item) => (
                    <div key={item.label} className="border-l-2 border-msc-gold pl-4">
                      <p className="text-msc-navy font-semibold text-sm leading-snug">
                        {item.label}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image — taller on mobile, padded panel on desktop */}
              <div className="h-72 shrink-0 overflow-hidden lg:h-auto lg:w-1/2 lg:p-4">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover lg:rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
