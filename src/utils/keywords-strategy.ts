/**
 * Comprehensive Keywords Strategy for NV Flight
 *
 * This module provides intelligent keyword management, analysis, and optimization
 * for maximum SEO impact across the entire website.
 */

import { getCollection } from "astro:content";

// Core keyword categories for flight training business
export interface KeywordCategories {
  primary: string[];
  location: string[];
  service: string[];
  certification: string[];
  aircraft: string[];
  intent: string[];
  competitive: string[];
  longtail: string[];
}

export interface KeywordAnalysis {
  density: number;
  prominence: number;
  relevance: number;
  competition: "low" | "medium" | "high";
  searchVolume: "low" | "medium" | "high";
}

export interface PageKeywords {
  title: string[];
  meta: string[];
  headers: string[];
  content: string[];
  alt: string[];
}

export interface KeywordPerformance {
  keyword: string;
  pages: string[];
  frequency: number;
  density: number;
  opportunities: string[];
}

/**
 * Comprehensive keyword strategy configuration
 */
export const KEYWORD_STRATEGY: KeywordCategories = {
  // High-value primary keywords (1-3 words)
  primary: [
    "flight school",
    "pilot training",
    "flight training",
    "aviation school",
    "flight lessons",
    "pilot school",
    "flight academy",
  ],

  // Location-based keywords for local SEO
  location: [
    "Reno flight school",
    "Nevada pilot training",
    "Reno flight training",
    "Nevada aviation school",
    "Reno flight lessons",
    "Northern Nevada flight school",
    "Lake Tahoe flight training",
    "Sierra Nevada aviation",
    "Sparks flight school",
    "Carson City pilot training",
  ],

  // Service-specific keywords
  service: [
    "private pilot license",
    "instrument rating",
    "commercial pilot",
    "multi engine rating",
    "flight instructor",
    "discovery flight",
    "ground school",
    "flight review",
    "aircraft rental",
    "mountain flying",
    "tailwheel training",
    "complex aircraft",
  ],

  // Certification and license keywords
  certification: [
    "PPL training",
    "IFR training",
    "CPL training",
    "CFI training",
    "CFII training",
    "MEI training",
    "ATP training",
    "recreational pilot",
    "sport pilot",
    "airline transport pilot",
  ],

  // Aircraft type keywords
  aircraft: [
    "Cessna 172",
    "Cessna 152",
    "Piper Cherokee",
    "Diamond aircraft",
    "multi engine aircraft",
    "complex aircraft",
    "high performance aircraft",
    "tailwheel aircraft",
    "glass cockpit",
    "steam gauge",
  ],

  // Search intent keywords
  intent: [
    "how to become a pilot",
    "flight training cost",
    "pilot license requirements",
    "learn to fly",
    "become a commercial pilot",
    "flight school near me",
    "best flight school",
    "accelerated pilot training",
    "part 61 training",
    "part 141 training",
  ],

  // Competitive keywords
  competitive: [
    "ATP flight school",
    "university aviation",
    "college aviation program",
    "airline pilot training",
    "professional pilot",
    "career pilot training",
    "aviation degree",
    "pilot academy",
  ],

  // Long-tail keywords (4+ words)
  longtail: [
    "private pilot license training Reno",
    "instrument rating course Nevada",
    "commercial pilot school Reno NV",
    "flight instructor certification Reno",
    "discovery flight Lake Tahoe area",
    "how much does flight training cost",
    "best flight school in northern Nevada",
    "accelerated pilot training program Reno",
    "mountain flying course Sierra Nevada",
    "multi engine rating training Nevada",
  ],
};

/**
 * Page-specific keyword optimization templates
 */
