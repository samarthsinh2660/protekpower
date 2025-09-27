import React from 'react';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" style={styles.logoContainer}>
            <div style={styles.logoBorderContainer} className="logo-container">
                <div style={styles.logoBackground}></div>
                <div style={styles.tracerLine}></div>
                <span style={styles.logoText}>
                    Protek Power
                </span>
            </div>
        </Link>
    );
}

const styles = {
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        position: 'relative',
    },
    logoBorderContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '8px',
    },
    logoBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        zIndex: 0,
    },
    tracerLine: {
        position: 'absolute',
        width: '20px',
        height: '2px',
        background: 'linear-gradient(90deg, rgba(0,102,204,0) 0%, rgba(0,102,204,0.8) 50%, rgba(0,102,204,0) 100%)',
        borderRadius: '4px',
        zIndex: 1,
        animation: 'trace-logo-border 3s linear infinite',
        boxShadow: '0 0 5px rgba(0, 102, 204, 0.4)',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#0066cc',
        position: 'relative',
        zIndex: 2,
        padding: '8px 16px',
    }
};