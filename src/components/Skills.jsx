import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

/**
 * Premium Skills Grid with dynamic fit-content technology chips, no text truncation (whitespace-nowrap),
 * flex-wrap left-to-right alignment, equal card heights, and Framer Motion staggered entrance.
 */
const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      {/* Section Header */}
      <div className="mb-8 md:mb-10 border-b border-black/10 dark:border-white/10 pb-4">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-black dark:text-white uppercase tracking-tight">
          / Technical_Skills
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
          Engineered competencies across languages, frontend, backend, AI/GenAI, databases, cloud, and tools.
        </p>
      </div>

      {/* Grid: 4 cols on desktop (lg), 2 on tablet (md), 1 on mobile with items-stretch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="bg-gray-50/90 dark:bg-[#161616] border border-black/10 dark:border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between h-full shadow-sm hover:shadow-md hover:border-[#E63946]/50 transition-all duration-300 hover:scale-[1.01] group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2.5">
                <span className="text-xl shrink-0">{category.iconName}</span>
                <h3 className="text-lg font-mono font-bold text-black dark:text-white group-hover:text-[#E63946] transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Thin Subtle Divider */}
              <div className="border-b border-black/10 dark:border-white/10 my-3.5" />

              {/* Flex-Wrap Dynamic Content-Sized Technology Chips (No Truncation) */}
              <div className="flex flex-wrap gap-2.5 flex-1 content-start">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="w-auto min-w-[110px] px-3.5 py-2 rounded-lg border border-black/10 dark:border-white/10 flex items-center gap-2 hover:border-[#E63946]/60 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-mono font-medium whitespace-nowrap"
                    >
                      <SkillIcon className="w-4 h-4 text-[#E63946] shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
