import type { APIRoute } from "astro";
import { generateSitemapReport } from "../utils/seo-monitor";

export const GET: APIRoute = async () => {
  try {
    const report = await generateSitemapReport();

    return new Response(report, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache", // Don't cache this report
      },
    });
  } catch (error) {
    return new Response("Error generating SEO report: " + error, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
