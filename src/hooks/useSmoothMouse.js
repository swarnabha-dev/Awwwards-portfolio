import { useState, useEffect } from 'react';

const useSmoothMouse = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setSmoothMouse(prev => ({
                x: prev.x + (mouse.x - prev.x) * 0.1,
                y: prev.y + (mouse.y - prev.y) * 0.1
            }));
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [mouse]);

    return { raw: mouse, smooth: smoothMouse };
};

export default useSmoothMouse;
