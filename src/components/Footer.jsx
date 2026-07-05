import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * Minimal Footer with social links and scroll-to-top functionality.
 */
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm text-gray-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold font-heading mb-2 tracking-tight text-black dark:text-white">Hariprasad H</p>
          <p className="text-sm text-gray-900 dark:text-gray-300">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Hariprasad-1809" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="text-2xl w-11 h-11 rounded-xl grid place-items-center bg-primary/5 hover:bg-primary/15 hover:text-primary transition-all duration-300 text-gray-900 dark:text-gray-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/hariprasad-h/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="text-2xl w-11 h-11 rounded-xl grid place-items-center bg-primary/5 hover:bg-primary/15 hover:text-primary transition-all duration-300 text-gray-900 dark:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="http://x.com/hariprasadh1809" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
            className="text-2xl w-11 h-11 rounded-xl grid place-items-center bg-primary/5 hover:bg-primary/15 hover:text-primary transition-all duration-300 text-gray-900 dark:text-gray-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Scroll Top */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
