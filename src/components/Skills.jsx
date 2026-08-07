import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

/**
 * Skills section with p-5 md:p-7 card padding, mb-8 md:mb-10 heading gap, and interactive category hover focus.
 */
const Skills = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="skills" className="section-padding">
      {/* Header with mb-8 md:mb-10 */}
      <div className="mb-8 md:mb-10 border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-black dark:text-white uppercase tracking-tight">
          / Technical_Skills
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
          Languages, frameworks, databases, and deployment environments.
        </p>
      </div>

      {/* Grid of Interactive Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => {
          const CategoryIcon = category.icon;
          const isHovered = hoveredIdx === idx;
          const isDimmed = hoveredIdx !== null && !isHovered;

          return (
            <motion.div
              key={category.title}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`card-minimal p-5 md:p-7 flex flex-col justify-between transition-all duration-300 ${
                isDimmed ? 'opacity-40 filter grayscale-[50%]' : 'opacity-100'
              } ${isHovered ? 'border-[#E63946]' : ''}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className={`w-5 h-5 ${isHovered ? 'text-[#E63946]' : 'text-black dark:text-white'}`} />
                  <h3 className="text-lg font-mono font-bold text-black dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="w-full h-px bg-black/5 dark:bg-white/5 mb-4" />

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-2 rounded border border-black/5 dark:border-white/5 text-xs font-mono text-gray-800 dark:text-gray-200"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
                        <span className="truncate">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
