import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
                © 2024 Alex Dev. Built with React & Tailwind.
            </p>
            <div className="flex items-center gap-6">
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
            </div>
        </div>
    </footer>
);

export default Footer;
