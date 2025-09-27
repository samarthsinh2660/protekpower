'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function NavDropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close dropdown after navigation
    const handleItemClick = () => {
        setIsOpen(false);
    };

    return (
        <div
            style={styles.container}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div style={styles.trigger}>
                <Link href="/product" style={styles.link}>
                    {title}
                    <span style={styles.arrow} className={isOpen ? 'arrow-up' : ''}>▾</span>
                </Link>
            </div>

            {isOpen && (
                <div style={styles.dropdown} className="nav-dropdown">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={`/product?category=${item.slug}`}
                            style={styles.dropdownItem}
                            className="dropdown-item"
                            onClick={handleItemClick}
                        >
                            <div style={styles.itemContent}>
                                <div>
                                    <div style={styles.itemName}>{item.name}</div>
                                    {item.description && (
                                        <div style={styles.itemDescription}>{item.description}</div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link
                        href="/product"
                        style={{ ...styles.dropdownItem, ...styles.viewAllLink }}
                        className="dropdown-item view-all"
                        onClick={handleItemClick}
                    >
                        View All Products
                    </Link>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        display: 'inline-block',
    },
    trigger: {
        cursor: 'pointer',
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 'medium',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        transition: 'color 0.3s ease',
    },
    arrow: {
        fontSize: '0.7rem',
        marginLeft: '4px',
        transition: 'transform 0.3s ease',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#fff',
        minWidth: '250px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        padding: '8px 0',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.2s ease-out',
    },
    dropdownItem: {
        padding: '10px 16px',
        color: '#333',
        textDecoration: 'none',
        display: 'block',
        transition: 'all 0.2s ease',
        fontSize: '0.95rem',
        borderLeft: '3px solid transparent',
    },
    itemContent: {
        display: 'flex',
        alignItems: 'center',
    },
    itemIconWrapper: {
        width: '32px',
        height: '32px',
        marginRight: '10px',
        borderRadius: '4px',
        overflow: 'hidden',
        flexShrink: 0,
    },
    itemIcon: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    itemName: {
        fontWeight: '500',
    },
    itemDescription: {
        fontSize: '0.8rem',
        color: '#666',
        marginTop: '2px',
    },
    viewAllLink: {
        borderTop: '1px solid #eee',
        marginTop: '4px',
        fontWeight: 'bold',
        color: '#0066cc',
        textAlign: 'center',
    },
};