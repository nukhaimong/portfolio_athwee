'use client';

import { motion } from 'framer-motion';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Subtle gradient overlay for depth */}
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
