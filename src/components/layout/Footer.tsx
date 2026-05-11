import React from 'react';

export const Footer = () => (
  <footer id="footer" className="py-16 border-t border-white/10 bg-black/40 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="space-y-4 text-center md:text-left">
        <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white">Joshy’s <span className="text-neutral-500">ECM</span></div>
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500">Advanced Car Diagnostics & ECM Diagnostics Service</p>
      </div>
      <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#specialization" className="hover:text-white transition-colors">Specialization</a>
        <a href="mailto:contact@joshyecom.com" className="hover:text-white transition-colors underline underline-offset-4">Get in Touch</a>
      </div>
      <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-600">© 2026 TECHNICAL SERVICE DIVISION // ALL RIGHTS RESERVED</div>
    </div>
  </footer>
);
