'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { productCategories } from '../../app/data/productCategories';

export default function NavDropdown({ title, items, mobile = false, onItemClick = () => {} }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsOpen(false);
        onItemClick();
    };

    const actualItems = items.length > 0 ? items : productCategories;

    if (mobile) {
        return (
            <div style={mobileStyles.container}>
                <div style={mobileStyles.trigger} onClick={handleToggle}>
                    <span style={mobileStyles.link}>
                        {title}
                        <span style={{...mobileStyles.arrow, ...(isOpen ? mobileStyles.arrowUp : {})}}>▾</span>
                    </span>
                </div>

                {isOpen && (
                    <div style={mobileStyles.dropdown}>
                        {actualItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/product?category=${item.slug}`}
                                style={mobileStyles.dropdownItem}
                                onClick={handleItemClick}
                            >
                                <div style={mobileStyles.itemContent}>
                                    <div>
                                        <div style={mobileStyles.itemName}>{item.name}</div>
                                        {item.description && (
                                            <div style={mobileStyles.itemDescription}>{item.description}</div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

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
                    {actualItems.map((item) => (
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

const mobileStyles = {
    container: {
        width: '100%',
    },
    trigger: {
        cursor: 'pointer',
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #eee',
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 'medium',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    arrow: {
        fontSize: '0.7rem',
        transition: 'transform 0.3s ease',
    },
    arrowUp: {
        transform: 'rotate(180deg)',
    },
    dropdown: {
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
    },
    dropdownItem: {
        padding: '0.75rem 2rem',
        color: '#333',
        textDecoration: 'none',
        display: 'block',
        transition: 'all 0.2s ease',
        borderBottom: '1px solid #eee',
        fontSize: '0.95rem',
    },
    itemContent: {
        display: 'flex',
        alignItems: 'center',
    },
    itemName: {
        fontWeight: '500',
    },
    itemDescription: {
        fontSize: '0.8rem',
        color: '#666',
        marginTop: '2px',
    },
};