"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const HeroContent = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const roles = useMemo(() => ["Developer", "Freelancer", "Debugger"], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex];

  const techCards = useMemo(
    () => [
      { icon: "/skills/react.png", label: "React", top: "6%", left: "30%", delay: 0.2 },
      { icon: "/skills/js.png", label: "JavaScript", top: "14%", left: "68%", delay: 0.4 },
      { icon: "/skills/firebase.png", label: "Firebase", top: "30%", left: "50%", delay: 0.6 },
      { icon: "/skills/framer.png", label: "Framer", top: "40%", left: "20%", delay: 0.8 },
      { icon: "/skills/tauri.png", label: "Tauri", top: "40%", left: "76%", delay: 1 },
      { icon: "/skills/ts.png", label: "TypeScript", top: "52%", left: "56%", delay: 1.2 },
      { icon: "/skills/graphql.png", label: "GraphQL", top: "66%", left: "22%", delay: 1.4 },
      { icon: "/skills/next.png", label: "Next.js", top: "70%", left: "68%", delay: 1.6 },
      { icon: "/skills/css.png", label: "CSS", top: "84%", left: "36%", delay: 1.8 },
      { icon: "/skills/html.png", label: "HTML", top: "84%", left: "76%", delay: 2 },
    ],
    []
  );

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 55 : 95;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentRole.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentRole, roles]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 lg:px-20 pt-28 md:pt-32 pb-14 w-full z-[20] gap-8 md:gap-12"
    >
      <div className="h-full w-full max-w-2xl flex flex-col gap-4 md:gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-2.5 px-4 border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0 backdrop-blur-sm"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-xs md:text-[13px] font-medium">
            Full-Stack Developer | MERN
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 md:gap-4 mt-3 md:mt-6 text-5xl sm:text-6xl md:text-7xl font-bold text-white max-w-full leading-[1.02]"
        >
          <span className="px-2 md:px-0">
            <span className="block mb-1 md:mb-2">
              Hi, I&apos;m {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Aryan
              </span>
            </span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                I&apos;m {displayText}
              </span>
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg md:text-xl text-gray-300/90 my-4 md:my-6 max-w-[640px] font-mono leading-relaxed px-2 md:px-0"
        >
          I design and build high-performance web experiences that are elegant, scalable, and reliable. I focus on clean architecture, thoughtful UX, and production-ready engineering that helps ideas ship faster.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 w-fit mx-auto md:mx-0"
        >
          View Projects
        </motion.a>
      </div>

      {!isMobile && (
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full hidden md:flex justify-center items-center"
        >
          <div className="relative w-[560px] h-[560px] select-none">
            <div className="absolute inset-8 rounded-full border border-cyan-500/20" />
            <div className="absolute inset-20 rounded-full border border-cyan-500/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.16),transparent_60%)]" />

            {techCards.map((card) => (
              <motion.div
                key={card.label}
                className="absolute"
                style={{ top: card.top, left: card.left }}
                initial={{ opacity: 0, scale: 0.75, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  delay: card.delay,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-20 h-20 rounded-2xl bg-slate-900/55 border border-slate-500/40 backdrop-blur-md shadow-2xl shadow-cyan-900/20 grid place-items-center">
                  <Image src={card.icon} alt={card.label} width={40} height={40} className="opacity-90" />
                </div>
              </motion.div>
            ))}

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-cyan-400/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};