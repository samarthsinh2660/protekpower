'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header style={{
            ...styles.header,
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            height: scrolled ? '70px' : '80px'
        }}>
            <div style={styles.container}>
                <Logo />
                <div className="nav-container">
                    <NavBar />
                </div>
                <button
                    className="hamburger-menu"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <NavBar mobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}

const styles = {
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        transition: 'all 0.3s ease',
        zIndex: 1000,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};