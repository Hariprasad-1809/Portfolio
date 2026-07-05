import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

/**
 * Projects grid with staggered animations and interactive cards.
 */
const Projects = () => {
  const [openId, setOpenId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === openId) ?? null,
    [openId]
  );

  const openProject = useCallback((projectId) => {
    setOpenId(projectId);
  }, []);

  const closeProject = useCallback(() => {
    setOpenId(null);
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <motion.h2 className="text-[2rem] md:text-[3rem] font-heading font-bold mb-2 text-black dark:text-white">Projects</motion.h2>
          <div className="thin-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>

        {mounted && createPortal(
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                key={selectedProject.id}
                project={selectedProject}
                onClose={closeProject}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

const ProjectCard = memo(function ProjectCard({ project, index, onOpen }) {
  const handleOpen = useCallback(() => {
    onOpen(project.id);
  }, [onOpen, project.id]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={handleOpen}
      className="card-min group cursor-pointer will-change-transform flex flex-col h-[490px] p-6 bg-white/40 dark:bg-charcoal border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md hover:border-black/15 dark:hover:border-white/20 transition-all duration-300"
    >
      {/* Title */}
      <h3 className="text-xl font-bold mb-2.5 tracking-tight text-black dark:text-white h-7 overflow-hidden line-clamp-1">
        {project.title}
      </h3>
      
      {/* Description */}
      <p className="text-xs text-gray-900 dark:text-gray-300 mb-4 h-[54px] overflow-hidden line-clamp-3 leading-relaxed">
        {project.shortDescription}
      </p>
      
      {/* Image */}
      <div className="w-full h-[180px] overflow-hidden rounded mb-4 border border-black/5 dark:border-white/5 shadow-sm shrink-0">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Tech Stack */}
      <div className="h-[48px] overflow-hidden mb-4 shrink-0">
        <div className="flex gap-1.5 flex-wrap">
          {project.tech.slice(0, 6).map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 border rounded-full text-gray-900 dark:text-gray-300 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
              {tech}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="text-[10px] px-2 py-0.5 border rounded-full text-[#E63946] border-[#E63946]/20 bg-[#E63946]/5 font-bold shrink-0">
              +{project.tech.length - 6} More
            </span>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-auto shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-3 border border-black/15 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 rounded-full text-xs font-bold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-1.5"
          onClick={(event) => event.stopPropagation()}
        >
          <FaGithub className="text-sm" /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-3 bg-[#E63946] text-white hover:bg-[#d62b38] hover:opacity-95 rounded-full text-xs font-bold transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5"
          onClick={(event) => event.stopPropagation()}
        >
          <FaExternalLinkAlt className="text-[10px]" /> Live
        </a>
      </div>
    </motion.article>
  );
});

const ProjectModal = memo(function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/35 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="w-full max-w-5xl rounded-3xl bg-white dark:bg-charcoal border border-black/10 dark:border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden will-change-transform relative"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-gray-700 dark:text-gray-300 transition-colors shadow-sm"
          aria-label="Close project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Left Column: Image */}
            <div className="w-full flex items-center">
              <img
                src={project.image}
                alt={project.title}
                loading="eager"
                decoding="async"
                className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-2xl border border-black/5 dark:border-white/5 shadow-md"
              />
            </div>

            {/* Right Column: Detailed Contents */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="pr-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-black dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-900 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 border rounded-full text-gray-900 dark:text-gray-300 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 text-center py-3 px-6 border-2 border-black/15 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 rounded-full text-sm font-bold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaGithub className="text-lg" /> View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 text-center py-3 px-6 bg-[#E63946] text-white hover:bg-[#d62b38] hover:opacity-95 rounded-full text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default Projects;
