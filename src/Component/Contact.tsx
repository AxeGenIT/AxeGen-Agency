// app/page.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CollaborationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully! We\'ll be in touch soon.' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          projectType: '',
          details: ''
        });
      } else {
        setSubmitStatus({ success: false, message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = () => {
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative">
      {/* Calendly Popup */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl w-full max-w-2xl h-[80vh] relative">
            <button 
              onClick={closeCalendly}
              className="absolute top-4 right-4 text-slate-300 hover:text-white z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full w-full">
              <iframe 
                src="https://calendly.com/axegenit/30min" 
                className="w-full h-full rounded-2xl"
                frameBorder="0"
                title="Schedule a Meeting"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="py-12 px-4 max-w-7xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to <span className="text-cyan-400">Collaborate</span>?
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss your project and create something extraordinary together
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Start Your Project</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select project type</option>
                  <option value="website">Website</option>
                  <option value="app">Mobile App</option>
                  <option value="cms">CMS Development</option>
                  <option value="marketing">Marketing Campaign</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Project Details</label>
                <textarea 
                  name="details"
                  placeholder="Tell us about your vision, goals, and requirements..."
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              {submitStatus && (
                <div className={`mt-4 p-3 rounded-lg text-center ${submitStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Right Column - Info & Contact */}
          <div className="space-y-8">
            {/* Why Partner With Axegen */}
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Why Partner With Axegen?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-900/50 p-3 rounded-lg mr-4">
                    <span className="text-cyan-400 font-bold text-xl">5+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Years of Excellence</h3>
                    <p className="text-slate-300">Proven track record in delivering high-impact digital solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-900/50 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Modern Technology Stack</h3>
                    <p className="text-slate-300">Latest frameworks and tools for optimal performance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-900/50 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">End-to-End Solutions</h3>
                    <p className="text-slate-300">From concept to launch and beyond</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Prefer Direct Contact */}
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Prefer Direct Contact?</h2>
              <p className="text-slate-300 mb-6">Let's schedule a call to discuss your project in detail</p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-cyan-700/30 to-blue-700/30 p-4 rounded-xl border border-cyan-500/30">
                    <div className="flex items-center">
                      <div className="bg-cyan-600/20 p-3 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Schedule a Call</h3>
                        <p className="text-slate-300 text-sm">Available 9AM-5PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  className="px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendly}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="fixed top-1/3 left-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl -z-10"></div>
      
      {/* Footer */}
    </div>
  );
};

export default CollaborationPage;