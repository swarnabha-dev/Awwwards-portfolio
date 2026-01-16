import UnifiedImage from './UnifiedImage';

const TechIcon3D = ({ imgSrc, LogoComponent, label }) => {
    return (
        <div className="group relative w-16 h-16 md:w-20 md:h-20 cursor-pointer perspective-1000">
            <div className="absolute inset-0 bg-neutral-200 rounded-xl transform translate-y-2 translate-x-2 transition-transform duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) will-change-transform transform-gpu group-hover:translate-y-3 group-hover:translate-x-3" />
            <div className="absolute inset-0 bg-neutral-100 rounded-xl border border-neutral-300 transform translate-y-1 translate-x-1 transition-transform duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) will-change-transform transform-gpu group-hover:translate-y-1.5 group-hover:translate-x-1.5" />
            <div className="absolute inset-0 bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden transform transition-all duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) will-change-transform transform-gpu group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-2xl">
                <div className="absolute bottom-0 left-0 w-full bg-[#20e0d0] transition-all duration-500 ease-in-out h-0 group-hover:h-full opacity-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                    <div className="transform transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:scale-110 group-hover:-translate-y-1 w-8 h-8 md:w-10 md:h-10">
                        {LogoComponent ? <LogoComponent /> : <UnifiedImage src={imgSrc} alt={label} className="w-full h-full object-contain" />}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-[#20e0d0] transition-colors duration-300 bg-white/50 px-1 rounded">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TechIcon3D;
