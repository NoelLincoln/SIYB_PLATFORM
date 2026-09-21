import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import getToKnowImg from '@/assets/get-to-know-j.svg';
import catalystImg from '@/assets/catalyst-of-growth.svg';
import approachImg from '@/assets/Approach.svg';
import ctaImg from '@/assets/cta-weight-alone.svg';
import { Button } from '@/components/ui/button';
import MustardPillars from '@/components/MustardPillars';

//  Component

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero — full-bleed, centred */}
      <section className="relative bg-[#0B2D4D] min-h-[calc(100svh-4rem)] flex items-center justify-center overflow-hidden px-5 sm:px-8 py-16 sm:py-20">
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-balance leading-[1.1] mb-5"
          >
            <span className="hero-title-gradient">Mustard</span> Steps Consulting.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-white text-lg sm:text-xl font-normal text-balance mb-4"
          >
            Empowering Growth. Driving Impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-white/70 text-base leading-relaxed text-balance mb-9"
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
      </section>

      {/* ─── Catalyst + Meet Juliet ──────────────────────────────────────── */}
      <section className="catalyst-section relative overflow-hidden py-14 sm:py-20">
        {/* Decorative network illustration — behind the left column */}
        <img
          src={catalystImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full lg:w-1/2 h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left — Catalyst */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-msc-deep-navy text-center lg:text-left mb-5">
                The Catalyst Of Transformational Growth
              </h2>
              <p className="text-slate-600 text-base leading-relaxed text-center lg:text-left">
                Mustard Steps Consulting Limited is a people centered training and facilitation
                company committed to unlocking individual and team potential through practical
                experiential learning. We create safe, inclusive spaces where authentic learning and
                transformation flourish.
              </p>

              <img
                src={getToKnowImg}
                alt="Juliet"
                className="mt-10 mx-auto lg:mx-0 w-56 sm:w-64 lg:w-90 h-auto"
              />
            </motion.div>

            {/* Right — Meet Juliet */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-msc-gold font-['Montserrat'] font-normal text-[16px] md:text-[20px] leading-snug text-center lg:text-left">
                Meet
              </p>
              <p className="text-msc-gold font-['Montserrat'] font-bold text-[20px] md:text-[26px] lg:text-[28px] leading-snug mb-4 lg:mb-3 text-center lg:text-left">
                Juliet Muthiani
              </p>

              <p className="text-msc-gold font-['Montserrat'] font-medium text-[14px] md:text-[16px] lg:text-[18px] underline underline-offset-4 decoration-msc-gold/40 mb-6 lg:mb-5 text-center lg:text-left">
                Founder & Lead Coach and Trainer
              </p>

              <p className="text-slate-700 font-['Montserrat'] font-normal text-[16px] leading-relaxed mb-4 text-center lg:text-left">
                <span className="font-bold text-msc-deep-navy">Juliet</span> is a{' '}
                <span className="font-bold text-msc-deep-navy">
                  Transformation and Growth Coach
                </span>{' '}
                who focuses on guiding Individuals and Teams Gain Clarity, Navigate Pivots,
                Transform Possibilities and Grow with Purpose. With over 18 years of experience in
                entrepreneurial training, team development and organizational capacity building, I
                bless experiential learning with Neurol-Linguistic Programming (NLP) and Goal
                Mapping to guide individuals and teams from small beginnings (transformation) to
                impactful growth.
              </p>

              <p className="text-slate-700 font-['Montserrat'] font-normal text-[16px] leading-relaxed mb-4 text-center lg:text-left">
                Juliet is a certified NLP Master Practitioner, Goal Mapping Practitioner, ILO-SIYB
                Trainer, Art of Hosting (AoH) Conversation host and a Trainer of Trainers (ToT)
                certified by the German WASH Network, among other qualifications. Her experience,
                drive and passion for people development has led her to traverse the Eastern Africa
                region Coaching, Training and Facilitating team engagements in Kenya, Uganda,
                Ethiopia.
              </p>

              <p className="text-slate-700 font-['Montserrat'] font-normal text-[16px] leading-relaxed text-center lg:text-left">
                She is a firm believer that growth is not just about awareness, but rather what you
                do with that awareness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MustardPillars />

      {/* ─── Upcoming Events ────────────────────────────────────────────────── */}
      <section className="bg-[#B2BEB5] py-14 sm:py-20">
        <div className="px-5 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[750px] w-full mx-auto rounded-2xl overflow-hidden shadow-sm min-h-80 lg:min-h-0 flex flex-col justify-end bg-msc-navy"
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
              <h3 className="text-white font-bold text-xl leading-snug mb-1">
                Goal Mapping Africa Leadership Summit 1.0
              </h3>
              <p className="text-msc-gold font-medium text-sm leading-snug mb-4">
                From Vision to Impact: Accelerating Africa&apos;s Growth
              </p>

              <p className="text-white/75 font-['Montserrat'] font-medium text-[16px] leading-relaxed mb-4">
                This is a premier convening of leaders, managers, coaches, trainers, educators, and
                change makers committed to transforming vision into meaningful impact. Taking place
                in Nairobi, Kenya, the Summit introduces the internationally acclaimed Goal Mapping
                methodology, pioneered by Brian Mayne—a proven whole-brain approach that helps
                individuals and organizations align their goals, actions, and outcomes.
              </p>
              <p className="text-white/75 font-['Montserrat'] font-medium text-[16px] leading-relaxed mb-4">
                In a rapidly changing world where ambition often outpaces execution, this Summit
                offers practical tools, powerful insights, and meaningful connections to help
                participants bridge the gap between vision and results. Join fellow leaders from
                across Africa to explore new ways of driving personal growth, organizational
                excellence, and sustainable development.
              </p>
              <p className="text-white/75 font-['Montserrat'] font-medium text-[16px] leading-relaxed mb-4">
                The Goal Mapping Leadership Summit 1.0 – 2027 is more than an event, it is a
                movement toward a new standard of execution in Africa. Together, we can ensure that
                every vision is backed by a clear, actionable map to success.
              </p>
              <p className="text-white/75 font-['Montserrat'] font-medium text-[16px] leading-relaxed mb-5">
                We invite you to join us in Nairobi and become part of shaping a future where
                Africa&apos;s ambition is matched by measurable impact.
              </p>

              <p className="text-white/60 text-xs mb-1">
                Register here:{' '}
                <a
                  href="https://shorturl.at/ezLg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-msc-gold underline underline-offset-2 font-medium"
                >
                  https://shorturl.at/ezLg9
                </a>
              </p>
              <p className="text-white/60 text-xs">
                Email us:{' '}
                <a
                  href="mailto:gmafricasummit@mustardsteps.co.ke"
                  className="text-msc-gold underline underline-offset-2 font-medium"
                >
                  gmafricasummit@mustardsteps.co.ke
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-[#0B2D4D] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — title + intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h2 className="text-white leading-tight mb-6 text-center">
                Why Partner with <br />
                <span className="text-msc-gold">Mustard</span> Steps?
              </h2>
              <p className="text-white/80 text-sm lg:font-['Montserrat'] lg:font-normal lg:text-[18px] leading-relaxed mb-2">
                Our approach does more than solve problems- it unlocks potential, strengthens
                culture, and cultivates lasting synergy.
              </p>
              <p className="text-white/80 text-sm lg:font-['Montserrat'] lg:font-normal lg:text-[18px] leading-relaxed">
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
                    <span className="font-bold lg:font-['Montserrat'] lg:font-bold lg:text-[20px]">
                      {item.label}
                    </span>{' '}
                    <span className="lg:font-['Montserrat'] lg:font-normal lg:text-[18px]">
                      {item.detail}
                    </span>
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0B2D4D] py-16 sm:py-24 mt-10">
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

              <p className="text-white font-['Montserrat'] font-normal text-base leading-normal tracking-normal mb-10">
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
