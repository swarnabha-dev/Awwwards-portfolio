import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import Monogram from '../components/ui/Monogram';
import UnifiedImage from '../components/ui/UnifiedImage';

const FullScreenArchive = ({ title, projects, onClose, onProjectClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            setScrolled(e.target.scrollTop > 50);
        };
        const container = document.getElementById('archive-container');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div id="archive-container" className="fixed inset-0 z-[80] bg-white overflow-y-auto custom-scrollbar pointer-events-auto">
            {/* Scrollable Header Section */}
            <div className="px-6 md:px-12 pt-8 pb-6">
                {/* Logo - Hidden on mobile when scrolled */}
                <div className={`mb-6 w-16 h-16 text-black transition-opacity duration-300 ${scrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                    <Monogram fixed={false} />
                </div>

                {/* Title and Back Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{title}</h2>
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors touch-manipulation cursor-pointer"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                </div>
            </div>

            {/* Grid Content */}
            <div className="px-6 md:px-12 pb-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((proj) => (
                        <div
                            key={proj.id}
                            className="group cursor-pointer flex flex-col gap-4 touch-manipulation pointer-events-auto"
                            onClick={() => onProjectClick(proj)}
                        >
                            <div className="overflow-hidden rounded-2xl relative aspect-video shadow-sm group-hover:shadow-xl transition-all duration-500">
                                <UnifiedImage
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                            <div className="flex justify-between items-start border-b border-neutral-100 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-[#20e0d0] transition-colors">{proj.title}</h3>
                                    <p className="text-neutral-500 text-sm mt-1">{proj.description}</p>
                                </div>
                                <span className="text-neutral-400 text-xs font-mono border border-neutral-200 px-2 py-1 rounded-full">{proj.type || proj.journal}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FullScreenArchive;
