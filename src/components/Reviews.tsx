import { motion } from 'motion/react'
import { useRef, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { portfolioData } from '../data/portfolio-data'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Reviews = () => {
  const { reviews } = portfolioData
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationId: number
    let isScrolling = false
    
    const scrollSpeed = 0.5 // pixels per frame
    const pauseDuration = 3000 // pause duration in ms when reaching end
    let pauseStartTime = 0
    let isPaused = false

    const autoScroll = () => {
      if (!container || isScrolling) return

      const now = Date.now()
      const maxScroll = container.scrollWidth - container.clientWidth
      
      // If we've reached the end, pause before resetting
      if (container.scrollLeft >= maxScroll) {
        if (!isPaused) {
          isPaused = true
          pauseStartTime = now
        } else if (now - pauseStartTime >= pauseDuration) {
          // Reset to beginning smoothly
          container.scrollTo({ left: 0, behavior: 'smooth' })
          isPaused = false
          pauseStartTime = 0
        }
      } else {
        // Normal scrolling
        isPaused = false
        container.scrollLeft += scrollSpeed
      }

      animationId = requestAnimationFrame(autoScroll)
    }

    // Start auto-scroll after a short delay
    const startDelay = setTimeout(() => {
      autoScroll()
    }, 2000)

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling = true
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }

    const handleMouseLeave = () => {
      isScrolling = false
      autoScroll()
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(startDelay)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 via-white to-accent/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mb-4">
            Wat anderen zeggen
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Reviews van klanten en collega's waarmee ik heb samengewerkt
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollContainerRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Duplicate reviews for seamless scrolling */}
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex-shrink-0 w-80 md:w-96"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{review.content}"
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Reviews