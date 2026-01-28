'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 md:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/85 to-brand-blue-light/80" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal stripes */}
        <div className="hidden md:block absolute -right-20 top-0 w-96 h-full bg-patriot-red/10 transform skew-x-12" />
        <div className="hidden md:block absolute -right-40 top-0 w-96 h-full bg-white/5 transform skew-x-12" />
        
        {/* Floating dots - hidden on mobile */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-20 left-[10%] w-4 h-4 bg-patriot-red rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-[20%] w-6 h-6 bg-white/20 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-[25%] w-3 h-3 bg-brand-blue-light/50 rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-3xl">
          {/* Veteran Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <Shield size={16} className="text-patriot-red" />
              Veteran Owned & Operated
              <span className="text-lg">🇺🇸</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight mb-6"
          >
            Your Lawn&apos;s
            <span className="block text-patriot-red drop-shadow-lg">
              New Mission
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-body font-light leading-relaxed"
          >
            Professional lawn care services in Anderson, SC. We bring 
            <span className="font-semibold text-white"> military precision</span> and 
            <span className="font-semibold text-white"> dedication</span> to every yard we service.
          </motion.p>

          {/* Trust Indicators - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden sm:flex flex-wrap gap-6 mb-10"
          >
            {[
              { icon: Star, text: 'Quality Guaranteed' },
              { icon: Shield, text: 'Fully Insured' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <item.icon size={20} className="text-patriot-red" />
                <span className="font-body">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:8649406434"
              className="btn-secondary inline-flex items-center justify-center gap-3 text-lg"
            >
              <Phone size={22} />
              Call (864) 940-6434
            </a>
            <Link
              href="#contact"
              className="border-2 border-white text-white font-display font-semibold uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-white hover:text-brand-blue transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Service Area Tag - hidden on mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden sm:block mt-8 text-white/60 text-sm font-body"
          >
            Proudly serving the Anderson, SC area and all of Upstate South Carolina
          </motion.p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#F8F9FA"
          />
        </svg>
      </div>
    </section>
  );
}
