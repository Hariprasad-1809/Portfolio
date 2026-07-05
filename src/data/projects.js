export const projects = [
  {
    id: 1,
    title: "StreakForge",
    shortDescription: "A full-stack web application that helps developers maintain their LeetCode coding streak by tracking daily submissions and sending automated reminder emails when no problem has been solved.",
    description: "StreakForge is a developer productivity platform that automatically tracks users' daily LeetCode submissions using the LeetCode GraphQL API. If no accepted submission is found for the day, the system sends an automated reminder email to encourage consistent coding habits. The platform also includes secure authentication, password recovery, timezone support, support requests, dashboard analytics, and permanent account deletion.",
    tech: [
      "React",
      "Vite",
      "CSS",
      "Axios",
      "FastAPI",
      "Python",
      "SQLite",
      "SQLAlchemy",
      "JWT",
      "APScheduler",
      "Brevo SMTP",
      "LeetCode GraphQL API",
      "Vercel",
      "Render",
      "Supabase"
    ],
    image: "/projects/project_1.png",
    github: "https://github.com/Hariprasad-1809/StreakForge",
    live: "https://streak-forge-33fu.vercel.app/"
  },
  {
    id: 2,
    title: "Lumina E-Commerce",
    shortDescription: "A modern premium frontend e-commerce application featuring product browsing, shopping cart, authentication, filtering, checkout flow, and responsive design.",
    description: "Lumina is a fully responsive frontend-only e-commerce platform built with React and Tailwind CSS. It includes dynamic product listings using FakeStoreAPI, advanced filtering, shopping cart management, simulated authentication, order history, profile management, and multiple business pages. User data and cart information are stored locally using browser storage.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "LocalStorage",
      "Lucide React",
      "FakeStoreAPI"
    ],
    image: "/projects/project_2.png",
    github: "https://github.com/Hariprasad-1809/e-commerce-lumina",
    live: "https://e-commerce-lumina.vercel.app/"
  },
  {
    id: 3,
    title: "Estate Prophet",
    shortDescription: "A machine learning powered house price prediction application with a modern Neo-Brutalism interface for instant real estate price estimation.",
    description: "Estate Prophet predicts residential property prices based on housing features such as BHK, parking, balcony, swimming pool, playground, floors, and total area. The prediction model is derived from a Random Forest Regression algorithm trained in Python, while the frontend performs instant calculations with an interactive Neo-Brutalism design.",
    tech: [
      "React",
      "Vite",
      "CSS",
      "Python",
      "Machine Learning",
      "Random Forest Regression",
      "Lucide React"
    ],
    image: "/projects/project_3.png",
    github: "https://github.com/Hariprasad-1809/House-Price-Prediction",
    live: "https://housepricepredictionsmodel.netlify.app/"
  },
  {
    id: 4,
    title: "Random Password Generator",
    shortDescription: "A responsive web application that generates strong and secure passwords with customizable options for improved online security.",
    description: "This application allows users to instantly generate random passwords with configurable length and character combinations including uppercase letters, lowercase letters, numbers, and special symbols. It also includes one-click password copy functionality and a clean responsive interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image: "/projects/project_4.png",
    github: "https://github.com/Hariprasad-1809/Random-Password-Generator",
    live: "https://random-password-generator-beta-wheat.vercel.app/"
  },
  {
    id: 5,
    title: "Calculator",
    shortDescription: "A responsive calculator application capable of performing standard arithmetic operations with a clean and intuitive interface.",
    description: "A simple calculator built using HTML, CSS, and JavaScript that performs addition, subtraction, multiplication, division, decimal calculations, and clear/reset operations while providing a smooth user experience across different screen sizes.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image: "/projects/project_5.png",
    github: "https://github.com/Hariprasad-1809/Calculator",
    live: "https://calculator-six-eta-68.vercel.app/"
  }
];
