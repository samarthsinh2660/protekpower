// Authoring tool, not public content — keep it out of search results entirely.
export const metadata = {
    title: "Write Blog",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
    },
};

export default function WriteBlogLayout({ children }) {
    return children;
}
