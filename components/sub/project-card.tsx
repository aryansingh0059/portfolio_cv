"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BuildingLibraryIcon,
  ClockIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon as ExternalLinkIcon,
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  technologies?: string[];
  status?: "live" | "development" | "archived";
  duration?: string;
  category?: string;
  featured?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  technologies = [
    "MongoDB",
    "Express.js",
    "React",
    "Redux",
    "Next.js",
    "REST APIs",
    "JWT Authentication",
    "Socket.io",
    "Razorpay API",
    "AWS / Vercel",
  ],
  status = "live",
  duration = "3 months",
  category = "Web App",
  featured = false,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const statusColors = {
    live: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    development: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    archived: "bg-slate-500/20 text-slate-300 border-slate-500/40",
  };

  const statusIcons = {
    live: "🚀",
    development: "⚡",
    archived: "📦",
  };

  const techStyles: Record<string, string> = {
    MongoDB:
      "text-green-300 border-green-400/50 bg-green-400/10 shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]",
    "Express.js":
      "text-gray-300 border-gray-400/40 bg-gray-400/10 shadow-[0_0_10px_rgba(156,163,175,0.2)] hover:shadow-[0_0_20px_rgba(156,163,175,0.4)]",
    React:
      "text-cyan-300 border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",
    Redux:
      "text-purple-300 border-purple-400/50 bg-purple-400/10 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    "Next.js":
      "text-white border-white/40 bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    "REST APIs":
      "text-amber-300 border-amber-400/50 bg-amber-400/10 shadow-[0_0_10px_rgba(251,191,36,0.3)] hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]",
    "JWT Authentication":
      "text-rose-300 border-rose-400/50 bg-rose-400/10 shadow-[0_0_10px_rgba(244,63,94,0.3)] hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]",
    "Socket.io":
      "text-fuchsia-300 border-fuchsia-400/50 bg-fuchsia-400/10 shadow-[0_0_10px_rgba(217,70,239,0.3)] hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]",
    "Razorpay API":
      "text-blue-300 border-blue-400/50 bg-blue-400/10 shadow-[0_0_10px_rgba(96,165,250,0.3)] hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]",
    "AWS / Vercel":
      "text-orange-300 border-orange-400/50 bg-orange-400/10 shadow-[0_0_10px_rgba(251,146,60,0.3)] hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]",
  };

  return (
    <motion.div
      whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="absolute -top-3 -right-3 z-20"
        >
          <div className="relative">
            <SparklesIcon className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <SparklesIcon className="w-6 h-6 text-yellow-200 opacity-70" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/60 backdrop-blur-2xl border border-slate-700/60 hover:border-cyan-400/70 transition-all duration-700 shadow-2xl hover:shadow-cyan-500/30 h-full flex flex-col">

        {/* Gradient Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-purple-500/5" />
        </div>

        {/* Image Section */}
        <div className="relative h-52 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          )}

          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: isHovered ? 1.08 : 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className={`w-full h-full object-cover transition-all duration-1000 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

          {/* Glass Paper Hover Motion */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{
              x: isHovered ? "120%" : "-120%",
              opacity: isHovered ? 0.7 : 0,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
              repeatType: "mirror",
            }}
            className="absolute inset-0 bg-gradient-to-tr from-white/10 via-cyan-200/15 to-transparent backdrop-blur-[3px] mix-blend-overlay"
          />

          {/* Glow Aura */}
          <motion.div
            className="absolute -inset-2 rounded-3xl blur-3xl"
            animate={{
              opacity: isHovered ? 0.35 : 0,
              scale: isHovered ? 1.05 : 0.9,
            }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.3), rgba(168,85,247,0.15), transparent 70%)",
            }}
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-xl flex items-center gap-1 ${statusColors[status]}`}
            >
              <span>{statusIcons[status]}</span>
              {status === "live"
                ? "Live"
                : status === "development"
                ? "In Progress"
                : "Archived"}
            </span>
            <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs font-semibold border border-cyan-500/30 backdrop-blur-xl">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-7 flex-1 flex flex-col">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.25)] mb-3 line-clamp-1">
            {title}
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-500 mb-5 line-clamp-3">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5" />
                <span className="font-medium">{duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BuildingLibraryIcon className="w-3.5 h-3.5" />
                <span className="font-medium">{category}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <EyeIcon className="w-3.5 h-3.5" />
              <span className="font-semibold">Explore</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.08, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl border transition-all duration-300 ${
                    techStyles[tech] ||
                    "text-cyan-300 border-slate-600/50 bg-slate-800/60"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-5 border-t border-slate-700/50">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-sm font-bold rounded-xl hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-cyan-400/30 opacity-0 group-hover/btn:opacity-100 blur-md transition-opacity duration-500" />
                <EyeIcon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Live Demo</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800/80 text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-700 hover:text-white border border-slate-600/50 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm shadow-lg relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/40 to-slate-700/40 opacity-0 group-hover/btn:opacity-100 blur-md transition-opacity duration-500" />
                <CodeBracketIcon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Source Code</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
