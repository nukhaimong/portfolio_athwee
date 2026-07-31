'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { containerVariants, textVariants } from '@/lib/animationVariants';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'athwee@example.com',
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: 'green',
      link: 'mailto:athwee@example.com',
      action: 'Send Email',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+880 1234 567890',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: 'emerald',
      link: 'https://wa.me/8801234567890',
      action: 'Message Now',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+880 1234 567890',
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      color: 'blue',
      link: 'tel:+8801234567890',
      action: 'Call Now',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      green: {
        bg: 'bg-green-50 dark:bg-green-950/30',
        border: 'border-green-200 dark:border-green-800/50',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:border-green-300 dark:hover:border-green-700',
        shadow: 'shadow-green-200 dark:shadow-green-900/20',
        button: 'bg-green-600 hover:bg-green-700 text-white',
        ring: 'ring-green-500/20',
        badge:
          'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
      },
      emerald: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        border: 'border-emerald-200 dark:border-emerald-800/50',
        text: 'text-emerald-600 dark:text-emerald-400',
        hover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
        shadow: 'shadow-emerald-200 dark:shadow-emerald-900/20',
        button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        ring: 'ring-emerald-500/20',
        badge:
          'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-200 dark:border-blue-800/50',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:border-blue-300 dark:hover:border-blue-700',
        shadow: 'shadow-blue-200 dark:shadow-blue-900/20',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        ring: 'ring-blue-500/20',
        badge:
          'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      },
    };
    return colors[color] || colors.green;
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
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
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            <span className="text-green-600 dark:text-green-400">
              Let's Connect
            </span>
            <span className="text-slate-800 dark:text-white">
              {' '}
              & Collaborate
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Have a project in mind? Reach out to me through any of the channels
            below. I'd love to hear from you!
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {contactMethods.map((method, index) => {
            const colors = getColorClasses(method.color);

            return (
              <motion.div
                key={method.id}
                variants={textVariants}
                custom={index}
                className={`relative group rounded-2xl p-8 transition-all duration-300 ${colors.bg} ${colors.border} border ${colors.hover} shadow-lg ${colors.shadow}`}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-${method.color}-300/20 to-emerald-300/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border mx-auto mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`${colors.text}`}>{method.icon}</div>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-1">
                  {method.label}
                </h3>

                {/* Value */}
                <p
                  className={`text-sm font-medium ${colors.text} text-center mb-4 break-all`}
                >
                  {method.value}
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Primary Action */}
                  <motion.a
                    href={method.link}
                    target={method.id === 'whatsapp' ? '_blank' : undefined}
                    rel={
                      method.id === 'whatsapp'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${colors.button}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{method.action}</span>
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
                  </motion.a>

                  {/* Copy Button (for email and phone) */}
                  {method.id !== 'whatsapp' && (
                    <motion.button
                      onClick={() => handleCopy(method.value, method.id)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${colors.bg} ${colors.border} border ${colors.text} hover:bg-opacity-80`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {copied === method.id ? (
                        <>
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
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
                              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                            />
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info / Social Links */}
        <motion.div
          variants={textVariants}
          className="text-center pt-8 border-t border-slate-200 dark:border-slate-700/50"
        >
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            {[
              {
                name: 'YouTube',
                icon: 'yt',
                link: 'https://www.youtube.com/@AthweeMarma',
              },
              { name: 'Instagram', icon: 'ig', link: '#' },
              { name: 'LinkedIn', icon: 'li', link: '#' },
              { name: 'Twitter', icon: 'tw', link: '#' },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <span className="sr-only">{social.name}</span>
                {social.icon === 'yt' && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                {social.icon === 'ig' && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )}
                {social.icon === 'li' && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.icon === 'tw' && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.217-7.68 6.086 6.086 0 00.24-1.447 8.607 8.607 0 002.13-2.213z" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