export const PAGE_KEYWORD_TEMPLATES = {
  homepage: {
    primary: ["flight school", "pilot training", "Reno flight training"],
    secondary: ["aviation school", "flight lessons", "Nevada pilot school"],
    longtail: [
      "flight training Reno Nevada",
      "learn to fly Reno",
      "best flight school Nevada",
    ],
  },

  programs: {
    primary: [
      "pilot training programs",
      "flight training courses",
      "aviation certification",
    ],
    secondary: ["private pilot", "instrument rating", "commercial pilot"],
    longtail: [
      "private pilot license training program",
      "instrument rating course Reno",
      "commercial pilot certification Nevada",
    ],
  },

  discovery: {
    primary: ["discovery flight", "introductory flight", "first flight lesson"],
    secondary: ["trial flight", "demo flight", "flight experience"],
    longtail: [
      "discovery flight Reno Nevada",
      "first flying lesson Lake Tahoe",
      "try flying plane Reno",
    ],
  },

  about: {
    primary: ["flight school", "aviation training", "pilot education"],
    secondary: [
      "experienced instructors",
      "flight safety",
      "aviation excellence",
    ],
    longtail: [
      "about NV Flight school",
      "flight training philosophy",
      "aviation education Reno",
    ],
  },

  contact: {
    primary: [
      "flight school contact",
      "pilot training info",
      "aviation school",
    ],
    secondary: ["flight lessons", "enrollment", "consultation"],
    longtail: [
      "contact flight school Reno",
      "pilot training information Nevada",
      "flight lesson scheduling",
    ],
  },

  blog: {
    primary: ["aviation", "pilot training", "flight education"],
    secondary: ["flying tips", "pilot life", "aviation news"],
    longtail: [
      "pilot training advice",
      "aviation industry insights",
      "flight training tips",
    ],
  },
};

/**
 * Generate optimized keywords for a specific page type
 */
export function generatePageKeywords(
  pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
  customKeywords: string[] = []
): PageKeywords {
  const template = PAGE_KEYWORD_TEMPLATES[pageType];

  if (!template) {
    return {
      title: KEYWORD_STRATEGY.primary.slice(0, 3),
      meta: [...KEYWORD_STRATEGY.primary, ...KEYWORD_STRATEGY.location].slice(
        0,
        10
      ),
      headers: KEYWORD_STRATEGY.service.slice(0, 5),
      content: [...KEYWORD_STRATEGY.longtail, ...customKeywords].slice(0, 15),
      alt: KEYWORD_STRATEGY.aircraft.slice(0, 5),
    };
  }

  return {
    title: template.primary,
    meta: [...template.primary, ...template.secondary, ...customKeywords],
    headers: [...template.secondary, ...KEYWORD_STRATEGY.service.slice(0, 3)],
    content: [
      ...template.longtail,
      ...KEYWORD_STRATEGY.intent.slice(0, 5),
      ...customKeywords,
    ],
    alt: KEYWORD_STRATEGY.aircraft.slice(0, 3),
  };
}

/**
 * Analyze keyword density and placement in content
 */
export function analyzeKeywordDensity(
  content: string,
  targetKeywords: string[]
): Map<string, KeywordAnalysis> {
  const wordCount = content.split(/\s+/).length;
  const results = new Map<string, KeywordAnalysis>();

  targetKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    const matches = content.match(regex) || [];
    const frequency = matches.length;
    const density = (frequency / wordCount) * 100;

    // Check keyword prominence (appears in first 100 words)
    const firstHundredWords = content.split(/\s+/).slice(0, 100).join(" ");
    const prominence = firstHundredWords
      .toLowerCase()
      .includes(keyword.toLowerCase())
      ? 1
      : 0;

    results.set(keyword, {
      density: Math.round(density * 100) / 100,
      prominence,
      relevance: calculateRelevance(keyword, content),
      competition: estimateCompetition(keyword),
      searchVolume: estimateSearchVolume(keyword),
    });
  });

  return results;
}

/**
 * Calculate keyword relevance based on context
 */
function calculateRelevance(keyword: string, content: string): number {
  const relatedTerms = getRelatedTerms(keyword);
  let relevanceScore = 0;

  relatedTerms.forEach((term) => {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      relevanceScore += 0.2;
    }
  });

  return Math.min(1, relevanceScore);
}

/**
 * Get related terms for keyword context
 */
