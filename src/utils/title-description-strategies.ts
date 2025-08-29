/**
 * Advanced Page Title and Description Strategies
 * Comprehensive SEO-optimized title and description generation
 */

import { PAGE_KEYWORD_TEMPLATES } from "./keywords-strategy";

// Title strategy configuration
const TITLE_STRATEGIES = {
  maxLength: 60,
  optimalLength: 50,
  brandName: "NV Flight",
  location: "Reno, NV",
  separator: "|",
} as const;

// Description strategy configuration
const DESCRIPTION_STRATEGIES = {
  maxLength: 160,
  optimalLength: 150,
  minLength: 120,
} as const;

// Page-specific title templates
const PAGE_TITLE_TEMPLATES = {
  homepage: {
    patterns: [
      "{primary} in {location} | {brand}",
      "{primary} {location} | {brand}",
      "{brand} - {primary} in {location}",
      "{primary} | {brand} {location}",
    ],
    fallback: "Premier Flight Training School in Reno, NV | NV Flight",
  },
  programs: {
    patterns: [
      "{primary} | {brand} {location}",
      "Professional {primary} | {brand}",
      "{primary} in {location} | {brand}",
      "{brand} {primary} Programs",
    ],
    fallback: "Flight Training Programs | NV Flight Reno, NV",
  },
  discovery: {
    patterns: [
      "{primary} in {location} | {brand}",
      "Book Your {primary} | {brand}",
      "{primary} {location} | {brand}",
      "{brand} - {primary} Experience",
    ],
    fallback: "Discovery Flight Reno, NV | NV Flight",
  },
  about: {
    patterns: [
      "About {brand} - {primary}",
      "{brand} | {primary} in {location}",
      "Learn About {brand} Flight School",
      "{primary} | {brand} {location}",
    ],
    fallback: "About NV Flight - Premier Flight Training Reno, NV",
  },
  contact: {
    patterns: [
      "Contact {brand} | {primary}",
      "Get In Touch | {brand} {location}",
      "Contact {primary} | {brand}",
      "{brand} Contact Information",
    ],
    fallback: "Contact NV Flight | Flight Training Reno, NV",
  },
  blog: {
    patterns: [
      "{primary} Blog | {brand}",
      "Aviation Insights | {brand}",
      "{primary} Articles | {brand}",
      "{brand} Aviation Blog",
    ],
    fallback: "Aviation Blog | NV Flight",
  },
} as const;

