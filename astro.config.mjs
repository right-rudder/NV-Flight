import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nvflight.com",
  integrations: [tailwind(), sitemap(), react()],
  redirects: {
    "/doyle/": "/nv-flight-about",
    "/watermark/": "/",
    "/img_20180901_152514693_hdr/": "/nv-flight-about",
    "/img_5937/": "/nv-flight-about",
    "/about-us/": "/nv-flight-about/team",
    "/accelerated-courses/": "/become-a-pilot",
    "/contact-2/": "/contact",
    "/our-aircraft/": "/nv-flight-about/our-fleet",
    "/fried-gator/": "/",
    "/placeholder-image/": "/",
    "/international-student-pilots/": "/nv-flight-about/blog",
    "/flight-training-financing/": "/become-a-pilot",
    "/individual-accelerated-program/": "/programs/private-pilot-asel",
    "/doyle/supplies-materials/": "/",
    "/edited-copy-2/": "/",
    "/bw-savannah-street/": "/",
    "/far-141-flight-training/": "/",
    "/our-pilots-achieving-goals/": "/",
    "/learn-to-fly-reno/": "/become-a-pilot",
    "/92812860-d09a-4c10-b71e-7e839f4ab699/": "/",
    "/pilot-medical-qa/": "/nv-flight-about/blog",
    "/how-long-to-get-your-private-pilot-license/": "/nv-flight-about/blog",
    "/what-is-the-difference-between-141-and-61-flight-training/": "/nv-flight-about/blog",
    "/wp-content/uploads/2021/12/aircraft-wb.pdf": "/",
    "/wp-content/uploads/2023/06/n7969w-wb.pdf": "/",
    "/wp-content/uploads/2022/08/pilot-rental-agreement-v.3.pdf": "/",
    "/wp-content/uploads/2021/12/pa-28-180-d-poh.pdf": "/"
  },
});
