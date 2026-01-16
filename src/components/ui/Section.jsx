import React from 'react';

const Section = ({ id, className = '', children }) => (
    <section id={id} className={`py-20 md:py-32 px-4 md:px-8 relative ${className}`}>
        <div className="max-w-6xl mx-auto relative z-10">
            {children}
        </div>
    </section>
);

export default Section;
