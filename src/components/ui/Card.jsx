import React from 'react';

const Card = ({ children, className = '' }) => (
    <div className={`bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 ${className}`}>
        {children}
    </div>
);

export default Card;