function getRelatedTerms(keyword: string): string[] {
  const relationshipMap: Record<string, string[]> = {
    "flight school": [
      "pilot training",
      "aviation",
      "aircraft",
      "instructor",
      "lessons",
    ],
    "pilot training": [
      "flight school",
      "certification",
      "license",
      "ground school",
      "flying",
    ],
    "private pilot": [
      "PPL",
      "license",
      "training",
      "certification",
      "aircraft",
    ],
    "instrument rating": [
      "IFR",
      "weather",
      "navigation",
      "approach",
      "precision",
    ],
    "commercial pilot": ["CPL", "career", "professional", "airline", "charter"],
    "discovery flight": [
      "introductory",
      "first flight",
      "trial",
      "experience",
      "demo",
    ],
  };

  return relationshipMap[keyword.toLowerCase()] || [];
}

/**
 * Estimate keyword competition level
 */
function estimateCompetition(keyword: string): "low" | "medium" | "high" {
  const highCompetition = [
    "flight school",
    "pilot training",
    "aviation school",
  ];
  const mediumCompetition = [
    "private pilot",
    "flight lessons",
    "instrument rating",
  ];

  if (highCompetition.some((term) => keyword.toLowerCase().includes(term))) {
    return "high";
  }

  if (mediumCompetition.some((term) => keyword.toLowerCase().includes(term))) {
    return "medium";
  }

  return "low";
}

/**
 * Estimate search volume based on keyword characteristics
 */
function estimateSearchVolume(keyword: string): "low" | "medium" | "high" {
  const highVolume = [
    "flight school",
    "pilot training",
    "how to become a pilot",
  ];
  const mediumVolume = [
    "private pilot license",
    "flight lessons",
    "aviation school",
  ];

  if (highVolume.some((term) => keyword.toLowerCase().includes(term))) {
    return "high";
  }

  if (mediumVolume.some((term) => keyword.toLowerCase().includes(term))) {
    return "medium";
  }

  return "low";
}

/**
 * Generate SEO-optimized title with keywords
 */
export function generateSEOTitle(
  baseTitle: string,
  keywords: string[],
  location: string = "Reno, NV"
): string {
  const primaryKeyword = keywords[0];
  const maxLength = 60;

  let title = `${baseTitle} | ${primaryKeyword} ${location}`;

  if (title.length > maxLength) {
    title = `${baseTitle} | ${primaryKeyword}`;
  }

  if (title.length > maxLength) {
    title = `${primaryKeyword} ${location}`;
  }

  return title;
}

/**
 * Generate SEO-optimized meta description with keywords
 */
export function generateSEODescription(
  baseDescription: string,
  keywords: string[],
  maxLength: number = 160
): string {
  const keywordPhrase = keywords.slice(0, 2).join(" and ");
  let description = baseDescription;

  // Ensure primary keywords appear early
  if (!description.toLowerCase().includes(keywords[0].toLowerCase())) {
    description = `${keywords[0]} - ${description}`;
  }

  // Add keyword phrase if space allows
  if (description.length + keywordPhrase.length + 20 < maxLength) {
    description += ` Specializing in ${keywordPhrase}.`;
  }

  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + "...";
  }

  return description;
}

/**
 * Analyze keyword performance across all content
 */
export async function analyzeKeywordPerformance(): Promise<
  KeywordPerformance[]
