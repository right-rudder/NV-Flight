/**
 * SEO Helper Utilities
 * Comprehensive SEO analysis and optimization tools
 */

import {
  KEYWORD_STRATEGY,
  generatePageKeywords,
  analyzeKeywordDensity,
  generateSEOTitle,
  generateSEODescription,
  generateContentSuggestions,
  KeywordValidator,
  type PAGE_KEYWORD_TEMPLATES,
} from "./keywords-strategy";

// SEO Score calculation weights
const SEO_WEIGHTS = {
  title: 20,
  description: 15,
  h1: 15,
  headings: 10,
  keywords: 15,
  content: 10,
  images: 5,
  links: 5,
  structure: 5,
} as const;

// SEO analysis interfaces
interface SEOAnalysis {
  score: number;
  grade: "A+" | "A" | "B+" | "B" | "C+" | "C" | "D" | "F";
  issues: string[];
  recommendations: string[];
  strengths: string[];
  keywordAnalysis: KeywordDensityAnalysis;
  contentAnalysis: ContentAnalysis;
  technicalSEO: TechnicalSEOAnalysis;
}

interface KeywordDensityAnalysis {
  primaryDensity: number;
  secondaryDensity: number;
  overOptimization: boolean;
  underOptimization: boolean;
  targetKeywords: string[];
  foundKeywords: string[];
  missingKeywords: string[];
}

interface ContentAnalysis {
  wordCount: number;
  readabilityScore: number;
  headingStructure: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
  };
  imageCount: number;
  imagesWithAlt: number;
  linkCount: number;
  internalLinks: number;
  externalLinks: number;
}

interface TechnicalSEOAnalysis {
  metaTitleLength: number;
  metaDescriptionLength: number;
  hasMetaKeywords: boolean;
  hasOpenGraph: boolean;
  hasStructuredData: boolean;
  mobileOptimized: boolean;
  pageSpeed: "fast" | "average" | "slow" | "unknown";
}

export class SEOAnalyzer {
  /**
   * Perform comprehensive SEO analysis on page content
   */
  static analyzePage(
    content: string,
    metadata: {
      title?: string;
      description?: string;
      keywords?: string;
      pageType: keyof typeof PAGE_KEYWORD_TEMPLATES;
    }
  ): SEOAnalysis {
    const keywordAnalysis = this.analyzeKeywordDensity(content, metadata);
    const contentAnalysis = this.analyzeContent(content);
    const technicalAnalysis = this.analyzeTechnicalSEO(metadata);

    const score = this.calculateSEOScore({
      keywordAnalysis,
      contentAnalysis,
      technicalAnalysis,
      metadata,
    });

    const grade = this.getGrade(score);
    const { issues, recommendations, strengths } = this.generateRecommendations(
      {
        keywordAnalysis,
        contentAnalysis,
        technicalAnalysis,
        score,
      }
    );

    return {
      score,
      grade,
      issues,
      recommendations,
      strengths,
      keywordAnalysis,
      contentAnalysis,
      technicalSEO: technicalAnalysis,
    };
  }

  /**
   * Analyze keyword density and optimization
   */
  private static analyzeKeywordDensity(
    content: string,
    metadata: {
      pageType: keyof typeof PAGE_KEYWORD_TEMPLATES;
      keywords?: string;
    }
  ): KeywordDensityAnalysis {
    const pageKeywords = generatePageKeywords(metadata.pageType);
    const targetKeywords = [
      ...pageKeywords.title,
      ...pageKeywords.meta.slice(0, 5),
      ...(metadata.keywords?.split(",").map((k) => k.trim()) || []),
    ];

    const densityResults = analyzeKeywordDensity(content, targetKeywords);

    // Convert Map to arrays for analysis
    const keywordEntries = Array.from(densityResults.entries());
    const foundKeywords = keywordEntries.map(([keyword]) => keyword);

    const missingKeywords = targetKeywords.filter(
      (keyword) =>
        !foundKeywords.some((found) =>
          found.toLowerCase().includes(keyword.toLowerCase())
        )
    );

    // Find primary keyword (most frequent) and calculate densities
    const sortedByDensity = keywordEntries
      .map(([keyword, analysis]) => ({ keyword, ...analysis }))
      .sort((a, b) => b.density - a.density);

    const primaryDensity = sortedByDensity[0]?.density || 0;
    const secondaryDensity =
      sortedByDensity
        .filter((k) => k.density > 0.5)
        .reduce((sum, k) => sum + k.density, 0) / sortedByDensity.length || 0;

    return {
      primaryDensity,
      secondaryDensity,
      overOptimization: primaryDensity > 3 || secondaryDensity > 2,
      underOptimization: primaryDensity < 0.5,
      targetKeywords,
      foundKeywords,
      missingKeywords,
    };
  }

