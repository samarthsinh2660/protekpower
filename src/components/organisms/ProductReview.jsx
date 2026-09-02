'use client';
import React, { useState } from 'react';
import Rating from '../atoms/Rating';
import ProductReview from '../molecules/ProductReview';

export default function ProductReviews({ reviews, averageRating, totalReviews }) {
    const safeReviews = Array.isArray(reviews) ? reviews : [];
    const safeTotalReviews = safeReviews.length;
    const safeAverageRating =
        typeof averageRating === 'number' && !isNaN(averageRating) ? averageRating : 0;

    const [visibleReviews, setVisibleReviews] = useState(3);

    const loadMoreReviews = () => {
        setVisibleReviews(prev => prev + 3);
    };

    const displayedReviews = safeReviews.slice(0, visibleReviews);

    if (safeTotalReviews === 0) {
        return (
            <div style={styles.container}>
                <h3 style={styles.title}>Customer Reviews</h3>
                <div style={styles.emptyState}>
                    <p style={styles.emptyTitle}>No reviews for this product yet.</p>
                    <p style={styles.emptyText}>
                        Used this product? We would like to hear from you — reach us on
                        WhatsApp or through the contact details below and we will add your
                        feedback here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Customer Reviews</h3>

            <div style={styles.summary}>
                <div style={styles.overallRating}>
                    <div style={styles.averageScore}>{safeAverageRating.toFixed(1)}</div>
                    <Rating value={safeAverageRating} />
                    <span style={styles.totalReviews}>Based on {safeTotalReviews} reviews</span>
                </div>

                <div style={styles.ratingBreakdown}>
                    {[5, 4, 3, 2, 1].map(star => {
                        const count = safeReviews.filter(review => Math.floor(review.rating) === star).length;
                        const percentage = safeTotalReviews > 0 ? Math.round((count / safeTotalReviews) * 100) : 0;

                        return (
                            <div key={star} style={styles.ratingBar}>
                                <div style={styles.ratingLabel}>{star} Star</div>
                                <div style={styles.progressContainer}>
                                    <div
                                        style={{
                                            ...styles.progressBar,
                                            width: `${percentage}%`
                                        }}
                                    ></div>
                                </div>
                                <div style={styles.ratingCount}>{percentage}%</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={styles.reviewsList}>
                {displayedReviews.map((review, index) => (
                    <ProductReview key={index} review={review} />
                ))}

                {visibleReviews < safeReviews.length && (
                    <button onClick={loadMoreReviews} style={styles.loadMoreButton}>
                        Load More Reviews
                    </button>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        marginBottom: '40px',
    },
    emptyState: {
        backgroundColor: '#f9f9f9',
        padding: '24px',
        borderRadius: '8px',
    },
    emptyTitle: {
        margin: '0 0 8px 0',
        fontWeight: 600,
        color: '#333',
    },
    emptyText: {
        margin: 0,
        color: '#666',
        fontSize: '0.95rem',
        lineHeight: 1.6,
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
        position: 'relative',
        paddingBottom: '10px',
    },
    reviewsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
    },
    overallRating: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
    },
    averageScore: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    },
    totalReviews: {
        marginTop: '10px',
        fontSize: '0.9rem',
        color: '#666',
    },
    ratingBreakdown: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: '2',
    },
    ratingBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    ratingLabel: {
        width: '60px',
        fontSize: '0.9rem',
        color: '#555',
    },
    progressContainer: {
        flex: '1',
        height: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#0066cc',
        borderRadius: '5px',
    },
    ratingCount: {
        width: '40px',
        fontSize: '0.9rem',
        color: '#555',
        textAlign: 'right',
    },
    reviewsList: {
        display: 'flex',
        flexDirection: 'column',
    },
    loadMoreButton: {
        backgroundColor: 'transparent',
        border: '1px solid #0066cc',
        color: '#0066cc',
        padding: '10px 20px',
        borderRadius: '4px',
        margin: '20px auto',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: 'rgba(0, 102, 204, 0.1)',
        }
    }
};