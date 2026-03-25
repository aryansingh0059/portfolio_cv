"use client";

import { useEffect, useMemo, useState } from "react";

import { HeroContent } from "@/components/sub/hero-content";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const particleCount = useMemo(() => isMobile ? 20 : 80, [isMobile]);
  const stars = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const nextSeed = (seed * 9301 + 49297) % 233280;
        const thirdSeed = (nextSeed * 9301 + 49297) % 233280;
        const fourthSeed = (thirdSeed * 9301 + 49297) % 233280;

        return {
          id: i,
          size: 0.4 + (seed / 233280) * 1,
          opacity: 0.25 + (nextSeed / 233280) * 0.55,
          left: `${(thirdSeed / 233280) * 100}%`,
          top: `${(fourthSeed / 233280) * 100}%`,
          duration: 3 + ((seed + thirdSeed) % 1200) / 300,
          delay: ((nextSeed + fourthSeed) % 1000) / 200,
        };
      }),
    [particleCount]
  );

  return (
    <motion.div
      id="about-me"
      className="relative flex flex-col h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[18%] left-[12%] w-[300px] md:w-[520px] h-[300px] md:h-[520px] bg-gradient-to-br from-purple-600/20 to-pink-500/10 rounded-full blur-3xl"
          animate={!isMobile ? {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-[10%] right-[12%] w-[250px] md:w-[440px] h-[250px] md:h-[440px] bg-gradient-to-tr from-blue-600/10 to-cyan-500/20 rounded-full blur-3xl"
          animate={!isMobile ? {
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{
            delay: 0.4,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(34,211,238,0.08)_96%),linear-gradient(90deg,transparent_95%,rgba(34,211,238,0.08)_96%)] bg-[size:56px_56px] opacity-20" />
      </div>

      {/* Optimized Starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full will-change-transform"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <HeroContent />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <a href="#skills" className="text-white/70 text-xs md:text-sm font-light tracking-widest uppercase bg-black/20 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-colors">
            Discover More
          </a>
          <div className="w-6 md:w-10 h-10 md:h-16 border-2 border-white/25 rounded-full flex justify-center backdrop-blur-xl bg-black/10">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 md:w-2 h-4 md:h-6 bg-gradient-to-b from-cyan-300 to-purple-300 rounded-full mt-2 md:mt-4"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

