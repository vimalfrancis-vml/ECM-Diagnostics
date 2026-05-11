import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

export const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
    aria-label="Contact on WhatsApp"
  >
    <MessageSquare size={24} fill="currentColor" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-in-out whitespace-nowrap font-bold uppercase text-[10px] tracking-widest ml-0 group-hover:ml-3">
      WhatsApp
    </span>
  </motion.a>
);
