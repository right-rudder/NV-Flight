/**
 * Schema Strategy Utilities
 * 
 * This utility provides functions to generate and manage structured data
 * across the NV Flight website for optimal SEO performance.
 */

import { COMPANY_NAME, WEBSITE_URL, LOCATIONS } from "../consts";

export interface SchemaConfig {
  // Core business information
  organization: {
    name: string;
    description: string;
    url: string;
    logo: string;
    contactInfo: {
      phone: string;
      email: string;
      address: {
        street: string;
        city: string;
        state: string;
        zip: string;
      };
    };
    socialProfiles: string[];
    businessHours: {
      dayOfWeek: string[];
      opens: string;
      closes: string;
    }[];
  };

  // Services and offerings
  services: {
    name: string;
    description: string;
    category: string;
    price?: string;
    duration?: string;
  }[];

  // Educational programs
  courses: {
    name: string;
    description: string;
    provider: string;
    courseMode: string;
    timeRequired: string;
    price?: string;
  }[];

  // SEO settings
  seo: {
    defaultRating: {
      value: number;
      count: number;
    };
    keywords: string[];
    categories: string[];
  };
}

/**
 * Default schema configuration for NV Flight
 */
export const DEFAULT_SCHEMA_CONFIG: SchemaConfig = {
  organization: {
    name: COMPANY_NAME,
    description: "Premier flight training school in Reno, Nevada, offering comprehensive pilot education from private pilot licenses to advanced commercial certifications.",
    url: WEBSITE_URL,
    logo: "/nvflight-nobg.webp",
    contactInfo: {
      phone: "775-227-8323",
      email: "renodesk@nvflight.com",
      address: {
        street: "Gentry Wy",
        city: "Reno", 
        state: "NV",
        zip: "89502"
      }
    },
    socialProfiles: [
      "https://www.facebook.com/nvflight/",
      "https://www.instagram.com/nvflight/"
    ],
    businessHours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00"
      }
    ]
  },

  services: [
    {
      name: "Private Pilot License Training",
      description: "Complete training program for private pilot certification",
      category: "Flight Training",
      duration: "6-12 months"
    },
    {
      name: "Instrument Rating Training", 
      description: "Advanced training for instrument flight rules certification",
      category: "Advanced Training",
      duration: "3-6 months"
    },
    {
      name: "Commercial Pilot License Training",
      description: "Professional pilot certification training program",
      category: "Professional Training", 
      duration: "12-18 months"
    },
    {
      name: "Multi-Engine Rating",
      description: "Training for multi-engine aircraft operations",
      category: "Advanced Training",
      duration: "2-4 weeks"
    },
    {
      name: "Certified Flight Instructor Training",
      description: "Training to become a certified flight instructor",
      category: "Instructor Training",
      duration: "4-8 weeks"
    },
    {
      name: "Discovery Flights",
      description: "Introductory flight experience for prospective pilots",
      category: "Introduction",
      duration: "1-2 hours",
      price: "Starting at $199"
    }
  ],

  courses: [
    {
      name: "Private Pilot Ground School",
      description: "Comprehensive ground training for private pilot certification",
      provider: COMPANY_NAME,
      courseMode: "blended",
      timeRequired: "40 hours"
    },
    {
      name: "Instrument Rating Ground School", 
      description: "Advanced ground training for instrument rating",
      provider: COMPANY_NAME,
      courseMode: "blended",
      timeRequired: "35 hours"
    },
    {
      name: "Commercial Pilot Ground School",
      description: "Professional pilot ground training program",
      provider: COMPANY_NAME,
      courseMode: "blended", 
      timeRequired: "60 hours"
    }
  ],

  seo: {
    defaultRating: {
      value: 4.9,
      count: 127
    },
    keywords: [
      "flight training",
      "pilot school", 
      "aviation education",
      "private pilot license",
      "instrument rating",
      "commercial pilot",
      "flight instructor",
      "discovery flight"
    ],
    categories: [
      "Education",
      "Aviation",
      "Training",
      "Transportation"
    ]
  }
};

/**
 * Generate organization schema based on configuration
 */
