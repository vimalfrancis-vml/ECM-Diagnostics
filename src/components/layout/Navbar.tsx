import React from 'react';
import { CONTACT_PHONE } from '../../constants';
import { HamburgerButton } from '../ui/HamburgerButton';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const Navbar = ({ isMobileMenuOpen, onMenuToggle }: NavbarProps) => {
  return (
    <nav className="h-[80px] md:h-[100px] flex items-center justify-between border-b border-white/10 shrink-0 relative z-50">
      <div className="flex items-center gap-4">
        <HamburgerButton 
          isOpen={isMobileMenuOpen} 
          onClick={onMenuToggle} 
        />
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
      <a 
        href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} 
        className="btn-premium px-4 md:px-6 py-2 md:py-3 border border-white/20 rounded-none text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
      >
        Call Now
      </a>
    </nav>
  );
};
