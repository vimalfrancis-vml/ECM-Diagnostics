import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CONTACT_PHONE } from '../../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
        >
          {/* Menu Header */}
          <div className="h-[80px] px-6 flex items-center justify-between border-b border-white/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Joshy’s <span className="text-white font-black">ECM</span> // Menu
            </div>
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Body */}
          <div className="flex-1 px-8 py-12 flex flex-col justify-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vh] font-black text-white/[0.02] uppercase pointer-events-none select-none">
              Technical
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              {[
                { name: 'Home', href: '#', detail: 'Main Terminal' },
                { name: 'Services', href: '#services', detail: 'Diagnostics & Repair' },
                { name: 'Specialization', href: '#specialization', detail: 'Core Competency' },
                { name: 'Contact', href: '#footer', detail: 'Direct Support' }
              ].map((item, i) => (
                <motion.a 
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ 
                    delay: 0.1 + i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={onClose}
                  className="group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-neutral-600 group-hover:text-white transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white/40 group-hover:text-white transition-all duration-500 group-hover:translate-x-2">
                        {item.name}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 group-hover:text-neutral-400 mt-1 transition-colors duration-500">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Menu Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 border-t border-white/10 bg-white/[0.02]"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3 font-mono">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                  <span className="text-[10px] text-white uppercase tracking-wider font-bold tracking-[0.1em]">Systems Online</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3 font-mono">Emergency</div>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-xs text-white font-bold hover:text-neutral-300 transition-colors tracking-tight">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

