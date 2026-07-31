'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Saif chowdury',
    role: 'formal director',
    text: 'Outstanding service! Quick, professional, and exceeded my expectations. The team was incredibly helpful and made the entire process smooth and stress-free. I truly appreciate their dedication and attention to detail. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Saif chowdury',
    role: 'formal director',
    text: 'Outstanding service! Quick, professional, and exceeded my expectations. The team was incredibly helpful and made the entire process smooth and stress-free. I truly appreciate their dedication and attention to detail. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Saif chowdury',
    role: 'formal director',
    text: 'Outstanding service! Quick, professional, and exceeded my expectations. The team was incredibly helpful and made the entire process smooth and stress-free. I truly appreciate their dedication and attention to detail. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#2d2d2d] rounded-xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5"
            >
              {/* Circular Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-white/20 shadow-md">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover filter grayscale"
                />
              </div>

              {/* Quote Text */}
              <div className="relative mb-8 text-slate-300 text-sm leading-relaxed px-2">
                <span className="text-[#39db4a] font-serif text-2xl font-bold mr-1 inline-block leading-none">
                  “
                </span>
                {testimonial.text}
                <span className="text-[#39db4a] font-serif text-2xl font-bold ml-1 inline-block leading-none">
                  ”
                </span>
              </div>

              {/* Author Details */}
              <div className="mt-auto">
                <h3 className="text-[#39db4a] text-lg font-bold tracking-wide">
                  {testimonial.name}
                </h3>
                <p className="text-slate-400 text-xs font-normal mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
