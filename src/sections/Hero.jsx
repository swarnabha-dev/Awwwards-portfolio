import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { PROFILE_IMG, NAME, SKILLS } from '../data/constants';
import ScrollGuide from '../components/ui/ScrollGuide';

import UnifiedImage from '../components/ui/UnifiedImage';

const Hero = ({ scrollY, activeSkill }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-[100dvh] flex flex-col overflow-hidden bg-[#E8E6E3] z-0">
            {/* Profile Image - adjusted for mobile to cover max space */}
            <div className="absolute top-24 bottom-0 w-full md:top-auto md:bottom-0 md:h-[85vh] flex items-end justify-center z-10 pointer-events-none">
                <UnifiedImage
                    src={PROFILE_IMG}
                    alt="Profile"
                    className="w-full h-full object-cover object-center md:object-contain md:object-bottom drop-shadow-2xl"
                    style={{ transform: `translateY(${scrollY * 0.15}px)` }}
                />
            </div>

            {/* Scroll Guide - Moved to side on mobile */}
            <div className="absolute bottom-8 right-6 md:bottom-6 md:left-12 z-30">
                <ScrollGuide />
            </div>

            {/* Name Marquee - Overlay on image */}
            <div className="absolute bottom-[25vh] md:bottom-[15vh] w-full z-20 mix-blend-difference pointer-events-none opacity-90">
                <div className="flex whitespace-nowrap" style={{ transform: `translateX(${-scrollY * 0.4}px)` }}>
                    <div className="animate-marquee-slow flex items-center">
                        {[1, 2, 3].map(i => (
                            <span
                                key={i}
                                className="text-[18vw] md:text-[13vw] font-bold tracking-tighter text-[#E8E6E3] mr-12 md:mr-24 leading-none"
                            >
                                {NAME.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills / Core Expertise - Positioned below name on mobile */}
            <div className="absolute bottom-12 left-6 w-[280px] md:top-[25%] md:left-[8%] md:bottom-auto z-20 md:w-[400px]">
                <div className="flex items-center gap-2 mb-2 md:mb-4 text-neutral-200 md:text-neutral-400">
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        Core Expertise
                    </h3>
                    <ArrowDownRight className="w-4 h-4" />
                </div>
                <div className="relative h-12 md:h-16">
                    {SKILLS.map((skill) => (
                        <div
                            key={skill}
                            className={`absolute top-0 left-0 text-3xl md:text-6xl font-light tracking-wide transition-all duration-700 ease-[0.23,1,0.32,1] ${activeSkill === skill
                                ? 'opacity-100 translate-y-0 blur-0'
                                : 'opacity-0 translate-y-4 blur-sm'
                                } text-white md:text-neutral-900`}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
