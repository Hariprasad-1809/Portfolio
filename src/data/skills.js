import { 
  FaPython, FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaPlug, FaFilePdf, FaEnvelope, FaBrain, FaTerminal, 
  FaSearch, FaVectorSquare, FaDatabase, FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { 
  SiC, SiGnubash, SiTailwindcss, SiVite, SiFastapi, SiJsonwebtokens, 
  SiLangchain, SiGooglegemini, SiPostgresql, SiMysql, 
  SiSupabase, SiFirebase, SiVercel, SiNetlify, SiRender, SiGithubpages, 
  SiRailway, SiVscodium, SiPostman, SiDocker 
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

export const skillsData = [
  {
    title: "Programming",
    iconName: "💻",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
      { name: "Bash", icon: SiGnubash }
    ]
  },
  {
    title: "Frontend",
    iconName: "🎨",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Responsive Design", icon: MdDevices }
    ]
  },
  {
    title: "Backend",
    iconName: "⚙️",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "API Integration", icon: FaPlug },
      { name: "PDF Processing", icon: FaFilePdf },
      { name: "Email Services", icon: FaEnvelope }
    ]
  },
  {
    title: "AI & GenAI",
    iconName: "🤖",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "RAG Systems", icon: FaBrain },
      { name: "Prompt Engineering", icon: FaTerminal },
      { name: "Semantic Search", icon: FaSearch },
      { name: "Vector Embeddings", icon: FaVectorSquare }
    ]
  },
  {
    title: "Databases",
    iconName: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "ChromaDB", icon: FaDatabase },
      { name: "pgvector", icon: FaDatabase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase }
    ]
  },
  {
    title: "Cloud & Deployment",
    iconName: "☁️",
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
      { name: "Supabase", icon: SiSupabase },
      { name: "GitHub Pages", icon: SiGithubpages },
      { name: "Railway", icon: SiRailway }
    ]
  },
  {
    title: "Developer Tools",
    iconName: "🛠️",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "VS Code", icon: SiVscodium },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker }
    ]
  }
];
