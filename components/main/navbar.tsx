"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("#about-me");
  const [isMobile, setIsMobile] = useState(false);
  
  const navbarRef = useRef(null);
  const { scrollY } = useScroll();
  
  const navbarOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setIsScrolled(currentScrollY > 10);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const floatingAnimation = useMemo(() => 
    isMobile ? {} : {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }, [isMobile]
  );

  const glowAnimation = useMemo(() =>
    isMobile ? {} : {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }, [isMobile]
  );

  return (
    <motion.div
      ref={navbarRef}
      className="w-full h-[65px] md:h-[75px] fixed top-0 z-50 px-2 md:px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        opacity: navbarOpacity,
      }}
    >
      <motion.div
        className={`w-full h-full rounded-b-2xl md:rounded-b-3xl transition-all duration-300 ${
          isScrolled 
            ? "bg-[#030014]/98 shadow-xl shadow-black/40" 
            : "bg-[#030014]/95 shadow-md shadow-black/40"
        }`}
      >
        {/* Simplified background for mobile */}
        {!isMobile && (
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-3xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? "w-1 h-1 bg-cyan-400/40" : 
                  i % 3 === 1 ? "w-2 h-2 bg-purple-500/35" : 
                  "w-1.5 h-1.5 bg-pink-400/30"
                }`}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i * 7) % 60}%`, // no Math.random
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.4, 1],
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

            <motion.div
              className="absolute top-0 left-1/4 w-48 h-48 bg-purple-600/20 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-0 right-1/4 w-36 h-36 bg-cyan-600/15 rounded-full"
              animate={{
                scale: [1.1, 0.9, 1.1],
                opacity: [0.2, 0.4, 0.2],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-b-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-cyan-500/15 to-purple-500/20 bg-clip-padding"
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
        )}

        <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl px-3 md:px-6">
          {/* Logo */}
          <motion.div
            whileHover={!isMobile ? { scale: 1.04 } : {}}
            whileTap={{ scale: 0.95 }}
            animate={floatingAnimation}
            className="flex-shrink-0"
          >
            <Link href="#about-me" className="flex items-center group">
              <motion.div
                whileHover={!isMobile ? { rotate: 360, scale: 1.08 } : {}}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={isMobile ? 40 : 50}
                  height={isMobile ? 40 : 50}
                  draggable={false}
                  className="cursor-pointer rounded-full border-2 border-purple-500/50 group-hover:border-cyan-400/70 transition-all duration-300"
                  priority
                />
              </motion.div>
              <motion.div 
                className="hidden md:flex font-bold ml-4 text-gray-200 bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent text-lg"
              >
                Aryan
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 max-w-2xl h-full flex-row items-center justify-center">
            <motion.div 
              className="flex items-center justify-between w-full h-auto border-2 border-[rgba(112,66,248,0.5)] bg-[rgba(3,0,20,0.9)] px-10 py-4 rounded-2xl text-gray-200 shadow-md relative overflow-hidden"
              transition={{ duration: 0.3 }}
              animate={glowAnimation}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
                  whileHover={{ y: -2, scale: 1.03 }}
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
                      whileHover={{ width: "80%", left: "10%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Social Icons - Desktop Only */}
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
                whileHover={{ scale: 1.15, y: -2 }}
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
                    className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 transition-all duration-300 relative z-10"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2 + index,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none relative z-60 p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border-2 border-purple-500/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center relative"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              animate={isMobileMenuOpen ? "open" : "closed"}
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

      {/* Mobile Menu - Optimized */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#030014]/99 border-t-2 border-purple-500/40 md:hidden overflow-hidden rounded-b-2xl shadow-xl shadow-black/50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="p-6 flex flex-col items-center space-y-4 relative z-10 max-h-[80vh] overflow-y-auto"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.title}
                  variants={itemVariants}
                  className="w-full text-center"
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.link}
                    className="cursor-pointer text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 py-3 block rounded-xl bg-gradient-to-r from-transparent to-purple-500/10 hover:to-purple-500/15 border border-transparent hover:border-purple-500/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                variants={itemVariants}
                className="flex justify-center gap-4 pt-6 border-t border-purple-500/40 w-full"
              >
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/50">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 md:h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.div>
  );
};