// Page-specific description templates
const PAGE_DESCRIPTION_TEMPLATES = {
  homepage: {
    templates: [
      "Premier {primary} in {location}. {secondary} with certified instructors. {cta}",
      "{primary} at {brand} - {location}'s leading flight school. {secondary}. {cta}",
      "Professional {primary} in {location}. Expert {secondary} with personalized instruction. {cta}",
      "Discover excellence in {primary} at {brand}. Located in {location}, offering {secondary}. {cta}",
    ],
    cta: [
      "Contact us today!",
      "Start your aviation journey now!",
      "Get started with a discovery flight!",
      "Schedule your consultation today!",
    ],
  },
  programs: {
    templates: [
      "Comprehensive {primary} in {location}. From {secondary} to advanced ratings. {cta}",
      "Professional {primary} with certified CFIs in {location}. {secondary} available. {cta}",
      "{primary} at {brand} - {location}. Individual and accelerated {secondary}. {cta}",
      "Expert {primary} in {location}. Complete {secondary} from private to commercial. {cta}",
    ],
    cta: [
      "Enroll now!",
      "Start your training today!",
      "Contact us to begin!",
      "Get started with your aviation career!",
    ],
  },
  discovery: {
    templates: [
      "Experience flying with a {primary} in {location}. {secondary} available. {cta}",
      "Book your {primary} at {brand} - {location}. Perfect introduction to {secondary}. {cta}",
      "{primary} in {location}. Try flying with professional instructors. {secondary}. {cta}",
      "Discover aviation with a {primary} in {location}. {secondary} experience. {cta}",
    ],
    cta: [
      "Book your flight today!",
      "Schedule now!",
      "Reserve your discovery flight!",
      "Experience flight today!",
    ],
  },
  about: {
    templates: [
      "Learn about {brand}, {location}'s premier {primary}. {secondary} with experienced instructors. {cta}",
      "{brand} is {location}'s leading {primary}. Offering {secondary} since our founding. {cta}",
      "About {brand} - Professional {primary} in {location}. {secondary} excellence. {cta}",
      "Discover {brand}'s commitment to {primary} in {location}. {secondary} training. {cta}",
    ],
    cta: [
      "Learn more about us!",
      "Meet our team!",
      "Contact us today!",
      "Join our aviation community!",
    ],
  },
  contact: {
    templates: [
      "Contact {brand} for {primary} in {location}. Get information about {secondary}. {cta}",
      "Get in touch with {brand} - {location}'s {primary} experts. {secondary} available. {cta}",
      "Contact {location}'s premier {primary} school. {brand} offers {secondary}. {cta}",
      "Reach out to {brand} for {primary} information. Located in {location}. {cta}",
    ],
    cta: [
      "Call or visit today!",
      "Get your questions answered!",
      "Schedule a consultation!",
      "Contact us now!",
    ],
  },
  blog: {
    templates: [
      "Aviation insights and {primary} tips from {brand} experts in {location}. {secondary} articles. {cta}",
      "Read the latest {primary} news and tips from {brand} - {location}. {secondary} content. {cta}",
      "{brand}'s aviation blog featuring {primary} insights and {secondary} tips. {cta}",
      "Expert {primary} advice and aviation insights from {brand} instructors in {location}. {cta}",
    ],
    cta: [
      "Read our latest articles!",
      "Stay informed with our blog!",
      "Explore aviation insights!",
      "Learn from our experts!",
    ],
  },
} as const;

// Title generation strategies
export class TitleStrategy {
  /**
   * Generate optimized page title using multiple strategies
   */
  static generateTitle(
    pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
    options: {
      customTitle?: string;
      keywords?: string[];
      location?: string;
      brand?: string;
      prioritizeKeywords?: boolean;
    } = {}
  ): string {
    const {
      customTitle,
      keywords = [],
      location = TITLE_STRATEGIES.location,
      brand = TITLE_STRATEGIES.brandName,
      prioritizeKeywords = true,
    } = options;

    // If custom title is provided and fits well, enhance it
    if (customTitle) {
      return this.enhanceCustomTitle(customTitle, {
        pageType,
        keywords,
        location,
        brand,
      });
    }

    // Generate from templates
    return this.generateFromTemplate(pageType, {
      keywords,
      location,
      brand,
      prioritizeKeywords,
    });
  }

  /**
   * Enhance custom title with SEO optimization
   */
  private static enhanceCustomTitle(
    customTitle: string,
    options: {
      pageType: keyof typeof PAGE_KEYWORD_TEMPLATES;
      keywords: string[];
      location: string;
      brand: string;
    }
  ): string {
    const { pageType, keywords, location, brand } = options;
    let enhancedTitle = customTitle;

    // Add brand if not present
    if (!enhancedTitle.toLowerCase().includes(brand.toLowerCase())) {
      if (
        enhancedTitle.length + brand.length + 3 <=
        TITLE_STRATEGIES.maxLength
      ) {
        enhancedTitle = `${enhancedTitle} | ${brand}`;
      }
    }

    // Add location if not present and space allows
    if (
      !enhancedTitle
        .toLowerCase()
        .includes(location.split(",")[0].toLowerCase()) &&
      enhancedTitle.length + location.length + 1 <= TITLE_STRATEGIES.maxLength
    ) {
      enhancedTitle = enhancedTitle.replace(brand, `${brand} ${location}`);
    }

    // Ensure primary keyword is present
    if (keywords.length > 0) {
      const primaryKeyword = keywords[0];
      if (
        !enhancedTitle.toLowerCase().includes(primaryKeyword.toLowerCase()) &&
        enhancedTitle.length + primaryKeyword.length + 3 <=
          TITLE_STRATEGIES.maxLength
      ) {
        enhancedTitle = `${primaryKeyword} | ${enhancedTitle}`;
      }
    }

    return this.truncateTitle(enhancedTitle);
  }