  /**
   * Analyze content structure and quality
   */
  private static analyzeContent(content: string): ContentAnalysis {
    const words = content.trim().split(/\s+/).length;

    // Count headings
    const headingMatches = {
      h1: (content.match(/<h1[^>]*>.*?<\/h1>/gi) || []).length,
      h2: (content.match(/<h2[^>]*>.*?<\/h2>/gi) || []).length,
      h3: (content.match(/<h3[^>]*>.*?<\/h3>/gi) || []).length,
      h4: (content.match(/<h4[^>]*>.*?<\/h4>/gi) || []).length,
    };

    // Count images and alt text
    const images = content.match(/<img[^>]*>/gi) || [];
    const imagesWithAlt = images.filter((img) =>
      /alt=["'][^"']*["']/i.test(img)
    ).length;

    // Count links
    const links: string[] =
      content.match(/<a[^>]*href=["'][^"']*["'][^>]*>/gi) || [];
    const internalLinks = links.filter(
      (link: string) =>
        !link.includes("http") ||
        link.includes(process.env.SITE_URL || "nvflight.com")
    ).length;
    const externalLinks = links.length - internalLinks;

    // Simple readability score (Flesch-like approximation)
    const sentences = content.split(/[.!?]+/).length;
    const avgWordsPerSentence = words / sentences;
    const readabilityScore = Math.max(0, 100 - avgWordsPerSentence * 1.5);

    return {
      wordCount: words,
      readabilityScore,
      headingStructure: headingMatches,
      imageCount: images.length,
      imagesWithAlt,
      linkCount: links.length,
      internalLinks,
      externalLinks,
    };
  }

  /**
   * Analyze technical SEO elements
   */
  private static analyzeTechnicalSEO(metadata: {
    title?: string;
    description?: string;
    keywords?: string;
  }): TechnicalSEOAnalysis {
    return {
      metaTitleLength: metadata.title?.length || 0,
      metaDescriptionLength: metadata.description?.length || 0,
      hasMetaKeywords: !!metadata.keywords,
      hasOpenGraph: false, // Would need DOM analysis
      hasStructuredData: false, // Would need DOM analysis
      mobileOptimized: true, // Assuming responsive design
      pageSpeed: "unknown",
    };
  }

