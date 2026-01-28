'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, Phone, CheckCircle, Loader2 } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  address: z.string().min(5, 'Please enter your address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const services = [
  'Lawn Mowing',
  'Edging & Trimming',
  'Leaf Removal',
  'Seasonal Cleanup',
  'Full Service Package',
];

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="section-padding bg-gradient-to-br from-lawn-green to-lawn-green-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-patriot-red/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-white/80 font-display uppercase tracking-widest text-sm mb-4">
              Ready to Get Started?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
              Get Your <span className="text-patriot-red">Free</span> Quote
            </h2>
            <p className="text-white/90 text-lg mb-8 font-body leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours with a 
              free, no-obligation estimate. Or give us a call for immediate assistance!
            </p>

            {/* Phone CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
                Prefer to talk?
              </p>
              <a 
                href="tel:8649406434"
                className="flex items-center gap-4 text-white hover:text-patriot-red transition-colors group"
              >
                <div className="w-14 h-14 bg-patriot-red rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">(864) 940-6434</p>
                  <p className="text-white/60 text-sm">Available Mon-Sat</p>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['Free Estimates', 'No Contracts', 'Veteran Owned'].map((badge) => (
                <span 
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                >
                  <CheckCircle size={16} className="text-patriot-red" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
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
                    Thank You!
                  </h3>
                  <p className="text-text-secondary">
                    We&apos;ve received your request and will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
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

                    {/* Phone */}
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

                  {/* Email */}
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

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="form-label">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      {...register('address')}
                      className={`form-input ${errors.address ? 'border-patriot-red' : ''}`}
                      placeholder="123 Main St, Anderson, SC"
                    />
                    {errors.address && (
                      <p className="text-patriot-red text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="form-label">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`form-input ${errors.service ? 'border-patriot-red' : ''}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-patriot-red text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="form-label">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Tell us about your lawn..."
                    />
                  </div>

                  {/* Submit Button */}
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
                        Request Free Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
