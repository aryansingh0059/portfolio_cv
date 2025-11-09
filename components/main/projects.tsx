// import { PROJECTS } from "@/constants";
// import { ProjectCard } from "@/components/sub/project-card";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="flex flex-col items-center justify-center py-20"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         {PROJECTS.map((project) => (
//           <ProjectCard
//             key={project.title}
//             src={project.image}
//             title={project.title}
//             description={project.description}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };


"use client";

import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Make sure this is exported correctly
export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 px-5 min-h-screen  overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 py-8"
        >
          My Projects
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 120 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-6"
        >
          Crafting digital experiences that blend innovation with functionality
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="text-center mt-16 relative z-10"
      >
        <motion.p
          className="text-gray-400 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.7 }}
        >
          Like what you see? Let&apos;s build something amazing together!
        </motion.p>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(45deg, #8B5CF6, #06B6D4)",
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.9 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">View All Projects</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};