import React from 'react';
import ProductCard from '../molecules/CategoryCard';
import CategoryCard from '../molecules/CategoryCard';
import { productCategoriesHome  } from '../../app/data/productCategories';
export default function CategorySectionHome() {
    const productCategories = productCategoriesHome;

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Our Product Categories</h2>
                <div style={styles.divider}></div>
                <p style={styles.subheading}>Explore our range of high-quality power management solutions</p>

                <div style={styles.cardsContainer}>
                    {productCategories.map((category, index) => (
                        <div key={index} style={styles.cardWrapper}>
                            <CategoryCard
                                image={category.image}
                                title={category.title}
                                description={category.description}
                                link={category.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '60px 0',
        backgroundColor: '#f8f9fa',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    heading: {
        textAlign: 'center',
        fontSize: '2rem',
        margin: '0 0 10px 0',
        color: '#333',
    },
    divider: {
        width: '60px',
        height: '3px',
        margin: '0 auto 20px',
        backgroundColor: '#0066cc',
    },
    subheading: {
        textAlign: 'center',
        fontSize: '1.1rem',
        maxWidth: '700px',
        margin: '0 auto 40px',
        color: '#666',
        lineHeight: '1.5',
    },
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
};