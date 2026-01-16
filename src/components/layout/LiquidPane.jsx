import { X } from 'lucide-react';

const LiquidPane = ({ isOpen, onClose, children, title, zIndex = 100 }) => (
    <div className={`fixed inset-0 flex flex-col justify-end transition-all duration-500 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ zIndex }}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
        <div className={`relative w-full bg-[#FAFAFA] z-10 overflow-hidden flex flex-col shadow-2xl transform transition-all duration-[800ms] cubic-bezier(0.32, 0.72, 0, 1) ${isOpen ? 'translate-y-0 h-[92vh]' : 'translate-y-full h-0'}`} style={{ borderTopLeftRadius: isOpen ? '24px' : '100%', borderTopRightRadius: isOpen ? '24px' : '100%' }}>
            <div className="px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur border-b border-neutral-100 sticky top-0 z-20">
                <h2 className="text-lg font-bold tracking-tight text-neutral-900">{title}</h2>
                <button onClick={onClose} className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors text-neutral-500 hover:text-black touch-manipulation cursor-pointer pointer-events-auto"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">{children}</div>
        </div>
    </div>
);

export default LiquidPane;
