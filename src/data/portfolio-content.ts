export const portfolioData = {
  personal: {
    name: "Tjardo Antonie",
    title: "Frontend Developer",
    tagline: "Crafting pixel-perfect experiences with code and creativity",
    email: "tjardo.antonie@gmail.com",
    photo: "./assets/profile.jpg", // Plaats je profiel foto in de /assets map
    aboutMe:
      "Ik ben Tjardo Antonie, webdevelopmentstudent aan het Grafisch Lyceum Utrecht met een sterke interesse in web development. Ik werk veel met moderne tools zoals Next.js, React en Tailwind CSS, en ik vind het leuk om nieuwe technologieën te ontdekken en mezelf continu te verbeteren. Voor mij is webdevelopment de ideale mix van creativiteit en techniek: het geeft me de ruimte om ideeën om te zetten in functionele en aantrekkelijke webervaringen. Buiten het coderen ben ik vaak bezig met muziek of sport. Ik haal energie uit het leren, creëren en bouwen aan digitale projecten die echt iets toevoegen.",
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
      color: "from-purple-500 to-red-500",
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
      image: "/assets/project-1-logo.jpg",
      imageDetail: "/assets/project-1-banner.jpg",
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
      image: "/assets/project-2-logo.jpg",
      imageDetail: "/assets/project-2-banner.jpg",
    },
    {
      id: 3,
      title: "Rolvin Rijkaard",
      shortDescription: "Een website voor Rolvin Rijkaard",
      description:
        "Een persoonlijke website voor Rolvin Rijkaard, waarin zijn portfolio en prestaties worden getoond. De site is gebouwd met Elementor en WordPress en heeft een strak ontwerp met vloeiende animaties.",
      technologies: ["Wordpress", "Elementor"],
      githubUrl: "https://github.com/tjardoantonie/task-manager",
      image: "/assets/project-3-logo.jpg",
      imageDetail: "/assets/project-3-banner.jpg",
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
