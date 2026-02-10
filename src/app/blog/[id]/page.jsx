'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { defaultBlogs } from '../../data/blogPosts';
import { db } from '../../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [otherBlogs, setOtherBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // First try to fetch from Firebase
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const firebaseBlogs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Look for the blog in Firebase first
                let foundBlog = firebaseBlogs.find((b) => b.id === id);

                if (!foundBlog) {
                    // If not found in Firebase, check localStorage/defaultBlogs
                    const stored = JSON.parse(localStorage.getItem('blogs')) || defaultBlogs;
                    foundBlog = stored.find((b) => b.id === id);
                }

                setBlog(foundBlog);

                // Get other blogs from the same source
                if (foundBlog) {
                    // Combine Firebase and localStorage blogs, remove current blog
                    const stored = JSON.parse(localStorage.getItem('blogs')) || defaultBlogs;
                    const allBlogs = [...firebaseBlogs, ...stored.filter(b => !firebaseBlogs.find(fb => fb.id === b.id))];
                    setOtherBlogs(allBlogs.filter((b) => b.id !== id).slice(0, 4));
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                // Fallback to localStorage/defaultBlogs
                const stored = JSON.parse(localStorage.getItem('blogs')) || defaultBlogs;
                const found = stored.find((b) => b.id === id);
                setBlog(found);
                setOtherBlogs(stored.filter((b) => b.id !== id).slice(0, 4));
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return (
            <div style={styles.notFound}>Blog not found.</div>
        );
    }

    return (
        <>
            <div style={styles.wrapper}>
                {/* Main Content */}
                <div style={styles.mainContent}>
                    <header style={styles.header}>
                        <h1 style={styles.title}>{blog.title}</h1>
                        <p style={styles.date}>Published on {blog.date}</p>
                    </header>

                    <section style={styles.content}>
                        {blog.sections && Array.isArray(blog.sections) ? (
                            blog.sections.map((section, idx) =>
                                section.type === 'text' ? (
                                    <div
                                        key={idx}
                                        dangerouslySetInnerHTML={{ __html: section.content }}
                                        style={styles.textSection}
                                    />
                                ) : section.type === 'image' ? (
                                    <div style={styles.inlineImageContainer} key={idx}>
                                        <img
                                            src={section.src && section.src.startsWith('http') ? section.src : '/assets/images/blogs/home-power.jpg'}
                                            alt="Blog Visual"
                                            style={styles.inlineImage}
                                            onError={(e) => {
                                                e.target.src = '/assets/images/banner1.jpg';
                                            }}
                                        />
                                    </div>
                                ) : null
                            )
                        ) : blog.content ? (
                            // Handle direct content format
                            <div
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                style={styles.textSection}
                            />
                        ) : (
                            <p>No content available.</p>
                        )}
                    </section>

                    {/* Author Section */}
                    <div style={styles.authorBox}>
                        <img
                            src="/assets/images/author.jpg"
                            alt="Author"
                            style={styles.authorImage}
                            onError={(e) => {
                                e.target.src = '/assets/images/logo.png'; // Fallback to logo
                            }}
                        />
                        <div>
                            <h4 style={styles.authorName}>By Protek Power Team</h4>
                            <p style={styles.authorDesc}>
                                Experts in power management solutions, providing insights to help
                                you choose the right stabilizers, UPS systems, and energy solutions
                                for your needs.
                            </p>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div style={styles.shareBox}>
                        <span>Share: </span>
                        <a
                            href={`https://www.linkedin.com/shareArticle?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            Twitter
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${typeof window !== 'undefined' ? window.location.href : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Recommended Section */}
                    {otherBlogs.length > 0 && (
                        <div style={styles.recommendedBox}>
                            <h3 style={styles.recommendedTitle}>You may also like</h3>
                            <div style={styles.recommendedGrid}>
                                {otherBlogs.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/blog/${item.id}`}
                                        style={styles.recommendedCard}
                                    >
                                        {/* Handle image display for different data structures */}
                                        <img
                                            src={
                                                item.sections && Array.isArray(item.sections) && item.sections.find((s) => s.type === 'image')?.src && item.sections.find((s) => s.type === 'image').src.startsWith('http')
                                                    ? item.sections.find((s) => s.type === 'image')?.src
                                                    : item.content && item.image && item.image.startsWith('http')
                                                        ? item.image
                                                        : '/assets/images/blogs/home-power.jpg'
                                            }
                                            alt="Blog"
                                            style={styles.recommendedImage}
                                            onError={(e) => {
                                                e.target.src = '/assets/images/banner1.jpg';
                                            }}
                                        />
                                        <p style={styles.recommendedText}>{item.title || item.heading || 'Untitled'}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <footer style={styles.footer}>
                        <Link href="/blog" style={styles.backLink}>
                            ← Back to All Blogs
                        </Link>
                    </footer>
                </div>

                {/* Sidebar */}
                <aside style={styles.sidebar}>
                    <h3 style={styles.sidebarTitle}>Other Blogs</h3>
                    {otherBlogs.map((item) => (
                        <Link
                            key={item.id}
                            href={`/blog/${item.id}`}
                            style={styles.sidebarItem}
                        >
                            {/* Handle image display for different data structures */}
                            <img
                                src={
                                    item.sections && Array.isArray(item.sections) && item.sections.find((s) => s.type === 'image')?.src && item.sections.find((s) => s.type === 'image').src.startsWith('http')
                                        ? item.sections.find((s) => s.type === 'image')?.src
                                        : item.content && item.image && item.image.startsWith('http')
                                            ? item.image
                                            : '/assets/images/blogs/home-power.jpg'
                                }
                                alt="Blog"
                                style={styles.sidebarImage}
                                onError={(e) => {
                                    e.target.src = '/assets/images/banner1.jpg';
                                }}
                            />
                            <span>{item.title || item.heading || 'Untitled'}</span>
                        </Link>
                    ))}
                </aside>
            </div>
        </>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px',
        gap: '30px',
    },
    mainContent: {
        flex: 3,
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
        paddingBottom: '40px',
    },
    sidebar: {
        flex: 1,
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        height: 'fit-content',
    },
    header: {
        textAlign: 'center',
        padding: '30px',
        borderBottom: '1px solid #eee',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#222',
        marginBottom: '10px',
    },
    date: {
        fontSize: '1rem',
        color: '#777',
    },
    content: {
        padding: '30px 50px',
        fontSize: '1.15rem',
        lineHeight: '1.8',
        color: '#333',
    },
    textSection: {
        marginBottom: '25px',
    },
    inlineImageContainer: {
        textAlign: 'center',
        margin: '30px 0',
    },
    inlineImage: {
        maxWidth: '100%',
        borderRadius: '6px',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.08)',
    },
    authorBox: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        margin: '20px 40px',
        padding: '15px',
        borderRadius: '8px',
    },
    authorImage: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    authorName: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    authorDesc: {
        fontSize: '0.95rem',
        color: '#555',
    },
    shareBox: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '1rem',
    },
    shareLink: {
        margin: '0 10px',
        color: '#0066cc',
        textDecoration: 'none',
    },
    recommendedBox: {
        padding: '30px 40px 0',
    },
    recommendedTitle: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    recommendedGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
    },
    recommendedCard: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '8px',
        textDecoration: 'none',
        color: '#333',
        overflow: 'hidden',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease',
    },
    recommendedImage: {
        width: '100%',
        height: '120px',
        objectFit: 'cover',
    },
    recommendedText: {
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '0.95rem',
    },
    footer: {
        textAlign: 'center',
        marginTop: '30px',
    },
    backLink: {
        color: '#0066cc',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    sidebarTitle: {
        fontSize: '1.3rem',
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    sidebarItem: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '0.95rem',
    },
    sidebarImage: {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    notFound: {
        textAlign: 'center',
        padding: '100px 0',
        color: '#666',
        fontSize: '1.4rem',
    },
};
