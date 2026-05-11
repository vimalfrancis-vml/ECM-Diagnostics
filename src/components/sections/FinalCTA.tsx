import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../../constants';

export const FinalCTA = ({ onBookClick }: { onBookClick: () => void }) => (
  <section className="py-40 border-t border-white/10 relative z-10 overflow-hidden">
    <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-150 opacity-10" />
    <div className="max-w-4xl mx-auto text-center space-y-12 relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
        <div className="font-mono text-[11px] uppercase font-bold tracking-[0.6em] text-neutral-400 bg-white/5 border border-white/10 px-6 py-2 rounded-full inline-block">Start Your Diagnostic</div>
        <h2 className="text-[56px] md:text-[84px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.85]">Get Your Car<br />Checked Today</h2>
        <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light">Accurate diagnostics and expert solutions for your vehicle’s performance and safety.</p>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <button onClick={onBookClick} className="btn-premium bg-white text-black px-12 py-5 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto"><Calendar size={14} /> Book Service</button>
        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-premium border border-white/30 backdrop-blur-md px-12 py-5 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]"><Phone size={14} /> Call Now</a>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">Fast, reliable, and professional service you can trust</div>
    </div>
  </section>
);
