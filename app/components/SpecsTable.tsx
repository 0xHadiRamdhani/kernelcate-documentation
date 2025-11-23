import React from 'react';

interface SpecsTableProps {
    specs: { [key: string]: string };
}

export default function SpecsTable({ specs }: SpecsTableProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {Object.entries(specs).map(([label, value]) => (
                <React.Fragment key={label}>
                    <div className="font-bold text-red-500" style={{ textShadow: '0 0 5px #ef4444' }}>{label}:</div>
                    <div className="text-white">{value}</div>
                </React.Fragment>
            ))}
        </div>
    );
}