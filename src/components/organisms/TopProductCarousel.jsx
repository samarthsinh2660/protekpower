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
        <section className="top-products-section">
            <div className="top-products-container">
                <div className="top-products-header">
                    <h2 className="top-products-heading">Top Products</h2>
                    <div className="top-products-divider"></div>
                    <p className="top-products-subheading">Our most popular power management solutions</p>
                </div>

                <div className="top-products-carousel-container">
                    <CarouselArrow
                        direction="left"
                        onClick={prevPage}
                        disabled={currentPage === 0}
                    />

                    <div className="top-products-grid products-grid">
                        {currentProducts.map(product => (
                            <div key={product.id} className="top-products-wrapper">
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

                <div className="top-products-pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`top-products-pagination-dot ${currentPage === index ? 'active' : ''}`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}