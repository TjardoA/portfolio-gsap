export const portfolioData = {
  personal: {
    name: "Tjardo Antonie",
    title: "Frontend Developer",
    tagline: "Crafting pixel-perfect experiences with code and creativity",
    email: "tjardo.antonie@gmail.com",
    photo: "./assets/profile.jpg", // Plaats je profiel foto in de /assets map
    aboutMe:
      "Hoi, ik ben Tjardo Antonie — een student webdevelopment aan het Grafisch Lyceum Utrecht met een sterke passie voor design, code en creativiteit. Ik studeer momenteel om full-stack webdeveloper te worden, met een grote interesse in moderne technologieën zoals Next.js, React en Tailwind CSS. Ik vind het leuk om nieuwe tools en frameworks te ontdekken en ben altijd op zoek naar manieren om te leren en mezelf te verbeteren. Buiten het coderen kun je me waarschijnlijk vinden terwijl ik naar muziek luister of actief bezig ben met sport. Ik combineer graag creativiteit en technologie om mooie en functionele webervaringen te creëren.",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/tjardo-antonie-52284726a/",
    github: "https://github.com/TjardoA",
    instagram: "https://www.instagram.com/tarndoxd/",
  },
  skills: [
    {
      name: "HTML & CSS",
      description: "Semantic and modern",
      icon: "code",
      color: "from-red-500 to-red-500",
    },
    {
      name: "JavaScript",
      description: "Dynamic web experiences",
      icon: "code",
      color: "from-green-500 to-pink-500",
    },
    {
      name: "React & Next.js",
      description: "Building scalable applications",
      icon: "component",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      description: "Type-safe development",
      icon: "code",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Tailwind CSS",
      description: "Rapid UI development",
      icon: "palette",
      color: "from-cyan-500 to-teal-500",
    },
    {
      name: "Motion & GSAP",
      description: "Smooth animations",
      icon: "sparkles",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Node.js & APIs",
      description: "Backend integration",
      icon: "server",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Responsive Design",
      description: "Mobile-first approach",
      icon: "smartphone",
      color: "from-orange-500 to-red-500",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Annex Bios Bilthoven",
      shortDescription: "Moderne bioscoop website",
      description:
        "Een moderne website voor een lokale bioscoop, gebouwd met HTML en Tailwind CSS. De site bevat een dynamisch filmschema, een ticketsysteem en een responsief ontwerp.",
      technologies: [
        "HTML",
        "CSS",
        "MySQL",
        "PHP",
        "Javascript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/David-Schoots/AnnexBios",
      image: "/assets/project-1.jpg",
    },
    {
      id: 2,
      title: "Kiosk",
      shortDescription: "Kiosk for Happy Herbivore",
      description:
        "We hebben een kiosk gebouwd voor Happy Herbivore, waarbij alle producten verbonden zijn via een database. Het project maakt gebruik van Laravel en React. Daarnaast hebben we een analysepagina gemaakt om bestellingen en de populairste producten bij te houden.",
      technologies: [
        "React",
        "Laravel",
        "Chart.js",
        "Tailwind CSS",
        "SCSS",
        "Javascript",
        "MySQL",
      ],
      githubUrl: "https://github.com/PepijnBullens/happy_herbivore",
      image: "/assets/project-2.jpg",
    },
    {
      id: 3,
      title: "Rolvin Rijkaard",
      shortDescription: "Een website voor Rolvin Rijkaard",
      description:
        "Een persoonlijke website voor Rolvin Rijkaard, waarin zijn portfolio en prestaties worden getoond. De site is gebouwd met Elementor en WordPress en heeft een strak ontwerp met vloeiende animaties.",
      technologies: ["Wordpress", "Elementor"],
      githubUrl: "https://github.com/tjardoantonie/task-manager",
      image: "/assets/project-3.jpg",
    },
    {
      id: 4,
      title: "Portfolio Generator",
      shortDescription: "Create stunning portfolios",
      description:
        "Een tool waarmee developers snel en eenvoudig hun eigen portfolio website kunnen genereren. Kies uit verschillende templates, pas kleuren en content aan, en export de volledige code. Inclusief dark mode en verschillende layout opties.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Monaco Editor",
        "Vite",
      ],
      githubUrl: "https://github.com/tjardoantonie/portfolio-generator",
      image: "/assets/project-4.jpg",
    },
  ],
};
