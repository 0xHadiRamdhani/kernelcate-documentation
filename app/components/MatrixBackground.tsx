'use client';

import React, { useEffect, useState } from 'react';

export default function MatrixBackground() {
    const [matrixColumns, setMatrixColumns] = useState<Array<{ id: number; left: number; delay: number; duration: number; chars: string[] }>>([]);

    useEffect(() => {
        const chars = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+-=[]{}|;:,.<>?/~`';
        const matrixArray = [];

        // Generate matrix rain columns
        for (let i = 0; i < 60; i++) {
            const columnChars = [];
            const columnLength = 15 + Math.floor(Math.random() * 25);

            for (let j = 0; j < columnLength; j++) {
                columnChars.push(chars[Math.floor(Math.random() * chars.length)]);
            }

            matrixArray.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 8,
                duration: 8 + Math.random() * 12,
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
                                opacity: index === 0 ? 1 : 0.8 - (index * 0.05),
                                color: index === 0 ? '#00ff00' : '#008800'
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