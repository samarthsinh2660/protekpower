import type { MetadataRoute } from "next";
import { products } from "./data/products";
import { productCategories } from "./data/productCategories";

const SITE_URL = "https://www.protekpower.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  // Category listings are filtered views of /product driven by ?category=
  const categoryRoutes: MetadataRoute.Sitemap = productCategories.map(
    (category: { slug: string }) => ({
      url: `${SITE_URL}/product?category=${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  // Only products present in data/products.js resolve to a real detail page,
  // so only those are advertised here.
  const productRoutes: MetadataRoute.Sitemap = products.map(
    (product: { slug: string }) => ({
      url: `${SITE_URL}/product/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
