import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink, Github, Calendar, Users, Code, Target } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Project {
  id: number
  title: string
  description: string
  detailedDescription?: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  image: string
  category: string
  duration?: string
  team?: string
  challenges?: string[]
  features?: string[]
  learnings?: string[]
}

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Project badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Header */}
                <div>
                  <h1 className="text-3xl md:text-4xl mb-4">{project.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {/* Meta info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.duration && (
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duur</div>
                        <div>{project.duration}</div>
                      </div>
                    </div>
                  )}
                  
                  {project.team && (
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Team</div>
                        <div>{project.team}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="w-5 h-5 text-primary" />
                    <h3 className="text-xl">Technologieën</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Target className="w-5 h-5 text-primary" />
                      <h3 className="text-xl">Hoofdfunctionaliteiten</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xl mb-4">Uitdagingen & Oplossingen</h3>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="p-4 bg-orange-50 border-l-4 border-orange-200 rounded-r-lg">
                          <p className="text-orange-900">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learnings */}
                {project.learnings && project.learnings.length > 0 && (
                  <div>
                    <h3 className="text-xl mb-4">Wat ik heb geleerd</h3>
                    <div className="space-y-4">
                      {project.learnings.map((learning, index) => (
                        <div key={index} className="p-4 bg-green-50 border-l-4 border-green-200 rounded-r-lg">
                          <p className="text-green-900">{learning}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live bekijken</span>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code bekijken</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectDetailModal