# Premium Minimalist Developer Portfolio

A sleek, premium, and responsive developer portfolio website designed to showcase personal projects, technical skills, and experience. Built with a modern aesthetic featuring smooth transitions, unified layouts, and dark mode support.

## 🚀 Live Demo
You can view the live site here: https://hariprasad-dev.vercel.app
---

## ✨ Key Features

- **Responsive Grid Layout**: Perfectly structured layout tailored for Desktop, Laptop, Tablet, and Mobile screens.
- **Unified Project Cards**:
  - Exact dimensional matching across all cards to maintain a clean, aligned grid regardless of content length.
  - Fixed-height containers for Title (clamped to 1 line) and Description (clamped to 3 lines).
  - Clean tech stack badge display limited to the first 6 technologies with an overflow indicator (e.g., `+9 More`).
  - Smooth lift-on-hover micro-animations.
- **Interactive Project Details Modals**:
  - Detailed overlay modal loaded dynamically with fade and scale transition effects.
  - Side-by-side split layout on desktop (large image on the left, copy details and badges on the right).
  - External links (GitHub and Live Demo) configured securely to open in a new tab (`target="_blank" rel="noopener noreferrer"`).
- **EmailJS Contact Form**:
  - Fully functional contact form integration via `@emailjs/browser` powered by environment variables.
  - Custom form validation checks (name, email format regex, message) with interactive feedback alerts.
  - Button state management with loading indicators (`Sending...`) and disabled inputs while dispatching.
  - Visual status alerts for successful message delivery and errors.
- **Light/Dark Mode**: High contrast, theme-tailored backgrounds (`--bg` and `--charcoal`) and font elements.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Mail SDK**: [EmailJS Browser SDK](https://www.emailjs.com/)

---


## 📂 Project Showcase

The portfolio currently showcases these active projects:
1. **StreakForge** — A full-stack developer productivity app to maintain LeetCode coding streaks with daily GraphQL API tracking and automated Brevo SMTP reminder emails.
2. **Lumina E-Commerce** — A modern premium React e-commerce storefront with product browsing (FakeStoreAPI), advanced filtering, profile states, and cart management stored locally.
3. **Estate Prophet** — A machine-learning-powered house price prediction model (Python Random Forest Regression) equipped with an interactive Neo-Brutalism frontend.
4. **Random Password Generator** — A secure password generator tool supporting length configurations and custom character parameters.
5. **Calculator** — A responsive arithmetic calculator with standard operations.

---


