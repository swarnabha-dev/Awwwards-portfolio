import React from 'react';
import LiquidPane from '../layout/LiquidPane';
import { NAME, PROFILE_IMG } from '../../data/constants';
import UnifiedImage from '../ui/UnifiedImage';

const AboutModal = ({ isOpen, onClose }) => {
    return (
        <LiquidPane isOpen={isOpen} onClose={onClose} title="About Me" zIndex={110}>
            <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-20 items-center">
                <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                        <UnifiedImage src={PROFILE_IMG} alt="About" className="w-full h-full object-cover bg-[#E8E6E3]" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                    <h2 className="text-5xl font-bold tracking-tight">
                        Crafting Intelligence <br /> <span className="text-[#20e0d0]">Through Code.</span>
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        I'm {NAME}, a multidisciplinary engineer situated at the intersection of Data Science and Product Engineering.
                    </p>
                    <button className="group relative overflow-hidden bg-black text-white px-8 py-4 rounded-full font-bold mt-8">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Resume</span>
                        <div className="absolute inset-0 bg-[#20e0d0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </button>
                </div>
            </div>
        </LiquidPane>
    );
};

export default AboutModal;
