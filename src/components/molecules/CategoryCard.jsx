import React from 'react';
import Link from 'next/link';
import Button from '../atoms/Button';

export default function CategoryCard({ image, title, description, link, slug }) {
    // Construct the URL with category parameter
    const productCategoryUrl = `/product?category=${slug || title.toLowerCase()}`;

    return (
        <div style={styles.card} className="power-pulse">
            <div style={styles.imageContainer}>
                <img src={image} alt={title} style={styles.image} />
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.description}>{description}</p>
                <Link href={productCategoryUrl} style={styles.link}>
                    <Button variant="secondary">Learn More</Button>
                </Link>
            </div>
        </div>
    );
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        }
    },
    imageContainer: {
        width: '100%',
        height: '180px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        },

    content: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
        margin: '0 0 10px 0',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        margin: '0 0 20px 0',
        color: '#666',
        lineHeight: '1.5',
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        alignSelf: 'flex-start',
        marginTop: 'auto',
    },
};