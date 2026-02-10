//Home page product overview buttonimport React from 'react';

export default function Button({ children, onClick, variant = 'primary' }) {
    const buttonStyles = {
        ...styles.button,
        ...(variant === 'primary' ? styles.primary : styles.secondary)
    };

    return (
        <button onClick={onClick} style={buttonStyles}>
            {children}
        </button>
    );
}

const styles = {
    button: {
        padding: '10px 18px',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: '#0066cc',
        color: 'white',
        ':hover': {
            backgroundColor: '#004c99',
        },
    },
    secondary: {
        backgroundColor: 'transparent',
        color: '#0066cc',
        border: '1px solid #0066cc',
        ':hover': {
            backgroundColor: 'rgba(0, 102, 204, 0.1)',
        },
    },
};