// Breadcrumb utilities for generating navigation breadcrumbs
import { getCollection } from "astro:content";

export interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

/**
 * Generate breadcrumbs based on the current URL path
 */
export async function generateBreadcrumbs(url: URL): Promise<BreadcrumbItem[]> {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Always start with Home
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Home", url: "/" }];

  // Handle root path
  if (segments.length === 0) {
    breadcrumbs[0].current = true;
    return breadcrumbs;
  }

  // Handle different page types
  if (segments[0] === "blog") {
    breadcrumbs.push({ name: "Blog", url: "/blog" });

    // Individual blog post
    if (segments.length > 1) {
      const blogPosts = await getCollection("blog");
      const currentPost = blogPosts.find((post) => post.slug === segments[1]);

      if (currentPost) {
        breadcrumbs.push({
          name: currentPost.data.title,
          url: `/blog/${segments[1]}`,
          current: true,
        });
      } else {
        breadcrumbs.push({
          name: segments[1]
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          url: pathname,
          current: true,
        });
      }
    } else {
      breadcrumbs[breadcrumbs.length - 1].current = true;
    }
  } else if (segments[0] === "programs") {
    breadcrumbs.push({ name: "Programs", url: "/programs" });

    // Individual program
    if (segments.length > 1) {
      const programs = await getCollection("programs");
      const currentProgram = programs.find(
        (program) => program.slug === segments[1]
      );

      if (currentProgram) {
        breadcrumbs.push({
          name: currentProgram.data.title,
          url: `/programs/${segments[1]}`,
          current: true,
        });
      } else {
        breadcrumbs.push({
          name: segments[1]
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          url: pathname,
          current: true,
        });
      }
    } else {
      breadcrumbs[breadcrumbs.length - 1].current = true;
    }
  } else if (segments[0] === "nv-flight-about") {
    breadcrumbs.push({ name: "About", url: "/nv-flight-about" });

    // About sub-pages
    if (segments.length > 1) {
      const subPageMap: Record<string, string> = {
        team: "Our Team",
        "our-fleet": "Our Fleet",
      };

      const subPageName =
        subPageMap[segments[1]] ||
        segments[1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      breadcrumbs.push({
        name: subPageName,
        url: pathname,
        current: true,
      });
    } else {
      breadcrumbs[breadcrumbs.length - 1].current = true;
    }
  } else {
    // Handle other static pages
    const pageMap: Record<string, string> = {
      "become-a-pilot": "Become a Pilot",
      contact: "Contact",
      "discovery-flight": "Discovery Flight",
      enroll: "Enroll",
      "privacy-policy": "Privacy Policy",
      "terms-of-service": "Terms of Service",
      "contact-form-confirmation": "Contact Confirmation",
      "discovery-form-confirmation": "Discovery Flight Confirmation",
      "enroll-form-confirmation": "Enrollment Confirmation",
    };

    let currentPath = "";

    for (let i = 0; i < segments.length; i++) {
      currentPath += `/${segments[i]}`;
      const isLast = i === segments.length - 1;

      const pageName =
        pageMap[segments[i]] ||
        segments[i].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

      breadcrumbs.push({
        name: pageName,
        url: currentPath,
        current: isLast,
      });
    }
  }

  return breadcrumbs;
}

/**
 * Convert breadcrumbs to schema.org format
 */
export function breadcrumbsToSchema(
  breadcrumbs: BreadcrumbItem[],
  siteUrl: string
) {
  return breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.url, siteUrl).toString(),
  }));
}

/**
 * Get page title from breadcrumbs (last non-home item)
 */
export function getPageTitleFromBreadcrumbs(
  breadcrumbs: BreadcrumbItem[]
): string {
  const filtered = breadcrumbs.filter((item) => item.name !== "Home");
  return filtered.length > 0 ? filtered[filtered.length - 1].name : "Home";
}