  /**
   * Calculate overall SEO score
   */
  private static calculateSEOScore({
    keywordAnalysis,
    contentAnalysis,
    technicalAnalysis,
    metadata,
  }: {
    keywordAnalysis: KeywordDensityAnalysis;
    contentAnalysis: ContentAnalysis;
    technicalAnalysis: TechnicalSEOAnalysis;
    metadata: any;
  }): number {
    let score = 0;

    // Title optimization (20 points)
    if (
      technicalAnalysis.metaTitleLength >= 30 &&
      technicalAnalysis.metaTitleLength <= 60
    ) {
      score += SEO_WEIGHTS.title;
    } else if (technicalAnalysis.metaTitleLength > 0) {
      score += SEO_WEIGHTS.title * 0.5;
    }

    // Description optimization (15 points)
    if (
      technicalAnalysis.metaDescriptionLength >= 120 &&
      technicalAnalysis.metaDescriptionLength <= 160
    ) {
      score += SEO_WEIGHTS.description;
    } else if (technicalAnalysis.metaDescriptionLength > 0) {
      score += SEO_WEIGHTS.description * 0.5;
    }

    // H1 optimization (15 points)
    if (contentAnalysis.headingStructure.h1 === 1) {
      score += SEO_WEIGHTS.h1;
    } else if (contentAnalysis.headingStructure.h1 > 0) {
      score += SEO_WEIGHTS.h1 * 0.5;
    }

    // Heading structure (10 points)
    const totalHeadings = Object.values(
      contentAnalysis.headingStructure
    ).reduce((a, b) => a + b, 0);
    if (totalHeadings >= 3 && contentAnalysis.headingStructure.h2 > 0) {
      score += SEO_WEIGHTS.headings;
    } else if (totalHeadings > 0) {
      score += SEO_WEIGHTS.headings * 0.5;
    }

    // Keyword optimization (15 points)
    if (
      !keywordAnalysis.overOptimization &&
      !keywordAnalysis.underOptimization
    ) {
      score += SEO_WEIGHTS.keywords;
    } else if (keywordAnalysis.primaryDensity > 0) {
      score += SEO_WEIGHTS.keywords * 0.5;
    }

    // Content quality (10 points)
    if (
      contentAnalysis.wordCount >= 300 &&
      contentAnalysis.readabilityScore >= 60
    ) {
      score += SEO_WEIGHTS.content;
    } else if (contentAnalysis.wordCount >= 150) {
      score += SEO_WEIGHTS.content * 0.5;
    }

    // Image optimization (5 points)
    if (
      contentAnalysis.imageCount > 0 &&
      contentAnalysis.imagesWithAlt === contentAnalysis.imageCount
    ) {
      score += SEO_WEIGHTS.images;
    } else if (contentAnalysis.imagesWithAlt > 0) {
      score += SEO_WEIGHTS.images * 0.5;
    }

    // Link optimization (5 points)
    if (
      contentAnalysis.linkCount > 0 &&
      contentAnalysis.internalLinks >= contentAnalysis.externalLinks
    ) {
      score += SEO_WEIGHTS.links;
    } else if (contentAnalysis.linkCount > 0) {
      score += SEO_WEIGHTS.links * 0.5;
    }

    // Technical SEO (5 points)
    if (
      technicalAnalysis.hasMetaKeywords &&
      technicalAnalysis.mobileOptimized
    ) {
      score += SEO_WEIGHTS.structure;
    } else if (technicalAnalysis.mobileOptimized) {
      score += SEO_WEIGHTS.structure * 0.5;
    }

    return Math.round(score);
  }

