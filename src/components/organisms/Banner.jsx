'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import BannerImage from '../atoms/BannerImage';
import BannerPagination from '../molecules/BannerPagination';
import NavigationArrow from '../atoms/NavigationArrow';

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null);

    const bannerImages = [
        {
            src: '/assets/images/banner1.jpg',
            alt: 'Power Management Solutions'
        },
        {
            src: '/assets/images/banner2.jpg',
            alt: 'UPS Systems'
        },
        {
            src: '/assets/images/banner3.jpg',
            alt: 'Power Distribution Units'
        },
        {
            src: '/assets/images/banner4.jpg',
            alt: 'Renewable Energy Solutions'
        },
        {
            src: '/assets/images/banner5.jpg',
            alt: 'Energy Storage Systems'
        }
    ];

    // Add transition state to prevent rapid clicks
    const changeSlide = useCallback((index) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide(index);

            // Reset the timer when manually changing slides
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            // Allow next transition after animation completes
            setTimeout(() => setIsTransitioning(false), 1000);
        }
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        changeSlide((currentSlide + 1) % bannerImages.length);
    }, [currentSlide, bannerImages.length, changeSlide]);

    const prevSlide = useCallback(() => {
        changeSlide((currentSlide - 1 + bannerImages.length) % bannerImages.length);
    }, [currentSlide, bannerImages.length, changeSlide]);

    // Setup auto-rotation with clear interval reference
    useEffect(() => {
        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Set new interval and store reference
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);

        // Cleanup on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide]);

    return (
        <div style={styles.bannerContainer}>
            <div style={styles.bannerSlider}>
                {bannerImages.map((image, index) => (
                    <BannerImage
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        isActive={index === currentSlide}
                    />
                ))}
            </div>

            <NavigationArrow
                direction="left"
                onClick={prevSlide}
            />

            <NavigationArrow
                direction="right"
                onClick={nextSlide}
            />

            <BannerPagination
                total={bannerImages.length}
                current={currentSlide}
                onDotClick={(index) => changeSlide(index)}
            />
        </div>
    );
}

const styles = {
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: '500px',          // Reduced height (was calc height or 700px)
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    bannerSlider: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    subheading: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    ctaButton: {
        padding: '12px 24px',
        fontSize: '1.125rem',
        backgroundColor: '#0066cc',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }
};