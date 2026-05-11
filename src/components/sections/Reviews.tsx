import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';

export const Reviews = () => (
  <section className="py-32 border-t border-white/10 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-20">
        <div className="font-mono text-[10px] uppercase font-bold tracking-[0.5em] text-neutral-500">Global Standards</div>
        <h2 className="text-[48px] md:text-[64px] font-black uppercase tracking-tighter leading-tight">Trusted by<br />Car Owners</h2>
        <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light">Consistently delivering accurate diagnostics and reliable service for all types of vehicles.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { quote: "Excellent service for ECM repairs. Joshy solved a complex scanning issue that even the authorized service center couldn't diagnose properly.", author: "Akshay Babu", context: "Mahindra Owner" },
          { quote: "Very professional approach to diagnostic work. They fixed my engine lagging issue by recalibrating the ECM. High-tech equipment used.", author: "Suresh Kumar", context: "Maruti Owner" },
          { quote: "The best place in Thrissur for advanced automotive electronics. Fast diagnostic and transparent pricing. Top-notch expertise.", author: "Rahul VP", context: "Toyota Owner" },
          { quote: "Professional work for coding and diagnostic solutions. Helped me restore my car's performance after an electrical failure.", author: "Jithin Jose", context: "Premium Client" }
        ].map((review, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
            <PremiumCard className="items-start justify-start text-left">
              <div className="space-y-6">
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-white text-white" />)}</div>
                <p className="text-xl font-bold uppercase tracking-tight leading-snug">"{review.quote}"</p>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{review.author} // {review.context}</div>
              </div>
            </PremiumCard>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 text-center space-y-8">
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Star size={16} className="fill-white text-white" /></div>
          <span className="text-2xl font-black italic">4.7/5★</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Top Rated on Google</span>
        </div>
        <div>
          <a href="https://share.google/f81fJtTGt81TTzUMY" target="_blank" rel="noopener noreferrer" className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-white hover:text-neutral-400 transition-colors border-b border-white/20 pb-2">Read All Google Reviews</a>
        </div>
      </div>
    </div>
  </section>
);
