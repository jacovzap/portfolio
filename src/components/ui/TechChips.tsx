import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Technology {
  name: string;
  reason: string;
}

export const TechChips = ({ technologies }: { technologies: Technology[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {technologies.map((tech, index) => {
        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 backdrop-blur-sm cursor-pointer transition-colors hover:border-blue-500/50">
              <span className="text-sm font-medium text-zinc-300">
                {tech.name}
              </span>
            </motion.div>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-50"
                >
                  <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-3 shadow-xl backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                      Why we chose it
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-300">
                      {tech.reason}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-zinc-700" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
