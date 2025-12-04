import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(), // YYYY-MM-DD
    author: z.string().default("Amplify Creative Lab"),
    category: z.string().optional(),
    readTime: z.string().optional(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    featuredImagePosition: z.string().default("center center"),
    tags: z.array(z.string()).default([]),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  blog,
};
