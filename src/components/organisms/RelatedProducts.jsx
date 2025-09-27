import React from 'react';
import TopProductCard from '../atoms/TopProductCard';

export default function RelatedProducts({ products }) {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>You May Also Like</h3>
            <div style={styles.productGrid}>
                {products.map(product => (
                    <div key={product.id} style={styles.productWrapper}>
                        <TopProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        marginBottom: '60px',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
        position: 'relative',
        paddingBottom: '10px',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '24px',
    },
    productWrapper: {
        display: 'flex',
    }
};