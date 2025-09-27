'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '../../../components/molecules/ProductGallery';
import ProductOverview from '../../../components/organisms/ProductOverview';
import ProductSpecs from '../../../components/molecules/ProductSpecs';
import WarrantyInfo from '../../../components/molecules/WarrantyInfo';
import ProductReviews from '../../../components/organisms/ProductReview';
import RelatedProducts from '../../../components/organisms/RelatedProducts';
import { products } from '../../data/allproducts';
import Whatsapp from '../../../components/molecules/Whatsapp';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        // Find the product by id or slug
        const foundProduct = products.find(p => p.id === id || p.slug === id);

        if (foundProduct) {
            setProduct(foundProduct);
            // Find related products (same category, excluding current product)
            const related = products
                .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                .slice(0, 4);
            setRelatedProducts(related);
        }
    }, [id]);

    if (!product) {
        return <div style={styles.notFound}>Product not found</div>;
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.breadcrumbs}>
                    <Link href="/" style={styles.breadcrumbLink}>Home</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <Link href="/product" style={styles.breadcrumbLink}>Products</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <Link href={`/product?category=${product.category.toLowerCase()}`} style={styles.breadcrumbLink}>
                        {product.category}
                    </Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <span style={styles.currentPage}>{product.name}</span>
                </div>

                <div style={styles.productSection}>
                    <div style={styles.productContainer}>
                        <ProductGallery images={product.images || []} product={product} />

                        <div style={styles.productInfo}>
                            <h1 style={styles.productTitle}>{product.name}</h1>
                            <p style={styles.productCategory}>{product.category}</p>
                            <p style={styles.productDescription}>{product.description}</p>

                            <div style={styles.tabsHeader}>
                                <button
                                    onClick={() => setActiveTab('description')}
                                    style={{
                                        ...styles.tabButton,
                                        ...(activeTab === 'description' ? styles.activeTab : {})
                                    }}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab('specifications')}
                                    style={{
                                        ...styles.tabButton,
                                        ...(activeTab === 'specifications' ? styles.activeTab : {})
                                    }}
                                >
                                    Specifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('warranty')}
                                    style={{
                                        ...styles.tabButton,
                                        ...(activeTab === 'warranty' ? styles.activeTab : {})
                                    }}
                                >
                                    Warranty
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    style={{
                                        ...styles.tabButton,
                                        ...(activeTab === 'reviews' ? styles.activeTab : {})
                                    }}
                                >
                                    Reviews
                                </button>
                            </div>

                            <div style={styles.tabContent}>
                                {activeTab === 'description' && <ProductOverview product={product} />}
                                {activeTab === 'specifications' && <ProductSpecs specifications={product.specifications || {}} />}
                                {activeTab === 'warranty' && <WarrantyInfo warranty={product.warranty || "1 Year"} />}
                                {activeTab === 'reviews' && <ProductReviews reviews={product.reviews || []} averageRating={product.averageRating} totalReviews={product.totalReviews} />}
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts products={relatedProducts} />

                <Whatsapp
                    phone="919426067762"
                    defaultMessage={`Hi Protek, I'm interested in the ${product.name}.`}
                    enableChatBox={true}
                    position="bottom-right"
                />
            </div>
        </>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
    },
    breadcrumbs: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '0.9rem',
        marginBottom: '30px',
    },
    breadcrumbLink: {
        color: '#0066cc',
        textDecoration: 'none',
    },
    breadcrumbSeparator: {
        margin: '0 8px',
        color: '#999',
    },
    currentPage: {
        color: '#666',
    },
    productSection: {
        marginBottom: '60px',
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        marginBottom: '40px',
    },
    productInfo: {
        flex: 1,
    },
    productTitle: {
        fontSize: '2.5rem',
        marginBottom: '10px',
        color: '#333',
    },
    productCategory: {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '20px',
    },
    productDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#444',
        marginBottom: '30px',
    },
    tabsHeader: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
        marginBottom: '30px',
    },
    tabButton: {
        padding: '12px 24px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        fontSize: '1rem',
        color: '#666',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    activeTab: {
        color: '#0066cc',
        borderBottomColor: '#0066cc',
        fontWeight: '500',
    },
    tabContent: {
        minHeight: '300px',
    },
    notFound: {
        textAlign: 'center',
        padding: '100px 0',
        color: '#666',
        fontSize: '1.4rem',
    },
};
