"use client";

import {
  CpuChipIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { useState } from "react";

export const Encryption = () => {
  const [isLocked, setIsLocked] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lockVariants = {
    locked: { y: 0 },
    unlocked: { y: -30 }
  };

  const featureCards = [
    {
      icon: ShieldCheckIcon,
      title: "End-to-End Encryption",
      description: "Your data remains secure from source to destination"
    },
    {
      icon: LockClosedIcon,
      title: "Military Grade Security",
      description: "AES-256 encryption for maximum protection"
    },
    {
      icon: ServerIcon,
      title: "Secure Cloud Storage",
      description: "Data encrypted at rest and in transit"
    },
    {
      icon: CpuChipIcon,
      title: "Zero-Knowledge Protocol",
      description: "We never have access to your encryption keys"
    }
  ];

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <ShieldCheckIcon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-5"
      >
        {/* Main Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={slideInFromTop(0.2)}
            className="inline-flex items-center gap-3 py-3 px-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 mb-8"
          >
            <ShieldCheckIcon className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold text-sm">
              Enterprise-Grade Security
            </span>
            <LockClosedIcon className="w-5 h-5 text-purple-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white text-center mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Performance
            </span>
            <span className="text-white mx-4">&</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Security
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Advanced encryption technologies that keep your data secure 
            without compromising on performance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lock Animation Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsLocked(false)}
              onHoverEnd={() => setIsLocked(true)}
            >
              {/* Lock Container */}
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-12 shadow-2xl">
                {/* Animated Lock */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <motion.div
                    variants={lockVariants}
                    animate={isLocked ? "locked" : "unlocked"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/lock-top.png"
                      alt="Lock top"
                      width={60}
                      height={60}
                      className="transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src="/lock-main.png"
                      alt="Lock main"
                      width={80}
                      height={80}
                      className="z-10 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      boxShadow: isLocked 
                        ? "0 0 20px rgba(6, 182, 212, 0.3)"
                        : "0 0 40px rgba(147, 51, 234, 0.5)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                  />
                </div>

                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isLocked ? 1 : 0,
                    scale: isLocked ? 1 : 0 
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30 backdrop-blur-sm">
                    Secured
                  </div>
                </motion.div>
              </div>

              {/* Encryption Badge */}
              <motion.div
                variants={itemVariants}
                className="mt-8 py-3 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-cyan-500/20"
              >
                <h2 className="text-white font-bold text-lg text-center">
                  AES-256 Encryption
                </h2>
                <p className="text-cyan-300 text-sm text-center mt-1">
                  Military Grade Security
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
              Security Features
            </h3>

            {featureCards.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="flex items-start gap-4 p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <feature.icon className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-slate-700/30"
        >
          {[
            { number: "256-bit", label: "Encryption", icon: "🔒" },
            { number: "99.9%", label: "Uptime", icon: "⚡" },
            { number: "Zero", label: "Data Breaches", icon: "🛡️" },
            { number: "24/7", label: "Monitoring", icon: "👁️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 font-medium">
            Your data is protected with industry-leading security standards
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-cyan-400 text-sm mt-2 flex items-center justify-center gap-2"
          >
            <ShieldCheckIcon className="w-4 h-4" />
            End-to-end encrypted • Zero-knowledge architecture • GDPR compliant
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};