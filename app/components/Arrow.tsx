import React from 'react';

interface ArrowProps {
    className?: string;
}

export default function Arrow({ className = '' }: ArrowProps) {
    return (
        <div
            className={`text-center text-4xl text-white my-4 arrow-glow ${className}`}
            style={{ textShadow: '0 0 20px #ffffff, 0 0 40px #ffffff' }}
        >
            ⬇
        </div>
    );
}