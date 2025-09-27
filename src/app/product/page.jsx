'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TopProductCard from "../../components/atoms/TopProductCard";
import { products } from "../data/allproducts";
import { productCategories } from "../data/productCategories";
import Whatsapp from "../../components/molecules/Whatsapp";

function ProductsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('all');

    // Filter products when component mounts or when URL parameters change
    useEffect(() => {
        if (categoryParam) {
            const category = productCategories.find(cat => cat.slug === categoryParam);
            if (category) {
                filterByCategory(category.name);
                setActiveCategory(category.slug);
                return;
            }
        }

        // If no valid category param, show all products
        setFilteredProducts(products);
        setActiveCategory('all');
    }, [categoryParam]);

    // Function to filter products by category
    const filterByCategory = (categoryName) => {
        const filtered = products.filter(product =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );

        setFilteredProducts(filtered);

    };

    // Handle category filter click
    const handleCategoryClick = (category) => {
        if (category === 'all') {
            setFilteredProducts(products);
            setActiveCategory('all');
        } else {
            const categoryObj = productCategories.find(cat => cat.slug === category);
            if (categoryObj) {
                filterByCategory(categoryObj.name);
                setActiveCategory(category);
                console.log(activeCategory);
            }
        }
    };

    return (
        <>
            <div style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Our Products</h1>
                    <p style={styles.heroSubtitle}>
                        Discover our complete range of professional power management solutions
                    </p>
                </div>
            </div>

            <main style={styles.main}>
                <div style={styles.categoryFilter}>
                    <button
                        onClick={() => handleCategoryClick('all')}
                        style={{
                            ...styles.categoryButton,
                            ...(activeCategory === 'all' ? styles.activeCategory : {})
                        }}
                    >
                        All Products
                    </button>

                    {productCategories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.slug)}
                            style={{
                                ...styles.categoryButton,
                                ...(activeCategory === category.slug ? styles.activeCategory : {})
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div style={styles.resultSummary}>
                    {activeCategory !== 'all' ? (
                        <h2>
                            {productCategories.find(cat => cat.slug === activeCategory)?.name || 'Products'}
                            <span style={styles.resultCount}>
                                ({filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'})
                            </span>
                        </h2>
                    ) : (
                        <h2>All Products <span style={styles.resultCount}>({products.length} items)</span></h2>
                    )}
                </div>

                {filteredProducts.length > 0 ? (
                    <div style={styles.productsGrid}>
                        {filteredProducts.map(product => (
                            <div key={product.id} style={styles.productWrapper}>
                                <TopProductCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={styles.noProducts}>
                        <p>No products found in this category.</p>
                        <button
                            onClick={() => handleCategoryClick('all')}
                            style={styles.resetButton}
                        >
                            View All Products
                        </button>
                    </div>
                )}
            </main>
            <Whatsapp
                    phone="+919426067762"   // change to Protek's number
                    defaultMessage="Hi Protek, I'm interested in your stabilizers."
                    enableChatBox={true}   // false = direct WhatsApp open
                    position="bottom-right"
                  />
        </>
    );
}

export default function Products() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsContent />
        </Suspense>
    );
}

const styles = {
    heroSection: {
        backgroundColor: '#0066cc',
        padding: '60px 20px',
        color: 'white',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heroTitle: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        fontWeight: 'normal',
    },
    main: {
        maxWidth: '1200px',
        margin: '2rem auto 4rem',
        padding: '0 1rem',
    },
    categoryFilter: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '30px',
        padding: '20px 0',
        borderBottom: '1px solid #eee',
    },
    categoryButton: {
        backgroundColor: '#f5f5f5',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'all 0.2s ease',
        color: '#333',
    },
    activeCategory: {
        backgroundColor: '#0066cc',
        color: 'white',
    },
    resultSummary: {
        marginBottom: '30px',
    },
    resultCount: {
        color: '#666',
        fontWeight: 'normal',
        fontSize: '1rem',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
    },
    productWrapper: {
        display: 'flex',
    },
    noProducts: {
        textAlign: 'center',
        padding: '40px 0',
    },
    resetButton: {
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px',
        transition: 'background-color 0.2s ease',
    }
};