import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Sparkles,
  Component,
} from "lucide-react";

interface Skill {
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
}

const iconMap: Record<string, any> = {
  code: Code,
  palette: Palette,
  smartphone: Smartphone,
  server: Server,
  sparkles: Sparkles,
  component: Component,
};

export function Skills({ skills }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 mb-2 inline-block">What I do</span>
          <h2 className="text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combining technical skills with creative problem-solving to build
            exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-2">{skill.name}</h3>
                  <p className="text-slate-400 text-sm">{skill.description}</p>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
