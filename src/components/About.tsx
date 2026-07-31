'use client';

import { motion, Variants } from 'framer-motion';

export default function About() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Views Generated', value: '100M+' },
    { label: 'Clients', value: '50+' },
    { label: 'Projects', value: '200+' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-slate-950">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800/50 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Storyteller Behind the{' '}
            <span className="text-green-600 dark:text-green-400">Lens</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE - Bio Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="text-lg font-medium text-green-600 dark:text-green-400">
                From Bangladesh to Global Impact
              </p>
              <p>
                I'm a content creator, filmmaker, and video editor with a
                passion for crafting stories that resonate. Over the past four
                years, I've had the privilege of helping creators and brands
                reach millions of people worldwide through compelling
                documentaries, engaging short-form content, and impactful social
                media campaigns.
              </p>
              <p>
                My journey took a significant turn when I joined{' '}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  Nas Daily
                </span>{' '}
                as a Video Editor, where I learned to create content for a truly
                global audience. This experience shaped my understanding of what
                makes content travel across borders and cultures.
              </p>
              <p>
                Today, I'm at the intersection of storytelling and technology,
                running an{' '}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  AI-powered UGC ads agency
                </span>
                . I believe the future of content lies in combining authentic
                human stories with the efficiency and creativity of AI tools.
              </p>
            </div>

            {/* Philosophy / Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-green-50 dark:bg-green-950/30 p-6 rounded-2xl border border-green-100 dark:border-green-800/30"
            >
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  My Philosophy
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  "Create stories that capture attention, connect with people,
                  and leave a lasting impact. Every frame should have a purpose,
                  every story should move someone."
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:gap-3 transition-all"
              >
                Let's tell your story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Stats & Tools */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  custom={index}
                  className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm text-center backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools/Badges */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm backdrop-blur-sm"
            >
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Tools I Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Premiere Pro',
                  'After Effects',
                  'DaVinci Resolve',
                  'CapCut',
                  'Runway',
                  'ChatGPT',
                  'Midjourney',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-xs font-medium rounded-full border border-green-200 dark:border-green-800/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
