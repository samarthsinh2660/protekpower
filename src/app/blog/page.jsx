'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/molecules/BlogCard';
import { db } from '../../lib/firebase'; // Import db from your firebase.js file
import { collection, getDocs } from 'firebase/firestore'; // Firestore functions to fetch data

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'posts')); // Fetch blogs from Firestore
                const blogsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,  // Firebase automatically generates an ID for each document
                    ...doc.data(), // Spread the blog data into the object
                }));
                setBlogs(blogsList);  // Set the blogs state with the fetched data
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);  // Set loading to false after data is fetched
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div style={styles.container}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <section style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Our Blog</h1>
                    <p style={styles.heroSubtitle}>
                        Insights, tips, and updates on power management solutions
                    </p>
                </div>
            </section>

            <main style={styles.container}>
                {blogs.length > 0 ? (
                    <div style={styles.blogGrid}>
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                ) : (
                    <div style={styles.noBlogs}>
                        <p>No blog posts yet. Check back later!</p>
                    </div>
                )}
            </main>
        </>
    );
}

const styles = {
    heroSection: {
        backgroundColor: '#0066cc',
        padding: '60px 20px',
        color: 'white',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heroTitle: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: '0.9',
    },
    container: {
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '0 20px',
    },
    blogGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
    },
    noBlogs: {
        textAlign: 'center',
        padding: '40px 0',
        color: '#666',
    },
};
