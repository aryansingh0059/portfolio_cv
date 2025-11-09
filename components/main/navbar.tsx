
"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  
  const navbarRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Enhanced parallax effects
  const navbarOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [12, 16]);
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.995]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setIsScrolled(currentScrollY > 10);
      
      // Always keep navbar visible - no hiding on scroll down
      setIsVisible(true);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10, scale: 0.9 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  // Enhanced floating animation
  const floatingAnimation = {
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Glowing pulse animation
  const glowAnimation = {
    scale: [1, 1.02, 1],
    boxShadow: [
      "0 0 20px rgba(112,66,248,0.3)",
      "0 0 40px rgba(112,66,248,0.6)",
      "0 0 20px rgba(112,66,248,0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      ref={navbarRef}
      className="w-full h-[75px] fixed top-0 z-50 px-4"
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
      }}
      style={{
        opacity: navbarOpacity,
        scale: navbarScale,
      }}
    >
      {/* Main Navbar Container with Enhanced Background */}
      <motion.div
        className={`w-full h-full rounded-b-3xl transition-all duration-500 ${
          isScrolled 
            ? "bg-[#030014]/98 shadow-2xl shadow-[#2A0E61]/50" 
            : "bg-[#030014]/90 shadow-xl shadow-[#2A0E61]/30"
        }`}
        style={{
          backdropFilter: `blur(${navbarBlur}px)`,
        }}
        whileHover={{
          boxShadow: "0 20px 60px rgba(112,66,248,0.4)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-3xl">
          {/* Floating particles with more variety */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? "w-1 h-1 bg-cyan-400/50" : 
                i % 3 === 1 ? "w-2 h-2 bg-purple-500/40" : 
                "w-1.5 h-1.5 bg-pink-400/30"
              }`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Enhanced nebula effects */}
          <motion.div
            className="absolute top-0 left-1/4 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-0 right-1/4 w-36 h-36 bg-cyan-600/15 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.2, 0.4, 0.2],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-b-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-purple-500/30 bg-clip-padding"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        {/* Navbar Content */}
        <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl px-6">
          {/* Enhanced Logo + Name with better animations */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            animate={floatingAnimation}
            className="flex-shrink-0"
          >
            <Link href="#about-me" className="flex items-center group">
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.15
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  scale: { type: "spring", stiffness: 400 }
                }}
                className="relative"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  draggable={false}
                  className="cursor-pointer rounded-full border-2 border-purple-500/50 group-hover:border-cyan-400/70 transition-all duration-300 relative z-10"
                />
                {/* Enhanced pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/50 to-cyan-500/50 blur-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Orbiting particles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <motion.div 
                className="hidden md:flex font-bold ml-4 text-gray-200 bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent text-lg"
                whileHover={{ 
                  scale: 1.1,
                  backgroundPosition: "100% 50%",
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400,
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
              >
                Aryan
              </motion.div>
            </Link>
          </motion.div>

          {/* Enhanced Web Navigation */}
          <div className="hidden md:flex flex-1 max-w-2xl h-full flex-row items-center justify-center">
            <motion.div 
              className="flex items-center justify-between w-full h-auto border-2 border-[rgba(112,66,248,0.5)] bg-[rgba(3,0,20,0.7)] backdrop-blur-xl px-10 py-4 rounded-2xl text-gray-200 shadow-2xl relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 0 60px rgba(112,66,248,0.7)",
                borderColor: "rgba(112,66,248,0.8)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              animate={glowAnimation}
            >
              {/* Animated background sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                animate={{
                  x: [-400, 400],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 12
                    }
                  }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative z-10"
                >
                  <Link
                    href={link.link}
                    className={`cursor-pointer transition-all duration-300 relative group px-4 py-2 rounded-xl ${
                      activeLink === link.link 
                        ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActiveLink(link.link)}
                  >
                    <span className="relative z-10 font-medium">{link.title}</span>
                    <motion.span 
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      whileHover={{ 
                        width: "80%", 
                        left: "10%",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Social Icons */}
          <div className="hidden md:flex flex-row gap-4 flex-shrink-0">
            {SOCIALS.map(({ link, name, icon: Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -5, 5, 0],
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative block"
                >
                  <motion.div
                    className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 group-hover:border-cyan-400/60 transition-all duration-300 relative z-10 backdrop-blur-sm"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2 + index,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Enhanced particle effects */}
                  <AnimatePresence>
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-cyan-500/40 blur-md scale-0"
                      whileHover={{
                        scale: 1.4,
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      initial={{ scale: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                    />
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none relative z-60 p-3 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border-2 border-purple-500/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            animate={isMobileMenuOpen ? "open" : "closed"}
            whileHover={{ 
              scale: 1.1, 
              borderColor: "rgba(112,66,248,0.8)",
              boxShadow: "0 0 20px rgba(112,66,248,0.5)"
            }}
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center relative"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.span
                className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 absolute rounded-full"
                variants={{
                  closed: { rotate: 0, y: -4 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 absolute rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 absolute rounded-full"
                variants={{
                  closed: { rotate: 0, y: 4 },
                  open: { rotate: -45, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#030014]/99 backdrop-blur-2xl border-t-2 border-purple-500/40 md:hidden overflow-hidden rounded-b-3xl shadow-2xl shadow-[#2A0E61]/60"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Mobile menu background effects */}
            <div className="absolute inset-0 -z-10 rounded-b-3xl">
              <motion.div
                className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-500/25 to-transparent rounded-b-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <motion.div
              className="p-8 flex flex-col items-center space-y-6 relative z-10"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Navigation Links */}
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.title}
                  variants={itemVariants}
                  className="w-full text-center"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.link}
                    className="cursor-pointer text-gray-300 hover:text-white text-xl font-medium transition-all duration-300 relative group py-4 block rounded-2xl bg-gradient-to-r from-transparent to-purple-500/10 hover:to-purple-500/20 border border-transparent hover:border-purple-500/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                    <motion.span 
                      className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      whileHover={{ width: "50%", left: "25%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center gap-6 pt-8 border-t border-purple-500/40 w-full"
              >
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/50 group-hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
        style={{
          width: `${scrollProgress}%`
        }}
        animate={{
          backgroundPosition: ["0%", "100%", "0%"],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};
