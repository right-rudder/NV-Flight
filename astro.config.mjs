import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://NVFlightco.com/",
  integrations: [tailwind(), sitemap(), react()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
    "/our-team": "/NVFlight/team",
    "/private-pilot-training": "/programs/private-pilot",
    "/instrument-rating": "/programs/instrument-rating",
    "/commercial-pilot-training": "/programs/commercial-pilot",
    "/multi-engine-rating": "/programs/multi-engine-rating",
    "/instruct-at-NVFlight": "/programs/certified-flight-instructor",
    "/visit-NVFlight": "/NVFlight/visit",
    "/why-NVFlight": "/NVFlight",
  },
});
