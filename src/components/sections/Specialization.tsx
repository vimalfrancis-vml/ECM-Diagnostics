import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Trophy } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';

export const Specialization = () => (
  <section id="specialization" className="py-20 md:py-32 border-t border-white/10 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-neutral-500">Precision & Mastery</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">Experts in<br />Automotive Electronics</h2>
            <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed">Specialized in advanced ECM diagnostics, electronic repairs, and precision vehicle solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Focused on modern car electronic systems",
              "Experienced in luxury vehicle diagnostics",
              "Advanced tools for accurate fault detection",
              "Reliable and cost-effective service approach"
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="mt-1 p-1 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-500 group-hover:bg-white group-hover:text-black transition-all"><CheckCircle size={12} /></div>
                <span className="text-[13px] uppercase font-bold tracking-wider text-neutral-300 group-hover:text-white transition-colors">{point}</span>
              </div>
            ))}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">Delivering precision and trust in every service</div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 relative">
          <div className="absolute inset-0 bg-white/5 blur-3xl opacity-20" />
          <PremiumCard className="relative">
            <div className="space-y-6 text-center">
              <Trophy className="w-12 h-12 text-neutral-500 mx-auto" />
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">Technical Excellence</div>
                <div className="text-xl font-bold uppercase tracking-widest text-white">Certified Diagnostic Specialists</div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </div>
  </section>
);
