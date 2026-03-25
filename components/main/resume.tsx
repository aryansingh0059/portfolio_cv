"use client";

import { ArrowDownTrayIcon, DocumentTextIcon, SparklesIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="relative flex flex-col items-center justify-center py-24 px-5 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-5 py-2 backdrop-blur-md">
            <SparklesIcon className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-200">Resume PDF</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Preview my actual resume directly here and download it in one click.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-3 md:p-4"
        >
          <iframe
            src="/resume.pdf#view=FitH"
            title="Aryan resume preview"
            className="w-full h-[70vh] rounded-xl bg-slate-950"
          />
          <p className="text-xs text-gray-400 mt-3 px-2">
            If preview does not load on your browser, use the View or Download buttons below.
          </p>
        </motion.div>

        <div className="mt-8 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-slate-900/70 to-slate-800/70 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <DocumentTextIcon className="h-6 w-6 text-cyan-400" />
                Resume Actions
              </h3>
              <p className="text-gray-300 mt-2">
                Open in a new tab for full-screen view or download the PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white font-semibold hover:border-cyan-400/50 transition-colors"
              >
                <DocumentTextIcon className="h-5 w-5" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
