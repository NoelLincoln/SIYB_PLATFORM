import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ModuleCard({
  icon,
  title,
  description,
  href,
  ctaLabel = 'Learn More',
  index = 0,
}: ModuleCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
      className="group bg-white rounded-xl border border-msc-border hover:border-msc-mustard hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Top accent bar — animates on hover */}
      <div className="h-1 bg-msc-navy group-hover:bg-msc-mustard transition-colors duration-300" />

      {/* Card body */}
      <div className="p-8 flex flex-col flex-1">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-5">
          <motion.div
            className="w-12 h-12 rounded-lg bg-msc-surface border border-msc-border flex items-center justify-center text-2xl shrink-0"
            whileHover={{ scale: 1.1, rotate: 4 }}
            transition={{ type: 'spring', stiffness: 320, damping: 14 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-msc-navy font-bold text-lg leading-snug pt-1">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-msc-slate text-sm leading-relaxed flex-1 mb-6">{description}</p>

        {/* CTA — only the button navigates */}
        <Button asChild variant="default" className="w-full">
          <Link to={href}>{ctaLabel}</Link>
        </Button>
      </div>
    </motion.div>
  );
}
