// SEO and Sitemap monitoring utilities
import { getCollection } from "astro:content";

export interface SitemapStats {
  totalPages: number;
  staticPages: number;
  blogPosts: number;
  programs: number;
  lastGenerated: Date;
}

export interface SEOHealth {
  missingDescriptions: string[];
  duplicateTitles: string[];
  longTitles: string[];
  shortDescriptions: string[];
  recommendations: string[];
}

/**
 * Get comprehensive sitemap statistics
 */
export async function getSitemapStats(): Promise<SitemapStats> {
  const blogPosts = await getCollection("blog");
  const programs = await getCollection("programs");

  const staticPagesCount = 10; // Based on our static pages definition

  return {
    totalPages: staticPagesCount + blogPosts.length + programs.length,
    staticPages: staticPagesCount,
    blogPosts: blogPosts.length,
    programs: programs.length,
    lastGenerated: new Date(),
  };
}

/**
 * Analyze SEO health of content collections
 */
export async function analyzeSEOHealth(): Promise<SEOHealth> {
  const blogPosts = await getCollection("blog");
  const programs = await getCollection("programs");

  const missingDescriptions: string[] = [];
  const duplicateTitles: string[] = [];
  const longTitles: string[] = [];
  const shortDescriptions: string[] = [];
  const recommendations: string[] = [];

  const allTitles = new Set<string>();

  // Analyze blog posts
  for (const post of blogPosts) {
    const title = post.data.title;
    const description = post.data.description;

    // Check for missing descriptions
    if (!description || description.trim().length === 0) {
      missingDescriptions.push(`Blog: ${title}`);
    }

    // Check for short descriptions (< 120 characters)
    if (description && description.length < 120) {
      shortDescriptions.push(`Blog: ${title} (${description.length} chars)`);
    }

    // Check for long titles (> 60 characters)
    if (title.length > 60) {
      longTitles.push(`Blog: ${title} (${title.length} chars)`);
    }

    // Check for duplicate titles
    if (allTitles.has(title.toLowerCase())) {
      duplicateTitles.push(`Blog: ${title}`);
    }
    allTitles.add(title.toLowerCase());
  }

  // Analyze programs
  for (const program of programs) {
    const title = program.data.title;
    const description = program.data.description;

    if (!description || description.trim().length === 0) {
      missingDescriptions.push(`Program: ${title}`);
    }

    if (description && description.length < 120) {
      shortDescriptions.push(`Program: ${title} (${description.length} chars)`);
    }

    if (title.length > 60) {
      longTitles.push(`Program: ${title} (${title.length} chars)`);
    }

    if (allTitles.has(title.toLowerCase())) {
      duplicateTitles.push(`Program: ${title}`);
    }
    allTitles.add(title.toLowerCase());
  }

  // Generate recommendations
  if (missingDescriptions.length > 0) {
    recommendations.push(
      `Add meta descriptions to ${missingDescriptions.length} pages`
    );
  }

  if (shortDescriptions.length > 0) {
    recommendations.push(
      `Expand ${shortDescriptions.length} descriptions (aim for 150-160 characters)`
    );
  }

  if (longTitles.length > 0) {
    recommendations.push(
      `Shorten ${longTitles.length} titles (keep under 60 characters)`
    );
  }

  if (duplicateTitles.length > 0) {
    recommendations.push(`Fix ${duplicateTitles.length} duplicate titles`);
  }

  if (recommendations.length === 0) {
    recommendations.push("SEO health looks good! 🎉");
  }

  return {
    missingDescriptions,
    duplicateTitles,
    longTitles,
    shortDescriptions,
    recommendations,
  };
}

/**
 * Generate a sitemap health report
 */
export async function generateSitemapReport(): Promise<string> {
  const stats = await getSitemapStats();
  const seoHealth = await analyzeSEOHealth();

  let report = `# Sitemap & SEO Health Report
Generated: ${stats.lastGenerated.toISOString()}

## Sitemap Statistics
- Total Pages: ${stats.totalPages}
- Static Pages: ${stats.staticPages}
- Blog Posts: ${stats.blogPosts}
- Programs: ${stats.programs}

## SEO Health Check
`;

  if (seoHealth.missingDescriptions.length > 0) {
    report += `\n### Missing Descriptions (${seoHealth.missingDescriptions.length})\n`;
    seoHealth.missingDescriptions.forEach((item) => {
      report += `- ${item}\n`;
    });
  }

  if (seoHealth.shortDescriptions.length > 0) {
    report += `\n### Short Descriptions (${seoHealth.shortDescriptions.length})\n`;
    seoHealth.shortDescriptions.forEach((item) => {
      report += `- ${item}\n`;
    });
  }

  if (seoHealth.longTitles.length > 0) {
    report += `\n### Long Titles (${seoHealth.longTitles.length})\n`;
    seoHealth.longTitles.forEach((item) => {
      report += `- ${item}\n`;
    });
  }

  if (seoHealth.duplicateTitles.length > 0) {
    report += `\n### Duplicate Titles (${seoHealth.duplicateTitles.length})\n`;
    seoHealth.duplicateTitles.forEach((item) => {
      report += `- ${item}\n`;
    });
  }

  report += `\n## Recommendations\n`;
  seoHealth.recommendations.forEach((rec) => {
    report += `- ${rec}\n`;
  });

  return report;
}
