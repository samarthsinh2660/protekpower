import React from 'react';

export default function CarouselArrow({ direction, onClick, disabled }) {
    const isLeft = direction === 'left';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                ...styles.arrow,
                left: isLeft ? '-15px' : 'auto',
                right: isLeft ? 'auto' : '-15px',
                opacity: disabled ? 0.3 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            aria-label={isLeft ? 'Previous products' : 'Next products'}
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
        backgroundColor: 'white',
        color: '#0066cc',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease',
        ':hover:not(:disabled)': {
            backgroundColor: '#0066cc',
            color: 'white',
        }
    }
};