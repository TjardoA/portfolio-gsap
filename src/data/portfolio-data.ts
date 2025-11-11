export const portfolioData = {
  personal: {
    name: "Tjardo Antonie",
    role: "Developer",
    email: "tjardo.antonie@gmail.com",
    bio: "Hoi! Ik ben Tjardo, een gepassioneerde developer die houdt van het creëren van digitale ervaringen die zowel functioneel als visueel aantrekkelijk zijn. Met een achtergrond in zowel frontend ontwikkeling als creatief design, breng ik technische expertise en artistieke visie samen in elk project.",
    profileImage:
      "https://images.unsplash.com/photo-1556557286-bf3be5fd9d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjcmVhdGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTIzNDQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  skills: [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: "Expert",
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Language",
      level: "Advanced",
    },
    {
      id: 3,
      name: "Next.js",
      category: "Framework",
      level: "Advanced",
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
    },
    {
      id: 5,
      name: "Motion/GSAP",
      category: "Animation",
      level: "Advanced",
    },
    {
      id: 6,
      name: "Figma",
      category: "Design",
      level: "Advanced",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      category: "Styling",
      level: "Expert",
    },
    {
      id: 8,
      name: "Vue.js",
      category: "Frontend",
      level: "Intermediate",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Een moderne webshop gebouwd met Next.js en Stripe integratie voor naadloze betalingen.",
      detailedDescription:
        "Een full-stack e-commerce platform met moderne UI/UX, geavanceerde productfiltering, shopping cart functionaliteit en veilige betalingsverwerking via Stripe. De applicatie ondersteunt meerdere betaalmethoden en heeft een responsive design voor alle apparaten.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW58ZW58MXx8fHwxNzU5MTUwMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://example-ecommerce.vercel.app",
      githubUrl: "https://github.com/alexvandenberg/ecommerce-platform",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Tailwind",
        "Prisma",
        "PostgreSQL",
      ],
      category: "E-commerce",
      duration: "3 maanden",
      team: "Solo project",
      features: [
        "Product catalogus met geavanceerde filtering en zoekfunctionaliteit",
        "Shopping cart met lokale state management",
        "Veilige checkout proces met Stripe Payment Intent",
        "Gebruikersaccounts met bestellingsgeschiedenis",
        "Admin panel voor productbeheer",
        "Responsive design voor mobile en desktop",
      ],
      challenges: [
        "Implementatie van complexe state management voor shopping cart functionaliteit",
        "Integratie van Stripe webhooks voor betrouwbare payment processing",
        "Optimalisatie van database queries voor snelle productpagina's",
      ],
      learnings: [
        "Diepgaande kennis opgedaan van Stripe API en webhook implementatie",
        "Geleerd over e-commerce UX best practices en conversion optimalisatie",
        "Ervaring opgedaan met database design voor e-commerce applicaties",
      ],
    },
    {
      id: 2,
      title: "Music Discovery App",
      description:
        "Een interactieve app voor het ontdekken van nieuwe muziek met motion animations en sociale features.",
      detailedDescription:
        "Een innovatieve muziek discovery applicatie die gebruikers helpt nieuwe artiesten en nummers te ontdekken door middel van een intuïtieve swipe interface, gepersonaliseerde aanbevelingen en sociale features om muziek te delen met vrienden.",
      image:
        "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzU5MjM0NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://music-discovery.vercel.app",
      githubUrl: "https://github.com/alexvandenberg/music-discovery",
      technologies: [
        "React",
        "Motion",
        "Spotify API",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      category: "Mobile App",
      duration: "4 maanden",
      team: "2 developers + 1 designer",
      features: [
        "Swipe interface voor muziek discovery (zoals Tinder voor muziek)",
        "Spotify API integratie voor muziekstreaming en metadata",
        "Gepersonaliseerde aanbevelingen op basis van luistergewoonten",
        "Sociale features: playlists delen met vrienden",
        "Real-time chat functionaliteit",
        "Offline muziek opslaan voor later beluisteren",
      ],
      challenges: [
        "Spotify API rate limiting en optimalisatie van API calls",
        "Implementatie van complexe swipe gesture animaties met Motion",
        "Real-time synchronisatie van gebruikersdata across devices",
      ],
      learnings: [
        "Expertise opgebouwd in audio API's en streaming protocols",
        "Geavanceerde Motion animaties en gesture handling",
        "Real-time applicatie architectuur met WebSockets",
      ],
    },
    {
      id: 3,
      title: "Creative Dashboard",
      description:
        "Een intuïtieve dashboard voor creatieven om projecten te beheren met focus op gebruiksvriendelijkheid.",
      detailedDescription:
        "Een uitgebreid project management platform speciaal ontworpen voor creatieve professionals. Het dashboard biedt tools voor projectplanning, team collaboratie, tijdregistratie en client communicatie, allemaal in een visueel aantrekkelijke interface.",
      image:
        "https://images.unsplash.com/photo-1516445034117-fcd56299761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGVxdWFsaXplciUyMHNvdW5kd2F2ZSUyMG1pbmltYWx8ZW58MXx8fHwxNzU5MjM0NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://creative-dashboard.vercel.app",
      githubUrl: "https://github.com/alexvandenberg/creative-dashboard",
      technologies: [
        "Vue.js",
        "TypeScript",
        "GSAP",
        "Firebase",
        "Nuxt.js",
        "Pinia",
      ],
      category: "Dashboard",
      duration: "5 maanden",
      team: "3 developers + 2 designers",
      features: [
        "Drag & drop projectplanning met Gantt chart visualisatie",
        "Team collaboration tools met real-time commenting",
        "Tijdregistratie en factuurcreatie",
        "Client portal voor project status en feedback",
        "File sharing en version control voor creative assets",
        "Customizable dashboard widgets",
      ],
      challenges: [
        "Complexe drag & drop functionaliteit met GSAP animaties",
        "Real-time collaboration features zonder conflicts",
        "Performance optimalisatie voor grote datasets",
      ],
      learnings: [
        "Geavanceerde Vue.js patterns en compositie API",
        "Complex state management met Pinia",
        "GSAP animaties voor production-ready applicaties",
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Jansen",
      role: "Product Manager bij TechCorp",
      content:
        "Alex heeft onze website volledig getransformeerd. Het design is prachtig en de functionaliteit perfect. Echt een plezier om mee te werken!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIzNDQ5Nnww&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike de Vries",
      role: "CEO bij StartupLab",
      content:
        "Professioneel, creatief en altijd op tijd. Alex begrijpt precies wat we nodig hebben en levert kwaliteit af die onze verwachtingen overtreft.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyMzQ0OTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "UX Designer bij DesignStudio",
      content:
        "De samenwerking met Alex was fantastisch. Hij heeft een geweldig oog voor detail en technische skills om elk design tot leven te brengen.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYXNpYW58ZW58MXx8fHwxNzU5MjM0NDk2fDA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
    },
    {
      id: 4,
      name: "Tom Bakker",
      role: "Founder bij WebAgency",
      content:
        "Alex is een echte professional die complexe projecten eenvoudig maakt. Zijn code is clean en de resultaten spreken voor zich.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkyMzQ0OTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
    },
  ],
  socials: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/alexvdberg",
      icon: "Github",
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexvdberg",
      icon: "Linkedin",
    },
    {
      id: 3,
      name: "Spotify",
      url: "https://open.spotify.com/user/alexvdberg",
      icon: "Music",
    },
  ],
};
