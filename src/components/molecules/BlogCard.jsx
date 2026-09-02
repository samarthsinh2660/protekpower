import React from 'react';
import { formatPostDate } from '../../lib/postDate';
import Link from 'next/link';

// Helper function to strip HTML tags and get plain text (works on server and client)
const stripHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  // Remove HTML tags using regex
  return html.replace(/<[^>]*>/g, '').trim();
};

export default function BlogCard({ blog }) {
    // Handle different data structures
    let firstText, firstImage;

    if (blog.sections && Array.isArray(blog.sections)) {
        // Firebase data with sections array
        firstText = blog.sections.find(s => s.type === 'text');
        firstImage = blog.sections.find(s => s.type === 'image');
    } else if (blog.content) {
        // Alternative structure with direct content
        firstText = { content: blog.content };
        firstImage = null;
    } else {
        // Fallback
        firstText = null;
        firstImage = null;
    }

    // Get plain text for snippet
    const contentToStrip = firstText?.content || blog.content || '';
    const plainText = stripHtml(contentToStrip);
    const snippet = plainText.slice(0, 120);

    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img
                    src={firstImage && firstImage.src && firstImage.src.startsWith('http') ? firstImage.src : '/assets/images/banner2.jpg'}
                    alt="Blog"
                    style={styles.image}
                     onError={(e) => {
                                    if (!e.target.dataset.fallback) {
                                        e.target.dataset.fallback = 'true';   // mark fallback used
                                        e.target.src = '/assets/images/logo.png';
                                    } else {
                                        e.target.onerror = null;              // stop further attempts
                                        e.target.style.display = 'none';      // hide image
                                    }
                                }}
                />
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{blog.title || blog.heading || 'Untitled Blog'}</h3>
                {formatPostDate(blog) && (
                    <p style={styles.date}>{formatPostDate(blog)}</p>
                )}
                <p style={styles.snippet}>{snippet || 'No preview available'}...</p>
                <Link href={`/blog/${blog.id}`} style={styles.readMore}>
                    Read More →
                </Link>
            </div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },
    content: {
        padding: '20px',
    },
    title: {
        fontSize: '1.3rem',
        marginBottom: '10px',
        color: '#333',
    },
    date: {
        fontSize: '0.85rem',
        color: '#999',
        marginBottom: '15px',
    },
    snippet: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '15px',
    },
    readMore: {
        display: 'inline-block',
        color: '#0066cc',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '0.95rem',
    },
};
