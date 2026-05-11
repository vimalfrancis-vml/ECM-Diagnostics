import React from 'react';
import { motion } from 'motion/react';

const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
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

import { CONTACT_PHONE } from '../../constants';

export const Navbar = ({ isMobileMenuOpen, onMenuToggle }: { isMobileMenuOpen: boolean; onMenuToggle: () => void }) => (
  <nav className="h-[80px] md:h-[100px] flex items-center justify-between border-b border-white/10 shrink-0 relative z-50">
    <div className="flex items-center gap-4">
      <HamburgerButton isOpen={isMobileMenuOpen} onClick={onMenuToggle} />
      <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-400">
        Joshy’s <span className="text-white font-bold">ECM</span> // <span className="hidden sm:inline">Technical Division</span>
      </div>
    </div>
    <div className="hidden lg:flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
      <a href="#" className="hover:text-white transition-colors">Home</a>
      <a href="#services" className="hover:text-white transition-colors">Services</a>
      <a href="#specialization" className="hover:text-white transition-colors">Specialization</a>
      <a href="#footer" className="hover:text-white transition-colors">Contact</a>
    </div>
    <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-premium px-4 md:px-6 py-2 md:py-3 border border-white/20 rounded-none text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">Call Now</a>
  </nav>
);