  /**
   * Generate title from template patterns
   */
  private static generateFromTemplate(
    pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
    options: {
      keywords: string[];
      location: string;
      brand: string;
      prioritizeKeywords: boolean;
    }
  ): string {
    const { keywords, location, brand, prioritizeKeywords } = options;
    const template = PAGE_TITLE_TEMPLATES[pageType];

    if (!template) {
      return `${keywords[0] || "Flight Training"} | ${brand} ${location}`;
    }

    const primaryKeyword = keywords[0] || "flight training";

    const variables = {
      primary: primaryKeyword,
      brand,
      location,
    };

    // Try each pattern until one fits within length constraints
    for (const pattern of template.patterns) {
      const title = this.applyTemplate(pattern, variables);
      if (title.length <= TITLE_STRATEGIES.maxLength) {
        return title;
      }
    }

    // Fall back to template fallback or basic pattern
    return (
      template.fallback ||
      this.generateBasicTitle(primaryKeyword, brand, location)
    );
  }

  /**
   * Apply variables to template pattern
   */
  private static applyTemplate(
    pattern: string,
    variables: Record<string, string>
  ): string {
    return pattern.replace(
      /\{(\w+)\}/g,
      (match, key) => variables[key] || match
    );
  }

  /**
   * Generate basic title format
   */
  private static generateBasicTitle(
    keyword: string,
    brand: string,
    location: string
  ): string {
    const basicTitle = `${keyword} | ${brand} ${location}`;
    return this.truncateTitle(basicTitle);
  }

  /**
   * Truncate title to fit length constraints
   */
  private static truncateTitle(title: string): string {
    if (title.length <= TITLE_STRATEGIES.maxLength) {
      return title;
    }

    // Try removing location first
    const withoutLocation = title.replace(/\s+[\w\s,]+,?\s*NV\s*/g, " ").trim();
    if (withoutLocation.length <= TITLE_STRATEGIES.maxLength) {
      return withoutLocation;
    }

    // Truncate to fit
    return title.substring(0, TITLE_STRATEGIES.maxLength - 3) + "...";
  }
}

// Description generation strategies
export class DescriptionStrategy {
  /**
   * Generate optimized meta description using multiple strategies
   */
  static generateDescription(
    pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
    options: {
      customDescription?: string;
      keywords?: string[];
      location?: string;
      brand?: string;
      maxLength?: number;
    } = {}
  ): string {
    const {
      customDescription,
      keywords = [],
      location = TITLE_STRATEGIES.location,
      brand = TITLE_STRATEGIES.brandName,
      maxLength = DESCRIPTION_STRATEGIES.maxLength,
    } = options;

    // If custom description is provided, enhance it
    if (customDescription) {
      return this.enhanceCustomDescription(customDescription, {
        pageType,
        keywords,
        location,
        brand,
        maxLength,
      });
    }

    // Generate from templates
    return this.generateFromTemplate(pageType, {
      keywords,
      location,
      brand,
      maxLength,
    });
  }

  /**
   * Enhance custom description with SEO optimization
   */
  private static enhanceCustomDescription(
    customDescription: string,
    options: {
      pageType: keyof typeof PAGE_KEYWORD_TEMPLATES;
      keywords: string[];
      location: string;
      brand: string;
      maxLength: number;
    }
  ): string {
    const { keywords, location, maxLength } = options;
    let description = customDescription;

    // Ensure primary keyword appears early if not present
    if (keywords.length > 0) {
      const primaryKeyword = keywords[0];
      if (!description.toLowerCase().includes(primaryKeyword.toLowerCase())) {
        description = `${primaryKeyword} - ${description}`;
      }
    }

    // Add location if not present and space allows
    if (
      !description
        .toLowerCase()
        .includes(location.split(",")[0].toLowerCase()) &&
      description.length + location.length + 5 < maxLength
    ) {
      description = description.replace(/\.$/, ` in ${location}.`);
    }

    // Add call-to-action if space allows
    const cta = "Contact us today!";
    if (description.length + cta.length + 1 <= maxLength) {
      description = `${description.replace(/\.$/, "")} ${cta}`;
    }

    return this.truncateDescription(description, maxLength);
  }

