import React from 'react';

interface ComponentProps {
    title: string;
    features: string[];
    className?: string;
}

export default function Component({ title, features, className = '' }: ComponentProps) {
    return (
        <div className={`bg-white/10 border border-white rounded-lg p-4 m-2 min-w-[200px] flex-1 component-hover ${className}`}>
            <div className="text-red-500 font-bold text-base sm:text-lg mb-3 text-center border-b border-red-500 pb-2 component-glow" style={{ textShadow: '0 0 10px #ef4444' }}>
                {title}
            </div>
            <div className="text-sm sm:text-base leading-6 text-white">
                {features.map((feature, index) => (
                    <div key={index} className="mb-1">
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}