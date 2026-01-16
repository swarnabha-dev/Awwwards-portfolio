import React, { useEffect, useRef, useState } from 'react';
import Hero from '../sections/Hero';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects';
import Research from '../sections/Research';
import FooterSection from '../components/layout/FooterSection';

const HomeView = ({ activeSkill, scrollY, setActiveProject, setActiveResearch, onViewAllProjects, onViewAllResearch, onContact, mousePos }) => {
    // Footer Curve Calculation for Home View
    const footerRef = useRef(null);
    const [footerRadius, setFooterRadius] = useState(100);

    useEffect(() => {
        const handleFooterScroll = () => {
            if (!footerRef.current) return;
            const rect = footerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight) {
                const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.5)));
                setFooterRadius(50 * (1 - progress));
            } else {
                setFooterRadius(50);
            }
        };
        window.addEventListener('scroll', handleFooterScroll);
        return () => window.removeEventListener('scroll', handleFooterScroll);
    }, []);

    return (
        <>
            {/* Hero Section - Parallax Landing */}
            <Hero scrollY={scrollY} activeSkill={activeSkill} />

            {/* Content Sections */}
            <div className="relative z-10 mt-[100dvh] bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
                {/* Tech Stack Section */}
                <TechStack />

                {/* Projects/Works Section */}
                <Projects
                    mousePos={mousePos}
                    setActiveProject={setActiveProject}
                    onViewAllProjects={onViewAllProjects}
                />

                {/* Research Section */}
                <Research
                    setActiveResearch={setActiveResearch}
                    onViewAllResearch={onViewAllResearch}
                />

                {/* Footer - Only visible on Home View */}
                <FooterSection
                    onContact={onContact}
                    footerRef={footerRef}
                    simple={false}
                    style={{
                        borderTopLeftRadius: `${footerRadius}% `,
                        borderTopRightRadius: `${footerRadius}% `,
                        marginTop: '-50px'
                    }}
                />
            </div>
        </>
    );
};

export default HomeView;
