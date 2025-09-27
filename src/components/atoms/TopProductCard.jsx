import React from 'react';
import Link from 'next/link';

export default function TopProductCard({ product }) {
    const { name, price, image, slug, category } = product;

    return (
        <Link href={`/product/${slug}`} style={styles.card} className="product-card">
            <div style={styles.imageWrapper}>
                <img src={image} alt={name} style={styles.image} />
                <div style={styles.overlay}></div>
                <div style={styles.category}>{category}</div>
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{name}</h3>
                <div style={styles.price}>₹{price.toLocaleString('en-IN')}</div>
            </div>
        </Link>
    );
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        backgroundColor: '#fff',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        height: '100%',
        width: '100%',
        // Set fixed dimensions
        maxWidth: '280px',
        margin: '0 auto',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: '200px', // Fixed height
        overflow: 'hidden',
    },
    image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // use 'contain' to preserve clarity
    display: 'block',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 102, 204, 0)',
        transition: 'background-color 0.3s ease',
    },
    category: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        transition: 'transform 0.3s ease',
        zIndex: 1,
    },
    content: {
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100px', // Fixed height
    },
    title: {
        margin: '0 0 8px 0',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#333',
        // Ensure text doesn't overflow
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
    price: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: '#0066cc',
        marginTop: 'auto',
    },
};