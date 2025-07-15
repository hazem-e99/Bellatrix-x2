import React from 'react';
import HeroSection from './HeroSection';
import DevelopmentProcess from './DevelopmentProcess';
import CTASection from './CTASection';

const Customization = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
      <HeroSection />
      <DevelopmentProcess />
      <CTASection />
    </main>
  );
};

export default Customization; 