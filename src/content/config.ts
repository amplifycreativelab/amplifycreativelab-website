import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // Core fields (existing)
      title: z.string(),
      description: z.string(),
      publishDate: z.string(), // YYYY-MM-DD
      author: z.string().default("Amplify Creative Lab"),
      category: z.string().optional(),
      readTime: z.string().optional(),
      // Use image() helper for local assets OR string for URLs/public paths
      featuredImage: z.union([image(), z.string()]).optional(),
      featuredImageAlt: z.string().optional(),
      featuredImagePosition: z.string().default("center center"),
      tags: z.array(z.string()).default([]),
      canonicalUrl: z.string().url().optional(),

      // GEO Enhancement Fields (new - all optional for backward compatibility)
      updatedDate: z.string().optional(), // YYYY-MM-DD - Shows "Last updated" for freshness signals
      ogTitle: z.string().optional(), // Separate OG title for social sharing
      ogDescription: z.string().optional(), // Separate OG description for social sharing
      keywords: z.array(z.string()).default([]), // Extended keyword list for internal SEO tracking

      // Structured FAQ for schema generation (enables FAQPage schema)
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),

      // Service schema connection for internal linking
      relatedServices: z
        .array(
          z.enum([
            "food-photography",
            "product-photography",
            "event-photography",
            "web-design",
            "digital-marketing",
            "corporate-video-production",
            "social-media-content",
            "content-strategy",
            "website-development",
            "photography",
            "videography",
            "video-production",
            "social-media-marketing",
            "menu-design",
            "local-seo",
            "brand-identity",
            "drone-photography",
            "content-creation",
          ])
        )
        .optional(),

      // Geographic targeting for local SEO
      targetLocations: z
        .array(z.string())
        .default(["Perth", "Western Australia"]),
    }),
});

export const collections = {
  blog,
};
