'use client';

import { motion, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Videos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Video data - More videos added
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
    {
      id: 4,
      title: 'Cinematic B-Roll Tips & Tricks',
      description: 'Master the art of capturing stunning B-roll footage',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '67K',
      date: '1 week ago',
    },
    {
      id: 5,
      title: 'My Content Creation Setup 2024',
      description: 'Full tour of my camera, lighting, and audio gear',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '156K',
      date: '2 weeks ago',
    },
    {
      id: 6,
      title: 'Color Grading Masterclass',
      description: 'Transform your footage with professional color grading',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '93K',
      date: '3 days ago',
    },
    {
      id: 7,
      title: 'Storytelling Secrets for Creators',
      description: 'How to captivate your audience through powerful narratives',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '178K',
      date: '5 days ago',
    },
    {
      id: 8,
      title: 'Mobile Filmmaking on the Go',
      description: 'Creating professional content with just your smartphone',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '45K',
      date: '1 week ago',
    },
    {
      id: 9,
      title: 'Viral TikTok Editing Style',
      description:
        'Recreate the trending editing style that gets millions of views',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      views: '312K',
      date: '4 days ago',
    },
  ];

  // Scroll functions
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  // Update button visibility based on scroll position
  const updateButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftButton(container.scrollLeft > 10);
    setShowRightButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
    );
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(false);
    container.style.cursor = 'grab';
    container.style.userSelect = 'auto';
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateButtons);
      window.addEventListener('resize', updateButtons);
      updateButtons();

      return () => {
        container.removeEventListener('scroll', updateButtons);
        window.removeEventListener('resize', updateButtons);
      };
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-8" id="works">
      <motion.div
        className="max-w-7xl mx-auto"
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

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 shadow-lg rounded-full p-3 transition-all -translate-x-1/2 opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-200 dark:border-slate-700"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Button */}
          {showRightButton && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 shadow-lg rounded-full p-3 transition-all translate-x-1/2 opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-200 dark:border-slate-700"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          )}

          {/* Scrollable Video Grid */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 cursor-grab"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Hide scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                custom={index}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] flex-shrink-0 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 flex flex-col"
              >
                {/* YouTube Embed */}
                <div className="relative w-full aspect-video bg-slate-900 flex-shrink-0">
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
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400"
        ></motion.div>

        {/* CTA to YouTube Channel */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <a
            href="https://www.youtube.com/@AthweeMarma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-red-200 dark:shadow-red-900/30 hover:shadow-xl hover:scale-105"
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
