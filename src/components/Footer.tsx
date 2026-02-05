import { motion } from "motion/react";
import { Linkedin, Instagram, Github, Heart } from "lucide-react";

interface FooterProps {
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  name: string;
}

export function Footer({ socials, name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Branding */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-white text-xl md:text-2xl">{name}</h3>
            <p className="text-slate-400 text-xs md:text-sm">
              Frontend Developer crafting beautiful web experiences
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white text-base md:text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left text-xs md:text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white text-base md:text-lg">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6 md:mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-400">
          <p className="text-center md:text-left">© {currentYear} {name}. All rights reserved.</p>
          <p className="flex items-center gap-2 text-center md:text-left">
            Made with <Heart size={14} className="text-red-500 fill-red-500 md:w-4 md:h-4" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
