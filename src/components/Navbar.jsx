import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Contact', to: '/contact' },
];

/**
 * Solid fixed top navbar with Space Mono typography and theme toggle.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        
        {/* Brand Logo / Monospace Name */}
        <Link
          to="/"
          className="font-mono font-bold text-lg text-black dark:text-white tracking-tight hover:text-[#E63946] dark:hover:text-[#E63946] transition-colors"
          onClick={() => setOpen(false)}
        >
          [HARIPRASAD_H]
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`text-sm font-mono transition-colors ${
                  isActive
                    ? 'text-[#E63946] font-bold underline underline-offset-8 decoration-2'
                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 transition-colors"
          >
            {isDarkMode ? <HiSun className="w-5 h-5 text-amber-400" /> : <HiMoon className="w-5 h-5 text-slate-800" />}
          </button>

          {/* Desktop Resume Download CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex bg-[#E63946] hover:bg-[#d62b38] text-white font-mono font-bold text-xs px-4 py-2 rounded-lg transition-all hover:scale-[1.02] active:scale-100 flex items-center gap-1.5"
          >
            <HiDownload className="w-4 h-4" /> RESUME
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-black dark:text-white border border-black/10 dark:border-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-[#121212] border-b border-black/10 dark:border-white/10 px-5 py-4 space-y-3"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-mono font-medium border-b border-black/5 dark:border-white/5 ${
                    isActive ? 'text-[#E63946] font-bold' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                &gt; {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download
                className="block w-full text-center bg-[#E63946] hover:bg-[#d62b38] text-white font-mono font-bold text-xs py-3 rounded-lg"
                onClick={() => setOpen(false)}
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
