import React from 'react';
import LiquidPane from '../layout/LiquidPane';
import UnifiedImage from '../ui/UnifiedImage';

const ResearchDetailModal = ({ research, onClose }) => {
    return (
        <LiquidPane isOpen={!!research} onClose={onClose} title="Research Paper" zIndex={100}>
            {research && (
                <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
                    <span className="block text-center text-sm font-bold uppercase tracking-widest text-[#20e0d0] mb-4">
                        {research.journal} • {research.year}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 leading-tight">
                        {research.title}
                    </h1>
                    <UnifiedImage
                        src={research.image}
                        alt="Research"
                        className="w-full aspect-[21/9] object-cover rounded-2xl mb-12 shadow-lg"
                    />
                    <div className="prose prose-lg prose-neutral mx-auto">
                        <p className="font-medium text-xl leading-relaxed mb-8">{research.abstract}</p>
                    </div>
                </div>
            )}
        </LiquidPane>
    );
};

export default ResearchDetailModal;
