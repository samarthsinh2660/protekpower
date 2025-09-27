'use client';
import React, { useState, useCallback } from 'react';
import TopProductCard from '../atoms/TopProductCard';
import CarouselArrow from '../atoms/CarouselArrow';
import { topProducts } from '../../app/data/topProducts';

export default function TopProductCarousel() {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;
    const totalPages = Math.ceil(topProducts.length / productsPerPage);

    const nextPage = useCallback(() => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }, [currentPage, totalPages]);

    const prevPage = useCallback(() => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage]);

    const currentProducts = topProducts.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
    );

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>Top Products</h2>
                    <div style={styles.divider}></div>
                    <p style={styles.subheading}>Our most popular power management solutions</p>
                </div>

                <div style={styles.carouselContainer}>
                    <CarouselArrow
                        direction="left"
                        onClick={prevPage}
                        disabled={currentPage === 0}
                    />

                    <div style={styles.productsGrid} className="products-grid">
                        {currentProducts.map(product => (
                            <div key={product.id} style={styles.productWrapper}>
                                <TopProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <CarouselArrow
                        direction="right"
                        onClick={nextPage}
                        disabled={currentPage === totalPages - 1}
                    />
                </div>

                <div style={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.paginationDot,
                                backgroundColor: currentPage === index ? '#0066cc' : '#ccc'
                            }}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
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
    header: {
        marginBottom: '40px',
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
        margin: '0 auto',
        color: '#666',
    },
    carouselContainer: {
        position: 'relative',
        marginBottom: '20px',
        padding: '10px 0',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        padding: '0 30px',
    },
    productWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '30px',
    },
    paginationDot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
    },
};