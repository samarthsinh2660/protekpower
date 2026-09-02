'use client';
import React, { useState } from 'react';
import ProductOverview from '../../../components/organisms/ProductOverview';
import ProductSpecs from '../../../components/molecules/ProductSpecs';
import WarrantyInfo from '../../../components/molecules/WarrantyInfo';
import ProductReviews from '../../../components/organisms/ProductReview';
import { getReviewSummary } from '../../../lib/reviews';

// Only the tab switching needs to be interactive, so this is the one part of
// the product page that runs on the client. The default tab renders on the
// server, which keeps the product description in the initial HTML.
export default function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState('description');
    const reviewSummary = getReviewSummary(product);

    const tabs = [
        { key: 'description', label: 'Description' },
        { key: 'specifications', label: 'Specifications' },
        { key: 'warranty', label: 'Warranty' },
        { key: 'reviews', label: 'Reviews' },
    ];

    return (
        <>
            <div className="tabs-header">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`tab-button ${activeTab === tab.key ? 'active-tab' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {activeTab === 'description' && <ProductOverview product={product} />}
                {activeTab === 'specifications' && (
                    <ProductSpecs specifications={product.specifications || {}} />
                )}
                {activeTab === 'warranty' && (
                    <WarrantyInfo warranty={product.warranty || '1 Year'} />
                )}
                {activeTab === 'reviews' && (
                    <ProductReviews
                        reviews={reviewSummary.reviews}
                        averageRating={reviewSummary.average}
                        totalReviews={reviewSummary.count}
                    />
                )}
            </div>
        </>
    );
}
