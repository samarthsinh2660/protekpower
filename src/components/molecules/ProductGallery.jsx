'use client';
import React, { useState } from 'react';
import ProductImageZoom from '../atoms/ProductImageZoom';

export default function ProductGallery({ images, product }) {
    let imageArray = [];

    if (Array.isArray(images) && images.length > 0) {
        // Already an array of images
        imageArray = images;
    } else if (product && product.image) {
        // Single image from product object
        imageArray = [{ url: product.image, alt: product.name || 'Product Image' }];
    } else if (typeof images === 'string') {
        // Single image URL passed directly
        imageArray = [{ url: images, alt: 'Product Image' }];
    } else {
        // Fallback placeholder
        imageArray = [{ url: '/assets/images/logo.png', alt: 'Product Image' }];
    }

    const [activeImage, setActiveImage] = useState(0);

    // Ensure activeImage is within bounds and array is not empty
    const safeActiveImage = imageArray.length > 0 ? Math.max(0, Math.min(activeImage, imageArray.length - 1)) : 0;

    return (
        <div style={styles.gallery}>
            <div style={styles.mainImageContainer}>
                <ProductImageZoom
                    src={imageArray[safeActiveImage]?.url || '/assets/images/logo.png'}
                    alt={imageArray[safeActiveImage]?.alt || 'Product Image'}
                />
            </div>

            {imageArray.length > 1 && (
                <div style={styles.thumbnails}>
                    {imageArray.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveImage(index)}
                            style={{
                                ...styles.thumbnail,
                                ...(index === safeActiveImage ? styles.activeThumbnail : {})
                            }}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                style={styles.thumbnailImage}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    gallery: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    mainImageContainer: {
        width: '100%',
        height: '400px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    thumbnails: {
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '8px',
        '::-webkit-scrollbar': {
            height: '6px',
        },
        '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#cacaca',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#aaaaaa',
        },
    },
    thumbnailContainer: {
        width: '80px',
        height: '80px',
        minWidth: '80px',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'all 0.2s ease',
    },
    activeThumbnail: {
        border: '2px solid #0066cc',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
};