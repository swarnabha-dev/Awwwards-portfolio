const SocialIcon3D = ({ Icon, href }) => (
    <a href={href || "#"} className="group w-20 h-20 perspective-1000 cursor-pointer block touch-manipulation z-50">
        <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-[180deg] group-hover:scale-110">
            <div className="absolute inset-0 bg-[#F5F5F7] rounded-xl flex items-center justify-center shadow-lg backface-hidden border border-neutral-200">
                <Icon size={28} className="text-black" />
            </div>
            <div className="absolute inset-0 bg-black rounded-xl flex items-center justify-center shadow-lg transform rotate-y-180 backface-hidden border border-neutral-800">
                <Icon size={28} className="text-[#20e0d0]" />
            </div>
        </div>
    </a>
);

export default SocialIcon3D;
