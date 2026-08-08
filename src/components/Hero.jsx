import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

/**
 * Text-only centered Hero component with Space Mono typography, exact bio,
 * crimson role tag, rounded pill CTAs, pb-12 bottom spacing, and staggered Framer Motion animation.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-5 sm:px-8 relative text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6"
      >
        {/* Name Header */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-black dark:text-white"
        >
          HARIPRASAD H
        </motion.h1>

        {/* Role Tag in Crimson #E63946 */}
        <motion.div variants={itemVariants}>
          <span className="font-mono text-base md:text-lg font-bold text-[#E63946] tracking-wide">
            Full-Stack & AI Engineer
          </span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 font-mono text-sm md:text-base leading-relaxed text-center"
        >
        Computer Science Engineering student with strong skills in Python, Java, SQL, and full-stack web development. Experienced in
        building scalable applications using React, FastAPI, and PostgreSQL, developing REST APIs and implementing authentication
        systems. Hands-on experience in Generative AI, Retrieval-Augmented Generation (RAG), LangChain, vector databases,
        and semantic search for AI-powered applications. Experienced in developing and deploying full-stack and AI-driven solutions with
        responsive user interfaces and cloud technologies. Strong foundation in Data Structures and Algorithms, Object-Oriented
        Programming, and problem solving, seeking a Software Development / AI Engineering Internship to build impactful and
        scalable solutions        </motion.p>

        {/* Centered CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={scrollToProjects}
            className="bg-[#E63946] hover:bg-[#d62b38] text-white font-mono font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-100"
          >
            View Projects
          </button>

          <Link to="/contact">
            <button className="border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white font-mono font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-100">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bouncing Scroll Down Chevron Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gray-400 hover:text-[#E63946] transition-colors p-2"
        >
          <FaChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
