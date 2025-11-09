

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateY: 180 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05,
        duration: 0.8
      }
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.1,
      rotateZ: [0, -5, 5, 0],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        rotateZ: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    }
  };

  const glowVariants = {
    hover: {
      boxShadow: [
        "0 0 20px rgba(6, 182, 212, 0.3)",
        "0 0 40px rgba(6, 182, 212, 0.5)",
        "0 0 20px rgba(6, 182, 212, 0.3)"
      ],
      transition: {
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Main Skill Card */}
      <motion.div
        variants={glowVariants}
        className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
      >
        {/* Skill Icon */}
        <motion.div
          variants={hoverVariants}
          className="flex items-center justify-center mb-3"
        >
          <Image 
            src={`/skills/${src}`} 
            width={width} 
            height={height} 
            alt={name}
            className="filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
          />
        </motion.div>

        {/* Skill Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.3 }}
          className="text-white font-semibold text-center text-sm mt-2"
        >
          {name}
        </motion.p>

        {/* Hover Tooltip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : {}}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-lg text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-cyan-500/30 whitespace-nowrap pointer-events-none"
        >
          {name}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-slate-900/90 rotate-45 border-r border-b border-cyan-500/30"></div>
        </motion.div>

        {/* Animated Rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-2xl border-2 border-cyan-400/20 pointer-events-none"
        />
      </motion.div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -30, -60],
                x: Math.random() * 40 - 20
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.2,
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

