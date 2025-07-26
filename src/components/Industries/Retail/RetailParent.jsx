import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ChallengesSection from './ChallengesSection';
import SolutionsSection from './SolutionsSection';
import FeaturesSection from './FeaturesSection';
import CaseStudiesSection from './CaseStudiesSection';
import ImplementationSection from './ImplementationSection';
import CTASection from './CTASection';
import ContactModal from './ContactModal';

const Retail = () => {
  // State management
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

  // Auto-rotation effects
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setActiveChallenge(prev => (prev + 1) % retailData.challenges.items.length);
      }, 4000),
      setInterval(() => {
        setActiveSolution(prev => (prev + 1) % retailData.solutions.items.length);
      }, 5000)
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StatsSection stats={retailData.stats} />
      
      <ChallengesSection 
        activeIndex={activeChallenge}
        onSelect={setActiveChallenge}
      />
      
      <SolutionsSection 
        activeIndex={activeSolution} 
        onSelect={setActiveSolution}
      />
      
      <FeaturesSection />
      <CaseStudiesSection />
      <ImplementationSection />
      
      <CTASection 
        onContactClick={() => setIsContactModalOpen(true)} 
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Retail;