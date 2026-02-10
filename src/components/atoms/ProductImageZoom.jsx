'use client';
import React, { useState } from 'react';

export default function ProductImageZoom({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleOpenZoom = () => {
        setIsOpen(true);
    };

    const handleCloseZoom = () => {
        setIsOpen(false);
    };

    const handleMouseMove = (e) => {
        if (!isOpen) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPosition({ x, y });
    };

    return (
        <div style={styles.container}>
            <div
                style={styles.imageContainer}
                onClick={handleOpenZoom}
                onMouseMove={handleMouseMove}
                title="Click to zoom"
            >
                <img src={src} alt={alt} style={styles.image} />
                <div style={styles.zoomIcon}>🔍</div>
            </div>

            {isOpen && (
                <div style={styles.zoomOverlay} onClick={handleCloseZoom}>
                    <div style={styles.zoomContainer}>
                        <div style={styles.zoomClose}>×</div>
                        <img
                            src={src}
                            alt={alt}
                            style={{
                                ...styles.zoomImage,
                                objectPosition: `${position.x}% ${position.y}%`
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'zoom-in',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'scale(1.05)',
        }
    },
    zoomIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        opacity: 0.7,
        transition: 'opacity 0.2s ease',
    },
    zoomOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
    },
    zoomContainer: {
        position: 'relative',
        width: '80%',
        height: '80%',
        maxWidth: '1200px',
        maxHeight: '800px',
    },
    zoomClose: {
        position: 'absolute',
        top: '-40px',
        right: '0',
        color: 'white',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 1001,
    },
    zoomImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
};