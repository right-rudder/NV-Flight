import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    keywords: z.string().optional(),
    readingTime: z.number(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imagePath: z.string(),
    imageAlt: z.string(),
    introduction: z.string().optional(),
    part: z.string().optional(), // "Part 141/61", "Part 61"
    syllabus: z.string().optional(), // "Gleim"
    highlights: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    idealFor: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
  programs: programs,
};
