import React from 'react';
import Link from 'next/link';

export default function FooterColumn({ title, links }) {
    return (
        <div style={styles.column}>
            <h3 style={styles.title}>{title}</h3>
            <ul style={styles.linkList}>
                {links.map((link, index) => (
                    <li key={index} style={styles.linkItem}>
                        {link.external ? (
                            <a href={link.url} style={styles.link} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        ) : (
                            <Link href={link.url} style={styles.link}>
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    column: {
        flex: '1',
        minWidth: '160px',
    },
    title: {
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    linkItem: {
        marginBottom: '10px',
    },
    link: {
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        fontSize: '0.9rem',
        ':hover': {
            color: '#fff',
            textDecoration: 'underline',
        }
    }
};