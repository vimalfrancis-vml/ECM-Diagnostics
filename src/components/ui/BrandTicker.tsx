import React from 'react';
import { motion } from 'motion/react';
import { BRANDS_EXTENDED } from '../../constants';

export function BrandTicker() {
  return (
    <div className="relative flex overflow-x-hidden border-b border-white/5 pb-10">
      <motion.div 
        className="flex whitespace-nowrap gap-12 md:gap-20 lg:gap-32 items-center py-8 smooth-render"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {BRANDS_EXTENDED.map((brand) => (
          <div 
            key={brand.id} 
            className="flex items-center gap-6 md:gap-10 opacity-40 hover:opacity-100 transition-all duration-700 cursor-default group"
          >
            <span className="text-[18px] md:text-[28px] lg:text-[40px] font-black uppercase tracking-[0.2em] text-white/5 group-hover:text-white/40 transition-all duration-700 font-display silver-glow">
              {brand.name}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
