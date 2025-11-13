import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutProps {
  name: string;
  aboutMe: string;
  photo: string;
}

export function About({ name, aboutMe, photo }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-slate-950 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 mb-2 inline-block">
            Get to know me
          </span>
          <h2 className="text-white">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo with creative shape */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/30 rounded-[60px] -z-10"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-[60px] -z-10"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />

              {/* Photo with blob mask */}
              <div className="relative overflow-hidden rounded-[60px] aspect-square">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                />
                <ImageWithFallback
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements - hidden on mobile */}
              <motion.div
                className="hidden md:block absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-50"
                animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="hidden md:block absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
              <p className="text-slate-300 leading-relaxed pl-8">{aboutMe}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-8">
              <motion.div
                className="text-center p-3 md:p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                whileHover={{ scale: 1.05, borderColor: "rgb(6 182 212)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-cyan-400 mb-1 text-lg md:text-2xl">3+</div>
                <div className="text-slate-400 text-xs md:text-sm">
                  Years Exp
                </div>
              </motion.div>
              <motion.div
                className="text-center p-3 md:p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                whileHover={{ scale: 1.05, borderColor: "rgb(6 182 212)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-cyan-400 mb-1 text-lg md:text-2xl">
                  10+
                </div>
                <div className="text-slate-400 text-xs md:text-sm">
                  Projects
                </div>
              </motion.div>
              <motion.div
                className="text-center p-3 md:p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                whileHover={{ scale: 1.05, borderColor: "rgb(6 182 212)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-cyan-400 mb-1 text-lg md:text-2xl">3</div>
                <div className="text-slate-400 text-xs md:text-sm">Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
