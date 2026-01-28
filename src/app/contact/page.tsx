'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, ExternalLink, Navigation } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(864) 940-6434',
    href: 'tel:8649406434',
    description: 'Call us anytime',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'missionlawncare@yahoo.com',
    href: 'mailto:missionlawncare@yahoo.com',
    description: 'Send us a message',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Anderson, SC',
    href: 'https://maps.app.goo.gl/t7SG8NmSsDhKsago6',
    description: 'Serving the Anderson area',
    external: true,
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Sat: 7AM - 7PM',
    description: 'We work around your schedule',
  },
];

const subjects = [
  'Free Quote Request',
  'Service Inquiry',
  'Schedule Service',
  'Feedback',
  'Other',
];

const serviceAreas = [
  { name: 'Anderson', distance: null, isPrimary: true },
  { name: 'Pendleton', distance: '8 miles' },
  { name: 'Clemson', distance: '12 miles' },
  { name: 'Seneca', distance: '18 miles' },
  { name: 'Easley', distance: '15 miles' },
  { name: 'Williamston', distance: '10 miles' },
  { name: 'Belton', distance: '8 miles' },
  { name: 'Honea Path', distance: '15 miles' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Contact form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lawn-green/95 to-navy-blue/90" />
        
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white/80 font-display uppercase tracking-widest text-sm mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase leading-tight mb-6">
              Contact <span className="text-patriot-red">Us</span>
            </h1>
            <p className="text-xl text-white/90 font-body">
              Have questions? Need a quote? We&apos;re here to help. 
              Reach out and let&apos;s discuss how we can serve you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-12 relative z-20">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <div className="w-14 h-14 bg-lawn-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <info.icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary uppercase tracking-tight mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lawn-green font-semibold flex items-center gap-1">
                      {info.content}
                      {info.external && <ExternalLink size={14} />}
                    </p>
                    <p className="text-text-secondary text-sm mt-1">{info.description}</p>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-14 h-14 bg-lawn-green rounded-xl flex items-center justify-center mb-4">
                      <info.icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary uppercase tracking-tight mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lawn-green font-semibold">{info.content}</p>
                    <p className="text-text-secondary text-sm mt-1">{info.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-lawn-green font-display uppercase tracking-widest text-sm mb-4">
                Send a Message
              </span>
              <h2 className="heading-secondary mb-6">
                We&apos;d Love to <span className="text-lawn-green">Hear</span> From You
              </h2>
              <div className="accent-line mb-8" />

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-lawn-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          className={`form-input ${errors.name ? 'border-patriot-red' : ''}`}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="text-patriot-red text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={`form-input ${errors.phone ? 'border-patriot-red' : ''}`}
                          placeholder="(864) 000-0000"
                        />
                        {errors.phone && (
                          <p className="text-patriot-red text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`form-input ${errors.email ? 'border-patriot-red' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-patriot-red text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        {...register('subject')}
                        className={`form-input ${errors.subject ? 'border-patriot-red' : ''}`}
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-patriot-red text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={5}
                        className={`form-input resize-none ${errors.message ? 'border-patriot-red' : ''}`}
                        placeholder="Tell us how we can help..."
                      />
                      {errors.message && (
                        <p className="text-patriot-red text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-lawn-green font-display uppercase tracking-widest text-sm mb-4">
                Find Us
              </span>
              <h2 className="heading-secondary mb-6">
                Our <span className="text-lawn-green">Location</span>
              </h2>
              <div className="accent-line mb-8" />

              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-8 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104872.59374982098!2d-82.7483771!3d34.5034394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88585e3d2ab1b4db%3A0xadb63e84be723e0c!2sAnderson%2C%20SC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mission Lawn Care Location"
                />
              </div>

              {/* Quick Call Card */}
              <div className="bg-lawn-green rounded-2xl p-8 text-white">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-white/90 mb-6 font-body">
                  Give us a call for immediate assistance. We&apos;re happy to answer 
                  any questions and provide a free estimate over the phone.
                </p>
                <a 
                  href="tel:8649406434"
                  className="btn-secondary inline-flex items-center gap-3 bg-patriot-red hover:bg-patriot-red-dark"
                >
                  <Phone size={22} />
                  Call (864) 940-6434
                </a>
              </div>

              {/* Google Business Link */}
              <div className="mt-6">
                <a
                  href="https://maps.app.goo.gl/t7SG8NmSsDhKsago6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lawn-green hover:text-lawn-green-dark transition-colors font-semibold group"
                >
                  <MapPin size={20} />
                  <span>View on Google Maps</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-secondary mb-4">
              Service <span className="text-lawn-green">Areas</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-text-secondary text-lg max-w-3xl mx-auto font-body">
              Proudly serving Anderson, SC and the greater Upstate region with professional lawn care services.
              We cover all surrounding communities within a 30-mile radius of Anderson.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {serviceAreas.map((area, index) => (
              <div
                key={area.name}
                className={`rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg ${
                  area.isPrimary
                    ? 'bg-lawn-green/10 border-2 border-lawn-green'
                    : 'bg-gray-50 border border-gray-200 hover:border-lawn-green/50'
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
        </div>
      </section>
    </>
  );
}