  /**
   * Generate description from template patterns
   */
  private static generateFromTemplate(
    pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
    options: {
      keywords: string[];
      location: string;
      brand: string;
      maxLength: number;
    }
  ): string {
    const { keywords, location, brand, maxLength } = options;
    const template = PAGE_DESCRIPTION_TEMPLATES[pageType];

    if (!template) {
      return this.generateBasicDescription(
        keywords[0] || "flight training",
        location,
        brand,
        maxLength
      );
    }

    const primaryKeyword = keywords[0] || "flight training";
    const secondaryKeyword = keywords[1] || "pilot training";
    const randomCTA =
      template.cta[Math.floor(Math.random() * template.cta.length)];

    const variables = {
      primary: primaryKeyword,
      secondary: secondaryKeyword,
      brand,
      location,
      cta: randomCTA,
    };

    // Try each template until one fits within length constraints
    for (const templatePattern of template.templates) {
      const description = this.applyTemplate(templatePattern, variables);
      if (description.length <= maxLength) {
        return description;
      }
    }

    // Fall back to basic description
    return this.generateBasicDescription(
      primaryKeyword,
      location,
      brand,
      maxLength
    );
  }

  /**
   * Apply variables to template pattern
   */
  private static applyTemplate(
    pattern: string,
    variables: Record<string, string>
  ): string {
    return pattern.replace(
      /\{(\w+)\}/g,
      (match, key) => variables[key] || match
    );
  }

  /**
   * Generate basic description format
   */
  private static generateBasicDescription(
    keyword: string,
    location: string,
    brand: string,
    maxLength: number
  ): string {
    const basicDescription = `Professional ${keyword} in ${location}. ${brand} offers comprehensive pilot training with certified instructors. Contact us today!`;
    return this.truncateDescription(basicDescription, maxLength);
  }

  /**
   * Truncate description to fit length constraints
   */
  private static truncateDescription(
    description: string,
    maxLength: number
  ): string {
    if (description.length <= maxLength) {
      return description;
    }

    // Find the last complete sentence that fits
    const sentences = description.split(". ");
    let result = "";

    for (const sentence of sentences) {
      const potential = result ? `${result}. ${sentence}` : sentence;
      if (potential.length <= maxLength - 3) {
        result = potential;
      } else {
        break;
      }
    }

    // If no complete sentences fit, truncate at word boundaries
    if (!result) {
      const words = description.split(" ");
      result = "";
      for (const word of words) {
        const potential = result ? `${result} ${word}` : word;
        if (potential.length <= maxLength - 3) {
          result = potential;
        } else {
          break;
        }
      }
      result += "...";
    } else if (!result.endsWith(".")) {
      result += ".";
    }

    return result;
  }
}

// Advanced title/description analysis and optimization
export class TitleDescriptionAnalyzer {
  /**
   * Analyze title quality and provide optimization recommendations
   */
  static analyzeTitle(
    title: string,
    keywords: string[] = []
  ): {
    score: number;
    issues: string[];
    recommendations: string[];
    strengths: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    const strengths: string[] = [];
    let score = 100;

    // Length analysis
    if (title.length < 30) {
      issues.push("Title too short");
      recommendations.push("Expand title to 30-60 characters");
      score -= 20;
    } else if (title.length > 60) {
      issues.push("Title too long - may be truncated in search results");
      recommendations.push("Shorten title to under 60 characters");
      score -= 15;
    } else {
      strengths.push("Good title length");
    }

    // Keyword analysis
    if (keywords.length > 0) {
      const hasKeywords = keywords.some((keyword) =>
        title.toLowerCase().includes(keyword.toLowerCase())
      );
      if (hasKeywords) {
        strengths.push("Contains target keywords");
      } else {
        issues.push("Missing target keywords");
        recommendations.push("Include primary keywords in title");
        score -= 25;
      }
    }

    // Brand presence
    if (title.includes("NV Flight") || title.includes("NVFlight")) {
      strengths.push("Includes brand name");
    } else {
      recommendations.push("Consider including brand name");
      score -= 5;
    }

    // Location presence
    if (
      title.toLowerCase().includes("reno") ||
      title.toLowerCase().includes("nevada")
    ) {
      strengths.push("Includes location information");
    } else {
      recommendations.push("Consider including location for local SEO");
      score -= 5;
    }

    return { score: Math.max(0, score), issues, recommendations, strengths };
  }

