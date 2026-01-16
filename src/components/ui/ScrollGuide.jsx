const ScrollGuide = () => (
    <div className="flex flex-col items-center gap-2 z-20 mix-blend-difference text-neutral-800 pointer-events-none animate-float-slow">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce" />
        </div>
    </div>
);

export default ScrollGuide;
