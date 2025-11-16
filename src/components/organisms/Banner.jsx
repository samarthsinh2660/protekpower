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
        // {
        //     src: '/assets/images/banner1.jpg',
        //     alt: 'Power Management Solutions'
        // },
        // {
        //     src: '/assets/images/banner2.jpg',
        //     alt: 'UPS Systems'
        // },
        {
            src: '/assets/images/banner3.jpg',
            alt: 'Power Distribution Units'
        },
        // {
        //     src: '/assets/images/banner4.jpg',
        //     alt: 'Renewable Energy Solutions'
        // },
        // {
        //     src: '/assets/images/banner5.jpg',
        //     alt: 'Energy Storage Systems'
        // }
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
        <div className="banner-container">
            <div className="banner-slider">
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