'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '../molecules/BlogCard';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { sortPostsNewestFirst } from '../../lib/postDate';

export default function BlogWidget() {
    // This used to render a hardcoded sample post plus anything under the
    // localStorage key 'blogs', which nothing has ever written — the editor
    // saves to Firestore. The homepage therefore advertised a post that did
    // not exist, linking to /blog/1 and landing on "Blog not found".
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let cancelled = false;

        const fetchLatest = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'posts'));
                const posts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                if (!cancelled) setBlogs(sortPostsNewestFirst(posts));
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchLatest();
        return () => {
            cancelled = true;
        };
    }, []);

    const latestBlogs = blogs.slice(0, 3);

    // Nothing to show is better than advertising posts that are not there.
    if (latestBlogs.length === 0) return null;

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>From Our Blog</h2>
                    <div style={styles.divider}></div>
                    <p style={styles.subheading}>Insights and updates on power management solutions</p>
                </div>

                <div style={styles.blogGrid}>
                    {latestBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                <div style={styles.viewAll}>
                    <Link href="/blog" style={styles.viewAllLink}>
                        View All Posts →
                    </Link>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '60px 0',
        backgroundColor: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    header: {
        marginBottom: '40px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px',
    },
    divider: {
        width: '60px',
        height: '3px',
        backgroundColor: '#0066cc',
        margin: '0 auto 20px',
    },
    subheading: {
        fontSize: '1.1rem',
        color: '#666',
    },
    blogGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
    },
    viewAll: {
        textAlign: 'center',
        marginTop: '40px',
    },
    viewAllLink: {
        color: '#0066cc',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
};
