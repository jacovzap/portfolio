import React from "react";
import { motion } from "framer-motion";

export const HeaderEventBus = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.6)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 35;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_6px_rgba(251,191,36,0.5)]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-8 bg-gradient-to-t from-orange-500/40 to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 60}deg)`,
                left: "50%",
                bottom: "50%",
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="relative z-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Event Distribution
      </div>
    </div>
  );
};

export const HeaderFinancialFlow = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 px-4">
        <div className="relative h-0.5">
          <motion.div
            className="absolute h-full w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            animate={{ x: ["0%", "300%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="relative h-0.5">
          <motion.div
            className="absolute h-full w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            animate={{ x: ["300%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        Real-Time Sync
      </div>
    </div>
  );
};

export const HeaderERPModules = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center p-4">
      <div className="grid grid-cols-3 gap-2 w-full max-w-[140px]">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square bg-zinc-800/80 rounded border border-zinc-700"
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-1 h-1 bg-purple-400/40 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-600 uppercase tracking-widest">
        ERP Modules
      </div>
    </div>
  );
};

export const HeaderMedicalCalendar = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-zinc-900/50 border border-zinc-800 relative overflow-hidden items-center justify-center">
      <div className="grid grid-cols-4 gap-1.5 w-full max-w-[160px] px-4">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 bg-zinc-800/60 rounded-sm border border-zinc-700/30"
            animate={{
              backgroundColor:
                i % 3 === 0
                  ? ["#27272a60", "#4338ca40", "#27272a60"]
                  : "#27272a60",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-2 right-2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
      </motion.div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-600 uppercase tracking-widest">
        Scheduling
      </div>
    </div>
  );
};
