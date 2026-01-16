import React from 'react';
import Section from '../components/ui/Section';

const Contact = () => (
    <Section id="contact" className="mb-20">
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to start your next project?</h2>
                <p className="text-indigo-100 text-lg">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                        Get in Touch
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-indigo-700 text-white border border-indigo-500 rounded-full font-bold hover:bg-indigo-800 transition-colors">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    </Section>
);

export default Contact;
