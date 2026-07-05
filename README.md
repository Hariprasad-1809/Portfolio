# Premium Minimalist Developer Portfolio

A sleek, premium, and responsive developer portfolio website designed to showcase personal projects, technical skills, and experience. Built with a modern aesthetic featuring smooth transitions, unified layouts, and dark mode support.

## 🚀 Live Demo
You can view the live site here: [Live Link](https://streak-forge-33fu.vercel.app/) *(or update with your domain)*

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

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Hariprasad-1809/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables configuration
Create a `.env` file in the root directory of the project and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run local development server
```bash
npm run dev
```
The application will be running locally at `http://localhost:5173`.

### 5. Production build
To build the application for production, compile the static files using Vite:
```bash
npm run build
```
This generates the optimized static bundles under the `dist/` directory.

---

## 📂 Project Showcase

The portfolio currently showcases these active projects:
1. **StreakForge** — A full-stack developer productivity app to maintain LeetCode coding streaks with daily GraphQL API tracking and automated Brevo SMTP reminder emails.
2. **Lumina E-Commerce** — A modern premium React e-commerce storefront with product browsing (FakeStoreAPI), advanced filtering, profile states, and cart management stored locally.
3. **Estate Prophet** — A machine-learning-powered house price prediction model (Python Random Forest Regression) equipped with an interactive Neo-Brutalism frontend.
4. **Random Password Generator** — A secure password generator tool supporting length configurations and custom character parameters.
5. **Calculator** — A responsive arithmetic calculator with standard operations.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
