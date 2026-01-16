import { useState, useEffect, useRef } from 'react';

const ScrollRevealer = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform,filter] duration-1000 cubic-bezier(0.25, 0.46, 0.45, 0.94) will-change-[opacity,transform] transform-gpu ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-sm'}`}
        >
            {children}
        </div>
    );
};

export default ScrollRevealer;
