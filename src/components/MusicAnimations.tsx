import { motion } from 'motion/react'

// Floating Music Notes Component
export const FloatingMusicNotes = ({ count = 6 }: { count?: number }) => {
  const notes = ['♪', '♫', '♬', '♭', '♯', '𝄞']
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 360],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        >
          {notes[i % notes.length]}
        </motion.div>
      ))}
    </div>
  )
}

// Vinyl Record Spinning Animation
export const VinylRecord = ({ size = 'w-12 h-12' }: { size?: string }) => {
  return (
    <motion.div
      className={`${size} relative rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-600`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-600 to-gray-800">
          <div className="absolute inset-1/3 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
    </motion.div>
  )
}

// Audio Equalizer Bars
export const AudioEqualizer = ({ bars = 8, className = '' }: { bars?: number; className?: string }) => {
  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {[...Array(bars)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-gradient-to-t from-primary/60 to-primary rounded-full"
          style={{
            height: 8 + Math.random() * 16
          }}
          animate={{
            height: [
              8 + Math.random() * 16,
              16 + Math.random() * 32,
              4 + Math.random() * 12
            ]
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  )
}

// Pulse Beat Animation
export const PulseBeat = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Sound Wave Ripple Effect
export const SoundRipple = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 2, 3],
            opacity: [0.6, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// Musical Frequency Waves
export const FrequencyWaves = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-0.5 ${className}`}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-0.5 bg-gradient-to-t from-primary/40 to-accent/60 rounded-full"
          style={{
            height: 2 + Math.sin(i * 0.5) * 20
          }}
          animate={{
            height: [
              2 + Math.sin(i * 0.5) * 20,
              10 + Math.sin(i * 0.8) * 30,
              2 + Math.sin(i * 0.3) * 15
            ]
          }}
          transition={{
            duration: 2 + Math.sin(i) * 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05
          }}
        />
      ))}
    </div>
  )
}