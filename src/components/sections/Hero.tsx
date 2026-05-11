import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { StaggeredWordReveal } from '../ui/StaggeredWordReveal';
import { CONTACT_PHONE } from '../../constants';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section className="flex-grow flex flex-col justify-center max-w-5xl mx-auto text-center py-12 md:py-20 lg:py-24">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-8"
          >
            <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-neutral-500 backdrop-blur-sm inline-block px-3 md:px-4 py-1.5 border border-white/10 bg-white/5 rounded-full antialiased">
              Professional Diagnostics & Repair
            </div>
            <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-white backdrop-blur-sm inline-block px-3 md:px-4 py-1.5 border border-white/20 bg-white/10 rounded-full antialiased shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              10+ Years Expertise
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] md:leading-[0.9] tracking-tighter uppercase flex flex-col items-center gap-2 md:gap-4 font-display">
            <div className="flex flex-col items-center">
              <StaggeredWordReveal 
                text="Joshy’s ECM" 
                className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                delayOffset={0.5}
              />
              <StaggeredWordReveal 
                text="Diagnostic Service" 
                className="text-neutral-500 font-medium"
                delayOffset={0.8}
              />
            </div>
          </h1>
        </div>

        {/* Proportional Space for Mobile */}
        <div className="h-8 md:h-16" aria-hidden="true" />

        <div className="space-y-6 md:space-y-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <PremiumCard className="mx-auto rounded-2xl sm:rounded-3xl border-none md:border md:border-white/5">
              <p className="text-[14px] sm:text-[18px] md:text-[26px] text-white leading-relaxed font-light drop-shadow-lg max-w-4xl px-2">
                Expertise in Advanced Car Diagnostics, ECM repair, and precision key coding. Specialized optimization for luxury systems including <span className="font-semibold text-white/90">Volkswagen, Audi, and Mercedes-Benz</span>.
              </p>
            </PremiumCard>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-6 md:pt-10">
            <button 
              onClick={onBookClick}
              className="btn-premium bg-white text-black w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <Calendar size={14} />
              Book Service
            </button>
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="btn-premium border border-white/30 backdrop-blur-md w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-neutral-600 pt-8 md:pt-16">
          Specialized in Premium Vehicle Systems // Technical Excellence
        </div>
      </div>
    </section>
  );
};
