import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats to browsers that accept them; the optimizer falls
    // back to the original format otherwise.
    formats: ["image/avif", "image/webp"],
    // Widths the optimizer is allowed to generate, matched to the layout.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [120, 200, 300, 400],
    // Next 16 rejects any `quality` value not declared here with a 400, so
    // every quality used by a component must be listed.
    qualities: [75, 80, 90],
    // Cache optimized derivatives for 30 days.
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        // Static assets were being served with `max-age=0, must-revalidate`,
        // so every image was re-fetched on each visit. Cache them for a week
        // and let the CDN revalidate in the background.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
