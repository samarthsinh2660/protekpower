import React from 'react';

export default function BannerPagination({ total, current, onDotClick }) {
    return (
        <div className="banner-pagination">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    className={`pagination-dot ${current === index ? 'pagination-dot-active' : ''}`}
                    onClick={() => onDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}