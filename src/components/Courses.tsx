'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { containerVariants, textVariants } from '@/lib/animationVariants';

// Course data
const courses = [
  {
    id: 1,
    title: 'Video Editing Mastery',
    subtitle: 'From Beginner to Pro',
    description:
      'Learn professional video editing techniques, storytelling, and post-production workflows used by industry experts.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    color: 'green',
    lessons: 24,
    students: 1250,
    duration: '6 weeks',
    level: 'All Levels',
    link: '#',
  },
  {
    id: 2,
    title: 'AI-Powered Content Creation',
    subtitle: 'Work Smarter, Not Harder',
    description:
      'Master AI tools for content creation, from automated editing to intelligent storytelling and audience growth.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: 'emerald',
    lessons: 18,
    students: 890,
    duration: '4 weeks',
    level: 'Intermediate',
    link: '#',
  },
  {
    id: 3,
    title: 'YouTube Growth & Strategy',
    subtitle: 'Build Your Audience',
    description:
      'Proven strategies to grow your YouTube channel, optimize content, and build a loyal community that engages.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: 'red',
    lessons: 20,
    students: 2100,
    duration: '5 weeks',
    level: 'All Levels',
    link: '#',
  },
];

export default function Courses() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      green: {
        bg: 'bg-green-50 dark:bg-green-950/30',
        border: 'border-green-200 dark:border-green-800/50',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:border-green-300 dark:hover:border-green-700',
        shadow: 'shadow-green-200 dark:shadow-green-900/20',
        badge:
          'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
        button: 'bg-green-600 hover:bg-green-700 text-white',
      },
      emerald: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        border: 'border-emerald-200 dark:border-emerald-800/50',
        text: 'text-emerald-600 dark:text-emerald-400',
        hover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
        shadow: 'shadow-emerald-200 dark:shadow-emerald-900/20',
        badge:
          'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
        button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      },
      red: {
        bg: 'bg-red-50 dark:bg-red-950/30',
        border: 'border-red-200 dark:border-red-800/50',
        text: 'text-red-600 dark:text-red-400',
        hover: 'hover:border-red-300 dark:hover:border-red-700',
        shadow: 'shadow-red-200 dark:shadow-red-900/20',
        badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
        button: 'bg-red-600 hover:bg-red-700 text-white',
      },
    };
    return colors[color] || colors.green;
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div variants={textVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Learn & Grow
            </span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="text-green-600 dark:text-green-400">
              My Courses
            </span>{' '}
            <span className="text-slate-800 dark:text-white">
              That May Help You
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Learn from my years of experience in content creation and video
            editing. These courses are designed to help you level up your
            skills.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            const isHovered = hoveredCard === course.id;

            return (
              <motion.div
                key={course.id}
                variants={textVariants}
                custom={index}
                className={`relative group rounded-2xl p-6 transition-all duration-300 ${colors.bg} ${colors.border} border ${colors.hover} shadow-lg ${colors.shadow}`}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-${course.color}-300/20 to-emerald-300/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                />

                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`${colors.text}`}>{course.icon}</div>
                  </motion.div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}
                  >
                    {course.level}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                  {course.title}
                </h3>
                <p className={`text-sm font-medium ${colors.text} mb-3`}>
                  {course.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      {course.lessons}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Lessons
                    </p>
                  </div>
                  <div className="text-center border-x border-slate-200 dark:border-slate-700/50">
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      {course.students}+
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Students
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-slate-800 dark:text-white">
                      {course.duration}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Duration
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={course.link}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${colors.button}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Now</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={textVariants} className="text-center pt-8">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all duration-300 group"
            whileHover={{ x: 5 }}
          >
            <span>View all courses</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
