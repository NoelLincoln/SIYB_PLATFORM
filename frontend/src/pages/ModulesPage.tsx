import { motion } from 'framer-motion';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  {
    key: 'gyb',
    title: 'Generate Your Business Idea',
    icon: '🌱',
    description:
      'Develop a concrete business idea with self-assessment, idea generation, and viability analysis.',
    href: '/modules/gyb',
    ctaLabel: 'Start Module',
  },
  {
    key: 'syb',
    title: 'Start Your Business',
    icon: '📈',
    description:
      'Actualize your business idea with systematic and simple steps for creating a business plan.',
    href: '/modules/syb',
    ctaLabel: 'Start Module',
  },
  {
    key: 'iyb',
    title: 'Improve Your Business',
    icon: '💼',
    description:
      'Master marketing, costing, record keeping, and people management for existing businesses.',
    href: '/modules/iyb',
    ctaLabel: 'Start Module',
  },
  {
    key: 'eyb',
    title: 'Expand Your Business',
    icon: '🏆',
    description: 'Scale and grow with practical tools for business strategy and expansion.',
    href: '/modules/eyb',
    ctaLabel: 'Start Module',
  },
  {
    key: 'game',
    title: 'Mustard Steps Game',
    icon: '🎮',
    description: 'Hands-on business simulation to understand the realities of running a business.',
    href: '/modules/game',
    ctaLabel: 'Play Now',
  },
];

export default function ModulesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Training Modules</h1>
        <p className="text-gray-600 text-lg">
          Choose a program and start building your business skills today.
        </p>
        <div className="h-1 w-20 bg-msc-blue rounded-full mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map((m, i) => (
          <ModuleCard
            key={m.key}
            index={i}
            icon={m.icon}
            title={m.title}
            description={m.description}
            href={m.href}
            ctaLabel={m.ctaLabel}
          />
        ))}
      </div>
    </div>
  );
}