  /**
   * Analyze description quality and provide optimization recommendations
   */
  static analyzeDescription(
    description: string,
    keywords: string[] = []
  ): {
    score: number;
    issues: string[];
    recommendations: string[];
    strengths: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    const strengths: string[] = [];
    let score = 100;

    // Length analysis
    if (description.length < 120) {
      issues.push("Description too short");
      recommendations.push("Expand description to 120-160 characters");
      score -= 20;
    } else if (description.length > 160) {
      issues.push("Description too long - may be truncated");
      recommendations.push("Shorten description to under 160 characters");
      score -= 15;
    } else {
      strengths.push("Good description length");
    }

    // Keyword analysis
    if (keywords.length > 0) {
      const keywordCount = keywords.filter((keyword) =>
        description.toLowerCase().includes(keyword.toLowerCase())
      ).length;

      if (keywordCount >= 2) {
        strengths.push("Contains multiple target keywords");
      } else if (keywordCount === 1) {
        strengths.push("Contains target keyword");
      } else {
        issues.push("Missing target keywords");
        recommendations.push("Include primary keywords in description");
        score -= 25;
      }
    }

    // Call-to-action analysis
    const ctaPatterns =
      /contact|call|book|schedule|start|get|learn|discover|try/i;
    if (ctaPatterns.test(description)) {
      strengths.push("Includes call-to-action");
    } else {
      recommendations.push("Add call-to-action to encourage clicks");
      score -= 10;
    }

    // Readability check
    const sentences = description.split(".").filter((s) => s.trim().length > 0);
    if (sentences.length >= 2) {
      strengths.push("Good sentence structure");
    } else {
      recommendations.push("Consider adding more sentence variety");
      score -= 5;
    }

    return { score: Math.max(0, score), issues, recommendations, strengths };
  }

  /**
   * Generate A/B testing variations for titles and descriptions
   */
  static generateVariations(
    pageType: keyof typeof PAGE_KEYWORD_TEMPLATES,
    keywords: string[],
    count: number = 3
  ): {
    titles: string[];
    descriptions: string[];
  } {
    const titles: string[] = [];
    const descriptions: string[] = [];

    // Generate title variations
    for (let i = 0; i < count; i++) {
      const title = TitleStrategy.generateTitle(pageType, {
        keywords,
        prioritizeKeywords: i % 2 === 0,
      });
      if (!titles.includes(title)) {
        titles.push(title);
      }
    }

    // Generate description variations
    for (let i = 0; i < count; i++) {
      const description = DescriptionStrategy.generateDescription(pageType, {
        keywords,
      });
      if (!descriptions.includes(description)) {
        descriptions.push(description);
      }
    }

    // Ensure we have enough variations by adding more if needed
    while (titles.length < count) {
      const basic = `${keywords[0] || "Flight Training"} | NV Flight Reno, NV`;
      if (!titles.includes(basic)) titles.push(basic);
      break;
    }

    while (descriptions.length < count) {
      const basic = `Professional ${keywords[0] || "flight training"} in Reno, Nevada. Expert instruction with certified CFIs. Contact us today!`;
      if (!descriptions.includes(basic)) descriptions.push(basic);
      break;
    }

    return { titles, descriptions };
  }
}

// Export utility functions for easy access
export {
  TITLE_STRATEGIES,
  DESCRIPTION_STRATEGIES,
  PAGE_TITLE_TEMPLATES,
  PAGE_DESCRIPTION_TEMPLATES,
};
