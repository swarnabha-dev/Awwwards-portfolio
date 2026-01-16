import { NAME, SOCIAL_LINKS } from '../../data/constants';

const FooterSection = ({ onContact, simple = false, footerRef, style }) => {
    return (
        <section
            ref={footerRef}
            id="contact"
            className="bg-[#1c1c1e] py-12 px-6 relative z-10 text-center text-white overflow-hidden"
            style={{
                ...style,
                borderTopLeftRadius: simple ? '0' : (style?.borderTopLeftRadius || '100%'),
                borderTopRightRadius: simple ? '0' : (style?.borderTopRightRadius || '100%'),
                marginTop: simple ? '0' : '-50px'
            }}
        >
            <div className="max-w-4xl mx-auto relative z-10">
                <p className="text-neutral-500 text-sm uppercase tracking-widest mb-12">Next Steps</p>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-16">
                    LET'S BUILD <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">THE FUTURE.</span>
                </h2>

                <button
                    onClick={onContact}
                    className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden pointer-events-auto touch-manipulation cursor-pointer"
                >
                    <span className="relative z-10">Start a Conversation</span>
                    <div className="absolute inset-0 bg-[#20e0d0] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Start a Conversation
                    </span>
                </button>

                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-600 gap-6">
                    <span>© 2026 {NAME}</span>
                    <div className="flex gap-8">
                        <a href={SOCIAL_LINKS.github} className="hover:text-white transition-colors">GitHub</a>
                        <a href={SOCIAL_LINKS.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
                        <a href={SOCIAL_LINKS.instagram} className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
