'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Users, MapPin, Heart, Phone, ArrowRight, Navigation } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We do what we say, every time. Honesty and transparency are the foundation of our business.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Military-trained attention to detail. Every cut, every edge, every time.',
  },
  {
    icon: Users,
    title: 'Service',
    description: 'Dedicated to serving our community with the same commitment we showed in uniform.',
  },
  {
    icon: Heart,
    title: 'Pride',
    description: 'We take pride in every lawn we care for. Your satisfaction is our mission.',
  },
];

const serviceAreas = [
  { name: 'Anderson', distance: null, isPrimary: true },
  { name: 'Greenville', distance: '30 miles' },
  { name: 'Clemson', distance: '12 miles' },
  { name: 'Seneca', distance: '18 miles' },
  { name: 'Easley', distance: '15 miles' },
  { name: 'Pendleton', distance: '8 miles' },
  { name: 'Belton', distance: '8 miles' },
  { name: 'Williamston', distance: '10 miles' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/95 to-lawn-green/90" />
        
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              <Shield size={16} className="text-patriot-red" />
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase leading-tight mb-6">
              About <span className="text-patriot-red">Mission</span> Lawn Care
            </h1>
            <p className="text-xl text-white/90 font-body">
              Veteran-owned lawn care service bringing military discipline and 
              dedication to every yard in Anderson, SC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80"
                  alt="Beautifully maintained lawn"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Badge */}
              <div className="absolute -bottom-6 -right-6 bg-lawn-green text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold">🇺🇸</p>
                  <p className="font-display text-sm uppercase tracking-wider mt-2">Veteran<br/>Owned</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-lawn-green font-display uppercase tracking-widest text-sm mb-4">
                Our Journey
              </span>
              <h2 className="heading-secondary mb-6">
                From Service to <span className="text-lawn-green">Service</span>
              </h2>
              <div className="accent-line mb-8" />
              
              <div className="space-y-4 text-text-secondary font-body leading-relaxed">
                <p>
                  Mission Lawn Care was founded with a simple goal: to bring the same 
                  dedication, precision, and work ethic learned in military service to 
                  caring for the lawns of our community.
                </p>
                <p>
                  After serving our country, we wanted to continue serving—this time, our 
                  neighbors in Anderson, SC. We believe that a well-maintained lawn isn&apos;t 
                  just about aesthetics; it&apos;s about pride in your home and community.
                </p>
                <p>
                  When you hire Mission Lawn Care, you&apos;re not just getting a lawn service. 
                  You&apos;re getting a partner who treats your property with the same respect 
                  and attention to detail that we brought to our military service.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:8649406434" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={18} />
                  (864) 940-6434
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-lawn-green-light font-display uppercase tracking-widest text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              Our <span className="text-patriot-red">Values</span>
            </h2>
            <div className="h-1 w-20 bg-patriot-red rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-lawn-green/50 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-lawn-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 font-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section-padding bg-background grass-overlay">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-lawn-green font-display uppercase tracking-widest text-sm mb-4">
              Where We Work
            </span>
            <h2 className="heading-secondary mb-4">
              Service <span className="text-lawn-green">Areas</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
              Mission Lawn Care proudly serves Anderson, SC and the surrounding communities.
              We cover all areas within a 30-mile radius.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Areas Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className={`rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg ${
                    area.isPrimary
                      ? 'bg-lawn-green/10 border-2 border-lawn-green'
                      : 'bg-white border border-gray-200 hover:border-lawn-green/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    area.isPrimary ? 'bg-lawn-green' : 'bg-gray-200'
                  }`}>
                    <Navigation size={18} className={area.isPrimary ? 'text-white' : 'text-navy-blue'} />
                  </div>
                  <h3 className={`font-display font-bold uppercase tracking-tight mb-1 ${
                    area.isPrimary ? 'text-lawn-green text-lg' : 'text-navy-blue'
                  }`}>
                    {area.name}
                  </h3>
                  <p className={`text-sm ${area.isPrimary ? 'text-lawn-green-dark font-medium' : 'text-text-secondary'}`}>
                    {area.isPrimary ? 'Primary Service Area' : area.distance}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104872.59374982098!2d-82.7483771!3d34.5034394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88585e3d2ab1b4db%3A0xadb63e84be723e0c!2sAnderson%2C%20SC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mission Lawn Care Service Area"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/t7SG8NmSsDhKsago6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-lawn-green hover:text-lawn-green-dark transition-colors font-semibold"
              >
                <MapPin size={18} />
                View on Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lawn-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12" />
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-body">
              Contact us today for a free, no-obligation estimate. Let us show you 
              the Mission Lawn Care difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8649406434" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Phone size={20} />
                Call (864) 940-6434
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-lawn-green inline-flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
