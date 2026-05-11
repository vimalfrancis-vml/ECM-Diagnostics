import React from 'react';
import { BrandTicker } from '../ui/BrandTicker';

export const BrandShowcase = () => {
  return (
    <section className="pt-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 px-6">
        <h2 className="font-mono text-[10px] uppercase font-bold tracking-[0.6em] text-neutral-500">
          Specialized In Premium Brands // Global Tier
        </h2>
      </div>
      <BrandTicker />
    </section>
  );
};
