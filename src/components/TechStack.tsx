import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const techStack = [
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    iconSlug: "amazon",
  },
  {
    name: "NestJS",
    category: "Framework",
    iconSlug: "nestjs",
  },
  {
    name: "TypeScript",
    category: "Language",
    iconSlug: "typescript",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    iconSlug: "nodedotjs",
  },
  {
    name: "Docker",
    category: "Containerization",
    iconSlug: "docker",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    iconSlug: "kubernetes",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    iconSlug: "postgresql",
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    iconSlug: "nextdotjs",
  },
  {
    name: "React",
    category: "Frontend Framework",
    iconSlug: "react",
  },
  {
    name: "S3",
    category: "Cloud Storage",
    iconSlug: "amazons3",
  },
  {
    name: "SNS/SQS",
    category: "Message Queue",
    iconSlug: "amazonsqs",
  },
];

export const TechStack: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 py-12 md:py-32 antialiased">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trusted Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 sm:text-lg">
            Core technologies used to architect scalable, high-performance
            systems
          </p>
        </div>
        <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
      </div>
    </section>
  );
};
