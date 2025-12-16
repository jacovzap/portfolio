import { cn } from "../../lib/utils";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Challenge {
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export const ChallengeAccordion = ({
  challenges,
}: {
  challenges: Challenge[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-zinc-800/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-white">
                {challenge.title}
              </h3>
            </div>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-5 w-5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="space-y-4 border-t border-zinc-800 p-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {challenge.problem}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {challenge.solution}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Impact
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {challenge.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
