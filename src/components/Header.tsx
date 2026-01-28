'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-blue text-white py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="tel:8649406434" 
              className="flex items-center gap-2 hover:text-brand-blue-light transition-colors"
            >
              <Phone size={14} />
              <span className="font-semibold">(864) 940-6434</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Greenville, SC Area</span>
            </div>
          </div>
          <div className="veteran-badge text-xs">
            🇺🇸 Veteran Owned & Operated
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src="/images/mission-lawn-care-logo.png"
                  alt="Mission Lawn Care"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-lg uppercase tracking-wider text-text-primary hover:text-brand-blue transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-patriot-red transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Phone */}
            <div className="flex items-center gap-4">
              {/* Mobile Phone Number */}
              <a 
                href="tel:8649406434" 
                className="lg:hidden flex items-center gap-2 text-brand-blue font-bold"
              >
                <Phone size={20} className="animate-pulse" />
                <span className="hidden sm:inline">(864) 940-6434</span>
              </a>

              {/* Desktop CTA */}
              <a href="tel:8649406434" className="hidden lg:block btn-primary">
                Call Now
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-text-primary hover:text-lawn-green transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="container-custom py-6 px-4 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-display text-xl uppercase tracking-wider text-text-primary hover:text-brand-blue transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <a href="tel:8649406434" className="btn-secondary w-full text-center block">
                    <span className="flex items-center justify-center gap-2">
                      <Phone size={20} />
                      Call (864) 940-6434
                    </span>
                  </a>
                </motion.div>
                <div className="veteran-badge justify-center mt-4">
                  🇺🇸 Veteran Owned & Operated
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
