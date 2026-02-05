import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Loader } from "./components/Loader";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data/portfolio-content";

export default function App() {
  // Render content immediately for SEO; loader can still be triggered later if needed.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-slate-950">
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <>
        <Hero
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          tagline={portfolioData.personal.tagline}
        />

        <About
          name={portfolioData.personal.name}
          aboutMe={portfolioData.personal.aboutMe}
          photo={portfolioData.personal.photo}
        />

        <Skills skills={portfolioData.skills} />

        <Projects projects={portfolioData.projects} />

        <Contact email={portfolioData.personal.email} />

        <Footer
          socials={portfolioData.socials}
          name={portfolioData.personal.name}
        />
      </>
    </div>
  );
}
