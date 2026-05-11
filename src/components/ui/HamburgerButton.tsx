import React from 'react';
import { motion } from 'motion/react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
  <button 
    onClick={onClick}
    className="lg:hidden flex flex-col gap-1.5 p-2 -ml-2 group z-50 relative"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <motion.div 
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      className="w-6 h-0.5 bg-neutral-400 group-hover:bg-white transition-colors"
    />
    <motion.div 
      animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
      className="w-4 h-0.5 bg-neutral-500 group-hover:bg-white transition-colors"
    />
    <motion.div 
      animate={isOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 16 }}
      className="h-0.5 bg-neutral-400 group-hover:bg-white transition-colors"
    />
  </button>
);
