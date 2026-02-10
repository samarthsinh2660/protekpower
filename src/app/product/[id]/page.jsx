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
import { products } from '../../data/products';
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
        return <div className="product-not-found">Product not found</div>;
    }

    return (
        <>
            <div className="product-container">
                <div className="product-breadcrumbs">
                    <Link href="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link href="/product" className="breadcrumb-link">Products</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link href={`/product?category=${product.category.toLowerCase()}`} className="breadcrumb-link">
                        {product.category}
                    </Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="current-page">{product.name}</span>
                </div>

                <div className="product-section">
                    <div className="product-content">
                        <ProductGallery images={product.images || []} product={product} />

                        <div className="product-info">
                            <h1 className="product-title">{product.name}</h1>
                            <p className="product-category">{product.category}</p>
                            <p className="product-description">{product.description}</p>

                            <div className="tabs-header">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`tab-button ${activeTab === 'description' ? 'active-tab' : ''}`}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab('specifications')}
                                    className={`tab-button ${activeTab === 'specifications' ? 'active-tab' : ''}`}
                                >
                                    Specifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('warranty')}
                                    className={`tab-button ${activeTab === 'warranty' ? 'active-tab' : ''}`}
                                >
                                    Warranty
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`tab-button ${activeTab === 'reviews' ? 'active-tab' : ''}`}
                                >
                                    Reviews
                                </button>
                            </div>

                            <div className="tab-content">
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
