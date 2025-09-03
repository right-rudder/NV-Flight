// Development utilities for testing breadcrumbs
import type { BreadcrumbItem } from "./breadcrumbs";

/**
 * Test breadcrumbs for all major page types
 */
export const testBreadcrumbs = {
  home: [{ name: "Home", url: "/", current: true }] as BreadcrumbItem[],

  blog: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog", current: true },
  ] as BreadcrumbItem[],

  blogPost: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "How Long Does It Take to Get Your Private Pilot License?",
      url: "/blog/how-long-does-it-take-to-get-your-private-pilot-license",
      current: true,
    },
  ] as BreadcrumbItem[],

  programs: [
    { name: "Home", url: "/" },
    { name: "Programs", url: "/programs", current: true },
  ] as BreadcrumbItem[],

  programPage: [
    { name: "Home", url: "/" },
    { name: "Programs", url: "/programs" },
    {
      name: "Private Pilot ASEL",
      url: "/programs/private-pilot-asel",
      current: true,
    },
  ] as BreadcrumbItem[],

  about: [
    { name: "Home", url: "/" },
    { name: "About", url: "/nv-flight-about", current: true },
  ] as BreadcrumbItem[],

  aboutTeam: [
    { name: "Home", url: "/" },
    { name: "About", url: "/nv-flight-about" },
    { name: "Our Team", url: "/nv-flight-about/team", current: true },
  ] as BreadcrumbItem[],

  aboutFleet: [
    { name: "Home", url: "/" },
    { name: "About", url: "/nv-flight-about" },
    { name: "Our Fleet", url: "/nv-flight-about/our-fleet", current: true },
  ] as BreadcrumbItem[],

  contact: [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact", current: true },
  ] as BreadcrumbItem[],

  becomePilot: [
    { name: "Home", url: "/" },
    { name: "Become a Pilot", url: "/become-a-pilot", current: true },
  ] as BreadcrumbItem[],

  discoveryFlight: [
    { name: "Home", url: "/" },
    { name: "Discovery Flight", url: "/discovery-flight", current: true },
  ] as BreadcrumbItem[],

  enroll: [
    { name: "Home", url: "/" },
    { name: "Enroll", url: "/enroll", current: true },
  ] as BreadcrumbItem[],
};

/**
 * Validate breadcrumb structure
 */
export function validateBreadcrumbs(breadcrumbs: BreadcrumbItem[]): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if breadcrumbs exist
  if (!breadcrumbs || breadcrumbs.length === 0) {
    errors.push("No breadcrumbs provided");
    return { isValid: false, errors, warnings };
  }

  // Check if first item is Home
  if (breadcrumbs[0].name !== "Home" || breadcrumbs[0].url !== "/") {
    errors.push("First breadcrumb should be 'Home' with URL '/'");
  }

  // Check if only the last item is marked as current
  const currentItems = breadcrumbs.filter((item) => item.current);
  if (currentItems.length !== 1) {
    errors.push(
      `Expected exactly 1 current item, found ${currentItems.length}`
    );
  } else if (currentItems[0] !== breadcrumbs[breadcrumbs.length - 1]) {
    errors.push("Only the last breadcrumb item should be marked as current");
  }

  // Check for empty names or URLs
  breadcrumbs.forEach((item, index) => {
    if (!item.name || item.name.trim().length === 0) {
      errors.push(`Item at index ${index} has empty name`);
    }
    if (!item.url || item.url.trim().length === 0) {
      errors.push(`Item at index ${index} has empty URL`);
    }
  });

  // Check for extremely long breadcrumb chains
  if (breadcrumbs.length > 5) {
    warnings.push(
      `Breadcrumb chain is quite long (${breadcrumbs.length} items). Consider simplifying.`
    );
  }

  // Check for very long breadcrumb names
  breadcrumbs.forEach((item, index) => {
    if (item.name.length > 50) {
      warnings.push(
        `Item at index ${index} has a very long name (${item.name.length} characters)`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Log breadcrumb validation results (development only)
 */
export function logBreadcrumbValidation(
  breadcrumbs: BreadcrumbItem[],
  pageName: string = "Unknown"
) {
  if (import.meta.env.DEV) {
    const validation = validateBreadcrumbs(breadcrumbs);

    console.group(`🍞 Breadcrumbs for ${pageName}`);
    console.log("Structure:", breadcrumbs);

    if (validation.isValid) {
      console.log("✅ Validation: Passed");
    } else {
      console.log("❌ Validation: Failed");
      validation.errors.forEach((error) => console.error("  Error:", error));
    }

    if (validation.warnings.length > 0) {
      console.log("⚠️  Warnings:");
      validation.warnings.forEach((warning) =>
        console.warn("  Warning:", warning)
      );
    }

    console.groupEnd();
  }
}
