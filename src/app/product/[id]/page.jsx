import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '../../../components/molecules/ProductGallery';
import RelatedProducts from '../../../components/organisms/RelatedProducts';
import Whatsapp from '../../../components/molecules/Whatsapp';
import ProductTabs from './ProductTabs';
import { products } from '../../data/products';
import { productCategories } from '../../data/productCategories';

// Resolved on the server, so the product name, description, gallery and
// related products are all present in the HTML. Previously the lookup ran in
// a useEffect, which meant the served markup said "Product not found" for
// every product and returned HTTP 200 for ones that do not exist.
export default async function ProductDetail({ params }) {
    const { id } = await params;

    const product = products.find((p) => p.id === id || p.slug === id);
    if (!product) notFound();

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // The category filter matches on slug, so look up the real slug rather
    // than lowercasing the display name (which never matched).
    const categorySlug = productCategories.find(
        (cat) => cat.name.toLowerCase() === product.category.toLowerCase()
    )?.slug;

    return (
        <>
            <div className="product-container">
                <div className="product-breadcrumbs">
                    <Link href="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link href="/product" className="breadcrumb-link">Products</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link
                        href={categorySlug ? `/product?category=${categorySlug}` : '/product'}
                        className="breadcrumb-link"
                    >
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

                            <ProductTabs product={product} />
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
