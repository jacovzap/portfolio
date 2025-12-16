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
    slug: "event-notification-engine",
  },
  {
    title: "Distributed Financial Reconciliation",
    description:
      "Real-time financial operations platform eliminating revenue leakage for national retail chain with 20+ branches.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-80"></div>
    ),
    icon: <IconCloud className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
    slug: "financial-reconciliation-system",
  },
  {
    title: "Industrial ERP & Cost Accounting",
    description:
      "Specialized ERP for artisan leather producers with government-mandated on-premise deployment and data sovereignty.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 opacity-80"></div>
    ),
    icon: <IconBrandReact className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-1",
    slug: "industrial-erp-system",
  },
  {
    title: "Mediasist: Medical Practice SaaS",
    description:
      "Hybrid SaaS platform for medical scheduling with event-driven architecture designed for future AI agent integration.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-80"></div>
    ),
    icon: <IconHeartbeat className="h-4 w-4 text-neutral-300" />,
    className: "md:col-span-2",
    slug: "mediasist-saas",
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
              href={`/projects/${item.slug}`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
