import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_PHONE } from '../../constants';
import { PremiumCard } from '../ui/PremiumCard';

export const Contact = () => {
  return (
    <section id="contact-info" className="py-32 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-[10px] uppercase font-bold tracking-[0.5em] text-neutral-500">Direct Support</div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase tracking-tighter leading-tight">
                Get in Touch
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: <MapPin />, label: "Location", value: "Priyadharshini Nagar, Vellanikkara, Thrissur, Kerala" },
                { icon: <Phone />, label: "Phone", value: CONTACT_PHONE },
                { icon: <Clock />, label: "Working Hours", value: "Mon – Sat: 10:00 AM – 8:00 PM (Sun: Closed)" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="p-3 bg-white/5 border border-white/10 text-neutral-500">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">{item.label}</div>
                    <div className="text-lg font-bold uppercase tracking-wider text-white leading-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="btn-premium border border-white/30 backdrop-blur-md px-10 py-5 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a 
                href="https://share.google/spZ1xI7duA9JHAUHM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium border border-white/20 px-10 py-5 md:py-6 font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-white/10 transition-all text-center inline-block w-full sm:w-auto"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <PremiumCard className="h-full !p-0">
              <div className="w-full h-[300px] md:h-[500px] bg-neutral-900 border border-white/5 rounded-lg overflow-hidden relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(1) hue-rotate(180deg)' }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Joshy's+ECM+Diagnostic+Service+Vellanikkara+Thrissur&output=embed"
                ></iframe>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Technical Location Tracking</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white">Thrissur Technical Service Division</div>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  );
};
