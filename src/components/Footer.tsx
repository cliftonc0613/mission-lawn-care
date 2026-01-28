'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-blue text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-24 h-24 bg-white rounded-lg p-2">
                <Image
                  src="/images/mission-lawn-care-logo.png"
                  alt="Mission Lawn Care"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-4 font-body">
              Veteran-owned lawn care service dedicated to serving the Greenville, SC area with 
              precision, reliability, and the discipline that comes from military service.
            </p>
            <div className="veteran-badge bg-brand-blue/20 border border-brand-blue">
              🇺🇸 Proudly Veteran Owned
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/#services', label: 'Services' },
                { href: '/#quote', label: 'Get a Quote' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brand-blue-light transition-colors font-body flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-accent-orange rounded-full group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Lawn Mowing',
                'Landscaping',
                'Residential Care',
                'Seasonal Cleanup',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 font-body flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue-light rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:8649406434" 
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-blue-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/40 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Phone</span>
                    <p className="font-semibold">(864) 940-6434</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@missionlawncare.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-blue-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/40 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Email</span>
                    <p className="font-semibold text-sm">info@missionlawncare.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Location</span>
                    <p className="font-semibold">Greenville, SC Area</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mission Lawn Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Greenville, SC Area</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full" />
              <a 
                href="tel:8649406434"
                className="hover:text-brand-blue-light transition-colors"
              >
                (864) 940-6434
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
