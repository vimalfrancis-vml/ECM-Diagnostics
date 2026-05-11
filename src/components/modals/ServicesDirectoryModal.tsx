import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Monitor, Activity, Key, Settings, Wrench } from 'lucide-react';

export const ServicesDirectoryModal = ({ isOpen, onClose, onBook }: { isOpen: boolean; onClose: () => void; onBook: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} className="relative w-full max-w-6xl h-[90vh] md:h-auto max-h-[90vh] bg-neutral-900 border border-white/10 p-6 md:p-12 shadow-2xl rounded-2xl overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <button onClick={onClose} className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-20"><X size={24} /></button>
          <div className="space-y-4 mb-10">
            <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-500">Service Directory // Full Inventory</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Comprehensive Technical Catalog</h2>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              {[
                { title: "ECM Repair", desc: "Advanced repair of Engine Control Modules for all major makes.", icon: <Cpu className="w-5 h-5" /> },
                { title: "ECM Programming", desc: "Software updates and module synchronization services.", icon: <Monitor className="w-5 h-5" /> },
                { title: "Car Scanning", desc: "Full digital vehicle health checks with detailed fault reports.", icon: <Activity className="w-5 h-5" /> },
                { title: "Key Coding", desc: "Electronic key matching and immobilizer programming.", icon: <Key className="w-5 h-5" /> },
                { title: "Luxury Coding", desc: "Specialized online coding for BMW, Audi, and Mercedes.", icon: <Cpu className="w-5 h-5" /> },
                { title: "ABS/Airbag Module", desc: "Critical safety module diagnostic and repair services.", icon: <Settings className="w-5 h-5" /> },
                { title: "Sensor Diagnosis", desc: "Testing and replacement of MAF, O2, and specialized sensors.", icon: <Activity className="w-5 h-5" /> },
                { title: "Electrical Wiring", desc: "Complex harness repairs and electrical fault finding.", icon: <Wrench className="w-5 h-5" /> },
                { title: "Throttle Calibration", desc: "Electronic throttle body cleaning and recalibration.", icon: <Settings className="w-5 h-5" /> },
                { title: "AC Diagnostics", desc: "Electronic AC controls and component performance testing.", icon: <Activity className="w-5 h-5" /> },
                { title: "Suspension Checks", desc: "Digital inspection of electronic suspension components.", icon: <Settings className="w-5 h-5" /> },
                { title: "Battery Management", desc: "Registration and coding for new vehicle batteries.", icon: <Cpu className="w-5 h-5" /> },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-lg text-neutral-400 group-hover:text-white transition-colors">{s.icon}</div>
                    <h4 className="font-bold uppercase tracking-tight text-sm">{s.title}</h4>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed group-hover:text-neutral-400 transition-colors">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Total capabilities: 100+ diagnostic protocols</p>
            <button onClick={onBook} className="btn-premium bg-white text-black px-8 py-4 font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-neutral-200 transition-all">Book Any Service</button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