> {
  const blogPosts = await getCollection("blog");
  const programs = await getCollection("programs");
  const allKeywords = [
    ...KEYWORD_STRATEGY.primary,
    ...KEYWORD_STRATEGY.location,
    ...KEYWORD_STRATEGY.service,
  ];

  const performance: KeywordPerformance[] = [];

  allKeywords.forEach((keyword) => {
    const pages: string[] = [];
    let totalFrequency = 0;
    let totalWords = 0;

    // Analyze blog posts
    blogPosts.forEach((post) => {
      const content = `${post.data.title} ${post.data.description || ""} ${post.body}`;
      const frequency = (
        content.match(new RegExp(`\\b${keyword}\\b`, "gi")) || []
      ).length;

      if (frequency > 0) {
        pages.push(`Blog: ${post.data.title}`);
        totalFrequency += frequency;
      }
      totalWords += content.split(/\s+/).length;
    });

    // Analyze program pages
    programs.forEach((program) => {
      const content = `${program.data.title} ${program.data.description || ""} ${program.body}`;
      const frequency = (
        content.match(new RegExp(`\\b${keyword}\\b`, "gi")) || []
      ).length;

      if (frequency > 0) {
        pages.push(`Program: ${program.data.title}`);
        totalFrequency += frequency;
      }
      totalWords += content.split(/\s+/).length;
    });

    const density = totalWords > 0 ? (totalFrequency / totalWords) * 100 : 0;
    const opportunities = generateOptimizationOpportunities(
      keyword,
      pages.length,
      density
    );

    performance.push({
      keyword,
      pages,
      frequency: totalFrequency,
      density: Math.round(density * 100) / 100,
      opportunities,
    });
  });

  return performance.sort((a, b) => b.frequency - a.frequency);
}

/**
 * Generate optimization opportunities for keywords
 */
function generateOptimizationOpportunities(
  keyword: string,
  pageCount: number,
  density: number
): string[] {
  const opportunities: string[] = [];

  if (pageCount === 0) {
    opportunities.push(`Create content targeting "${keyword}"`);
  } else if (pageCount < 3) {
    opportunities.push(`Expand content coverage for "${keyword}"`);
  }

  if (density < 0.5) {
    opportunities.push(`Increase keyword density for "${keyword}"`);
  } else if (density > 3) {
    opportunities.push(`Reduce keyword stuffing for "${keyword}"`);
  }

  if (pageCount > 0 && density > 0) {
    opportunities.push(`Optimize internal linking for "${keyword}"`);
  }

  return opportunities;
}

/**
 * Generate keyword-optimized content suggestions
 */
export function generateContentSuggestions(targetKeywords: string[]): string[] {
  const suggestions: string[] = [];

  targetKeywords.forEach((keyword) => {
    const competition = estimateCompetition(keyword);
    const volume = estimateSearchVolume(keyword);

    if (competition === "low" && volume === "medium") {
      suggestions.push(`Create in-depth guide: "Complete Guide to ${keyword}"`);
    }

    if (keyword.includes("cost") || keyword.includes("price")) {
      suggestions.push(`Create pricing page: "${keyword} - Costs and Options"`);
    }

    if (keyword.includes("how to")) {
      suggestions.push(`Create tutorial: "${keyword} - Step by Step Guide"`);
    }

    if (keyword.includes("best") || keyword.includes("top")) {
      suggestions.push(
        `Create comparison: "${keyword} - What Makes Us Different"`
      );
    }
  });

  return [...new Set(suggestions)]; // Remove duplicates
}

/**
 * Validate keyword strategy implementation
 */
export class KeywordValidator {
  static validatePageKeywords(pageKeywords: PageKeywords): {
    valid: boolean;
    issues: string[];
  } {
    const issues: string[] = [];

    if (pageKeywords.title.length === 0) {
      issues.push("No title keywords defined");
    }

    if (pageKeywords.meta.length < 5) {
      issues.push("Insufficient meta keywords (recommend 5-10)");
    }

    if (pageKeywords.content.length < 10) {
      issues.push("Insufficient content keywords (recommend 10-15)");
    }

    // Check for keyword stuffing
    const allKeywords = [
      ...pageKeywords.title,
      ...pageKeywords.meta,
      ...pageKeywords.headers,
      ...pageKeywords.content,
    ];

    const duplicates = allKeywords.filter(
      (keyword, index) => allKeywords.indexOf(keyword) !== index
    );

    if (duplicates.length > allKeywords.length * 0.3) {
      issues.push("Potential keyword stuffing detected");
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  }

  static logValidation(
    pageType: string,
    keywords: PageKeywords,
    isValid: boolean
  ) {
    if (isValid) {
      console.log(`✅ ${pageType} keywords are optimized`);
    } else {
      console.error(`❌ ${pageType} keywords need optimization`, keywords);
    }
  }
}

// All functions are already exported above
