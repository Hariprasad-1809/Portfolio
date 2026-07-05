import { FaCode, FaGlobe, FaDatabase, FaUsers, FaTerminal, FaServer, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaLinux, FaHandshake, FaLightbulb, FaSyncAlt } from 'react-icons/fa';
import { SiC, SiTailwindcss, SiMysql, SiVscodium, SiVercel, SiNetlify, SiRender, SiVmware } from 'react-icons/si';

export const skillsData = [
  {
    title: "Coding & Languages",
    icon: FaCode,
    skills: [
      { name: "C", icon: SiC },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs }
    ]
  },
  {
    title: "Web Technologies",
    icon: FaGlobe,
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "React JS", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    title: "Database & Tools",
    icon: FaDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Linux", icon: FaLinux },
      { name: "GitHub", icon: FaGithub }
    ]
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    skills: [
      { name: "Teamwork", icon: FaUsers },
      { name: "Collaboration", icon: FaHandshake },
      { name: "Problem Solving", icon: FaLightbulb },
      { name: "Adaptability", icon: FaSyncAlt }
    ]
  },
  {
    title: "IDE & Tools",
    icon: FaTerminal,
    skills: [
      { name: "VS Code", icon: SiVscodium },
      { name: "Vmware", icon: SiVmware }
    ]
  },
  {
    title: "Deployment Platforms",
    icon: FaServer,
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender }
    ]
  }
];
