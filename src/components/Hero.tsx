import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name = "Jacobo Covarrubias",
  title = "Fullstack Engineer & Cloud Architect",
  description = "Building scalable cloud-native applications with TypeScript, Node.js, NestJS, AWS, and React. Specialized in microservices architecture and high-performance backend systems.",
}) => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black antialiased py-12 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-sm font-medium uppercase tracking-widest text-transparent sm:text-base"
          >
            Portfolio — 2025
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
          >
            {name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl lg:text-5xl leading-tight pb-1"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-3x text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 px-8 font-medium text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/20 transition-all duration-300 hover:shadow-blue-500/50 hover:ring-blue-500/40"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg border-2 border-zinc-700 bg-transparent px-8 font-medium text-white transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-zinc-500/20"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "TypeScript",
              "Node.js",
              "NestJS",
              "AWS",
              "React",
              "PostgreSQL",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="group relative inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:text-white select-none"
                style={{ willChange: "opacity, transform" }}
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute -inset-[1px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-border-beam">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-75 blur-sm"></div>
                  <div className="absolute inset-[1px] rounded-full bg-zinc-900"></div>
                </div>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Scroll
          </span>
          <svg
            className="h-6 w-6 text-zinc-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
