import React from 'react';
import { RESEARCH } from '../data/constants';
import { ArrowRight } from 'lucide-react';
import UnifiedImage from '../components/ui/UnifiedImage';

const Research = ({ setActiveResearch, onViewAllResearch }) => {
    return (
        <section id="research" className="bg-[#E8E6E3] py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-[#1d1d1f]">
                    Research & Publications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {RESEARCH.map((res) => (
                        <div
                            key={res.id}
                            onClick={() => setActiveResearch(res)}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative border border-white/50 touch-manipulation"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="px-4 py-1.5 bg-neutral-100 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-500">
                                        {res.year}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#20e0d0] group-hover:text-white transition-colors">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-[#20e0d0] transition-colors">
                                    {res.title}
                                </h3>
                                <p className="text-neutral-500 text-sm mb-4">{res.journal}</p>
                                <div className="h-1 w-12 bg-neutral-200 group-hover:w-full transition-all duration-500" />
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                                <UnifiedImage src={res.image} className="w-full h-full object-cover grayscale" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-24 text-center">
                    <button
                        onClick={onViewAllResearch}
                        className="group relative inline-flex items-center gap-4 bg-white/50 border border-neutral-300 px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer pointer-events-auto touch-manipulation z-20"
                    >
                        <span className="relative z-10 group-hover:text-[#20e0d0] transition-colors">View Research Archive</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-[#20e0d0] group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Research;
