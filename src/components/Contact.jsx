import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

/**
 * Contact section with split layout: info and form.
 * Form submissions are sent via EmailJS.
 */
const Contact = () => {
  // Separate states for contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  // Handle form submission and send email via EmailJS
  const sendEmail = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Field validations
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    // Validate email format using standard regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!message.trim()) {
      alert("Message is required");
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      // Send email using EmailJS with parameters mapping
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      // Reset all fields after successful dispatch
      setName('');
      setEmail('');
      setMessage('');
      
      // Clear success status message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error)  {
      console.log("EmailJS Error:", error);
      console.log("Status:", error.status);
      console.log("Text:", error.text);
      console.log("Full Error:", JSON.stringify(error, null, 2));
      setTimeout(() => setStatus(''), 5000);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 font-heading tracking-tight text-black dark:text-white">Let's talk about everything!</h3>
              <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed mb-8">
                Don't like forms? Send me an email or find me on social media. 
                I'm always open to discussing new projects, creative ideas or 
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-soft">
                  <FaEnvelope className="text-primary group-hover:text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-gray-900 dark:text-gray-300">Email</p>
                  <a href="mailto:hariprasadh1809@gmail.com" className="text-lg font-bold text-black dark:text-white hover:text-primary transition-colors duration-300">
                    hariprasadh1809@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-soft">
                  <FaLinkedin className="text-primary group-hover:text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-gray-900 dark:text-gray-300">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/hariprasad-h" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-black dark:text-white hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/hariprasad-h
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-soft">
                  <FaGithub className="text-primary group-hover:text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest font-bold text-gray-900 dark:text-gray-300">GitHub</p>
                  <a 
                    href="https://github.com/Hariprasad-1809" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-black dark:text-white hover:text-primary transition-colors duration-300"
                  >
                    github.com/Hariprasad-1809
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-10"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-100 px-4 py-3 rounded-lg">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 px-4 py-3 rounded-lg">
                  Failed to send message. Please try again.
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-900 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 text-charcoal dark:text-offwhite placeholder:text-muted-gray/70 caret-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-900 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 text-charcoal dark:text-offwhite placeholder:text-muted-gray/70 caret-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-900 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  placeholder="Tell me about your project"
                  className="w-full bg-white dark:bg-white border border-primary/10 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 caret-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
