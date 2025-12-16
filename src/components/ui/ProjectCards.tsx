import { cn } from "../../lib/utils";
import React from "react";

export const ContextCard = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
      <div className="relative h-full rounded-lg border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
          {title}
        </h3>
        <div className="text-sm leading-relaxed text-zinc-300">{children}</div>
      </div>
    </div>
  );
};

export const MetricCard = ({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-blue-500/50",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative z-10">
        <div className="mb-2 text-4xl font-bold text-white">{value}</div>
        <div className="text-sm uppercase tracking-wide text-zinc-400">
          {label}
        </div>
      </div>
    </div>
  );
};
