import React, { useState, useEffect } from 'react';

const FluidCurtain = ({ isVisible, label, onCovered, onRevealed }) => {
  const [stage, setStage] = useState('hidden');

  useEffect(() => {
    if (isVisible && stage === 'hidden') {
      setStage('entering');
    }
  }, [isVisible, stage]);

  useEffect(() => {
    let timer;
    if (stage === 'entering') {
      timer = setTimeout(() => {
        onCovered && onCovered();
        setStage('holding');
      }, 500);
    } else if (stage === 'holding') {
      timer = setTimeout(() => {
        setStage('exiting');
      }, 300);
    } else if (stage === 'exiting') {
      timer = setTimeout(() => {
        onRevealed && onRevealed();
        setStage('hidden');
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [stage, onCovered, onRevealed]);

  if (stage === 'hidden' && !isVisible) return null;

  let transformClass = "translate-y-[110%]";
  let shapeClass = "rounded-t-[100%]";

  if (stage === 'entering' || stage === 'holding') {
    transformClass = "translate-y-0";
    shapeClass = "rounded-t-0";
  } else if (stage === 'exiting') {
    transformClass = "-translate-y-[110%]";
    shapeClass = "rounded-b-[100%] rounded-t-0";
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center text-white transition-transform duration-800 cubic-bezier(0.19, 1, 0.22, 1) ${transformClass} pointer-events-auto will-change-transform backface-hidden transform-gpu`}
    >
      <div className={`absolute inset-0 bg-[#1c1c1e] transition-all duration-800 cubic-bezier(0.19, 1, 0.22, 1) ${shapeClass}`} />
      <h2 className={`relative z-10 text-4xl md:text-7xl font-bold tracking-tighter uppercase transition-all duration-500 delay-100 transform ${stage === 'holding' || stage === 'exiting' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 blur-sm'}`}>
        {label}
      </h2>
    </div>
  );
};

export default FluidCurtain;
