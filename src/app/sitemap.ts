import type { MetadataRoute } from "next";
import { products } from "./data/products";
import { productCategories } from "./data/productCategories";

const SITE_URL = "https://www.protekpower.com";

// Blog posts live in Firestore and the listing that links to them renders in
// the browser, so a crawler following links never reaches a post. Listing the
// collection here is what makes them discoverable.
async function fetchPostEntries(): Promise<MetadataRoute.Sitemap> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!projectId || !apiKey) return [];

  const url =
    `https://firestore.googleapis.com/v1/projects/${projectId}` +
    `/databases/(default)/documents/posts?key=${apiKey}&pageSize=300`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const documents: Array<{ name?: string; updateTime?: string }> =
      data?.documents ?? [];

    return documents.flatMap((doc) => {
      const id = doc.name?.split("/").pop();
      if (!id) return [];
      return [
        {
          url: `${SITE_URL}/blog/${id}`,
          lastModified: doc.updateTime ? new Date(doc.updateTime) : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.5,
        },
      ];
    });
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
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

  const postRoutes = await fetchPostEntries();

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...postRoutes];
}
