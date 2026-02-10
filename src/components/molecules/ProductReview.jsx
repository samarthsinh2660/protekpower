import React from 'react';
import Rating from '../atoms/Rating';

export default function ProductReview({ review }) {
    const { author, date, rating, comment, verifiedPurchase } = review;

    // Format date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div style={styles.review}>
            <div style={styles.header}>
                <div style={styles.authorInfo}>
                    <h4 style={styles.author}>{author}</h4>
                    <span style={styles.date}>{formattedDate}</span>
                </div>
                <Rating value={rating} />
            </div>

            {verifiedPurchase && (
                <div style={styles.verifiedBadge}>
                    <span style={styles.verifiedIcon}>✓</span> Verified Purchase
                </div>
            )}

            <p style={styles.comment}>{comment}</p>
        </div>
    );
}

const styles = {
    review: {
        padding: '20px',
        borderBottom: '1px solid #eee',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px',
    },
    authorInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    author: {
        fontSize: '1rem',
        margin: '0 0 4px 0',
        color: '#333',
    },
    date: {
        fontSize: '0.85rem',
        color: '#666',
    },
    verifiedBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '0.85rem',
        color: '#0066cc',
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
        padding: '2px 8px',
        borderRadius: '4px',
        marginBottom: '8px',
    },
    verifiedIcon: {
        fontWeight: 'bold',
        marginRight: '4px',
    },
    comment: {
        lineHeight: '1.5',
        color: '#333',
        margin: '0',
    }
};