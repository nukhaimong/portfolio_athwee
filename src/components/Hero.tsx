'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import profilePhoto from '@/assets/Landing Page Image.jpeg';
import IntroTextAnimation from './IntroTextAnimation';
import {
  containerVariants,
  cursorVariants,
  floatVariants,
  glowVariants,
  imageVariants,
  textVariants,
} from '@/lib/animationVariants';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* LEFT SIDE - Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Badge */}
          <motion.div variants={textVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Content Creator · Filmmaker
            </span>
          </motion.div>

          {/* Heading with Continuous Typewriter Effect */}
          <motion.div variants={textVariants} className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-green-600 dark:text-green-400">
                {<IntroTextAnimation />}
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-green-600 dark:bg-green-400 ml-1"
                />
              </span>
            </h1>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            variants={textVariants}
            className="space-y-2 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-lg"
          >
            <p>
              <span className="font-semibold text-green-600 dark:text-green-400">
                Content creator & video editor
              </span>{' '}
              from Bangladesh with 4+ years of experience.
            </p>
            <p>
              Helping brands reach millions through authentic storytelling and
              AI-powered content.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-green-200 dark:shadow-green-900/30 flex items-center gap-2"
            >
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Let's Collaborate
            </motion.button>
            <a href={'https://www.youtube.com/@AthweeMarma'} target="blank">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 px-7 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch work
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Profile Photo */}
        <motion.div
          className="flex justify-center items-center order-1 lg:order-2"
          variants={imageVariants}
        >
          <div className="relative">
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-green-300/30 to-emerald-300/30 rounded-full blur-2xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />

            {/* Profile photo with Image component */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-green-500/30 border-4 border-white dark:border-slate-800"
              variants={floatVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={profilePhoto}
                alt="Athwee - Content Creator"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 shadow-xl rounded-full p-2.5 border border-green-100 dark:border-green-800/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-300 px-2">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                4+ years
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-3 -left-3 bg-white dark:bg-slate-800 shadow-xl rounded-full p-2.5 border border-emerald-100 dark:border-emerald-800/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300 px-2">
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                100M+ views
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