export function generateOrganizationSchema(config: SchemaConfig = DEFAULT_SCHEMA_CONFIG) {
  const { organization, seo } = config;
  
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FlightSchool", "EducationalOrganization", "LocalBusiness"],
    "@id": `${organization.url}#organization`,
    "name": organization.name,
    "description": organization.description,
    "url": organization.url,
    "logo": {
      "@type": "ImageObject",
      "url": new URL(organization.logo, organization.url).toString()
    },
    "telephone": organization.contactInfo.phone,
    "email": organization.contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organization.contactInfo.address.street,
      "addressLocality": organization.contactInfo.address.city,
      "addressRegion": organization.contactInfo.address.state,
      "postalCode": organization.contactInfo.address.zip,
      "addressCountry": "US"
    },
    "sameAs": organization.socialProfiles,
    "openingHoursSpecification": organization.businessHours,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": seo.defaultRating.value.toString(),
      "reviewCount": seo.defaultRating.count.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

/**
 * Generate service schema based on configuration
 */
export function generateServiceSchema(config: SchemaConfig = DEFAULT_SCHEMA_CONFIG) {
  const { services, organization } = config;
  
  return services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "category": service.category,
    "provider": {
      "@type": "Organization",
      "name": organization.name,
      "@id": `${organization.url}#organization`
    },
    "offers": {
      "@type": "Offer",
      "price": service.price || "Contact for pricing",
      "priceCurrency": "USD"
    },
    "timeRequired": service.duration
  }));
}

/**
 * Generate course schema based on configuration
 */
export function generateCourseSchema(config: SchemaConfig = DEFAULT_SCHEMA_CONFIG) {
  const { courses, organization } = config;
  
  return courses.map(course => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider,
      "@id": `${organization.url}#organization`
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": course.courseMode,
      "timeRequired": course.timeRequired
    }
  }));
}

/**
 * Generate website schema with search capabilities
 */
export function generateWebsiteSchema(config: SchemaConfig = DEFAULT_SCHEMA_CONFIG) {
  const { organization } = config;
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${organization.url}#website`,
    "name": organization.name,
    "url": organization.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${organization.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Schema validation utilities
 */
export class SchemaValidator {
  static validateOrganization(schema: any): boolean {
    const required = ['@context', '@type', 'name', 'url'];
    return required.every(field => schema[field]);
  }

  static validateService(schema: any): boolean {
    const required = ['@context', '@type', 'name', 'provider'];
    return required.every(field => schema[field]);
  }

  static validateCourse(schema: any): boolean {
    const required = ['@context', '@type', 'name', 'provider'];
    return required.every(field => schema[field]);
  }

  static logValidation(schemaType: string, schema: any, isValid: boolean) {
    if (isValid) {
      console.log(`✅ ${schemaType} schema is valid`);
    } else {
      console.error(`❌ ${schemaType} schema is invalid`, schema);
    }
  }
}

/**
 * SEO enhancement utilities
 */
export class SEOEnhancer {
  /**
   * Generate keywords from schema content
   */
  static extractKeywords(schemas: any[]): string[] {
    const keywords = new Set<string>();
    
    schemas.forEach(schema => {
      if (schema.name) {
        keywords.add(schema.name.toLowerCase());
      }
      if (schema.description) {
        // Extract meaningful words from description
        const words = schema.description
          .toLowerCase()
          .match(/\b[a-z]{3,}\b/g) || [];
        words.forEach(word => keywords.add(word));
      }
    });
    
    return Array.from(keywords);
  }

  /**
   * Generate meta description from schema
   */
  static generateMetaDescription(organizationSchema: any, maxLength: number = 160): string {
    let description = organizationSchema.description || '';
    
    if (description.length > maxLength) {
      description = description.substring(0, maxLength - 3) + '...';
    }
    
    return description;
  }

  /**
   * Calculate schema completeness score
   */
  static calculateCompletenessScore(schema: any): number {
    const optionalFields = [
      'description', 'image', 'telephone', 'address', 
      'openingHours', 'aggregateRating', 'sameAs'
    ];
    
    const presentFields = optionalFields.filter(field => 
      schema[field] !== undefined && schema[field] !== null
    );
    
    return Math.round((presentFields.length / optionalFields.length) * 100);
  }
}

// All functions are already exported above
