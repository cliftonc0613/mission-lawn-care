'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Greenville, SC',
    text: 'Mission Lawn Care transformed our yard! Their attention to detail is unmatched. You can really see the military precision in their work.',
    rating: 5,
  },
  {
    name: 'Robert T.',
    location: 'Simpsonville, SC',
    text: 'Finally found a reliable lawn care service. They show up on time every week and my lawn has never looked better. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer K.',
    location: 'Greer, SC',
    text: 'Love supporting a veteran-owned business, especially one that does such great work. Professional, courteous, and affordable.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-background grass-overlay">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-blue font-display uppercase tracking-widest text-sm mb-4">
            Happy Customers
          </span>
          <h2 className="heading-primary mb-4">
            What Our <span className="text-brand-blue">Clients</span> Say
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            across Upstate SC have to say about our service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="testimonial-card h-full hover:shadow-2xl transition-shadow duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={24} className="text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-patriot-red fill-patriot-red" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-text-secondary font-body leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-full flex items-center justify-center text-white font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark transition-colors font-semibold group"
          >
            <span>See More Reviews on Google</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
