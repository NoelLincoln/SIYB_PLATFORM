import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import heroImg from '@/assets/hero.svg';
import getToKnowImg from '@/assets/get-to-know-j.svg';
import catalystImg from '@/assets/catalyst-of-growth.svg';
import approachImg from '@/assets/Approach.svg';
import integratedIconImg from '@/assets/integrated-approach.svg';
import ctaImg from '@/assets/cta-weight-alone.svg';
import { Button } from '@/components/ui/button';
import MustardPillars from '@/components/MustardPillars';

//  Component

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}

      {/* Desktop: split layout — hidden on mobile */}
      <section className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left — white content panel */}
        <div className="bg-white relative flex items-center px-12 xl:px-20 py-24 overflow-hidden">
          {/* Decorative dot grid */}
          <svg
            className="absolute bottom-8 left-8 opacity-20"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4].flatMap((row) =>
              [0, 1, 2, 3, 4].map((col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 24 + 12}
                  cy={row * 24 + 12}
                  r="3"
                  fill="#c5973a"
                />
              ))
            )}
          </svg>

          <div className="relative max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title-gradient leading-[1.1] mb-5"
            >
              Mustard Steps
              <br />
              Consulting.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-msc-slate text-lg font-normal mb-3"
            >
              Empowering Growth.{' '}
              <span className="text-msc-deep-navy font-normal whitespace-nowrap">
                Driving Impact.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-slate-500 text-base leading-relaxed mb-10"
            >
              Helping individuals rise, teams align, and organizations transform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <Button size="lg" variant="mustard" className="rounded-full" asChild>
                <Link to="/contact">
                  Book a call <Phone />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="Mustard Steps Consulting"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mobile: full-bleed dark hero — hidden on lg+ */}
      <section className="lg:hidden relative min-h-[88vh] flex flex-col justify-end">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 pb-28 flex flex-col items-center text-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title-gradient leading-[1.1] font-extrabold mb-1 filter-[drop-shadow(0_2px_12px_rgba(0,0,0,0.7))]"
          >
            Mustard Steps
            <br />
            Consulting.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-white text-base font-normal"
          >
            Empowering Growth.{' '}
            <span className="text-msc-gold font-semibold whitespace-nowrap">Driving Impact.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-white/70 text-sm leading-relaxed mt-1"
          >
            Helping individuals rise, teams align, and organizations transform.
          </motion.p>
        </div>
      </section>

      {/* Catalyst  */}
      <section className="catalyst-section relative overflow-hidden py-14 sm:py-20">
        {/* Background illustration */}
        <img
          src={catalystImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-msc-deep-navy text-left mb-5">
              The Catalyst Of Transformational Growth
            </h2>
            <p className="text-slate-600 text-base leading-relaxed text-left">
              Mustard Steps Consulting Limited is a people centered training and facilitation
              company committed to unlocking individual and team potential through practical
              experiential learning. We create safe, inclusive spaces where authentic learning and
              transformation flourish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Get To Know ──────────────────────────────────────────────────── */}

      <section className="bg-msc-deep-navy py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white font-bold text-xl leading-snug">Get To Know</p>
              <p className="text-msc-mustard font-bold text-xl mb-5">Juliet</p>

              <p className="text-msc-gold text-sm underline underline-offset-4 decoration-msc-gold/40 mb-6">
                Certified Cognitive Behavioral Therapist
              </p>

              <p className="text-white/85 text-sm leading-relaxed mb-5">
                I specialize in helping individuals identify the root causes of their challenges and
                develop practical, sustainable strategies for change. With a focus on clarity and
                cognitive-behavioral foundations, I work alongside my clients to dismantle the
                barriers to their mental well-being. My practice is built on the belief that
                everyone deserves a structured, professional space to process their experiences and
                gain a fresh perspective.
              </p>

              <p className="text-white/85 text-sm leading-relaxed">
                Through our sessions, we will focus on actionable insights that translate from our
                calls into your everyday life. My commitment is to provide you with high-quality,
                confidential care that respects your time and honors your journey toward mental
                health.
              </p>
            </motion.div>

            {/* Right — illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <img src={getToKnowImg} alt="Juliet" className="w-64 sm:w-72 lg:w-96 h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <MustardPillars />

      {/* ─── Integrated Approach + Upcoming Events ────────────────────────── */}
      <section className="bg-[#B2BEB5] py-14 sm:py-20">
        <div className="px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* Left — Integrated Approach card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-1 bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col"
            >
              {/* Icon */}
              <img src={integratedIconImg} alt="" aria-hidden="true" className="w-9 h-9 mb-5" />

              {/* Title */}
              <p className="text-base font-medium mb-6 leading-snug">
                <span className="text-msc-mustard font-semibold">Our Integrated Approach</span>
                <span className="text-msc-navy">: The Mustard Steps Difference</span>
              </p>

              {/* Items */}
              <div className="space-y-4 flex-1">
                {[
                  {
                    label: 'Human-Centered Learning',
                    detail:
                      'We place people at the core, ensuring learning is relevant, inclusive, and responsive to unique needs.',
                  },
                  {
                    label: 'Proven Coaching Tools',
                    detail:
                      'Driven by NLP coaching, we ground organizational culture and drive behavior change.',
                  },
                  {
                    label: 'Engaging Facilitation',
                    detail:
                      'Using Art of Hosting, we bring energy, neutrality, and clarity into every session, making complex topics accessible and actionable.',
                  },
                  {
                    label: 'Tailored Solutions',
                    detail:
                      "We co-create every intervention to reflect your team's culture, goals, and context.",
                  },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-msc-gold pl-4">
                    <p className="text-msc-navy font-semibold text-sm leading-snug">{item.label}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Upcoming Events card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-sm min-h-80 lg:min-h-0 flex flex-col justify-end bg-msc-navy"
            >
              {/* Background image */}
              <img
                src={approachImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8">
                <p className="text-msc-gold font-semibold text-sm uppercase tracking-widest mb-3">
                  Upcoming Events.
                </p>
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  Goal Mapping Africa Leadership Summit
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  Goal Mapping is a structured system for setting and achieving goals by combining
                  right-brain imaginative visioning with left-brain logical planning. It breaks
                  large objectives into actionable, time-bound steps using visual tools to boost
                  motivation and clarity — asking &apos;Who to define, prioritize, and create an
                  emotional connection to goals.
                </p>
                <p className="text-white/60 text-xs">
                  Secure your seat today.{' '}
                  <a
                    href="/contact"
                    className="text-msc-gold underline underline-offset-2 font-medium"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-msc-deep-navy py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — title + intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-white leading-tight mb-6">
                Why Partner with <br />
                <span className="text-msc-gold">Mustard</span> Steps?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                Our approach does more than solve problems — it unlocks potential, strengthens
                culture, and cultivates lasting synergy.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Through tailored programs, we help organizations to:
              </p>
            </motion.div>

            {/* Right — items */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              {[
                {
                  label: 'Break Silos',
                  detail: 'and dramatically improve internal communications.',
                },
                {
                  label: 'Rebuild Trust',
                  detail: 'and boost team morals.',
                },
                {
                  label: 'Strengthen Leadership',
                  detail: 'and internal facilitation capacity.',
                },
                {
                  label: 'Achieve Sustainable Impact',
                  detail: 'by connecting teams with personal and our organizational vision.',
                },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-msc-gold pl-4">
                  <p className="text-white text-sm leading-relaxed">
                    <span className="font-bold">{item.label}</span> {item.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Voices of Progress ───────────────────────────────────────────── */}
      <section className="pillars-section py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-msc-deep-navy text-center mb-12"
          >
            Voices of Progress
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                quote:
                  "I was hesitant about starting therapy, but the focus on practical steps helped me manage my burnout in a way I didn't think was possible. I finally feel like I'm back in the driver's seat of my own life.",
                name: 'Jabar w. Stevens',
              },
              {
                quote:
                  "The transition from 'surviving the week' to 'building a legacy' started here. This wasn't about just mental health, it was about my mental strategy. Reclaiming my agency allowed me to put my energy into the projects that actually matter, creating a ripple effect of growth across both my personal and professional life.",
                name: 'Chad Michaels',
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Opening quote */}
                <span className="text-4xl text-msc-navy leading-none font-serif mb-2 block">
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">{item.quote}</p>

                {/* Name */}
                <p className="text-msc-navy font-semibold text-sm text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-msc-deep-navy py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text + button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <h2 className="text-white leading-tight mb-6">
                You don&apos;t have to carry the weight alone
              </h2>

              <p className="text-white/75 text-sm leading-relaxed mb-10">
                Whether you&apos;re navigating a difficult season or looking for a fresh
                perspective, a clearer path is just one conversation away.
              </p>

              <Button
                size="lg"
                variant="mustard"
                className="w-full lg:w-auto rounded-full bg-msc-gold hover:bg-msc-gold-dark px-10"
                asChild
              >
                <Link to="/contact">
                  Book a call <Phone />
                </Link>
              </Button>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-end"
            >
              <img
                src={ctaImg}
                alt="A coaching session"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
