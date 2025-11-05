'use client';

import React from 'react';

export function RatingStars({ rating, count }: { rating: number; count?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isFull = i < full;
    const isHalf = !isFull && i === full && half;
    return (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={isFull ? '#f59e0b' : isHalf ? 'url(#half)' : 'none'} stroke="#f59e0b" strokeWidth="2">
        {isHalf && (
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
        )}
        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193z" />
      </svg>
    );
  });
  return (
    <span className="stars" aria-label={`??????? ${rating} ?? 5`}>
      {stars}
      {typeof count === 'number' && <span className="sub" style={{ marginLeft: 6 }}>({count})</span>}
    </span>
  );
}
