import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    keyMetric: z.string(),
    oneLiner: z.string(),

    // Business Context
    businessProblem: z.string(),
    constraints: z.array(z.string()),
    role: z.string(),

    // Technical Architecture
    architecture: z.object({
      description: z.string(),
      diagramPath: z.string().optional(),
      technologies: z.array(
        z.object({
          name: z.string(),
          reason: z.string(),
        })
      ),
    }),

    // Engineering Challenges
    challenges: z.array(
      z.object({
        title: z.string(),
        problem: z.string(),
        solution: z.string(),
        impact: z.string(),
      })
    ),

    // Results
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),

    // Visual Assets
    screenshots: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
