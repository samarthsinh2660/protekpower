import React from 'react';

export default function Rating({ value, count }) {
    const hasRating = typeof value === 'number' && value > 0;

    // Convert rating value to stars
    const renderStars = (rating) => {
        const stars = [];
        // Full stars
        for (let i = 1; i <= Math.floor(rating); i++) {
            stars.push(<span key={`full-${i}`} style={styles.star}>★</span>);
        }

        // Half star
        if (rating % 1 !== 0) {
            stars.push(<span key="half" style={styles.star}>★</span>);
        }

        // Empty stars
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 1; i <= emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} style={styles.emptyStar}>☆</span>);
        }

        return stars;
    };

    // A product with no reviews says so, rather than showing an empty row of
    // stars next to a review count it cannot back up.
    if (!hasRating) {
        return (
            <div style={styles.container}>
                <span style={styles.count}>No reviews yet</span>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {renderStars(value)}
            </div>
            {count > 0 && (
                <span style={styles.count}>
                    ({count} {count === 1 ? 'review' : 'reviews'})
                </span>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    stars: {
        display: 'flex',
        marginRight: '6px',
    },
    star: {
        color: '#ffc107',
        fontSize: '1.1rem',
    },
    emptyStar: {
        color: '#e4e5e9',
        fontSize: '1.1rem',
    },
    count: {
        color: '#666',
        fontSize: '0.9rem',
    }
};