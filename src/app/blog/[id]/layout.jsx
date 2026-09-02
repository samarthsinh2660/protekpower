// Post titles live in Firebase and are fetched client-side, so per-post
// metadata is not available here yet. This keeps posts indexable with a
// sensible default until the fetch moves server-side.
export const metadata = {
    title: 'Blog Post',
    description:
        'Insights on voltage stabilization, power quality and equipment protection from the engineering team at Protek Power.',
    openGraph: {
        type: 'article',
        title: 'Protek Power Blog',
        description:
            'Insights on voltage stabilization, power quality and equipment protection.',
    },
};

export default function BlogPostLayout({ children }) {
    return children;
}
