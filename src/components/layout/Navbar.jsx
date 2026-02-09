import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const Navbar = ({ isScrolled, viewState, onNavigate, onShowAbout, onShowContact }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (item) => {
        if (item === 'Contact') {
            onShowContact();
        } else if (viewState !== 'home') {
            onNavigate('home', 'Home');
        } else {
            document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuItemClick = (item) => {
        setMenuOpen(false);
        if (item === 'About') {
            onShowAbout();
        } else if (item === 'Contact') {
            onShowContact();
        } else if (item === 'Home') {
            if (viewState !== 'home') onNavigate('home', 'Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-8 px-12 flex justify-end items-center pointer-events-none ${isScrolled ? 'hidden md:-translate-y-full md:opacity-0' : 'hidden md:flex md:translate-y-0 md:opacity-100'}`}>
                <div className="flex gap-10 pointer-events-auto">
                    {['Works', 'Research', 'Contact'].map(item => (
                        <MagneticButton key={item}>
                            <button
                                onClick={() => handleNavClick(item)}
                                className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#20e0d0] active:text-[#20e0d0] transition-colors pointer-events-auto cursor-pointer"
                            >
                                {item}
                            </button>
                        </MagneticButton>
                    ))}
                </div>
            </nav>

            {/* Hamburger Menu Button */}
            <MagneticButton className={`fixed top-8 right-8 z-100 ${isScrolled ? 'pointer-events-auto opacity-100 scale-100' : 'md:pointer-events-none md:opacity-0 md:scale-90 opacity-100 pointer-events-auto scale-100'} transition-all duration-500`}>
                <button
                    onClick={() => setMenuOpen(true)}
                    className="group relative flex flex-col gap-1.5 p-4 rounded-full bg-[#1c1c1e] text-white shadow-2xl overflow-hidden cursor-pointer touch-manipulation transform hover:scale-110 transition-transform duration-500 ease-[0.34,1.56,0.64,1]"
                >
                    <div className="absolute inset-0 bg-[#20e0d0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                    <div className="relative z-10 flex flex-col gap-1.5">
                        <div className="w-5 h-0.5 bg-white rounded-full group-hover:w-6 transition-all duration-300" />
                        <div className="w-5 h-0.5 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300" />
                        <div className="w-5 h-0.5 bg-white rounded-full opacity-50 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                </button>
            </MagneticButton>

            {/* Side "About Me" Button */}
            {viewState === 'home' && (
                <div className={`fixed top-1/2 right-0 z-100 transform -translate-y-1/2 ${isScrolled ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'} transition-all duration-500`}>
                    <MagneticButton strength={0.2} className="pointer-events-auto">
                        <button
                            onClick={onShowAbout}
                            className="relative bg-[#1c1c1e] text-white py-12 pl-3 pr-2 rounded-l-2xl shadow-xl flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) w-12 hover:w-64 hover:translate-x-0 touch-manipulation transform translate-x-2"
                        >
                            <span className="writing-vertical-rl text-[10px] font-bold uppercase tracking-[0.2em] rotate-180 group-hover:opacity-0 transition-opacity duration-300 absolute right-3">About Me</span>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-4 whitespace-nowrap pl-4">
                                <span className="text-xl font-bold tracking-wider">Read Biography</span>
                                <ArrowRight size={20} />
                            </div>
                        </button>
                    </MagneticButton>
                </div>
            )}

            {/* Full-Screen Menu Overlay */}
            <div className={`fixed inset-0 z-120 flex flex-col justify-end transition-all duration-500 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-700 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)} />
                <div className={`relative w-full md:w-[30vw] ml-auto h-full bg-[#1c1c1e] text-white flex flex-col justify-center pl-28 pr-8 shadow-2xl transform transition-all duration-800 cubic-bezier(0.19, 1, 0.22, 1) will-change-[transform,border-radius] transform-gpu ${menuOpen ? 'translate-x-0 rounded-l-4xl' : 'translate-x-full rounded-l-[100%]'} overflow-y-auto`}>
                    <button onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors touch-manipulation cursor-pointer">
                        <X size={24} />
                    </button>
                    <div className="w-full">
                        <div className="mb-10">
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4 block">Navigation</span>
                            <div className="w-full h-px bg-white/10"></div>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {['Home', 'Works', 'Research', 'About', 'Contact'].map((item, i) => (
                                <div key={item} className="overflow-hidden">
                                    <div
                                        onClick={() => handleMenuItemClick(item)}
                                        className={`text-5xl md:text-6xl font-normal tracking-tight cursor-pointer text-white hover:text-neutral-400 transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                        style={{ transitionDelay: `${100 + i * 50}ms` }}
                                    >
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Custom CSS for vertical text */}
            <style>{`
                .writing-vertical-rl { writing-mode: vertical-rl; }
            `}</style>
        </>
    );
};

export default Navbar;
