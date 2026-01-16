import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/constants';
import { lerp } from '../utils/helpers';
import { ArrowRight } from 'lucide-react';
import UnifiedImage from '../components/ui/UnifiedImage';

const Projects = ({ mousePos, setActiveProject, onViewAllProjects }) => {
    const workContainerRef = useRef(null);
    const previewContainerRef = useRef(null);
    const bubbleContainerRef = useRef(null);
    const [activePreview, setActivePreview] = useState(null);

    // Refs for physics values (to avoid state re-renders)
    const physics = useRef({
        preview: { x: 0, y: 0 },
        bubble: { x: 0, y: 0 }
    });

    // Physics for smooth mouse tracking - optimized with direct DOM updates
    useEffect(() => {
        let animationFrame;
        const updatePhysics = () => {
            // Update physics values
            physics.current.preview.x = lerp(physics.current.preview.x, mousePos.x, 0.08);
            physics.current.preview.y = lerp(physics.current.preview.y, mousePos.y, 0.08);

            physics.current.bubble.x = lerp(physics.current.bubble.x, mousePos.x, 0.04);
            physics.current.bubble.y = lerp(physics.current.bubble.y, mousePos.y, 0.04);

            // Direct DOM updates
            if (previewContainerRef.current) {
                previewContainerRef.current.style.transform = `translate(${physics.current.preview.x}px, ${physics.current.preview.y}px)`;
            }
            if (bubbleContainerRef.current) {
                bubbleContainerRef.current.style.transform = `translate(${physics.current.bubble.x}px, ${physics.current.bubble.y}px)`;
            }

            animationFrame = requestAnimationFrame(updatePhysics);
        };
        updatePhysics();
        return () => cancelAnimationFrame(animationFrame);
    }, [mousePos]);

    // Active Project Preview Detection
    useEffect(() => {
        const checkActiveProject = () => {
            // Optimization: Only check if mouse is actually moving relatively fast or if we haven't checked in a while?
            // Actually the logic here is fine, but let's ensure it doesn't cause unnecessary updates
            const elUnderCursor = document.elementFromPoint(mousePos.x, mousePos.y);
            const hoverItem = elUnderCursor?.closest('[data-work-id]');

            if (hoverItem) {
                const newId = parseInt(hoverItem.getAttribute('data-work-id'));
                setActivePreview(prev => (prev !== newId ? newId : prev));
                return;
            }

            if (!workContainerRef.current) return;
            const listRect = workContainerRef.current.getBoundingClientRect();

            const isCursorInListArea =
                mousePos.y >= listRect.top &&
                mousePos.y <= listRect.bottom;

            if (isCursorInListArea) {
                const workItems = document.querySelectorAll('[data-work-id]');
                let closest = null;
                let closestDist = Infinity;
                workItems.forEach(item => {
                    const itemRect = item.getBoundingClientRect();
                    const dist = Math.abs(itemRect.top + itemRect.height / 2 - window.innerHeight / 2);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = parseInt(item.getAttribute('data-work-id'));
                    }
                });
                setActivePreview(prev => (prev !== closest ? closest : prev));
            } else {
                setActivePreview(prev => (prev !== null ? null : prev));
            }
        };

        const handleScroll = () => requestAnimationFrame(checkActiveProject);
        window.addEventListener('scroll', handleScroll);
        checkActiveProject(); // Check initially
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mousePos]);

    const activeIndex = PROJECTS.findIndex(p => p.id === activePreview);

    return (
        <section id="works" className="relative bg-[#F0F0F2] pb-20 px-6 md:px-20 min-h-screen cursor-none overflow-hidden">
            {/* Floating Preview Image */}
            <div
                ref={previewContainerRef}
                className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block will-change-transform transform-gpu"
                style={{
                    opacity: activePreview ? 1 : 0,
                    transition: 'opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
                }}
            >
                <div className={`relative -translate-x-1/2 -translate-y-1/2 w-[320px] h-[460px] rounded-lg overflow-hidden shadow-2xl transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${activePreview ? 'scale-100' : 'scale-50'}`}>
                    {PROJECTS.map((p, index) => {
                        const isActive = activePreview === p.id;
                        const isBefore = index < activeIndex;
                        let translateClass = 'translate-y-full';
                        if (isActive) translateClass = 'translate-y-0';
                        else if (isBefore) translateClass = '-translate-y-full';
                        if (activePreview === null) translateClass = 'translate-y-full';
                        return (
                            <UnifiedImage
                                key={p.id}
                                src={p.image}
                                alt=""
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) will-change-[transform,opacity] transform-gpu ${translateClass} ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
                            />
                        );
                    })}
                </div>
            </div>

            {/* View Bubble */}
            <div
                ref={bubbleContainerRef}
                className="fixed top-0 left-0 pointer-events-none z-[51] hidden md:block will-change-transform"
                style={{
                    opacity: activePreview ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            >
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#20e0d0]/90 backdrop-blur-xl flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest animate-blob shadow-2xl border border-white/20">
                    View
                </div>
            </div>

            {/* Projects List */}
            <div className="max-w-6xl mx-auto pt-20">
                <div className="mb-20 pt-10 border-t border-neutral-300">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Selected Works</h2>
                </div>
                <div ref={workContainerRef} className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <React.Fragment key={project.id}>
                            <div className="w-full h-[1px] bg-neutral-300" />
                            <div
                                className="group py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) hover:px-0 md:hover:px-12 cursor-pointer relative"
                                data-work-id={project.id}
                                onClick={() => setActiveProject(project)}
                            >
                                <h3 className="text-4xl md:text-8xl font-semibold tracking-tight transition-colors duration-300 text-black group-hover:text-neutral-400 mb-4 md:mb-0">
                                    {project.title}
                                </h3>
                                <span className="text-sm md:text-lg font-mono text-neutral-500 group-hover:text-neutral-600 transition-colors">
                                    {project.type}
                                </span>
                            </div>
                        </React.Fragment>
                    ))}
                    <div className="w-full h-[1px] bg-neutral-300" />
                </div>
                <div className="mt-24 text-center">
                    <button
                        onClick={onViewAllProjects}
                        className="group relative inline-flex items-center gap-4 bg-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 cursor-pointer pointer-events-auto touch-manipulation z-20"
                    >
                        <span className="relative z-10 group-hover:text-[#20e0d0] transition-colors">View All Projects</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-[#20e0d0] group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
