import { products } from '../../data/products';

const SITE_URL = 'https://www.protekpower.com';

function findProduct(id) {
    return products.find((p) => p.id === id || p.slug === id);
}

// Prices in the data are free-text ("25000", "30000 (Starts from)", "Upon Request").
// Only emit an offer when a number is actually present, and use AggregateOffer
// with lowPrice when the value is explicitly a starting price.
function buildOffer(price) {
    if (typeof price !== 'string' && typeof price !== 'number') return null;
    const raw = String(price);
    const match = raw.match(/[\d,]+(\.\d+)?/);
    if (!match) return null;

    const amount = match[0].replace(/,/g, '');
    const isStartingPrice = /starts?\s*from/i.test(raw);

    if (isStartingPrice) {
        return {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: amount,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'Protek Power' },
        };
    }

    return {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: amount,
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Protek Power' },
    };
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = findProduct(id);

    if (!product) {
        return {
            title: 'Product Not Found',
            robots: { index: false, follow: true },
        };
    }

    const description = product.fullDescription
        ? String(product.fullDescription).slice(0, 300)
        : product.description;

    return {
        title: `${product.name} — ${product.category}`,
        description,
        // Always point at the slug URL so /product/s1 and /product/<slug>
        // consolidate into a single indexed page.
        alternates: { canonical: `/product/${product.slug}` },
        openGraph: {
            type: 'website',
            url: `/product/${product.slug}`,
            title: `${product.name} — ${product.category}`,
            description,
            images: product.image
                ? [{ url: product.image, alt: product.name }]
                : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} — Protek Power`,
            description,
            images: product.image ? [product.image] : undefined,
        },
    };
}

export default async function ProductDetailLayout({ children, params }) {
    const { id } = await params;
    const product = findProduct(id);

    if (!product) return children;

    const offer = buildOffer(product.price);

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.fullDescription || product.description,
        category: product.category,
        sku: product.sku,
        url: `${SITE_URL}/product/${product.slug}`,
        image: (product.images?.length
            ? product.images.map((img) => `${SITE_URL}${img.url}`)
            : product.image
              ? [`${SITE_URL}${product.image}`]
              : undefined),
        brand: { '@type': 'Brand', name: 'Protek Power' },
        manufacturer: { '@type': 'Organization', name: 'Protek Power' },
        ...(offer ? { offers: offer } : {}),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/product` },
            { '@type': 'ListItem', position: 3, name: product.category },
            { '@type': 'ListItem', position: 4, name: product.name, item: `${SITE_URL}/product/${product.slug}` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
