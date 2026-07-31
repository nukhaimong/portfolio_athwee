'use client';

import { motion, Variants } from 'framer-motion';

export default function Experience() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Experience data - explicit Tailwind classes for JIT compatibility
  const experiences = [
    {
      id: 1,
      company: 'Connekt Studio',
      role: 'Lead Video Editor & Filmmaker',
      period: '2020 - 2021',
      year: '2020',
      location: 'Bangladesh',
      description:
        'Led video production for a creative agency specializing in brand storytelling, documentaries, and commercial content for local and international clients.',
      achievements: [
        'Directed and edited 30+ brand documentaries',
        'Managed a team of 5 editors and videographers',
        'Delivered projects for 20+ clients across industries',
      ],
      color: 'from-purple-500 to-violet-600',
      badgeBg: 'bg-purple-100 dark:bg-purple-950/50',
      badgeText: 'text-purple-700 dark:text-purple-300',
      borderColor: 'border-purple-200 dark:border-purple-800/30',
      icon: '🎬',
    },
    {
      id: 2,
      company: 'BabyLoveGrowth',
      role: 'Content Creator & Video Editor',
      period: '2021 - 2022',
      year: '2021',
      location: 'Remote',
      description:
        'Developed engaging content strategy for a growing parenting brand. Created UGC-style videos, educational content, and brand storytelling pieces.',
      achievements: [
        'Grew channel from 0 to 100K+ subscribers',
        'Created 200+ videos with 50M+ total views',
        'Developed content strategy that increased engagement by 300%',
      ],
      color: 'from-pink-500 to-rose-500',
      badgeBg: 'bg-pink-100 dark:bg-pink-950/50',
      badgeText: 'text-pink-700 dark:text-pink-300',
      borderColor: 'border-pink-200 dark:border-pink-800/30',
      icon: '❤️',
    },
    {
      id: 3,
      company: 'Nas Daily',
      role: 'Video Editor',
      period: '2022 - 2023',
      year: '2022',
      location: 'Remote / Global',
      description:
        'Created content for a global audience of 30M+ followers. Edited documentaries, short-form videos, and social media content that reached millions across platforms.',
      achievements: [
        'Edited 50+ videos reaching 10M+ views',
        'Collaborated with teams across 5 countries',
        'Maintained consistent brand voice across content',
      ],
      color: 'from-blue-500 to-blue-600',
      badgeBg: 'bg-blue-100 dark:bg-blue-950/50',
      badgeText: 'text-blue-700 dark:text-blue-300',
      borderColor: 'border-blue-200 dark:border-blue-800/30',
      icon: '🌍',
    },
  ];

  // Reverse for display (newest first)
  const displayExperiences = [...experiences].reverse();

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-transparent to-emerald-50/30 dark:from-green-950/10 dark:to-emerald-950/10 pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800/50 mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Professional{' '}
            <span className="text-green-600 dark:text-green-400">Growth</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A timeline of my evolution as a content creator and filmmaker
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line: Left-aligned on mobile, centered on desktop */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-300 via-emerald-400 to-green-300 dark:from-green-700 dark:via-emerald-600 dark:to-green-700" />

          {displayExperiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 md:mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card Side */}
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    className={`bg-white dark:bg-slate-800 p-6 rounded-2xl border ${exp.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Period Badge */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full ${exp.badgeBg} ${exp.badgeText} text-xs font-semibold mb-3`}
                    >
                      {exp.period}
                    </div>

                    {/* Company & Role */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                      {exp.role}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node Icon (Left side on mobile, Centered on desktop) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                  <motion.div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl md:text-2xl shadow-lg border-4 border-white dark:border-slate-900`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Year Label */}
                  <div className="mt-2 px-2.5 py-0.5 bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 text-[11px] font-bold rounded-full border border-green-200 dark:border-green-800/50 shadow-sm">
                    {exp.year}
                  </div>
                </div>

                {/* Empty Spacer Column for Desktop Grid Balancing */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call To Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-slate-800 px-6 py-4 rounded-3xl sm:rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              ✨ Ready for the next chapter?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-green-500/20"
            >
              Let's work together
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
