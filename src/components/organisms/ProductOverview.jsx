'use client';
import React, { useState } from 'react';
import Badge from '../atoms/Badge';
import Rating from '../atoms/Rating';

export default function ProductOverview({ product }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} ${product.name}(s) to cart`);
      
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.badges}>
                    {product.isNew && <Badge type="new" text="New" />}
                    {product.isBestseller && <Badge type="bestseller" text="Bestseller" />}
                    {product.isOnSale && <Badge type="sale" text="Sale" />}
                </div>
                <h1 style={styles.title}>{product.name}</h1>
                <div style={styles.meta}>
                    <div style={styles.rating}>
                        <Rating value={product.rating} count={product.reviewCount} />
                    </div>
                    <div style={styles.sku}>SKU: {product.sku}</div>
                </div>
            </div>

            <div style={styles.pricing}>
                {product.originalPrice && product.originalPrice > product.price ? (
                    <div style={styles.pricingContainer}>
                        <span style={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        <span style={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                        <span style={styles.discount}>
                            🔥 Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                    </div>
                ) : (
                    <span style={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                )}
                <div style={styles.tax}>✅ Inclusive of all taxes</div>
            </div>

            <div style={styles.description}>
                <p>{product.description}</p>
            </div>

            <div style={styles.features}>
                <h3 style={styles.featuresTitle}>✨ Key Features</h3>
                <ul style={styles.featuresList}>
                    {product.features && Array.isArray(product.features) && product.features.length > 0 ? (
                        product.features.map((feature, index) => (
                            <li key={index} style={styles.feature}>⭐ {feature}</li>
                        ))
                    ) : (
                        <li style={styles.feature}>📋 Features information not available</li>
                    )}
                </ul>
            </div>

            {/* <div style={styles.actions}>
                <div style={styles.quantityContainer}>
                    <label htmlFor="quantity" style={styles.quantityLabel}>Qty:</label>
                    <input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        style={styles.quantityInput}
                    />
                </div>

                <button onClick={handleAddToCart} style={styles.addToCartButton}>
                    Add to Cart
                </button>
            </div> */}

            {/* <div style={styles.shipping}>
                <div style={styles.shippingItem}>
                    <span style={styles.shippingIcon}>🚚</span>
                    <span>Free shipping on orders above ₹5000</span>
                </div>
                <div style={styles.shippingItem}>
                    <span style={styles.shippingIcon}>🔄</span>
                    <span>7-day easy returns</span>
                </div>
                <div style={styles.shippingItem}>
                    <span style={styles.shippingIcon}>✓</span>
                    <span>Authentic products</span>
                </div>
            </div> */}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    header: {
        marginBottom: '8px',
    },
    badges: {
        display: 'flex',
        gap: '8px',
        marginBottom: '12px',
    },
    title: {
        fontSize: '2rem',
        margin: '0 0 16px 0',
        color: '#333',
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
    },
    sku: {
        fontSize: '0.9rem',
        color: '#666',
    },
    pricing: {
        marginBottom: '8px',
    },
    pricingContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    price: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#0066cc',
    },
    originalPrice: {
        fontSize: '1.2rem',
        color: '#888',
        textDecoration: 'line-through',
    },
    discount: {
        fontSize: '0.9rem',
        color: '#cc0000',
        fontWeight: 'bold',
        backgroundColor: 'rgba(204, 0, 0, 0.1)',
        padding: '2px 8px',
        borderRadius: '4px',
    },
    tax: {
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px',
    },
    description: {
        fontSize: '1rem',
        color: '#444',
        lineHeight: '1.6',
    },
    features: {
        marginTop: '8px',
    },
    featuresTitle: {
        fontSize: '1.1rem',
        marginBottom: '12px',
        color: '#333',
    },
    featuresList: {
        paddingLeft: '20px',
        margin: '0',
    },
    feature: {
        marginBottom: '8px',
        color: '#444',
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginTop: '8px',
    },
    quantityContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    quantityLabel: {
        fontSize: '1rem',
        color: '#444',
    },
    quantityInput: {
        width: '60px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    addToCartButton: {
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        padding: '12px 28px',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: '#0052a3',
        }
    },
    shipping: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
    },
    shippingItem: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.9rem',
        color: '#555',
    },
    shippingIcon: {
        marginRight: '8px',
        fontSize: '1rem',
    }
};