export const portfolioData = {
  personal: {
    name: "Alex Rodriguez",
    title: "Frontend Developer",
    tagline: "Crafting pixel-perfect experiences with code and creativity",
    email: "alex.rodriguez@example.com",
    photo: "developer-portrait",
    aboutMe: "Hey there! Ik ben een gepassioneerde frontend developer met een oog voor detail en een liefde voor clean code. Met meer dan 3 jaar ervaring in het bouwen van moderne web applicaties, combineer ik technische expertise met creatief design om unieke digitale ervaringen te creëren. Wanneer ik niet bezig ben met code, vind je me waarschijnlijk aan het experimenteren met nieuwe frameworks of het verkennen van de laatste design trends."
  },
  socials: {
    linkedin: "https://linkedin.com/in/alexrodriguez",
    github: "https://github.com/alexrodriguez",
    instagram: "https://instagram.com/alexrodriguez"
  },
  skills: [
    {
      name: "React & Next.js",
      description: "Building scalable applications",
      icon: "component",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "TypeScript",
      description: "Type-safe development",
      icon: "code",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "Tailwind CSS",
      description: "Rapid UI development",
      icon: "palette",
      color: "from-cyan-500 to-teal-500"
    },
    {
      name: "Motion & GSAP",
      description: "Smooth animations",
      icon: "sparkles",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Node.js & APIs",
      description: "Backend integration",
      icon: "server",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Responsive Design",
      description: "Mobile-first approach",
      icon: "smartphone",
      color: "from-orange-500 to-red-500"
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Modern online shopping experience",
      description: "Een volledig functioneel e-commerce platform gebouwd met React en Next.js. De applicatie bevat product catalogus, winkelwagen functionaliteit, checkout proces en gebruikersauthenticatie. Speciaal focus op performance optimalisatie en SEO.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL"],
      githubUrl: "https://github.com/alexrodriguez/ecommerce-platform",
      image: "ecommerce website"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      shortDescription: "Real-time weather tracking",
      description: "Een interactief weather dashboard dat real-time weerdata toont voor verschillende locaties. Inclusief 7-daagse voorspelling, interactieve kaarten en mooie data visualisaties. Gebouwd met focus op responsive design en gebruiksvriendelijkheid.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Geolocation API"],
      githubUrl: "https://github.com/alexrodriguez/weather-dashboard",
      image: "weather application"
    },
    {
      id: 3,
      title: "Task Management App",
      shortDescription: "Productivity made simple",
      description: "Een intuïtieve task management applicatie met drag-and-drop functionaliteit, categorieën, deadlines en progress tracking. Ondersteunt team collaboratie en real-time updates. Gebouwd met moderne React patterns en state management.",
      technologies: ["React", "Redux Toolkit", "Firebase", "React DnD", "Tailwind CSS"],
      githubUrl: "https://github.com/alexrodriguez/task-manager",
      image: "task management board"
    },
    {
      id: 4,
      title: "Portfolio Generator",
      shortDescription: "Create stunning portfolios",
      description: "Een tool waarmee developers snel en eenvoudig hun eigen portfolio website kunnen genereren. Kies uit verschillende templates, pas kleuren en content aan, en export de volledige code. Inclusief dark mode en verschillende layout opties.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Monaco Editor", "Vite"],
      githubUrl: "https://github.com/alexrodriguez/portfolio-generator",
      image: "portfolio template"
    }
  ]
};
