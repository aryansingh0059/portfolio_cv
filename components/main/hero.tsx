"use client";

import { useEffect, useState } from "react";

import { HeroContent } from "@/components/sub/hero-content";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced animation variants with 3D
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const nebulaVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateX: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0, z: -100 },
    visible: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0.7],
      z: 0,
      transition: {
        delay: i * 0.015,
        duration: 1.8,
        ease: "easeOut",
        opacity: {
          duration: 4,
          times: [0, 0.5, 1]
        }
      }
    })
  };

  const heroContentVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.6,
        duration: 1.4,
        ease: "easeOut"
      }
    }
  };

  const scrollIndicatorVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.8,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col h-screen w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* 3D Cosmic Background */}
      <div className="absolute inset-0 -z-10" style={{ transformStyle: "preserve-3d" }}>
        {/* 3D Nebula Clouds with Parallax */}
        <motion.div
          variants={nebulaVariants}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/25 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(-100px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
          }}
        />
        
        <motion.div
          variants={nebulaVariants}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/20 to-cyan-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
            rotateX: [0, -3, 0],
          }}
          transition={{
            delay: 0.4,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(-50px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
          }}
        />
        
        <motion.div
          variants={nebulaVariants}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-purple-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotateZ: [0, 10, 0],
          }}
          transition={{
            delay: 0.8,
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(-150px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`
          }}
        />

        {/* 3D Floating Galactic Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-2xl shadow-cyan-400/30"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(50px) rotateX(${mousePosition.y * 0.8}deg) rotateY(${mousePosition.x * 0.8}deg)`
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-2xl shadow-purple-400/30"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            transform: `translateZ(30px) rotateX(${mousePosition.y * 0.6}deg) rotateY(${mousePosition.x * 0.6}deg)`
          }}
        />

        {/* 3D Depth Layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(200px)`
          }}
        />
      </div>

      {/* 3D Enhanced Starfield */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(80)].map((_, i) => {
          const size = 0.3 + Math.random() * 1.5;
          const opacity = 0.2 + Math.random() * 0.8;
          const twinkleDuration = 3 + Math.random() * 4;
          const depth = Math.random() * 200 - 100; // Random Z depth between -100 and 100
          
          return (
            <motion.div
              key={i}
              custom={i}
              variants={starVariants}
              className="absolute bg-white rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${3 + Math.random() * 4}px ${1 + Math.random() * 2}px rgba(255,255,255,${opacity})`,
                transform: `translateZ(${depth}px)`
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: twinkleDuration,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* 3D Orbiting Tech Icons */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {/* Central 3D Orbiting System */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotateY: 360, rotateX: 15 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          {/* 3D Orbit 1 - Programming Languages */}
          <motion.div
            className="absolute w-64 h-64 border border-purple-400/20 rounded-full"
            animate={{ rotateY: -360, rotateX: -15 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(15deg)`
            }}
          >
            {['</>', '{ }', '();', '=>'].map((icon, index) => (
              <motion.div
                key={index}
                className="absolute text-cyan-300/60 font-mono text-lg font-bold"
                style={{
                  left: `${50 + 45 * Math.cos((index * Math.PI) / 2)}%`,
                  top: `${50 + 45 * Math.sin((index * Math.PI) / 2)}%`,
                  transform: `translateZ(40px)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Orbit 2 - Frameworks */}
          <motion.div
            className="absolute w-96 h-96 border border-cyan-400/15 rounded-full"
            animate={{ rotateY: 360, rotateX: -10 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(-10deg)`
            }}
          >
            {['⚛️', '⚡', '🎯', '🚀'].map((icon, index) => (
              <motion.div
                key={index}
                className="absolute text-xl"
                style={{
                  left: `${50 + 55 * Math.cos((index * Math.PI) / 2)}%`,
                  top: `${50 + 55 * Math.sin((index * Math.PI) / 2)}%`,
                  transform: `translateZ(60px)`
                }}
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 180, 360],
                  rotateX: [0, 90, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Floating Tech Elements */}
        <motion.div
          className="absolute top-20 right-20 text-cyan-300/40 text-2xl"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
            rotateX: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translateZ(80px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
          }}
        >
          ⚡
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 text-purple-300/40 text-2xl"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.3, 1],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            transform: `translateZ(40px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
          }}
        >
          🎯
        </motion.div>
        
        <motion.div
          className="absolute top-32 left-32 text-blue-300/40 text-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotateY: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            transform: `translateZ(20px) rotateX(${mousePosition.y * 0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`
          }}
        >
          💻
        </motion.div>
      </div>

      {/* 3D Connection Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(147 197 253 / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(147 197 253 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateZ(-80px) rotateX(60deg)`
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Content with 3D Perspective */}
      <motion.div
        variants={heroContentVariants}
        className="relative z-20 flex-1 flex items-center"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
        }}
      >
        <HeroContent />
      </motion.div>

      {/* 3D Enhanced Scroll Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.span 
            className="text-white/70 text-sm font-light tracking-widest uppercase bg-black/30 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderColor: "rgba(112,66,248,0.5)",
              transition: { duration: 0.3 }
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            Discover More
          </motion.span>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="w-10 h-16 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-xl bg-black/20 shadow-2xl">
              <motion.div
                animate={{
                  y: [0, 16, 0],
                  rotateX: [0, 20, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-6 bg-gradient-to-b from-cyan-300 via-purple-300 to-blue-400 rounded-full mt-4 shadow-lg shadow-cyan-400/40"
                style={{
                  transformStyle: "preserve-3d"
                }}
              />
            </div>
            {/* 3D Enhanced pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 w-16 h-24 -left-3 -top-4 border-2 border-cyan-400/30 rounded-full"
              style={{
                transformStyle: "preserve-3d"
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(12)].map((_, i) => {
          const depth = Math.random() * 100 - 50;
          return (
            <motion.div
              key={i}
              className="absolute text-white/5 font-mono text-sm"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                transform: `translateZ(${depth}px)`
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.1, 0],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            >
              {['010101', '404', '200 OK', 'npm start', 'git commit', 'localhost', 'API', 'JSON', 'TypeScript', 'Next.js', 'React', 'Node.js'][i]}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

