import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  // Simplified sound wave bars with smoother animation
  const WaveLoader = () => {
    return (
      <div className="flex items-center justify-center space-x-3">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-gradient-to-t from-primary/60 to-primary rounded-full"
            initial={{ height: 20 }}
            animate={{
              height: [20, 45, 25, 40, 20],
              opacity: [0.6, 1, 0.8, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom smooth easing
      }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-white via-gray-50 to-primary/5 flex items-center justify-center"
    >
      {/* Simplified background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" 
        />
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto px-6">
        {/* Sound Wave Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="mb-16"
        >
          <WaveLoader />
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="w-full max-w-xs mx-auto"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-muted-foreground">Laden</span>
            <span className="text-sm text-muted-foreground font-mono">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200/80 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="mt-12"
        >
          <motion.p 
            className="text-sm text-muted-foreground"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Welkom op mijn portfolio
          </motion.p>
        </motion.div>

        {/* Subtle floating dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default PageLoader