import { useState, useRef } from 'react';
import UnifiedImage from './UnifiedImage';

const MacbookMockup = ({ src }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 8, y: y * -8 });
    };

    const handleLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative w-full max-w-4xl mx-auto my-10 md:my-16 perspective-1000 group cursor-pointer px-4 md:px-0"
        >
            <div
                className="relative transform-style-3d transition-transform duration-500 ease-out"
                style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            >
                <div className="relative bg-[#8E8E93] rounded-t-lg md:rounded-t-2xl p-[3%] shadow-2xl border border-[#A1A1A6] border-b-0">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#48484A] rounded-full z-20 shadow-inner"></div>
                    <div className="bg-black overflow-hidden rounded-sm relative aspect-[16/10] border border-neutral-900">
                        <UnifiedImage src={src} className="w-full h-full object-cover" alt="Screen" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10" />
                    </div>
                </div>
                <div className="relative bg-[#48484A] h-3 md:h-4 w-full flex justify-center border-x border-[#48484A]">
                    <div className="w-[80%] h-full bg-gradient-to-b from-[#8E8E93] to-[#48484A]" />
                </div>
                <div className="relative bg-[#B4B4B4] h-[8px] md:h-[10px] w-full rounded-b-lg md:rounded-b-xl shadow-2xl border-t border-[#A1A1A6] flex justify-center overflow-hidden">
                    <div className="absolute top-0 w-16 md:w-20 h-1 bg-[#8E8E93] rounded-b-md"></div>
                </div>
            </div>
        </div>
    );
};

export default MacbookMockup;
