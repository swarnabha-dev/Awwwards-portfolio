import React from 'react';
import { TECH_STACK } from '../data/constants';
import TechIcon3D from '../components/ui/TechIcon3D';

const TechStack = () => {
    return (
        <section className="py-20 bg-white rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        Technologies & Tools
                    </span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {TECH_STACK.map(({ Logo, label }, index) => {
                        const isImage = typeof Logo === 'string';
                        return (
                            <TechIcon3D
                                key={`${label}-${index}`}
                                LogoComponent={!isImage ? Logo : undefined}
                                imgSrc={isImage ? Logo : undefined}
                                label={label}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
