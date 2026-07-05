import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      className="fixed top-6 right-6 z-50"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-3 rounded-full px-3 py-2 backdrop-blur bg-white/60 dark:bg-black/35 border border-black/5 dark:border-white/6">
        <div className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `px-3 py-1 text-sm font-medium rounded-full transition-colors ${isActive ? 'bg-accent text-white' : 'text-muted-gray hover:bg-slate-100/60'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full"
          >
            {isDarkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>

          <a href="/resume.pdf" download className="btn-primary ml-1 text-sm">Resume</a>

          <button className="sm:hidden p-2 ml-1" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="sm:hidden fixed top-16 right-4 z-40 bg-white/95 dark:bg-black/90 rounded-lg shadow-lg p-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded text-sm font-medium">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
