import React from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Key, Monitor, Settings, Wrench } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';

interface ServicesProps {
  onViewAllClick: () => void;
}

export const Services = ({ onViewAllClick }: ServicesProps) => {
  return (
    <section id="services" className="py-20 md:py-32 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-neutral-500">
              Precision Engine Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              Advanced Automotive<br />Services
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-xl font-light leading-relaxed">
              Comprehensive diagnostics, electronic repairs, and complete vehicle maintenance handled with precision and expertise.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Car Scanning & Diagnosis', 
              desc: 'Accurate digital analysis to detect faults instantly', 
              icon: <Activity className="w-6 h-6" />,
              label: 'Diagnostic'
            },
            { 
              title: 'ECM Repair & Programming', 
              desc: 'Reliable engine control module solutions', 
              icon: <Cpu className="w-6 h-6" />,
              label: 'Control'
            },
            { 
              title: 'Key Coding', 
              desc: 'Secure key duplication and coding services', 
              icon: <Key className="w-6 h-6" />,
              label: 'Security'
            },
            { 
              title: 'Luxury Car Online Coding', 
              desc: 'VW, Audi, Mercedes-Benz advanced system coding', 
              icon: <Monitor className="w-6 h-6" />,
              label: 'Online'
            },
            { 
              title: 'Sensor Replacement', 
              desc: 'Precision replacement for all vehicle sensors', 
              icon: <Settings className="w-6 h-6" />,
              label: 'Systems'
            },
            { 
              title: 'Electrical & Mechanical Services', 
              desc: 'Complete support including brakes, battery, suspension, and more', 
              icon: <Wrench className="w-6 h-6" />,
              label: 'Hardware'
            }
          ].map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <PremiumCard className="h-full items-start justify-start text-left">
                <div className="w-full flex flex-col items-start gap-8">
                  <div className="flex justify-between w-full items-start">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-neutral-400 group-hover/card:text-white group-hover/card:border-white/20 transition-all">
                      {service.icon}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
                      {service.label} // 0{idx + 1}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover/card:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-light group-hover/card:text-neutral-400 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center space-y-10">
          <div className="flex justify-center gap-6">
            <button 
              onClick={onViewAllClick}
              className="btn-premium bg-white text-black px-12 py-5 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center gap-3"
            >
              View All Services
            </button>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
            Trusted solutions for both advanced electronics and everyday car care
          </div>
        </div>
      </div>
    </section>
  );
};
