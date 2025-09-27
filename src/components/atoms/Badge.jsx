import React from 'react';

export default function Badge({ type, text }) {
    const getStyle = () => {
        switch (type) {
            case 'new':
                return { backgroundColor: '#0066cc', color: 'white' };
            case 'sale':
                return { backgroundColor: '#cc0000', color: 'white' };
            case 'bestseller':
                return { backgroundColor: '#ff9900', color: 'white' };
            default:
                return { backgroundColor: '#eeeeee', color: '#333333' };
        }
    };

    return (
        <span style={{
            ...styles.badge,
            ...getStyle()
        }}>
            {text}
        </span>
    );
}

const styles = {
    badge: {
        padding: '4px 10px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    }
};