  /**
   * Convert score to grade
   */
  private static getGrade(score: number): SEOAnalysis["grade"] {
    if (score >= 95) return "A+";
    if (score >= 90) return "A";
    if (score >= 85) return "B+";
    if (score >= 80) return "B";
    if (score >= 75) return "C+";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  /**
   * Generate SEO recommendations
   */
  private static generateRecommendations({
    keywordAnalysis,
    contentAnalysis,
    technicalAnalysis,
    score,
  }: {
    keywordAnalysis: KeywordDensityAnalysis;
    contentAnalysis: ContentAnalysis;
    technicalAnalysis: TechnicalSEOAnalysis;
    score: number;
  }): {
    issues: string[];
    recommendations: string[];
    strengths: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    const strengths: string[] = [];

    // Title analysis
    if (technicalAnalysis.metaTitleLength === 0) {
      issues.push("Missing meta title");
      recommendations.push("Add a compelling meta title (30-60 characters)");
    } else if (technicalAnalysis.metaTitleLength < 30) {
      issues.push("Meta title too short");
      recommendations.push(
        "Expand meta title to 30-60 characters for better visibility"
      );
    } else if (technicalAnalysis.metaTitleLength > 60) {
      issues.push("Meta title too long");
      recommendations.push(
        "Shorten meta title to under 60 characters to prevent truncation"
      );
    } else {
      strengths.push("Well-optimized meta title length");
    }

    // Description analysis
    if (technicalAnalysis.metaDescriptionLength === 0) {
      issues.push("Missing meta description");
      recommendations.push(
        "Add a compelling meta description (120-160 characters)"
      );
    } else if (technicalAnalysis.metaDescriptionLength < 120) {
      issues.push("Meta description too short");
      recommendations.push("Expand meta description to 120-160 characters");
    } else if (technicalAnalysis.metaDescriptionLength > 160) {
      issues.push("Meta description too long");
      recommendations.push("Shorten meta description to under 160 characters");
    } else {
      strengths.push("Well-optimized meta description length");
    }

    // Content analysis
    if (contentAnalysis.wordCount < 300) {
      issues.push("Content too short for optimal SEO");
      recommendations.push(
        "Expand content to at least 300 words for better ranking"
      );
    } else if (contentAnalysis.wordCount >= 500) {
      strengths.push("Comprehensive content length");
    }

    // Heading analysis
    if (contentAnalysis.headingStructure.h1 === 0) {
      issues.push("Missing H1 heading");
      recommendations.push("Add exactly one H1 heading with target keywords");
    } else if (contentAnalysis.headingStructure.h1 > 1) {
      issues.push("Multiple H1 headings found");
      recommendations.push("Use only one H1 heading per page");
    } else {
      strengths.push("Proper H1 heading structure");
    }

    if (contentAnalysis.headingStructure.h2 === 0) {
      issues.push("Missing H2 headings");
      recommendations.push("Add H2 headings to improve content structure");
    }

    // Keyword analysis
    if (keywordAnalysis.overOptimization) {
      issues.push("Keyword over-optimization detected");
      recommendations.push(
        "Reduce keyword density to avoid penalties (aim for 1-2%)"
      );
    } else if (keywordAnalysis.underOptimization) {
      issues.push("Low keyword density");
      recommendations.push(
        "Include target keywords more naturally throughout content"
      );
    } else {
      strengths.push("Good keyword optimization balance");
    }

    if (keywordAnalysis.missingKeywords.length > 0) {
      issues.push(
        `Missing important keywords: ${keywordAnalysis.missingKeywords.slice(0, 3).join(", ")}`
      );
      recommendations.push("Include missing target keywords in your content");
    }

    // Image optimization
    if (
      contentAnalysis.imageCount > 0 &&
      contentAnalysis.imagesWithAlt < contentAnalysis.imageCount
    ) {
      issues.push("Images missing alt text");
      recommendations.push(
        "Add descriptive alt text to all images for accessibility and SEO"
      );
    } else if (
      contentAnalysis.imagesWithAlt === contentAnalysis.imageCount &&
      contentAnalysis.imageCount > 0
    ) {
      strengths.push("All images have proper alt text");
    }

    // Link analysis
    if (contentAnalysis.linkCount === 0) {
      issues.push("No links found in content");
      recommendations.push(
        "Add relevant internal and external links to improve user experience"
      );
    } else if (contentAnalysis.internalLinks < contentAnalysis.externalLinks) {
      recommendations.push(
        "Consider adding more internal links to keep users on your site"
      );
    }

    // Readability
    if (contentAnalysis.readabilityScore < 60) {
      issues.push("Low readability score");
      recommendations.push(
        "Simplify sentences and use shorter paragraphs for better readability"
      );
    } else if (contentAnalysis.readabilityScore >= 70) {
      strengths.push("Good content readability");
    }

    return { issues, recommendations, strengths };
  }
}

/**
 * SEO Report Generator
 */
export class SEOReporter {
  /**
   * Generate a comprehensive SEO report
   */
  static generateReport(analysis: SEOAnalysis, pageType: string): string {
    const report = [
      `# SEO Analysis Report - ${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Page`,
      ``,
      `## Overall Score: ${analysis.score}/100 (Grade: ${analysis.grade})`,
      ``,
      `### 📊 Key Metrics`,
      `- **Keyword Density**: ${analysis.keywordAnalysis.primaryDensity.toFixed(2)}% (Target: 1-2%)`,
      `- **Content Length**: ${analysis.contentAnalysis.wordCount} words`,
      `- **Readability Score**: ${analysis.contentAnalysis.readabilityScore.toFixed(1)}/100`,
      `- **Images with Alt Text**: ${analysis.contentAnalysis.imagesWithAlt}/${analysis.contentAnalysis.imageCount}`,
      ``,
      `### ✅ Strengths`,
      ...analysis.strengths.map((strength) => `- ${strength}`),
      ``,
      `### ⚠️ Issues Found`,
      ...analysis.issues.map((issue) => `- ${issue}`),
      ``,
      `### 💡 Recommendations`,
      ...analysis.recommendations.map((rec) => `- ${rec}`),
      ``,
      `### 🎯 Keyword Analysis`,
      `- **Target Keywords**: ${analysis.keywordAnalysis.targetKeywords.slice(0, 5).join(", ")}`,
      `- **Found Keywords**: ${analysis.keywordAnalysis.foundKeywords.slice(0, 5).join(", ")}`,
      `- **Missing Keywords**: ${analysis.keywordAnalysis.missingKeywords.slice(0, 3).join(", ") || "None"}`,
      ``,
      `### 📝 Technical SEO`,
      `- **Meta Title Length**: ${analysis.technicalSEO.metaTitleLength} characters`,
      `- **Meta Description Length**: ${analysis.technicalSEO.metaDescriptionLength} characters`,
      `- **Has Meta Keywords**: ${analysis.technicalSEO.hasMetaKeywords ? "Yes" : "No"}`,
      `- **Mobile Optimized**: ${analysis.technicalSEO.mobileOptimized ? "Yes" : "No"}`,
      ``,
    ];

    return report.join("\n");
  }

