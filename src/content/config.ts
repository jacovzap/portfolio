import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),

    category: z.enum([
      "fullstack",
      "backend",
      "cloud-architecture",
      "devops",
      "microservices",
    ]),
    tags: z.array(z.string()),

    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),

    client: z.string().optional(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    role: z.string(),

    stack: z.object({
      frontend: z.array(z.string()).optional(),
      backend: z.array(z.string()),
      infrastructure: z.array(z.string()),
      databases: z.array(z.string()).optional(),
      tools: z.array(z.string()).optional(),
    }),

    metrics: z
      .object({
        performance: z.string().optional(),
        scalability: z.string().optional(),
        cost: z.string().optional(),
        reliability: z.string().optional(),
      })
      .optional(),

    architectureDiagram: z.string().optional(),
    mockups: z.array(z.string()).optional(),

    featured: z.boolean().default(false),
    order: z.number().default(999),
    status: z.enum(["draft", "published"]).default("published"),

    liveUrl: z.string().url().optional(),
    caseStudyPdf: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
