import React from 'react';
import Component from './Component';
import SpecsTable from './SpecsTable';

interface LayerProps {
    title: string;
    type?: 'normal' | 'syscall' | 'security' | 'boot' | 'specs';
    components?: Array<{
        title: string;
        features: string[];
    }>;
    specs?: { [key: string]: string };
    children?: React.ReactNode;
}

export default function Layer({ title, type = 'normal', components = [], specs = {}, children }: LayerProps) {
    const getLayerClasses = () => {
        const baseClasses = 'my-5 p-4 border-2 rounded-lg layer-hover';

        switch (type) {
            case 'syscall':
                return `${baseClasses} syscall-layer`;
            case 'security':
                return `${baseClasses} security-layer`;
            case 'boot':
                return `${baseClasses} boot-layer`;
            case 'specs':
                return `${baseClasses} specs-layer`;
            default:
                return `${baseClasses} bg-white/5 border-white shadow-lg`;
        }
    };

    const getTitleClasses = () => {
        const baseClasses = 'text-white font-bold text-xl text-center p-3 -m-4 mb-4 rounded-t-lg relative overflow-hidden';

        return `${baseClasses} bg-gradient-to-r from-red-600 to-red-700 border-glow`;
    };

    return (
        <div className={getLayerClasses()}>
            <div className={getTitleClasses()}>
                {title}
            </div>

            {children}

            {components.length > 0 && (
                <div className="flex flex-wrap justify-around gap-3 my-3">
                    {components.map((component, index) => (
                        <Component
                            key={index}
                            title={component.title}
                            features={component.features}
                        />
                    ))}
                </div>
            )}

            {Object.keys(specs).length > 0 && (
                <SpecsTable specs={specs} />
            )}
        </div>
    );
}