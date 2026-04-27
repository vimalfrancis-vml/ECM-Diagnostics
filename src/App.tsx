/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, ArrowRight, Activity, Cpu, Key, Monitor, Settings, Wrench, Star, Users, Clock, MapPin, Trophy, CheckCircle, X, MessageSquare, Menu } from 'lucide-react';

const CONTACT_PHONE = "+91 80899 66229";
const WHATSAPP_NUMBER = "918089966229";

const BRANDS = [
  { name: 'BMW' },
  { name: 'Audi' },
  { name: 'Mercedes-Benz' },
  { name: 'Volkswagen' },
  { name: 'Skoda' },
  { name: 'Ford' },
];

const BRANDS_EXTENDED = [...BRANDS, ...BRANDS].map((brand, i) => ({ ...brand, id: i }));

function BrandTicker() {
  return (
    <div className="relative flex overflow-x-hidden border-b border-white/5 pb-10">
      <motion.div 
        className="flex whitespace-nowrap gap-12 md:gap-20 lg:gap-32 items-center py-8 smooth-render"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {BRANDS_EXTENDED.map((brand) => (
          <div 
            key={brand.id} 
            className="flex items-center gap-6 md:gap-10 opacity-40 hover:opacity-100 transition-all duration-700 cursor-default group"
          >
            <span className="text-[18px] md:text-[28px] lg:text-[40px] font-black uppercase tracking-[0.2em] text-white/5 group-hover:text-white/40 transition-all duration-700 font-display silver-glow">
              {brand.name}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const PremiumCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`premium-glow-border group/card transition-all duration-300 rounded-xl overflow-hidden ${className}`}>
    <div className="relative z-10 px-8 py-10 h-full w-full flex flex-col items-center justify-center backdrop-blur-[1px] bg-neutral-900/40 group-hover/card:bg-neutral-900/60 transition-colors duration-300">
      {children}
    </div>
  </div>
);

const PremiumCharacterReveal = ({ text, className, delayOffset = 0 }: { text: string, className?: string, delayOffset?: number }) => {
  const characters = text.split("");
  
  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.4,
            delay: delayOffset + i * 0.04,
            ease: "easeOut"
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', time: '' });
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Service Booking Request*\n\n` +
                   `*Name:* ${bookingForm.name}\n` +
                   `*Phone:* ${bookingForm.phone}\n` +
                   `*Desired Time:* ${bookingForm.time}\n\n` +
                   `_Sent via Joshy's ECM Technical Division_`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsBookingOpen(false);
    setBookingForm({ name: '', phone: '', time: '' });
  };

  return (
    <div 
      className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative overflow-x-hidden"
    >
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-neutral-900 border border-white/10 p-8 md:p-12 shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-500">Technical Scheduling // 01</div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">Book Your Service</h2>
                </div>

                <form onSubmit={handleWhatsAppBooking} className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={bookingForm.name}
                      onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                      placeholder="ENTER NAME"
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={bookingForm.phone}
                      onChange={e => setBookingForm({...bookingForm, phone: e.target.value})}
                      placeholder="ENTER PHONE"
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Desired Time Slot</label>
                    <input 
                      required
                      type="text" 
                      value={bookingForm.time}
                      onChange={e => setBookingForm({...bookingForm, time: e.target.value})}
                      placeholder="E.G. MONDAY 10:00 AM"
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-premium w-full bg-white text-black py-6 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  >
                    <MessageSquare size={16} />
                    Confirm via WhatsApp
                  </button>
                </form>

                <p className="text-center font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                  Secure instant booking via global WhatsApp interface
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
<AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-screen w-[80%] max-w-sm bg-neutral-900 border-l border-white/10 p-8 flex flex-col pt-24"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col gap-8">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'Services', href: '#services' },
                  { name: 'Specialization', href: '#specialization' },
                  { name: 'Contact', href: '#footer' }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto space-y-8">
                <div className="h-px bg-white/10" />
                <div className="space-y-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">Fast Connect</div>
                  <a 
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 text-white text-lg font-bold"
                  >
                    <Phone size={18} className="text-neutral-500" />
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAllServicesOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAllServicesOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-auto max-h-[90vh] bg-neutral-900 border border-white/10 p-6 md:p-12 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <button 
                onClick={() => setIsAllServicesOpen(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

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
                        <div className="p-3 bg-white/5 rounded-lg text-neutral-400 group-hover:text-white transition-colors">
                          {s.icon}
                        </div>
                        <h4 className="font-bold uppercase tracking-tight text-sm">{s.title}</h4>
                      </div>
                      <p className="text-neutral-500 text-xs leading-relaxed group-hover:text-neutral-400 transition-colors">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Total capabilities: 100+ diagnostic protocols</p>
                <button 
                  onClick={() => { setIsAllServicesOpen(false); setIsBookingOpen(true); }}
                  className="btn-premium bg-white text-black px-8 py-4 font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-neutral-200 transition-all"
                >
                  Book Any Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 overflow-hidden smooth-render bg-black">
        <motion.video 
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 0.6 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          autoPlay 
          loop 
          muted 
          playsInline 
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover scale-[1.1] md:scale-105 md:object-center object-[25%_center] pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black md:via-black/50 md:from-black/90" />
        <div className="absolute inset-0 bg-grid opacity-10 md:opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen lg:px-16 md:px-10 px-4 font-sans">
        {/* Navigation bar code... */}
        <nav className="h-[80px] md:h-[100px] flex items-center justify-between border-b border-white/10 shrink-0 relative z-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-neutral-400 hover:text-white transition-colors p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
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

        {/* Hero Section - Balanced for Mobile */}
        <section className="flex-grow flex flex-col justify-center max-w-5xl mx-auto text-center py-12 md:py-20 lg:py-24">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-neutral-500 mb-4 md:mb-8 backdrop-blur-sm inline-block px-3 md:px-4 py-1.5 border border-white/10 bg-white/5 rounded-full antialiased"
              >
                Professional Diagnostics & Repair
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] md:leading-[0.9] tracking-tighter uppercase flex flex-col items-center gap-2 md:gap-4 font-display">
                <div className="flex flex-col items-center">
                  <PremiumCharacterReveal 
                    text="Joshy’s ECM" 
                    className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    delayOffset={0.5}
                  />
                  <PremiumCharacterReveal 
                    text="Diagnostic Service" 
                    className="text-neutral-500 font-medium"
                    delayOffset={1.2}
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
                  onClick={() => setIsBookingOpen(true)}
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

        {/* Infinite Marquee Brand Showcase - Professional Hardware Edition */}
        <section className="pt-24 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-12 px-6">
            <h2 className="font-mono text-[10px] uppercase font-bold tracking-[0.6em] text-neutral-500">
              Specialized In Premium Brands // Global Tier
            </h2>
          </div>
          <BrandTicker />
        </section>

        {/* Services Section */}
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
                  onClick={() => setIsAllServicesOpen(true)}
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

        {/* About / Expertise Section */}
        <section id="specialization" className="py-20 md:py-32 border-t border-white/10 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8 md:space-y-10"
              >
                <div className="space-y-4">
                  <div className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.5em] text-neutral-500">
                    Precision & Mastery
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
                    Experts in<br />Automotive Electronics
                  </h2>
                  <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed">
                    Specialized in advanced ECM diagnostics, electronic repairs, and precision vehicle solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Focused on modern car electronic systems",
                    "Experienced in luxury vehicle diagnostics",
                    "Advanced tools for accurate fault detection",
                    "Reliable and cost-effective service approach"
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="mt-1 p-1 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-500 group-hover:bg-white group-hover:text-black transition-all">
                        <CheckCircle size={12} />
                      </div>
                      <span className="text-[13px] uppercase font-bold tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
                  Delivering precision and trust in every service
                </div>
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

        {/* Stats / Achievement Section */}
        <section className="py-24 border-t border-white/10 relative z-10 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { value: '2500+', label: 'Cars Diagnosed' },
                { value: '2200+', label: 'Happy Customers' },
                { value: '15+', label: 'Years of Experience' },
                { value: '800+', label: 'Luxury Vehicles Serviced' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
              Built on experience, precision, and customer satisfaction
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-32 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <div className="font-mono text-[10px] uppercase font-bold tracking-[0.5em] text-neutral-500">Global Standards</div>
              <h2 className="text-[48px] md:text-[64px] font-black uppercase tracking-tighter leading-tight">
                Trusted by<br />Car Owners
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light">
                Consistently delivering accurate diagnostics and reliable service for all types of vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  quote: "Excellent service for ECM repairs. Joshy solved a complex scanning issue that even the authorized service center couldn't diagnose properly.", 
                  author: "Akshay Babu",
                  context: "Mahindra Owner"
                },
                { 
                  quote: "Very professional approach to diagnostic work. They fixed my engine lagging issue by recalibrating the ECM. High-tech equipment used.", 
                  author: "Suresh Kumar",
                  context: "Maruti Owner"
                },
                { 
                  quote: "The best place in Thrissur for advanced automotive electronics. Fast diagnostic and transparent pricing. Top-notch expertise.", 
                  author: "Rahul VP",
                  context: "Toyota Owner"
                },
                { 
                  quote: "Professional work for coding and diagnostic solutions. Helped me restore my car's performance after an electrical failure.", 
                  author: "Jithin Jose",
                  context: "Premium Client"
                }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <PremiumCard className="items-start justify-start text-left">
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-white text-white" />)}
                      </div>
                      <p className="text-xl font-bold uppercase tracking-tight leading-snug">
                        "{review.quote}"
                      </p>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        {review.author} // {review.context}
                      </div>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center space-y-8">
              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Star size={16} className="fill-white text-white" />
                </div>
                <span className="text-2xl font-black italic">4.7/5★</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Top Rated on Google</span>
              </div>
              <div>
                <a 
                  href="https://share.google/f81fJtTGt81TTzUMY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-white hover:text-neutral-400 transition-colors border-b border-white/20 pb-2"
                >
                  Read All Google Reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                    { icon: <Phone />, label: "Phone", value: "+91 80899 66229" },
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

                <div className="flex gap-6">
                  <a 
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                    className="btn-premium bg-white text-black px-10 py-4 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center gap-3"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://share.google/spZ1xI7duA9JHAUHM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-premium border border-white/20 px-10 py-4 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all text-center inline-block"
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
                      style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }} 
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

        {/* Final CTA Section */}
        <section className="py-40 border-t border-white/10 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-150 opacity-10" />
          <div className="max-w-4xl mx-auto text-center space-y-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="font-mono text-[11px] uppercase font-bold tracking-[0.6em] text-neutral-400 bg-white/5 border border-white/10 px-6 py-2 rounded-full inline-block">
                Start Your Diagnostic
              </div>
              <h2 className="text-[56px] md:text-[84px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.85]">
                Get Your Car<br />Checked Today
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light">
                Accurate diagnostics and expert solutions for your vehicle’s performance and safety.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-black px-12 py-6 font-bold uppercase text-[12px] tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <Calendar size={14} />
                Book Service
              </button>
              <a 
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="border border-white/30 backdrop-blur-md px-12 py-6 font-bold uppercase text-[12px] tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
              Fast, reliable, and professional service you can trust
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="py-16 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white">
                Joshy’s <span className="text-neutral-500">ECM</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500">
                Advanced Car Diagnostics & ECM Diagnostics Service
              </p>
            </div>

            <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#specialization" className="hover:text-white transition-colors">Specialization</a>
              <a href="mailto:contact@joshyecom.com" className="hover:text-white transition-colors underline underline-offset-4">Get in Touch</a>
            </div>

            <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-600">
              © 2024 TECHNICAL SERVICE DIVISION // ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
