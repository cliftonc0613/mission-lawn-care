'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:8649406434"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="floating-call-btn group"
      aria-label="Call Mission Lawn Care"
    >
      <Phone size={28} className="group-hover:animate-pulse" />
      
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-patriot-red animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap bg-text-primary text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call Now!
      </span>
    </motion.a>
  );
}
