import React from 'react';

export default function NavigationArrow({ direction, onClick }) {
    const isLeft = direction === 'left';

    return (
        <button
            onClick={onClick}
            style={{
                ...styles.arrow,
                left: isLeft ? '20px' : 'auto',
                right: isLeft ? 'auto' : '20px'
            }}
            aria-label={isLeft ? 'Previous slide' : 'Next slide'}
        >
            {isLeft ? '❮' : '❯'}
        </button>
    );
}

const styles = {
    arrow: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: '#333',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease',
        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }
    }
};