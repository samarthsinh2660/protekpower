import React from 'react';
import SocialIcon from '../atoms/SocialIcon';
import Logo from '../atoms/Logo';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const allLinks = [
        { label: 'About Us', url: '/about' },
        { label: 'Products', url: '/product' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' },
        { label: 'FAQs', url: '/faqs' },
        { label: 'Warranty', url: '/warranty' },
        { label: 'Careers', url: '/careers' },
    ];

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.mainSection}>
                    <div style={styles.logoSection}>
                        <p style={styles.tagline}>
                            Leading provider of power management solutions since 1980.
                        </p>
                        <div style={styles.socialIcons}>
                            <SocialIcon icon="𝕏" url="https://twitter.com/protekpower" />
                            <SocialIcon icon="f" url="https://facebook.com/protekpower" />
                            <SocialIcon icon="in" url="https://linkedin.com/company/protekpower" />
                            <a href="https://instagram.com/protekpower" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <div style={styles.instagramIcon}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div style={styles.linksRow}>
                    {allLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a href={link.url} style={styles.footerLink}>
                                {link.label}
                            </a>
                            {index < allLinks.length - 1 && <span style={styles.divider}>|</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div style={styles.bottomSection}>
                    <div style={styles.copyright}>
                        © {currentYear} Protek Power. All rights reserved.
                    </div>
                    <div style={styles.legalLinks}>
                        <a href="/privacy" style={styles.legalLink}>Privacy</a>
                        <span style={styles.legalDivider}>•</span>
                        <a href="/terms" style={styles.legalLink}>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        paddingTop: '40px',
        paddingBottom: '20px',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    mainSection: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
    },
    logoSection: {
        marginBottom: '20px',
    },
    logoWrapper: {
        marginBottom: '15px',
    },
    tagline: {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: '1.6',
        marginBottom: '20px',
        maxWidth: '400px',
    },
    socialIcons: {
        display: 'flex',
        gap: '12px',
    },
    socialLink: {
        textDecoration: 'none',
    },
    instagramIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: '#E4405F',
            transform: 'translateY(-3px)',
        }
    },
    infoSection: {
        flex: '1',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
    },
    contactIcon: {
        marginRight: '8px',
        fontSize: '1rem',
    },
    contactLink: {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    linksRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '5px',
        padding: '15px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '20px',
    },
    footerLink: {
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        padding: '0 5px',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    divider: {
        color: 'rgba(255, 255, 255, 0.3)',
    },
    bottomSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    copyright: {
        fontSize: '0.85rem',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '10px',
    },
    legalLinks: {
        display: 'flex',
        alignItems: 'center',
    },
    legalLink: {
        fontSize: '0.85rem',
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    legalDivider: {
        margin: '0 8px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '0.85rem',
    }
};