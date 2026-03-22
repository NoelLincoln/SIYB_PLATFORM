import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ModuleCard from '@/components/ModuleCard';
import LottieAnimation from '@/components/LottieAnimation';

//  Data

const modules = [
  {
    key: 'GYB',
    title: 'Generate Your Business Idea',
    icon: '🌱',
    description:
      'Develop a concrete business idea through self-assessment, idea generation, and viability analysis. Identify your entrepreneurial strengths and build a solid foundation.',
    href: '/modules/gyb',
  },
  {
    key: 'SYB',
    title: 'Start Your Business',
    icon: '📈',
    description:
      'Turn your idea into a working business. Work through systematic steps to build a comprehensive business plan ready for execution.',
    href: '/modules/syb',
  },
  {
    key: 'IYB',
    title: 'Improve Your Business',
    icon: '💼',
    description:
      'Master the principles of business management: marketing, costing, stock control, record keeping, and people & productivity.',
    href: '/modules/iyb',
  },
  {
    key: 'EYB',
    title: 'Expand Your Business',
    icon: '🏆',
    description:
      'Equip yourself with the strategic tools and frameworks to scale a growth-oriented small or medium enterprise.',
    href: '/modules/eyb',
  },
  {
    key: 'game',
    title: 'Mustard Steps Game',
    icon: '🎮',
    description:
      'Experience the realities of business ownership through an interactive simulation. Make decisions, face challenges, and learn by doing.',
    href: '/modules/game',
  },
];

const pillars = [
  {
    icon: '📐',
    title: 'Structured Programs',
    body: 'Internationally proven curricula adapted for local business contexts.',
  },
  {
    icon: '🎯',
    title: 'Practical Focus',
    body: 'Every session delivers tools you can apply the same day.',
  },
  {
    icon: '🤝',
    title: 'Expert Consultants',
    body: 'Work directly with experienced business development professionals.',
  },
];

//  Component

export default function HomePage() {
  return (
    <div className="bg-white">
      {/*  Hero  */}
      <section className="relative bg-msc-navy overflow-hidden">
        {/* Subtle texture lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Mustard accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-msc-mustard" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-msc-mustard text-sm font-semibold tracking-widest uppercase mb-5"
              >
                Business Training &amp; Consulting
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              >
                Grow a Business <br />
                <span className="text-msc-mustard">That Lasts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5 }}
                className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Mustard Steps Consulting delivers structured training programs and one-on-one
                consultancy designed to help entrepreneurs build, improve, and scale their ventures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                <Button size="lg" variant="mustard" asChild>
                  <Link to="/modules">Explore Programs</Link>
                </Button>
                <Button size="lg" variant="default" asChild>
                  <Link to="/contact">Book a Session</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right — Lottie animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <LottieAnimation className="w-full max-w-2xl mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar strip */}
      <section className="border-b border-msc-border bg-msc-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-msc-border">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 px-6 py-6 first:pl-0 last:pr-0"
              >
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="font-semibold text-msc-navy text-base mb-1">{p.title}</h3>
                  <p className="text-msc-slate text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  About  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-msc-mustard text-sm font-semibold tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-msc-navy mb-6">What is Mustard Steps Consulting?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Mustard Steps Consulting is a comprehensive business training and consulting platform
              designed to equip entrepreneurs and small business owners with the skills, knowledge,
              and confidence to succeed.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our programs draw on internationally recognised frameworks — covering business
              planning, financial management, marketing, and operations — delivering practical,
              immediately applicable knowledge.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/about">About MSC</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: '500+', label: 'Entrepreneurs Trained' },
              { num: '5', label: 'Specialised Programs' },
              { num: '10+', label: 'Years of Experience' },
              { num: '95%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-msc-surface border border-msc-border rounded-xl p-6"
              >
                <p className="text-3xl font-bold text-msc-navy mb-1">{stat.num}</p>
                <p className="text-sm text-msc-slate">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*  Divider  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-msc-border" />
      </div>

      {/*  Training Modules  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-msc-mustard text-sm font-semibold tracking-widest uppercase mb-3">
            Our Programs
          </p>
          <h2 className="text-msc-navy mb-3">Training Modules</h2>
          <p className="text-msc-slate text-lg">
            Structured programs for every stage of your business journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <ModuleCard
              key={m.key}
              index={i}
              icon={m.icon}
              title={m.title}
              description={m.description}
              href={m.href}
            />
          ))}
        </div>
      </section>

      {/*  CTA Banner  */}
      <section className="bg-msc-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white mb-4">Ready to take your next step?</h2>
            <p className="text-slate-300 text-lg mb-8 mx-auto max-w-xl">
              Book a free discovery session with one of our consultants and find the right program
              for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">Book a Free Session</Link>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/modules">View All Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
