import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

/**
 * Minimal Contact form component with mb-8 md:mb-10 heading gap, p-5 md:p-7 card padding, shake validation, and EmailJS integration.
 */
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success' or 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const validate = () => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (!email.trim()) {
      return "Email address is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    if (!message.trim()) {
      return "Message content is required";
    }
    return null;
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setErrorMsg(validationError);
      setStatus('error');
      triggerShake();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS environment variables are missing (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).");
      setErrorMsg("Email service is currently unconfigured. Please send an email directly to hariprasadh1809@gmail.com.");
      setStatus('error');
      triggerShake();
      return;
    }

    setLoading(true);
    setStatus('');
    setErrorMsg('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Hariprasad H',
        },
        publicKey
      );

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMsg("Failed to dispatch message. Please verify your EmailJS keys or email directly.");
      setStatus('error');
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      {/* Header with mb-8 md:mb-10 */}
      <div className="mb-8 md:mb-10 border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-black dark:text-white uppercase tracking-tight">
          / Contact
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
          Get in touch for internships, full-time engineering roles, or project proposals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Contact Vectors (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card-minimal p-5 md:p-7 space-y-3">
            <h3 className="text-xl font-mono font-bold text-black dark:text-white">
              Direct Communication
            </h3>
            <p className="text-xs font-mono text-gray-600 dark:text-gray-400 leading-relaxed">
              I am actively looking for software development and AI engineering opportunities. Feel free to reach out directly.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:hariprasadh1809@gmail.com"
              className="card-minimal p-4 flex items-center gap-4 hover:border-[#E63946] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 text-[#E63946]">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono uppercase text-gray-400">Email</p>
                <p className="text-xs font-mono font-bold text-black dark:text-white group-hover:text-[#E63946] transition-colors truncate">
                  hariprasadh1809@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hariprasad-h"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 flex items-center gap-4 hover:border-[#E63946] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 text-[#E63946]">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono uppercase text-gray-400">LinkedIn</p>
                <p className="text-xs font-mono font-bold text-black dark:text-white group-hover:text-[#E63946] transition-colors truncate">
                  linkedin.com/in/hariprasad-h
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Hariprasad-1809"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal p-4 flex items-center gap-4 hover:border-[#E63946] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 text-[#E63946]">
                <FaGithub className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono uppercase text-gray-400">GitHub</p>
                <p className="text-xs font-mono font-bold text-black dark:text-white group-hover:text-[#E63946] transition-colors truncate">
                  github.com/Hariprasad-1809
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={sendEmail}
            className={`card-minimal p-5 md:p-7 space-y-4 ${isShaking ? 'animate-shake' : ''}`}
          >
            {/* Inline Error Message */}
            <AnimatePresence>
              {status === 'error' && errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2"
                >
                  <FaExclamationCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {/* Typed / Animated Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2.5"
                >
                  <FaCheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>&gt; TRANSMISSION_RECEIVED: Message sent successfully! I will get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-mono font-bold text-black dark:text-white">
                NAME *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (status === 'error') setStatus('');
                }}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/10 text-xs font-mono text-black dark:text-white placeholder:text-gray-400 outline-none focus:border-[#E63946] transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-mono font-bold text-black dark:text-white">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('');
                }}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/10 text-xs font-mono text-black dark:text-white placeholder:text-gray-400 outline-none focus:border-[#E63946] transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-mono font-bold text-black dark:text-white">
                MESSAGE *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (status === 'error') setStatus('');
                }}
                rows="4"
                placeholder="Project details or message content..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/10 text-xs font-mono text-black dark:text-white placeholder:text-gray-400 outline-none focus:border-[#E63946] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-crimson w-full py-3.5 text-xs font-mono font-bold disabled:opacity-50"
            >
              {loading ? 'SENDING...' : (
                <>
                  <FaPaperPlane className="w-3.5 h-3.5" /> SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
