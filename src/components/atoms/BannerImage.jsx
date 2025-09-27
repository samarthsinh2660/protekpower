'use client';
import React, { useEffect, useState } from 'react';

export default function BannerImage({ src, alt, isActive }) {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isActive) {
            setAnimationClass('fade-in');
        } else {
            setAnimationClass('fade-out');
        }
    }, [isActive]);

    return (
        <div style={{
            ...styles.slide,
            opacity: isActive ? 1 : 0,
            // Use a slide-in from right transition instead of scale
            transform: isActive ? 'translateX(0)' : 'translateX(100px)',
            zIndex: isActive ? 1 : 0
        }}>
            <img
                src={src}
                alt={alt}
                style={{
                    ...styles.image,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}
            />
        </div>
    );
}

const styles = {
    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Change transition effect
        transition: 'opacity 1s ease, transform 1s ease',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // Zoom effect when active
        transition: 'transform 6s ease',
    }
};