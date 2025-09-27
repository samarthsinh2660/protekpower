import React from 'react';

export default function ContactInfo({ icon, title, value, link, type }) {
    const content = link ? (
        <a href={link} style={styles.contactLink}>
            {value}
        </a>
    ) : (
        <span>{value}</span>
    );

    return (
        <div style={styles.contactItem}>
            <div style={styles.iconContainer}>
                <span style={styles.icon}>{icon}</span>
            </div>
            <div style={styles.textContainer}>
                <h4 style={styles.contactTitle}>{title}</h4>
                {content}
            </div>
        </div>
    );
}

const styles = {
    contactItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '20px',
    },
    iconContainer: {
        marginRight: '15px',
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    icon: {
        fontSize: '18px',
        color: '#0066cc',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactTitle: {
        margin: '0 0 5px 0',
        fontSize: '0.9rem',
        fontWeight: 'normal',
        color: '#666',
    },
    contactLink: {
        color: '#333',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#0066cc',
        }
    },
};