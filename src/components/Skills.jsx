import React from 'react';
import { skillsData } from '../data/skills';

/**
 * Minimal Skills section with categorized cards and icons.
 */
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple view of the tools, languages, and strengths I use most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-6"
              >
                <div className="mb-5 flex items-center gap-2 text-black dark:text-white">
                  <IconComponent className="h-5 w-5 text-gray-900 dark:text-white" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                    <li key={skill.name} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <SkillIcon className="h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
                      <span>{skill.name}</span>
                    </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
