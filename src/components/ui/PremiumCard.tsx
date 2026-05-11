import React from 'react';

export const PremiumCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`premium-glow-border group/card transition-all duration-300 rounded-xl overflow-hidden ${className}`}>
    <div className="relative z-10 px-8 py-10 h-full w-full flex flex-col items-center justify-center backdrop-blur-[1px] bg-neutral-900/40 group-hover/card:bg-neutral-900/60 transition-colors duration-300">
      {children}
    </div>
  </div>
);
