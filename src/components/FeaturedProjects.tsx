import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconCloud,
  IconBrandReact,
  IconServer,
  IconBrandNextjs,
  IconHeartbeat,
} from "@tabler/icons-react";

const projects = [
  {
    title: "High-Scale Event Notification Engine",
    description:
      "Architected a serverless event-driven system using AWS SNS/SQS to process 30k+ daily events with 99.9% reliability.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 opacity-80"></div>
    ),
    icon: <IconServer className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-2",
  },
  {
    title: "Financial Real-Time Sync",
    description:
      "Reduced data latency by 50% across 20+ branches using WebSockets and Kubernetes orchestration.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-80"></div>
    ),
    icon: <IconCloud className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
  },
  {
    title: "ACSYS Resource Planning",
    description:
      "Fullstack ERP solution for artisan producers with modern React UI and containerized deployment.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 opacity-80"></div>
    ),
    icon: <IconBrandReact className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
  },
  {
    title: "High-Performance Media Streaming",
    description:
      "Optimized Next.js streaming platform for Latin American market with SSR/SSG architecture. Reduced bandwidth by 40% while maintaining UX quality and handling 50k+ monthly active users.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 opacity-80"></div>
    ),
    icon: <IconBrandNextjs className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
  },
  {
    title: "Medical Practice SaaS Management System",
    description:
      "Production-ready SaaS solution for medical appointment scheduling and patient management. Scalable full-stack architecture currently in pre-MVP phase with imminent market launch.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-80"></div>
    ),
    icon: <IconHeartbeat className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
  },
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-12 md:py-32 antialiased"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Case Studies
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 sm:text-lg">
            Solving complex problems at scale with cloud-native architecture
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
