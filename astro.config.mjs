import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  site: "https://nvflight.com",
  integrations: [tailwind(), sitemap({
    // Exclude pages that shouldn't be indexed
    filter: (page) => {
      const excludePatterns = [
        "/404",
        "/500",
        "/contact-form-confirmation",
        "/discovery-form-confirmation",
        "/enroll-form-confirmation",
        "/privacy-policy",
        "/terms-of-service",
      ];
      return !excludePatterns.some((pattern) => page.includes(pattern));
    },

    // Configure sitemap generation settings
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),

    // Customize individual page properties
    serialize: (item) => {
      // Homepage gets highest priority
      if (item.url === "" || item.url === "/") {
        item.priority = 1.0;
        item.changefreq = "weekly";
      }
      // High priority for main conversion pages
      else if (
        item.url.includes("/become-a-pilot") ||
        item.url.includes("/programs") ||
        item.url.includes("/discovery-flight") ||
        item.url.includes("/enroll")
      ) {
        item.priority = 0.9;
        item.changefreq = "monthly";
      }
      // Blog content gets good priority and frequent updates
      else if (item.url.includes("/blog")) {
        item.priority = 0.8;
        item.changefreq = "weekly";
      }
      // About pages are important but change less frequently
      else if (item.url.includes("/nv-flight-about")) {
        item.priority = 0.7;
        item.changefreq = "monthly";
      }
      // Contact and other pages
      else if (item.url.includes("/contact")) {
        item.priority = 0.6;
        item.changefreq = "monthly";
      }

      // Ensure lastmod is set for all pages
      item.lastmod = new Date();

      return item;
    },
  }), react(), criticalCss()],
});