import React from 'react';

export default function SocialIcon({ icon, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <div style={styles.socialIcon}>
                {icon}
            </div>
        </a>
    );
}

const styles = {
    socialLink: {
        textDecoration: 'none',
    },
    socialIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.2rem',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: '#0066cc',
            transform: 'translateY(-3px)',
        }
    }
};