'use client';

import { motion } from 'framer-motion';
import { Scissors, TreeDeciduous, Leaf, Sparkles, Phone } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Mowing',
    description: 'Regular mowing service with professional-grade equipment. We maintain your lawn at the optimal height for lush, healthy grass.',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: TreeDeciduous,
    title: 'Landscaping',
    description: 'Transform your outdoor space with professional landscaping design and installation. From garden beds to hardscaping, we create beautiful, functional landscapes.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Leaf,
    title: 'Residential Care',
    description: 'Complete residential lawn care packages tailored to your home. Regular maintenance, fertilization, and attention to keep your property looking its best year-round.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'Seasonal Cleanup',
    description: 'Spring and fall cleanup services to prepare your lawn for the changing seasons. Start fresh with a clean, well-maintained yard.',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
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

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background grass-overlay">
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
            What We Offer
          </span>
          <h2 className="heading-primary mb-4">
            Our <span className="text-brand-blue">Services</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            From regular maintenance to seasonal cleanups, we provide comprehensive lawn care 
            services with military precision and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-white/20">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-tight mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="tel:8649406434"
            className="btn-primary inline-flex items-center gap-3"
          >
            <Phone size={20} />
            Call for Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
