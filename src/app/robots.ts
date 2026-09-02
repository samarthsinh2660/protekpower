import type { MetadataRoute } from "next";

const SITE_URL = "https://www.protekpower.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The blog editor is an authoring tool, not content.
        disallow: ["/blog/writeBlog"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
