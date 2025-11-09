
"use client";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from "@/constants";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
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

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-5 overflow-hidden "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Skills Text Component */}
      <SkillText />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Main Skills */}
        <motion.div variants={sectionVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
            Core Technologies
          </h3>
          {/* <div className="flex flex-row justify-center flex-wrap gap-8 items-center">
            {SKILL_DATA.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div> */}
        </motion.div>

        {/* Frontend Skills */}
        <motion.div variants={sectionVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8">
            Frontend Development
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-8 items-center">
            {FRONTEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={sectionVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-8">
            Backend Development
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-8 items-center">
            {BACKEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>

       

        {/* Other Skills */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 mb-8">
            Tools & Others
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-8 items-center">
            {OTHER_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Video */}
      <div className="w-full h-full absolute inset-0 z-0">
        <div className="w-full h-full opacity-20 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="text-center mt-16 relative z-10"
      >
        <motion.p
          className="text-gray-300 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.7 }}
        >
          Ready to bring your ideas to life with these technologies?
        </motion.p>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Let's Build Together
        </motion.button>
      </motion.div>
    </section>
  );
};
