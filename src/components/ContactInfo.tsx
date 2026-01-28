'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle, Award } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '(864) 940-6434',
    secondary: 'Mon-Sat, 7AM-6PM',
    href: 'tel:8649406434',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@missionlawncare.com',
    secondary: 'We reply within 24 hours',
    href: 'mailto:info@missionlawncare.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: 'Anderson, SC Area',
    secondary: 'Serving Upstate SC',
    href: null,
  },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const whyChooseUs = [
  { icon: Shield, text: 'Veteran-Owned' },
  { icon: CheckCircle, text: 'Licensed & Insured' },
  { icon: Star, text: 'Free Estimates' },
  { icon: Award, text: 'Quality Guaranteed' },
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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function ContactInfo() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-brand-blue to-brand-blue-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lawn-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-white/80 font-display uppercase tracking-widest text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Contact <span className="text-lawn-green">Us</span>
          </h2>
          <div className="h-1 w-20 bg-lawn-green rounded-full mx-auto mb-6" />
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-body">
            Ready to transform your lawn? Reach out to us today for a free estimate. 
            We proudly serve the Anderson, SC area and all of Upstate South Carolina.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group"
            >
              {card.href ? (
                <a 
                  href={card.href}
                  className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-lawn-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <card.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-brand-blue font-semibold text-lg mb-1">
                    {card.primary}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {card.secondary}
                  </p>
                </a>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-lawn-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <card.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-brand-blue font-semibold text-lg mb-1">
                    {card.primary}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {card.secondary}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Business Hours & Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Business Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lawn-green rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                Business Hours
              </h3>
            </div>
            <div className="space-y-4">
              {businessHours.map((item) => (
                <div 
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-white font-semibold">{item.day}</span>
                  <span className={`font-body ${item.hours === 'Closed' ? 'text-patriot-red' : 'text-white/80'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lawn-green rounded-xl flex items-center justify-center">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                Why Choose Us
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div 
                  key={item.text}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-lawn-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-lawn-green" />
                  </div>
                  <span className="text-white font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Veteran Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
            <Shield size={18} className="text-patriot-red" />
            Proudly Veteran Owned & Operated
            <span className="text-lg">🇺🇸</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
