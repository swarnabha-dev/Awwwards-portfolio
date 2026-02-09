import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Use refs for position to avoid re-renders on every frame
    const pos = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });
    const speed = 0.15; // Smoothness factor

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e) => {
            // Check if target is interactive
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('cursor-scale')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver); // Use mouseover for event delegation check

        const animate = () => {
            // Lerp logic for smooth following
            pos.current.x += (mouse.current.x - pos.current.x) * speed;
            pos.current.y += (mouse.current.y - pos.current.y) * speed;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`hidden md:flex fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out will-change-transform items-center justify-center`}
            style={{
                marginTop: '-0.75rem', // Center the cursor (w-6 is 1.5rem, so half is 0.75rem)
                marginLeft: '-0.75rem'
            }}
        >
            {/* Outer Ring */}
            <div
                className={`absolute inset-0 rounded-full border-2 border-[#1d1d1f] transition-all duration-300 ease-out ${isHovering ? 'scale-[1.5] border-[#20e0d0] opacity-100' : 'scale-100 opacity-50'}`}
            />

            {/* Inner Dot */}
            <div
                className={`w-1.5 h-1.5 bg-[#1d1d1f] rounded-full transition-all duration-300 ease-out ${isHovering ? 'bg-[#20e0d0] scale-[0.5]' : 'scale-100'}`}
            />
        </div>
    );
};

export default CustomCursor;
