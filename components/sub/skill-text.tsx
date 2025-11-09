
"use client";

import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SkillText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      ref={ref}
      className="w-full h-auto flex flex-col items-center justify-center mb-16 relative"
    >
      {/* Animated Background Badge */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        <motion.div
          animate={floatingAnimation}
          className="Welcome-box py-4 px-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden group"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
          
          {/* Sparkle Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -left-2"
          >
            <SparklesIcon className="text-cyan-400 h-4 w-4 opacity-60" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 -right-2"
          >
            <SparklesIcon className="text-purple-400 h-4 w-4 opacity-60" />
          </motion.div>
          
          <div className="flex items-center gap-3 relative z-10">
            <RocketLaunchIcon className="text-cyan-400 h-6 w-6" />
            <h1 className="Welcome-text text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cutting-Edge Technology Stack
            </h1>
            <CodeBracketIcon className="text-purple-400 h-6 w-6" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl md:text-6xl font-bold text-white mt-8 text-center mb-6"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Mastering Modern
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl leading-relaxed"
      >
        Building <span className="text-cyan-400 font-semibold">scalable applications</span> with 
        the latest <span className="text-purple-400 font-semibold">frameworks & tools</span> for 
        exceptional <span className="text-cyan-400 font-semibold">user experiences</span>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-8 mt-12"
      >
        {[
          { number: "20+", label: "Technologies" },
          { number: "10+", label: "Projects" },
          { number: "3+", label: "Years Experience" },
          { number: "∞", label: "Passion" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm font-medium mt-1 group-hover:text-cyan-300 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
