import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHandsHelping, FaCalendarAlt } from 'react-icons/fa';

const educationData = [
  {
    institution: 'Sri Sairam Engineering College',
    degree: 'Bachelor of Engineering (B.E.)',
    department: 'Computer Science and Engineering (Cyber Security)',
    period: '2024 – 2028',
    points: [
      'Currently pursuing a Bachelor\'s degree in Computer Science & Engineering specializing in Cyber Security.',
      'Building strong foundations in Data Structures & Algorithms, DBMS, Operating Systems, Networks, and Software Engineering.',
      'Developing scalable full-stack web applications using React, FastAPI, Python, JavaScript, and SQL.',
      'Experienced in building Retrieval-Augmented Generation (RAG) applications and REST APIs.'
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
      'Collaborating with the engineering team to integrate REST APIs.',
      'Improving rendering performance and ensuring cross-device compatibility.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Sri Sairam Techno Incubation Center',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Developed a fully functional e-commerce website as part of an incubation team project.',
      'Designed and implemented responsive UI components using HTML, CSS, JavaScript, and React.',
      'Focused on frontend development including layout design, user interaction, and performance.',
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
      'Contributed to event coordination and smooth execution of technical workshops.'
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
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section-padding">
      {/* Header with mb-8 md:mb-10 */}
      <div className="mb-8 md:mb-10 border-b border-black/10 dark:border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-black dark:text-white uppercase tracking-tight">
            / Experience_&_Education
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
            Academic timeline, engineering internships, and volunteer leadership.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-1.5 ${
              activeTab === 'experience'
                ? 'bg-[#E63946] text-white border-[#E63946] font-bold'
                : 'border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white'
            }`}
          >
            <FaBriefcase className="w-3 h-3" /> Internships
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-1.5 ${
              activeTab === 'education'
                ? 'bg-[#E63946] text-white border-[#E63946] font-bold'
                : 'border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white'
            }`}
          >
            <FaGraduationCap className="w-3.5 h-3.5" /> Education
          </button>
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-1.5 ${
              activeTab === 'volunteer'
                ? 'bg-[#E63946] text-white border-[#E63946] font-bold'
                : 'border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white'
            }`}
          >
            <FaHandsHelping className="w-3 h-3" /> Volunteer
          </button>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="max-w-4xl mx-auto space-y-6">
        {activeTab === 'experience' &&
          experiences.map((exp, index) => (
            <TimelineCard
              key={exp.role + exp.company}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              points={exp.points}
              index={index}
            />
          ))}

        {activeTab === 'education' &&
          educationData.map((edu, index) => (
            <TimelineCard
              key={edu.degree}
              title={edu.degree}
              subtitle={edu.institution}
              extra={edu.department}
              period={edu.period}
              points={edu.points}
              index={index}
            />
          ))}

        {activeTab === 'volunteer' &&
          volunteerExperiences.map((vol, index) => (
            <TimelineCard
              key={vol.role}
              title={vol.role}
              subtitle={vol.company}
              period={vol.period}
              points={vol.points}
              index={index}
            />
          ))}
      </div>
    </section>
  );
};

const TimelineCard = ({ title, subtitle, extra, period, points, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
      className="card-minimal p-5 md:p-7 relative border-l-4 border-l-[#E63946]"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-xl font-mono font-bold text-black dark:text-white">
            {title}
          </h3>
          <p className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>
          {extra && (
            <p className="text-xs font-mono text-[#E63946] mt-0.5">
              {extra}
            </p>
          )}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded border border-black/10 dark:border-white/10 w-fit text-gray-700 dark:text-gray-300">
          <FaCalendarAlt className="w-3 h-3 text-[#E63946]" /> {period}
        </span>
      </div>

      <div className="w-full h-px bg-black/5 dark:bg-white/5 my-3" />

      <ul className="space-y-2">
        {points.map((point) => (
          <li key={point} className="text-xs sm:text-sm font-mono leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
            <span className="text-[#E63946] font-bold">&gt;</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default Experience;
