import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Sri Sairam Engineering College',
    degree: 'Bachelor of Engineering (B.E.)',
    department: 'Computer Science and Engineering (Cyber Security)',
    period: '2024 – 2028',
    points: [
      'Currently pursuing a Bachelor\'s degree in Computer Science and Engineering with a specialization in Cyber Security.',
      'Building strong foundations in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.',
      'Developing scalable full-stack web applications using React, FastAPI, Python, JavaScript, and SQL.',
      'Passionate about building AI agent-based and modern web applications, with a strong curiosity to explore emerging technologies and create impactful real-world software solutions.'
    ]
  }
];

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Detagenix Private Ltd',
    period: 'Present',
    points: [
      'Working on modern web development projects focusing on frontend technologies.',
      'Building responsive and user-friendly interfaces using React and Tailwind CSS.',
      'Collaborating with the team to develop scalable and maintainable web applications.',
      'Improving UI performance and ensuring cross-device compatibility.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Sri Sairam Techno Incubation Center',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Developed a fully functional e-commerce website as part of a team project.',
      'Designed and implemented responsive UI components using HTML, CSS, JavaScript, and React.',
      'Focus on frontend development including layout design, user interaction, and performance.',
      'Collaborated with team members to integrate frontend with backend systems.'
    ]
  }
];

const volunteerExperiences = [
  {
    role: 'IEEE Day Event Volunteer',
    company: 'Event Coordination',
    period: 'Volunteer Experience',
    points: [
      'Contributed to event coordination and smooth execution.'
    ]
  },
  {
    role: 'Literix Volunteer',
    company: 'Student Engagement Activities',
    period: 'Volunteer Experience',
    points: [
      'Assisted in organizing literary and student engagement activities.'
    ]
  },
  {
    role: 'Department Symposium Volunteer',
    company: 'Logistics & Event Management',
    period: 'Volunteer Experience',
    points: [
      'Supported logistics and event management.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-16 sm:pt-20 pb-16 px-5 sm:pb-20 sm:px-8 md:pb-20 md:px-8 lg:pb-24 lg:px-12 xl:px-24 bg-primary/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Education Section */}
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[3rem] font-extrabold mb-4 text-black dark:text-white"
          >
            Education
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl space-y-8 md:space-y-10 mb-20">
          {educationData.map((edu, index) => (
            <motion.article
              key={`${edu.degree}-${edu.institution}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 md:p-8 lg:p-9 transition-all duration-300"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-900 dark:text-gray-300 mb-2 font-mono">
                    01
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {edu.department}
                  </p>
                  <p className="mt-2 text-base md:text-lg font-medium text-gray-900 dark:text-gray-300">
                    {edu.institution}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-sm text-gray-900 dark:text-gray-300 bg-black/5 dark:bg-white/10">
                  {edu.period}
                </span>
              </div>

              <div className="thin-divider my-5 md:my-6" />

              <ul className="space-y-3">
                {edu.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-900 dark:text-gray-300">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Experience Section */}
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[3rem] font-extrabold mb-4 text-black dark:text-white"
          >
            My Experience
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl space-y-8 md:space-y-10 mb-20">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 md:p-8 lg:p-9 transition-all duration-300"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-900 dark:text-gray-300 mb-2 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-base md:text-lg font-medium text-gray-900 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-sm text-gray-900 dark:text-gray-300 bg-black/5 dark:bg-white/10">
                  {exp.period}
                </span>
              </div>

              <div className="thin-divider my-5 md:my-6" />

              <ul className="space-y-3">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-900 dark:text-gray-300">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Volunteer Experience Section */}
        <div className="mx-auto max-w-4xl mt-12 md:mt-14">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-extrabold mb-3 text-black dark:text-white">Volunteer <span className="text-primary">Experience</span></h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 md:space-y-10">
            {volunteerExperiences.map((exp, index) => (
              <motion.article
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 md:p-8 lg:p-9 transition-all duration-300"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-gray-900 dark:text-gray-300 mb-2 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="mt-2 text-base md:text-lg font-medium text-gray-900 dark:text-gray-300">
                      {exp.company}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-sm text-gray-900 dark:text-gray-300 bg-black/5 dark:bg-white/10">
                    {exp.period}
                  </span>
                </div>

                <div className="thin-divider my-5 md:my-6" />

                <ul className="space-y-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-900 dark:text-gray-300">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
