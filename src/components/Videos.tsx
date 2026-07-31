'use client';

import { motion, Variants } from 'framer-motion';

export default function Videos() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Video data - Replace these with your actual video links
  const videos = [
    {
      id: 1,
      title: 'How I Edit Videos with AI Tools',
      description: 'Behind the scenes of my AI-powered editing workflow',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '125K',
      date: '2 weeks ago',
    },
    {
      id: 2,
      title: 'Documentary Filmmaking in Bangladesh',
      description: 'Capturing stories that matter in my homeland',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '89K',
      date: '1 month ago',
    },
    {
      id: 3,
      title: 'UGC Ads That Actually Convert',
      description: 'My framework for creating high-converting content',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '210K',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-800/50 mb-4">
            Latest Videos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Watch My Latest{' '}
            <span className="text-green-600 dark:text-green-400">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Behind the scenes, tutorials, and my best work
          </p>
        </motion.div>

        {/* Video Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              custom={index}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              {/* YouTube Embed */}
              <div className="relative w-full aspect-video bg-slate-900">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Video Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base leading-tight line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                    {video.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                  <span className="flex items-center gap-1">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {video.views} views
                  </span>
                  <span>{video.date}</span>
                </div>

                {/* Watch Button */}
                <a
                  href={video.embedUrl.replace('embed/', 'watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium hover:gap-3 transition-all"
                >
                  Watch on YouTube
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to YouTube Channel */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <a
            href="https://www.youtube.com/@AthweeMarma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-red-200 dark:shadow-red-900/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to My YouTube Channel
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
