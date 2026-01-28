'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Medal, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Medal,
    title: 'Veteran Owned',
    description: 'We bring military discipline, work ethic, and attention to detail to every job. Your lawn is our mission.',
    color: 'bg-brand-blue',
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: 'We show up on time, every time. You can count on consistent, professional service week after week.',
    color: 'bg-lawn-green',
  },
  {
    icon: Clock,
    title: 'Prompt Response',
    description: 'Quick estimates and fast scheduling. We respect your time and work around your schedule.',
    color: 'bg-accent-orange',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'We\'re your neighbors in the Greenville, SC area. We take pride in beautifying our community, one lawn at a time.',
    color: 'bg-brand-blue-dark',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-blue-light font-display uppercase tracking-widest text-sm mb-4">
            The Mission Difference
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Why Choose <span className="text-accent-orange">Us</span>
          </h2>
          <div className="h-1 w-20 bg-accent-orange rounded-full mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-body">
            When you hire Mission Lawn Care, you&apos;re getting more than just a lawn service. 
            You&apos;re partnering with a veteran-owned business committed to excellence.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-blue-light/50 transition-all duration-300 hover:bg-white/10 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <pillar.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-brand-blue-light to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100%', label: 'Satisfaction' },
            { number: '24hr', label: 'Response Time' },
            { number: 'Free', label: 'Estimates' },
            { number: 'Local', label: 'Owned' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-brand-blue-light mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400 uppercase tracking-wider text-sm font-display">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
