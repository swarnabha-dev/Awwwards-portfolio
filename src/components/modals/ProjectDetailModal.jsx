import React from 'react';
import LiquidPane from '../layout/LiquidPane';
import MacbookMockup from '../ui/MacbookMockup';
import ScrollRevealer from '../ui/ScrollRevealer';
import UnifiedImage from '../ui/UnifiedImage';

const ProjectDetailModal = ({ project, onClose }) => {
    return (
        <LiquidPane isOpen={!!project} onClose={onClose} title="Project Case Study" zIndex={100}>
            {project && (
                <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
                    <div className="text-center mb-16 space-y-6">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter">{project.title}</h1>
                        <div className="flex justify-center gap-3">
                            {project.stack && project.stack.map(tech => (
                                <span key={tech} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium shadow-sm text-neutral-600">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <MacbookMockup src={project.image} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
                        <div className="md:col-span-2 space-y-6">
                            <h3 className="text-2xl font-bold">The Challenge & Solution</h3>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">{project.description}</p>
                        </div>
                        <div className="bg-neutral-50 p-8 rounded-3xl h-fit">
                            <h4 className="font-bold mb-4">Key Metrics</h4>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-neutral-200 pb-2">
                                    <span className="text-neutral-500">Latency</span>
                                    <span className="font-bold">12ms</span>
                                </li>
                                <li className="flex justify-between border-b border-neutral-200 pb-2">
                                    <span className="text-neutral-500">Accuracy</span>
                                    <span className="font-bold">99.4%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-32 space-y-32">
                        {project.screens && project.screens.map((screen, idx) => (
                            <ScrollRevealer key={idx}>
                                <div className="group relative">
                                    <UnifiedImage src={screen} alt="Detail" className="w-full rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]" />
                                    <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-neutral-400">System Interface {idx + 1}</p>
                                </div>
                            </ScrollRevealer>
                        ))}
                    </div>
                </div>
            )}
        </LiquidPane>
    );
};

export default ProjectDetailModal;
