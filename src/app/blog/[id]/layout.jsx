const SITE_URL = 'https://www.protekpower.com';

const FALLBACK = {
    title: 'Blog Post',
    description:
        'Insights on voltage stabilization, power quality and equipment protection from the engineering team at Protek Power.',
};

// Post bodies are authored into Firestore by /blog/writeBlog and were only
// ever read in the browser, which left every post sharing one title. Reading
// the document here via the REST API keeps metadata server-side without
// holding a Firestore SDK connection open during a render.
async function fetchPost(id) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (!projectId || !apiKey || !id) return null;

    const url =
        `https://firestore.googleapis.com/v1/projects/${projectId}` +
        `/databases/(default)/documents/posts/${encodeURIComponent(id)}?key=${apiKey}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) return null;
        const doc = await res.json();
        return doc?.fields ? doc.fields : null;
    } catch {
        return null;
    }
}

const str = (field) => field?.stringValue || '';

function firstTextAndImage(fields) {
    const values = fields?.sections?.arrayValue?.values || [];
    let text = '';
    let image = '';
    for (const value of values) {
        const section = value?.mapValue?.fields;
        if (!section) continue;
        if (!text && str(section.content)) text = str(section.content);
        if (!image && str(section.src)) image = str(section.src);
        if (text && image) break;
    }
    return { text, image };
}

function toDescription(text, fallback) {
    const plain = text
        .replace(/<[^>]*>/g, ' ')   // the editor stores HTML
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (!plain) return fallback;
    return plain.length > 160 ? `${plain.slice(0, 157).trimEnd()}…` : plain;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const fields = await fetchPost(id);

    if (!fields) {
        return { ...FALLBACK, alternates: { canonical: `/blog/${id}` } };
    }

    const title = str(fields.title) || str(fields.heading) || FALLBACK.title;
    const { text, image } = firstTextAndImage(fields);
    const description = toDescription(text, FALLBACK.description);

    return {
        title,
        description,
        alternates: { canonical: `/blog/${id}` },
        openGraph: {
            type: 'article',
            url: `/blog/${id}`,
            title,
            description,
            publishedTime: str(fields.date) || undefined,
            images: image ? [{ url: image, alt: title }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

export default async function BlogPostLayout({ children, params }) {
    const { id } = await params;
    const fields = await fetchPost(id);
    if (!fields) return children;

    const title = str(fields.title) || str(fields.heading);
    const { text, image } = firstTextAndImage(fields);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: toDescription(text, FALLBACK.description),
        url: `${SITE_URL}/blog/${id}`,
        mainEntityOfPage: `${SITE_URL}/blog/${id}`,
        ...(image ? { image } : {}),
        ...(str(fields.date) ? { datePublished: str(fields.date) } : {}),
        author: { '@type': 'Organization', name: 'Protek Power' },
        publisher: {
            '@type': 'Organization',
            name: 'Protek Power',
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/assets/images/logo.png`,
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {children}
        </>
    );
}
