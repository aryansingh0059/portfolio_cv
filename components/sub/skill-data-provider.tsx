"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 10 : 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: isMobile ? 0.2 : 0.3,
        delay: index * (isMobile ? 0.02 : 0.03),
        ease: "easeOut"
      }}
      whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
      whileTap={isMobile ? { scale: 0.95 } : {}}
      className="relative"
    >
      {/* Main Skill Card */}
      <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-cyan-500/10">
        {/* Skill Icon */}
        <div className="flex items-center justify-center mb-3 md:mb-3">
          <Image 
            src={`/skills/${src}`} 
            width={isMobile ? width * 0.8 : width} 
            height={isMobile ? height * 0.8 : height} 
            alt={name}
            className="filter drop-shadow-lg"
            loading="lazy"
            unoptimized={src.endsWith('.svg')}
          />
        </div>

        {/* Skill Name */}
        <p className="text-white font-semibold text-center text-sm md:text-sm mt-2">
          {name}
        </p>
      </div>
    </motion.div>
  );
};


