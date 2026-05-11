import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', time: '' });

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
    onClose();
    setBookingForm({ name: '', phone: '', time: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-neutral-900 border border-white/10 p-8 md:p-12 shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <button onClick={onClose} className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors">
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
                  <input required type="text" value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} placeholder="ENTER NAME" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Phone Number</label>
                  <input required type="tel" value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})} placeholder="ENTER PHONE" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Desired Time Slot</label>
                  <input required type="text" value={bookingForm.time} onChange={e => setBookingForm({...bookingForm, time: e.target.value})} placeholder="E.G. MONDAY 10:00 AM" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-wider focus:border-white/40 focus:bg-white/10 transition-all outline-none" />
                </div>
                <button type="submit" className="btn-premium w-full bg-white text-black py-6 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <MessageSquare size={16} /> Confirm via WhatsApp
                </button>
              </form>
              <p className="text-center font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">Secure instant booking via global WhatsApp interface</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
