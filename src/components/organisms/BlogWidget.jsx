'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '../molecules/BlogCard';
import { defaultBlogs } from '../../app/data/blogPosts';
import Link from 'next/link';

export default function BlogWidget() {
    const [blogs, setBlogs] = useState(defaultBlogs);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('blogs'));
        if (stored) setBlogs(stored);
    }, []);

    const latestBlogs = blogs.slice(-3).reverse();

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
