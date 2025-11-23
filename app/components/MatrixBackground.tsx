'use client';

import React, { useEffect, useState } from 'react';

export default function MatrixBackground() {
    const [matrixColumns, setMatrixColumns] = useState<Array<{ id: number; left: number; delay: number; duration: number; chars: string[] }>>([]);

    useEffect(() => {
        const chars = '01';
        const matrixArray = [];

        // Generate matrix rain columns - lebih banyak kolom untuk efek yang lebih padat
        for (let i = 0; i < 150; i++) {
            const columnChars = [];
            const columnLength = 25 + Math.floor(Math.random() * 40);

            for (let j = 0; j < columnLength; j++) {
                columnChars.push(chars[Math.floor(Math.random() * chars.length)]);
            }

            matrixArray.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 4 + Math.random() * 6,
                chars: columnChars
            });
        }

        setMatrixColumns(matrixArray);
    }, []);

    return (
        <div className="matrix-bg">
            {matrixColumns.map((column) => (
                <div
                    key={column.id}
                    className="matrix-rain"
                    style={{
                        left: `${column.left}%`,
                        animationDelay: `${column.delay}s`,
                        animationDuration: `${column.duration}s`
                    }}
                >
                    {column.chars.map((char, index) => (
                        <div
                            key={index}
                            className="matrix-glow"
                            style={{
                                opacity: Math.max(0.1, 1 - (index * 0.08)),
                                color: index < 3 ? '#ff0000' : (index < 8 ? '#cc0000' : '#990000')
                            }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}