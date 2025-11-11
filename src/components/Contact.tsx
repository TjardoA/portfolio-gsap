import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 mb-2 inline-block">Get In Touch</span>
          <h2 className="text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me an email and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main contact card */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-slate-700 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center space-y-6 md:space-y-8">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              {/* Email */}
              <div>
                <p className="text-slate-400 mb-2 text-sm md:text-base">Email me at</p>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-cyan-400 transition-colors inline-block text-sm md:text-base break-all"
                >
                  {email}
                </a>
              </div>

              {/* Button */}
              <motion.button
                onClick={handleEmailClick}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 mx-auto text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send an Email
                <Send size={20} />
              </motion.button>

              {/* Decorative lines */}
              <div className="flex items-center gap-4 max-w-md mx-auto pt-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700" />
                <span className="text-slate-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-700" />
              </div>

              {/* Additional text */}
              <p className="text-slate-500 text-sm">
                Connect with me on social media (links in footer)
              </p>
            </div>

            {/* Animated corner decorations - hidden on mobile */}
            <motion.div
              className="hidden md:block absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="hidden md:block absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </div>

          {/* Floating elements - hidden on mobile */}
          <motion.div
            className="hidden md:block absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-30"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="hidden md:block absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
