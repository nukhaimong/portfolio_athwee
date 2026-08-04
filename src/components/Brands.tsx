'use client';

import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

// Import images
import dpWorldLogo from '@/assets/Dp world.jpg';
import englishTherapyLogo from '@/assets/English Therapy.jpg';
import fastflowupLogo from '@/assets/Fastflowup.png';
import tapTapSendLogo from '@/assets//Tap tap send.png';
import foodpandaLogo from '@/assets//foodpanda.jpg';
import myHairLogo from '@/assets/myhair.jpeg';

export default function Brands() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Brand data with imported images
  const brands = [
    {
      id: 1,
      name: 'DP World',
      logo: dpWorldLogo,
      category: 'Logistics & Trade',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800/30',
    },
    {
      id: 2,
      name: 'English Therapy',
      logo: englishTherapyLogo,
      category: 'Education & Learning',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800/30',
    },
    {
      id: 3,
      name: 'Fastflowup',
      logo: fastflowupLogo,
      category: 'AI & Automation',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800/30',
    },
    {
      id: 4,
      name: 'Tap Tap Send',
      logo: tapTapSendLogo,
      category: 'Fintech & Payments',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      borderColor: 'border-indigo-200 dark:border-indigo-800/30',
    },
    {
      id: 5,
      name: 'Foodpanda',
      logo: foodpandaLogo,
      category: 'Food Delivery',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30',
      borderColor: 'border-rose-200 dark:border-rose-800/30',
    },
    {
      id: 6,
      name: 'My Hair',
      logo: myHairLogo,
      category: 'Beauty & Wellness',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800/30',
    },
  ];

  return (
    <section
      className="py-20 px-4 md:px-8 relative overflow-hidden"
      id="brands"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-100/30 dark:from-slate-950/20 dark:to-slate-900/10 pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800/50 mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Brands I've{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Collaborated With
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Partnering with innovative brands to create impactful visual stories
          </p>
        </motion.div>

        {/* Brands Grid with Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className={`group relative ${brand.bgColor} border ${brand.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                {/* Logo Image - Circular with no background */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>

                {/* Company Name */}
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
                  {brand.name}
                </h3>

                {/* Category */}
                <span className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  {brand.category}
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              🤝 Let's collaborate
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-blue-500/20"
            >
              Work With Me
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
