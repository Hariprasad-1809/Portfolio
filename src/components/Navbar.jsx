import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Contact', to: '/contact' },
];

/**
 * Responsive Navbar with glassmorphism, theme toggle, and smooth scrolling.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 right-0 sm:top-6 sm:right-6 sm:left-auto z-50 flex items-center justify-between sm:justify-start gap-3 px-5 py-4 sm:px-3 sm:py-2 backdrop-blur bg-white/80 dark:bg-charcoal/80 sm:bg-white/60 sm:dark:bg-black/35 border-b border-black/5 dark:border-white/5 sm:border sm:rounded-full w-full sm:w-auto"
      aria-label="Main navigation"
    >
      {/* Mobile Logo / Name */}
      <Link to="/" className="font-heading font-bold text-lg text-black dark:text-white sm:hidden tracking-tight" onClick={() => setOpen(false)}>
        Hariprasad H
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex items-center gap-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `px-3 py-1 text-sm font-medium rounded-full transition-colors ${isActive ? 'bg-accent text-white' : 'text-muted-gray hover:bg-slate-100/60 dark:hover:bg-white/5'}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Controls: Theme toggle, Resume, Menu hamburger */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          {isDarkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
        </button>

        {/* Desktop Resume button */}
        <a href="/resume.pdf" download className="hidden sm:inline-block btn-primary ml-1 text-sm">Resume</a>

        {/* Mobile Hamburger toggle */}
        <button 
          className="sm:hidden p-2 ml-1 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors" 
          onClick={() => setOpen(!open)} 
          aria-label="Open menu"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed top-[68px] left-4 right-4 z-40 bg-white/95 dark:bg-charcoal/95 border border-black/10 dark:border-white/10 rounded-2xl shadow-xl p-6 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `w-full text-center py-2.5 text-base font-medium rounded-xl transition-colors ${isActive ? 'bg-accent text-white' : 'text-gray-900 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="w-full border-t border-black/5 dark:border-white/5 my-1" />

              {/* Mobile Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="btn-primary w-full text-center py-3 text-sm font-bold shadow-md"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
