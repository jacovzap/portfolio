import React from "react";

interface Technology {
  name: string;
  reason: string;
}

export const TechStackTable = ({
  technologies,
}: {
  technologies: Technology[];
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/80">
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-blue-400">
              Technology
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-blue-400">
              Why We Chose It
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {technologies.map((tech, index) => (
            <tr key={index} className="transition-colors hover:bg-zinc-800/30">
              <td className="px-6 py-4">
                <code className="rounded bg-zinc-800 px-2 py-1 text-sm font-mono text-blue-300">
                  {tech.name}
                </code>
              </td>
              <td className="px-6 py-4 text-sm leading-relaxed text-zinc-300">
                {tech.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
