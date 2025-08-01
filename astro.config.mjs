import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://simpliflyco.com/",
  integrations: [tailwind(), sitemap(), react()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
    "/our-team": "/simplifly/team",
    "/private-pilot-training": "/programs/private-pilot",
    "/instrument-rating": "/programs/instrument-rating",
    "/commercial-pilot-training": "/programs/commercial-pilot",
    "/multi-engine-rating": "/programs/multi-engine-rating",
    "/instruct-at-simplifly": "/programs/certified-flight-instructor",
    "/visit-simplifly": "/simplifly/visit",
    "/why-simplifly": "/simplifly",
  },
});
