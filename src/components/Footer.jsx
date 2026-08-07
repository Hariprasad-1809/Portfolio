import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * Solid minimal footer with pt-12 max top padding and scroll-to-top feature.
 */
const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#121212] pt-12 pb-10 px-5 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* Monospace Logo */}
        <Link
          to="/"
          className="font-mono font-bold text-base text-black dark:text-white tracking-wider hover:text-[#E63946] transition-colors"
        >
          [HARIPRASAD_H]
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/Hariprasad-1809"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg border border-black/10 dark:border-white/10 hover:text-[#E63946] hover:border-[#E63946] transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hariprasad-h"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg border border-black/10 dark:border-white/10 hover:text-[#E63946] hover:border-[#E63946] transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="http://x.com/hariprasadh1809"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="p-2.5 rounded-lg border border-black/10 dark:border-white/10 hover:text-[#E63946] hover:border-[#E63946] transition-colors"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-md pt-4 border-t border-black/5 dark:border-white/5 text-xs font-mono text-gray-500 gap-2">
          <span>&copy; {new Date().getFullYear()} HARIPRASAD H. ALL RIGHTS RESERVED.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[#E63946] transition-colors flex items-center gap-1"
          >
            TOP <FaArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
