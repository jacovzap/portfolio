import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-[00px] w-full flex-col items-center justify-center overflow-hidden bg-black pt-12 md:pt-32 antialiased"
    >
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 md:mb-16 bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl leading-tight pb-2">
          Let's Build Something Great
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Currently open to remote opportunities worldwide. Specialized in
          cloud-native architecture, event-driven systems, and high-performance
          full-stack applications.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/Jacobo_Covarrubias.pdf"
            download="Jacobo_Covarrubias_CV.pdf"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 px-8 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download CV
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"></div>
          </a>

          <a
            href="mailto:jacobo.covarrubias.zapata@gmail.com"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-white px-8 font-semibold text-black transition-all duration-300 hover:bg-zinc-100"
          >
            <span className="relative z-10 flex items-center gap-2">
              <IconMail className="h-5 w-5" />
              Get in Touch
            </span>
          </a>
        </div>

        <div className="ml-4 flex items-center justify-center gap-6">
          <a
            href="mailto:jacobo.covarrubias.zapata@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-400"
          >
            <IconMail className="h-5 w-5" />
            <span className="text-sm">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/jacovzap"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-blue-400"
          >
            <IconBrandLinkedin className="h-5 w-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="mt-12 md:mt-16 border-t border-zinc-800 pt-6 md:pt-8 pb-4">
          <p className="text-sm text-zinc-500">
            © 2025 Jacobo Covarrubias Zapata. Built with Astro, React, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
