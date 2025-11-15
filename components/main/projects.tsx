
"use client";

import { useMemo, useState } from "react";

import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 1. Define allowed status keys
const STATUS_KEYS = ["delivered", "maintenance", "progress"] as const;
type StatusKey = (typeof STATUS_KEYS)[number];

// 2. Status config (pure config – no filters here)
const PROJECT_STATUS: Record<
  StatusKey,
  {
    name: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
  }
> = {
  delivered: {
    name: "Delivered",
    description: "Successfully completed and launched projects",
    icon: "✅",
    color: "from-green-500 to-emerald-500",
    bgColor: "green",
  },
  maintenance: {
    name: "In Maintenance",
    description: "Projects currently under active maintenance and support",
    icon: "🔧",
    color: "from-blue-500 to-cyan-500",
    bgColor: "blue",
  },
  progress: {
    name: "In Progress",
    description: "Projects currently in active development",
    icon: "🚧",
    color: "from-orange-500 to-yellow-500",
    bgColor: "orange",
  },
};

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // which tab is active
  const [activeStatus, setActiveStatus] = useState<StatusKey>("delivered");

  // 3. Organize projects by status (computed once from PROJECTS)
  const projectsByStatus = useMemo(() => {
    return {
      delivered: PROJECTS.filter((p) => p.status === "delivered"),
      maintenance: PROJECTS.filter((p) => p.status === "maintenance"),
      progress: PROJECTS.filter((p) => p.status === "progress"),
    };
  }, []);

  // 4. Stats (always derived from projectsByStatus so it's in sync)
  const portfolioStats = useMemo(
    () => [
      {
        number: PROJECTS.length,
        label: "Total Projects",
        description: "Comprehensive portfolio",
      },
      {
        number: projectsByStatus.delivered.length,
        label: "Successfully Delivered",
        description: "Client satisfaction guaranteed",
      },
      {
        number: projectsByStatus.maintenance.length,
        label: "Under Maintenance",
        description: "Ongoing support & updates",
      },
      {
        number: projectsByStatus.progress.length,
        label: "In Development",
        description: "Active innovation",
      },
    ],
    [projectsByStatus]
  );

  // Framer variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // 5. Get the *current* stuff based on activeStatus
  const currentProjects = projectsByStatus[activeStatus];
  const currentStatus = PROJECT_STATUS[activeStatus];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 px-5 min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-orange-500/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* HEADER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 max-w-6xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Portfolio
            </span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Organized by project lifecycle – filter by status to explore different stages of
            development.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {STATUS_KEYS.map((statusKey) => {
            const status = PROJECT_STATUS[statusKey];
            const count = projectsByStatus[statusKey].length;

            return (
              <motion.button
                key={statusKey}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStatus(statusKey)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeStatus === statusKey
                    ? `bg-gradient-to-r ${status.color} text-white shadow-lg scale-105`
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span className="text-xl">{status.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{status.name}</div>
                  <div className="text-xs opacity-80">{count} projects</div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* MAIN CONTENT – ONLY ACTIVE STATUS SHOWN */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Active status title + description */}
        <motion.div
          key={`${activeStatus}-header`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl">{currentStatus.icon}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {currentStatus.name}
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {currentStatus.description}
          </p>
          <div
            className={`h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r ${currentStatus.color}`}
          />
        </motion.div>

        {/* Projects grid – ONLY filtered projects */}
        <motion.div
          key={`${activeStatus}-grid`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-5"
        >
          {currentProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {currentProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  {project.featured && (
                    <div className="absolute -top-2 -left-2 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  <div
                    className={`absolute -top-2 -right-2 z-20 bg-gradient-to-r ${currentStatus.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                  >
                    {currentStatus.icon} {currentStatus.name}
                  </div>

                  <ProjectCard
                    src={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    // technologies={project.technologies}
                    // status={activeStatus}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400 text-lg">
                There are no projects in the {currentStatus.name.toLowerCase()} category.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Status overview chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-4">
            Currently viewing{" "}
            <span className="text-white font-semibold">
              {currentProjects.length} {currentStatus.name.toLowerCase()}
            </span>{" "}
            projects
          </p>
          <div className="flex justify-center gap-2">
            {STATUS_KEYS.map((statusKey) => {
              const status = PROJECT_STATUS[statusKey];
              const count = projectsByStatus[statusKey].length;
              return (
                <div
                  key={statusKey}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                    activeStatus === statusKey
                      ? `bg-gradient-to-r ${status.color} text-white`
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  <span>{status.icon}</span>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="text-center mt-16 relative z-10 max-w-2xl"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            From concept to delivery and maintenance – I handle the complete project lifecycle.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
