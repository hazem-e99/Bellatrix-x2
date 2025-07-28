import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ChallengesSection from './ChallengesSection';
import SolutionsSection from './SolutionsSection';
import FeaturesSection from './FeaturesSection';
import CaseStudiesSection from './CaseStudiesSection';
import ImplementationSection from './ImplementationSection';
import CTASection from './CTASection';
import ContactModal from '../../Payroll/Refactored/ContactModal';

const RetailParent = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const [retailData, setRetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/Retail.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRetailData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-rotate challenges and solutions
  useEffect(() => {
    if (!retailData) return;

    const challengeInterval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % retailData.challenges.items.length);
    }, 4000);
    
    const solutionInterval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % retailData.solutions.items.length);
    }, 5000);

    return () => {
      clearInterval(challengeInterval);
      clearInterval(solutionInterval);
    };
  }, [retailData]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading retail data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!retailData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection data={retailData.meta} hero={retailData.hero} />
      <StatsSection stats={retailData.stats} />
      
      <ChallengesSection 
        data={retailData.challenges} 
        activeIndex={activeChallenge}
        setActiveIndex={setActiveChallenge}
      />
      
      <SolutionsSection 
        data={retailData.solutions}
        activeIndex={activeSolution}
        setActiveIndex={setActiveSolution}
      />
      
      <FeaturesSection data={retailData.features} />
      <CaseStudiesSection data={retailData.caseStudies} />
      <ImplementationSection data={retailData.implementation} />
      
      <CTASection 
        data={retailData.cta} 
        onContactClick={openContactModal}
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        data={retailData.contactModal}
      />
    </div>
  );
};

export default RetailParent;