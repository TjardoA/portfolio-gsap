import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string; // thumbnail voor carousel
  imageDetail?: string; // extra afbeelding voor detailweergave
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-slate-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 mb-2 inline-block">My Work</span>
          <h2 className="text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and expertise
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full items-center px-4 md:px-0">
                  {/* Project image */}
                  <motion.div
                    className="relative h-64 md:h-full rounded-2xl overflow-hidden group bg-slate-950"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-contain bg-slate-950"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
                  </motion.div>

                  {/* Project info */}
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <span className="text-cyan-400 text-xs md:text-sm">
                        Project {currentIndex + 1} of {projects.length}
                      </span>
                      <h3 className="text-white mt-2 text-2xl md:text-3xl">
                        {currentProject.title}
                      </h3>
                      <p className="text-slate-400 mt-2 text-sm md:text-base">
                        {currentProject.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies
                        .slice(0, 4)
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 md:px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs md:text-sm border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(currentProject)}
                      className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                    >
                      View Details
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-500 w-8"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center z-10">
                <h3 className="text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <ImageWithFallback
                  src={selectedProject.imageDetail || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-contain bg-slate-950 rounded-lg"
                />

                <div>
                  <h4 className="text-white mb-3">Description</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
