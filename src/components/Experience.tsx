import React from "react";
import { TracingBeam } from "./ui/TracingBeam";

const experiences = [
  {
    role: "Software Engineer",
    company: "SOLO LLC",
    period: "October 2023 - Present",
    location: "Remote (USA Client)",
    type: "Senior · Cloud Architecture",
    achievements: [
      "Architected event-driven notification system using AWS SNS/SQS processing 30K+ daily alerts with 99.9% reliability",
      "Modernized user profile interface serving 200K+ users while maintaining full backward compatibility",
      "Refactored routing logic across 15+ core pages, improving navigation and reducing API calls by 50%",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Zustand",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    role: "Software Engineer",
    company: "TechBol",
    period: "July 2022 - August 2023",
    location: "Bolivia",
    type: "Full Stack · Real-Time Systems",
    achievements: [
      "Developed real-time financial sync module using WebSockets for 20+ branches, reducing latency by 50%",
      "Implemented dynamic PDF generation with cloud storage, accelerating finance integration by 70%",
      "Designed microservices architecture with Kubernetes orchestration for high-availability deployment",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "React",
      "MobX",
      "Kubernetes",
      "PostgreSQL",
      "AWS S3",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "START Americas Together",
    period: "January 2022 - June 2022",
    location: "Remote",
    type: "DevOps · CI/CD",
    achievements: [
      "Configured GitHub Actions CI/CD pipelines with automated testing and secrets management",
      "Reduced deployment time by 80% eliminating manual deployment errors",
      "Implemented automated build processes improving team productivity and code quality",
    ],
    technologies: ["TypeScript", "React", "Node.js", "GitHub Actions"],
  },
  {
    role: "Frontend Developer",
    company: "WALAWA",
    period: "June 2021 - November 2021",
    location: "Bolivia",
    type: "Frontend · Data Visualization",
    achievements: [
      "Developed D3.js analytics dashboard visualizing scooter usage and revenue across city zones",
      "Implemented responsive data visualization components improving business intelligence insights",
      "Collaborated with backend team integrating Django REST APIs for real-time data updates",
    ],
    technologies: ["JavaScript", "React", "D3.js", "Python", "Django"],
  },
];

export const Experience: React.FC = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-32 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Professional Journey
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 sm:text-lg">
            4+ years of evolution from frontend specialist to cloud architecture
            engineer
          </p>
        </div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16">
                <div className="mb-4">
                  <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
                    {exp.period}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-zinc-300 mb-1">{exp.company}</p>
                  <div className="flex flex-wrap gap-2 items-center text-sm text-zinc-400">
                    <span>{exp.location}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm leading-relaxed flex"
                    >
                      <span className="text-blue-500 mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {index < experiences.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};
