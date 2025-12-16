import React from "react";
import { motion } from "framer-motion";

export const HeaderNodes = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden flex-col items-center justify-center">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>

      {/* Animated Pulses */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_2px_rgba(59,130,246,0.3)]"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: Math.random() * 200 - 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>

      <div className="z-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Event Bus / SQS
      </div>
    </div>
  );
};

export const HeaderStream = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center">
      <div className="absolute inset-0 flex flex-col justify-evenly opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="z-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        High Throughput
      </div>
    </div>
  );
};

export const HeaderApp = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center p-4">
      <div className="w-full max-w-[200px] flex flex-col gap-2 opacity-50">
        {/* Skeleton Header */}
        <div className="h-2 w-1/3 bg-zinc-700/50 rounded-full"></div>

        {/* Skeleton Body */}
        <div className="flex gap-2 h-12">
          <div className="w-1/4 h-full bg-zinc-800/50 rounded-md"></div>
          <div className="w-3/4 h-full flex flex-col gap-2">
            <motion.div
              className="h-full bg-zinc-800/30 rounded-md"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeaderSync = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 border border-zinc-800 rounded-full flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 border border-blue-500/30 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border border-indigo-500/30 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>
      </div>
    </div>
  );
};
