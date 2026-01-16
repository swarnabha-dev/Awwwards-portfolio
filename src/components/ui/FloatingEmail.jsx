import { Mail } from 'lucide-react';

const FloatingEmail = ({ email }) => (
    <div className="relative z-50 flex justify-center items-center pointer-events-auto">
        <a href={`mailto:${email}`} className="relative group cursor-pointer animate-float-element block">
            <div className="absolute inset-0 bg-[#20e0d0] rounded-full blur-xl opacity-40 animate-blob" />
            <div className="relative bg-[#1c1c1e] hover:bg-[#20e0d0] hover:text-black text-white border border-[#20e0d0]/30 px-10 py-6 rounded-full flex items-center gap-4 transition-all duration-500 shadow-2xl touch-manipulation">
                <Mail className="w-6 h-6" />
                <span className="text-xl md:text-3xl font-medium tracking-wide">{email}</span>
            </div>
        </a>
    </div>
);

export default FloatingEmail;
