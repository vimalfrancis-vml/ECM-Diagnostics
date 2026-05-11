import React from 'react';
import { motion } from 'motion/react';

export const Stats = () => {
  return (
    <section className="py-24 border-t border-white/10 relative z-10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: '2500+', label: 'Cars Diagnosed' },
            { value: '2200+', label: 'Happy Customers' },
            { value: '10+', label: 'Years of Experience' },
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
  );
};
