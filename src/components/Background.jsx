import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ambient background container with subtle grid mesh, soft radial glow Orbs, and noise texture.
 * Color system: Primary #2563EB, Secondary #06B6D4, Accent #7C3AED.
 */
const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-500">
      {/* Subtle Grid Pattern Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-30" />

      {/* Primary Blue Radial Light (Top Left) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-[140px]"
      />

      {/* Secondary Cyan Radial Light (Middle Right) */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/12 blur-[150px]"
      />

      {/* Accent Violet Radial Light (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/12 blur-[140px]"
      />

      {/* Tactile Soft Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='none'/><circle cx='2' cy='2' r='0.5' fill='%23888' fill-opacity='0.1'/></svg>")`
        }}
      />
    </div>
  );
};

export default Background;
