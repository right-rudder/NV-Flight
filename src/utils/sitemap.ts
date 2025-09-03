// Custom sitemap utilities for better SEO optimization
import { getCollection } from "astro:content";

/**
 * Generate sitemap entries for blog posts with proper SEO attributes
 */
export async function getBlogSitemapEntries() {
  const blogPosts = await getCollection("blog");

  return blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.data.updatedDate || post.data.pubDate,
    changefreq: "monthly",
    priority: 0.8,
    // Add additional metadata for rich snippets
    meta: {
      title: post.data.title,
      description: post.data.description,
      author: post.data.author,
      published: post.data.pubDate,
      modified: post.data.updatedDate,
    },
  }));
}

/**
 * Generate sitemap entries for programs with proper SEO attributes
 */
export async function getProgramsSitemapEntries() {
  const programs = await getCollection("programs");

  return programs.map((program) => ({
    url: `/programs/${program.slug}`,
    lastmod: new Date(), // Programs are relatively static but may be updated
    changefreq: "monthly",
    priority: 0.9, // High priority for program pages
    meta: {
      title: program.data.title,
      description: program.data.description,
      part: program.data.part,
    },
  }));
}

/**
 * Define static pages with their SEO priorities and change frequencies
 */
export const staticPagesSEO = {
  "/": {
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date(),
  },
  "/become-a-pilot": {
    priority: 0.9,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/programs": {
    priority: 0.9,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/blog": {
    priority: 0.8,
    changefreq: "weekly",
    lastmod: new Date(),
  },
  "/nv-flight-about": {
    priority: 0.7,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/nv-flight-about/team": {
    priority: 0.7,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/nv-flight-about/our-fleet": {
    priority: 0.7,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/contact": {
    priority: 0.6,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/discovery-flight": {
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date(),
  },
  "/enroll": {
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date(),
  },
};

/**
 * Pages to exclude from sitemap (confirmation pages, error pages, legal pages)
 */
export const excludedPages = [
  "/404",
  "/500",
  "/contact-form-confirmation",
  "/discovery-form-confirmation",
  "/enroll-form-confirmation",
  "/privacy-policy",
  "/terms-of-service",
];
