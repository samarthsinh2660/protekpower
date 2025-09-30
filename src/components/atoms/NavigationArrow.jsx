import React from 'react';

export default function NavigationArrow({ direction, onClick }) {
    const isLeft = direction === 'left';

    return (
        <button
            onClick={onClick}
            className={`navigation-arrow ${isLeft ? 'navigation-arrow-left' : 'navigation-arrow-right'}`}
            aria-label={isLeft ? 'Previous slide' : 'Next slide'}
        >
            {isLeft ? '❮' : '❯'}
        </button>
    );
}