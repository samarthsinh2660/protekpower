import React from 'react';

export default function BannerPagination({ total, current, onDotClick }) {
    return (
        <div style={styles.pagination}>
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    style={{
                        ...styles.dot,
                        backgroundColor: current === index ? '#0066cc' : 'rgba(255, 255, 255, 0.7)',
                        transform: current === index ? 'scale(1.2)' : 'scale(1)',
                    }}
                    onClick={() => onDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}

const styles = {
    pagination: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10,
        padding: '5px 10px',
        borderRadius: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    dot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        border: '2px solid white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 3px rgba(0,0,0,0.2)',
    }
};