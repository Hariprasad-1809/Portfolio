import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/projects';

/**
 * Projects Section with 3-column grid, mb-8 md:mb-10 heading gap, gap-6 lg:gap-8 grid gap, and right slide-over drawer.
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding">
      {/* Header with reduced bottom margin mb-8 md:mb-10 */}
      <div className="mb-8 md:mb-10 border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-black dark:text-white uppercase tracking-tight">
          / Projects
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
          Featured full-stack platforms, machine learning tools, and RAG search systems.
        </p>
      </div>

      {/* 3-Column Desktop Grid with gap-6 lg:gap-8 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="card-minimal p-5 md:p-7 flex flex-col justify-between cursor-pointer hover:border-black/30 dark:hover:border-white/30 group"
          >
            <div>
              {/* Card Title */}
              <h3 className="text-xl font-mono font-bold text-black dark:text-white mb-2 group-hover:text-[#E63946] transition-colors line-clamp-1">
                {project.title}
              </h3>

              {/* 2-line Description */}
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tech Stack Chips (Max 4 Visible) */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#E63946]/30 text-[#E63946] font-bold">
                    +{project.tech.length - 4} More
                  </span>
                )}
              </div>
            </div>

            {/* Single Action Button */}
            <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-black dark:text-white group-hover:text-[#E63946] flex items-center gap-1">
                View Details <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[10px] font-mono text-gray-400">#0{project.id}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Slide-Over Drawer from Right */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Drawer Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
              onClick={() => setSelectedProject(null)}
            />

            {/* Slide-Over Right Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white dark:bg-[#121212] border-l border-black/10 dark:border-white/10 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Drawer Header with Close Icon */}
                <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                  <span className="text-xs font-mono font-bold text-[#E63946]">
                    PROJECT_SPECIFICATION // #0{selectedProject.id}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 transition-colors"
                    aria-label="Close Drawer"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Image Preview */}
                <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-black dark:text-white">
                  {selectedProject.title}
                </h3>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-3 text-gray-500">
                    Tech Stack & Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100 flex items-center gap-1.5"
                      >
                        <FaCheckCircle className="w-3 h-3 text-[#E63946]" /> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions: Code & Live Demo */}
              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center gap-3 mt-8">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline text-xs py-3"
                >
                  <FaGithub className="w-4 h-4" /> CODE
                </a>

                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-crimson text-xs py-3"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" /> LIVE DEMO
                  </a>
                ) : (
                  <span
                    className="flex-1 border border-[#E63946]/30 text-[#E63946] font-mono font-bold text-xs py-3 rounded-lg text-center cursor-not-allowed select-none bg-[#E63946]/5"
                  >
                    Deployment in Progress
                  </span>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
