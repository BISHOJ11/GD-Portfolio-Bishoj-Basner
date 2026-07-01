import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Trash2, ShieldAlert, Sparkles, AlertCircle, Linkedin, Instagram, Inbox, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showInbox, setShowInbox] = useState(false);

  // Load any submissions on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bishoj_portfolio_messages');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading submissions', e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Perform validation
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setError('Please select or write a subject.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setError('Message must be at least 10 characters long.');
      return;
    }

    // Success flow - save submission
    const newSubmission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString(),
    };

    const updatedSubmissions = [newSubmission, ...submissions];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('bishoj_portfolio_messages', JSON.stringify(updatedSubmissions));

    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Hide success after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter((s) => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('bishoj_portfolio_messages', JSON.stringify(updated));
  };

  const clearAllSubmissions = () => {
    setSubmissions([]);
    localStorage.removeItem('bishoj_portfolio_messages');
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-main overflow-hidden transition-colors duration-300">
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" /> Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-text-main tracking-tight leading-none transition-colors duration-300" id="contact-headline">
            Let’s Create Something <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-text-muted font-sans text-sm sm:text-base transition-colors duration-300">
            Have an upcoming brand launch, a print poster project, or want to discuss a full-time creative collaboration? Reach out below.
          </p>
        </div>

        {/* Form & Info Two-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Social links */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <div className="p-6 rounded-2xl bg-card-bg border border-border-main backdrop-blur-md space-y-6 transition-colors duration-300 shadow-sm">
              <h3 className="text-xl font-sans font-bold text-text-main transition-colors duration-300">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider transition-colors duration-300">Email Address</span>
                    <a href="mailto:basnet4life@gmail.com" className="text-sm font-semibold text-text-main hover:text-blue-500 transition-colors duration-300">
                      basnet4life@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider transition-colors duration-300">Based In</span>
                    <span className="text-sm font-semibold text-text-main transition-colors duration-300">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Cards */}
            <div className="p-6 rounded-2xl bg-card-bg border border-border-main backdrop-blur-md space-y-4 transition-colors duration-300 shadow-sm">
              <h4 className="text-sm font-mono font-semibold text-text-muted uppercase tracking-widest transition-colors duration-300">
                Creative Communities
              </h4>
              <div className="grid grid-cols-2 gap-3" id="social-media-container">
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-pill-bg border border-border-main hover:border-blue-500/30 hover:bg-blue-500/10 text-text-muted hover:text-blue-500 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-blue-500" /> Behance
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-pill-bg border border-border-main hover:border-pink-500/30 hover:bg-pink-500/10 text-text-muted hover:text-pink-500 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-pink-500" /> Instagram
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-pill-bg border border-border-main hover:border-blue-600/30 hover:bg-blue-600/10 text-text-muted hover:text-blue-500 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-pill-bg border border-border-main hover:border-orange-500/30 hover:bg-orange-500/10 text-text-muted hover:text-orange-500 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-orange-500" /> Dribbble
                </a>
              </div>
            </div>

            {/* Simulated Inbox Status Pill (allows testing form submissions) */}
            <button
              onClick={() => setShowInbox(!showInbox)}
              className={`w-full py-3 px-4 rounded-xl flex items-center justify-between text-xs font-mono font-medium border cursor-pointer transition-all duration-300 ${
                submissions.length > 0
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20'
                  : 'bg-pill-bg border-border-main text-text-muted hover:text-text-main'
              }`}
            >
              <span className="flex items-center gap-2">
                <Inbox className="w-4 h-4" />
                Recruiter Inbox Test
              </span>
              <span className="px-2 py-0.5 rounded-full bg-text-main/10 text-[10px] text-text-main">
                {submissions.length} Msg
              </span>
            </button>
          </div>

          {/* Column 2: Elegant Contact Form */}
          <div className="lg:col-span-8 bg-card-bg border border-border-main rounded-3xl p-6 sm:p-8 backdrop-blur-md relative text-left transition-colors duration-300 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              
              {/* Form Row: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-text-muted uppercase tracking-wider transition-colors duration-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Bishoj Basnet"
                    className="w-full px-4 py-3.5 bg-bg-alt border border-border-main rounded-xl text-text-main placeholder-text-muted/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm font-sans"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-text-muted uppercase tracking-wider transition-colors duration-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3.5 bg-bg-alt border border-border-main rounded-xl text-text-main placeholder-text-muted/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm font-sans"
                    required
                  />
                </div>
              </div>

              {/* Subject Select */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono font-bold text-text-muted uppercase tracking-wider transition-colors duration-300">
                  Subject / Topic *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Brand Identity Overhaul, Print Poster, Design Hire"
                  className="w-full px-4 py-3.5 bg-bg-alt border border-border-main rounded-xl text-text-main placeholder-text-muted/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm font-sans"
                  required
                />
              </div>

              {/* Message Block */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono font-bold text-text-muted uppercase tracking-wider transition-colors duration-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Bishoj! I saw your poster designs. I would love to hire you to build our new company identity..."
                  className="w-full px-4 py-3.5 bg-bg-alt border border-border-main rounded-xl text-text-main placeholder-text-muted/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm font-sans resize-none"
                  required
                />
              </div>

              {/* Notification Banner (Success/Error) */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <span className="font-bold block">Message Received Successfully!</span>
                      <span>Your mock message was recorded in the Recruiter Inbox below. Thanks for testing!</span>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center gap-3 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    <span className="font-medium">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

        {/* Recruiter Inbox Test Workspace (Fully interactive message logger) */}
        <AnimatePresence>
          {showInbox && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-card-bg border border-border-main rounded-3xl p-6 overflow-hidden transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-border-main pb-4 mb-6 gap-4 transition-colors duration-300">
                <div className="text-left">
                  <h3 className="text-lg font-sans font-bold text-text-main flex items-center gap-2 transition-colors duration-300">
                    <Inbox className="w-5 h-5 text-blue-500 animate-bounce" />
                    Recruiter Inbox Console
                  </h3>
                  <p className="text-xs text-text-muted transition-colors duration-300">
                    Your test submissions persist securely in browser localStorage.
                  </p>
                </div>
                {submissions.length > 0 && (
                  <button
                    onClick={clearAllSubmissions}
                    className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 font-mono text-xs hover:bg-rose-500/20 flex items-center gap-1.5 self-start cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" /> Clear All Inbox
                  </button>
                )}
              </div>

              {submissions.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <ShieldAlert className="w-10 h-10 text-text-muted opacity-40" />
                  <div>
                    <p className="text-sm font-semibold text-text-muted transition-colors duration-300">No submissions found</p>
                    <p className="text-xs text-text-muted/70 transition-colors duration-300">Submit the contact form above to test the visual message log!</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/5">
                  {submissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-4 rounded-xl bg-bg-alt border border-border-main text-left relative group hover:border-blue-500/25 transition-all duration-300"
                    >
                      <button
                        onClick={() => deleteSubmission(sub.id)}
                        className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-rose-500 hover:bg-pill-bg transition-colors"
                        aria-label="Delete message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4 space-y-1">
                          <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-mono">{sub.timestamp}</span>
                          <span className="block font-semibold text-text-main text-sm transition-colors duration-300">{sub.name}</span>
                          <span className="block text-xs text-text-muted break-all transition-colors duration-300">{sub.email}</span>
                        </div>
                        <div className="md:col-span-8 space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono">
                            <Sparkles className="w-3 h-3" /> {sub.subject}
                          </div>
                          <p className="text-xs text-text-main leading-relaxed font-sans mt-1 bg-pill-bg p-3 rounded-lg border border-border-main transition-colors duration-300">
                            {sub.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
