export const metadata = {
    title: "Blog — Power Quality Insights & Product Guides",
    description:
        "Guides and insights on voltage stabilization, power quality, UPS selection and equipment protection from the engineering team at Protek Power.",
    alternates: { canonical: "/blog" },
    openGraph: {
        url: "/blog",
        title: "Protek Power Blog — Power Quality Insights & Product Guides",
        description:
            "Guides on voltage stabilization, power quality and equipment protection from Protek Power.",
    },
};

export default function BlogLayout({ children }) {
    return children;
}
