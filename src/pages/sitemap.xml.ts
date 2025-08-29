import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  // Get all blog posts
  const blogPosts = await getCollection("blog");
  // Get all programs
  const programs = await getCollection("programs");

  // Define static pages with priorities
  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/become-a-pilot", priority: 0.9, changefreq: "monthly" },
    { url: "/programs", priority: 0.9, changefreq: "monthly" },
    { url: "/blog", priority: 0.8, changefreq: "weekly" },
    { url: "/nv-flight-about", priority: 0.7, changefreq: "monthly" },
    { url: "/nv-flight-about/team", priority: 0.7, changefreq: "monthly" },
    { url: "/nv-flight-about/our-fleet", priority: 0.7, changefreq: "monthly" },
    { url: "/contact", priority: 0.6, changefreq: "monthly" },
    { url: "/discovery-flight", priority: 0.8, changefreq: "monthly" },
    { url: "/enroll", priority: 0.8, changefreq: "monthly" },
  ];

  // Generate XML
  const siteUrl = "https://nvflight.com";
  const currentDate = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Add static pages
  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`;
  }

  // Add blog posts
  for (const post of blogPosts) {
    const lastmod = post.data.updatedDate || post.data.pubDate;
    xml += `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <mobile:mobile/>
  </url>`;
  }

  // Add programs
  for (const program of programs) {
    xml += `
  <url>
    <loc>${siteUrl}/programs/${program.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <mobile:mobile/>
  </url>`;
  }

  xml += `
</urlset>`;

  // Return response
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
};
