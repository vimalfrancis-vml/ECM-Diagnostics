import React, { useState } from 'react';
import { motion } from 'motion/react';

// UI Components
import { WhatsAppButton } from './components/ui/WhatsAppButton';

// Modals
import { BookingModal } from './components/modals/BookingModal';
import { MobileMenu } from './components/modals/MobileMenu';
import { ServicesDirectoryModal } from './components/modals/ServicesDirectoryModal';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { BrandShowcase } from './components/sections/BrandShowcase';
import { Services } from './components/sections/Services';
import { Specialization } from './components/sections/Specialization';
import { Stats } from './components/sections/Stats';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';
import { FinalCTA } from './components/sections/FinalCTA';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div 
      className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative overflow-x-hidden"
    >
      {/* Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <ServicesDirectoryModal 
        isOpen={isAllServicesOpen} 
        onClose={() => setIsAllServicesOpen(false)}
        onBook={() => {
          setIsAllServicesOpen(false);
          setIsBookingOpen(true);
        }}
      />

      {/* Background Media */}
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

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen lg:px-16 md:px-10 px-4 font-sans">
        <Navbar 
          isMobileMenuOpen={isMobileMenuOpen} 
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />

        <Hero onBookClick={() => setIsBookingOpen(true)} />

        <BrandShowcase />

        <Services onViewAllClick={() => setIsAllServicesOpen(true)} />

        <Specialization />

        <Stats />

        <Reviews />

        <Contact />

        <FinalCTA onBookClick={() => setIsBookingOpen(true)} />

        <Footer />

        <WhatsAppButton />
      </div>
    </div>
  );
}