  /**
   * Generate quick SEO checklist
   */
  static generateChecklist(analysis: SEOAnalysis): string[] {
    const checklist: string[] = [];

    // Essential items
    checklist.push(
      analysis.technicalSEO.metaTitleLength > 0 ? "✅" : "❌" + " Meta Title"
    );
    checklist.push(
      analysis.technicalSEO.metaDescriptionLength > 0
        ? "✅"
        : "❌" + " Meta Description"
    );
    checklist.push(
      analysis.contentAnalysis.headingStructure.h1 === 1
        ? "✅"
        : "❌" + " Single H1 Heading"
    );
    checklist.push(
      analysis.contentAnalysis.wordCount >= 300
        ? "✅"
        : "❌" + " Sufficient Content"
    );
    checklist.push(
      !analysis.keywordAnalysis.overOptimization
        ? "✅"
        : "❌" + " Keyword Optimization"
    );
    checklist.push(
      analysis.contentAnalysis.imagesWithAlt ===
        analysis.contentAnalysis.imageCount
        ? "✅"
        : "❌" + " Image Alt Text"
    );

    return checklist;
  }
}

/**
 * Development utilities for SEO analysis
 */
export const SEODevTools = {
  /**
   * Log comprehensive SEO analysis to console
   */
  logAnalysis(analysis: SEOAnalysis, pageType: string): void {
    if (typeof console === "undefined") return;

    console.group(`🔍 SEO Analysis - ${pageType}`);
    console.log(`📊 Score: ${analysis.score}/100 (${analysis.grade})`);

    if (analysis.strengths.length > 0) {
      console.log(`✅ Strengths:`, analysis.strengths);
    }

    if (analysis.issues.length > 0) {
      console.warn(`⚠️ Issues:`, analysis.issues);
    }

    if (analysis.recommendations.length > 0) {
      console.log(`💡 Recommendations:`, analysis.recommendations);
    }

    console.log(`🎯 Keywords:`, {
      primary: `${analysis.keywordAnalysis.primaryDensity.toFixed(2)}%`,
      found: analysis.keywordAnalysis.foundKeywords.length,
      missing: analysis.keywordAnalysis.missingKeywords.length,
    });

    console.groupEnd();
  },

  /**
   * Create visual SEO dashboard data
   */
  getDashboardData(analysis: SEOAnalysis) {
    return {
      score: analysis.score,
      grade: analysis.grade,
      metrics: [
        {
          label: "Title Length",
          value: analysis.technicalSEO.metaTitleLength,
          target: "30-60",
          unit: "chars",
        },
        {
          label: "Description Length",
          value: analysis.technicalSEO.metaDescriptionLength,
          target: "120-160",
          unit: "chars",
        },
        {
          label: "Word Count",
          value: analysis.contentAnalysis.wordCount,
          target: "300+",
          unit: "words",
        },
        {
          label: "Keyword Density",
          value: analysis.keywordAnalysis.primaryDensity,
          target: "1-2",
          unit: "%",
        },
        {
          label: "Readability",
          value: analysis.contentAnalysis.readabilityScore,
          target: "60+",
          unit: "/100",
        },
      ],
      checklist: SEOReporter.generateChecklist(analysis),
    };
  },
};
