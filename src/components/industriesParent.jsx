import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './Industries/Manufacturing/HeroSection';
import StatsSection from './Industries/Manufacturing/StatsSection';
import ChallengeSolutionSection from './Industries/Manufacturing/ChallengeSolutionSection';
import SolutionsSection from './Industries/Retail/SolutionsSection';
import FeaturesSection from './Industries/Retail/FeaturesSection';
import CaseStudiesSection from './Industries/Manufacturing/CaseStudiesSection';
import ImplementationSection from './Industries/Retail/ImplementationSection';
import CTASection from './Industries/Retail/CTASection';
import ContactModal from './Payroll/Refactored/ContactModal';
import ProcessSection from './Industries/Manufacturing/ProcessSection';

const IndustriesParent = () => {
  const { serviceType } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Determine which JSON file to load based on route
 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Ensure serviceType exists and is lowercase for comparison
      if (!serviceType) {
        throw new Error('No service type specified');
      }

      const normalizedServiceType = serviceType.toLowerCase();
      const validServices = ['retail', 'manufacturing', 'hr', 'payroll']; // Add all valid services
      
      if (!validServices.includes(normalizedServiceType)) {
        throw new Error(`Service type '${serviceType}' is not supported`);
      }

      // Construct filename with proper capitalization
      const filename = `${normalizedServiceType.charAt(0).toUpperCase() + normalizedServiceType.slice(1)}.json`;
      const response = await fetch(`/data/${filename}`);

      
      if (!response.ok) {
        throw new Error(`Failed to fetch data (HTTP ${response.status})`);
      }

      const data = await response.json();
      console.log(data);
      
      setServiceData(data);
      
    } catch (err) {
      setError(err.message);
      console.error('Data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [serviceType]);
  // Auto-rotate challenges and solutions if they exist in the data
  useEffect(() => {
    if (!serviceData) return;

    let challengeInterval, solutionInterval;

    if (serviceData.challenges?.items) {
      challengeInterval = setInterval(() => {
        setActiveChallenge((prev) => (prev + 1) % serviceData.challenges.items.length);
      }, 4000);
    }
    
    if (serviceData.solutions?.items) {
      solutionInterval = setInterval(() => {
        setActiveSolution((prev) => (prev + 1) % serviceData.solutions.items.length);
      }, 5000);
    }

    return () => {
      challengeInterval && clearInterval(challengeInterval);
      solutionInterval && clearInterval(solutionInterval);
    };
  }, [serviceData]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading {serviceType} data...</p>
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

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>No data available for {serviceType}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        data={serviceData.meta || serviceData.hero} 
        hero={serviceData.hero} 
        openContactModal={openContactModal}
      />
      
      {serviceData.stats && <StatsSection stats={serviceData.stats} />}
      
      {/* Render either combined or separate challenge/solution sections based on data structure */}
      {serviceData.challenges && serviceData.solutions && serviceData.challenges.items && serviceData.solutions.items ? (
        <>
          <ChallengesSection 
            data={serviceData.challenges} 
            activeIndex={activeChallenge}
            setActiveIndex={setActiveChallenge}
          />
          <SolutionsSection 
            data={serviceData.solutions}
            activeIndex={activeSolution}
            setActiveIndex={setActiveSolution}
          />
        </>
      ) : serviceData.challenges && serviceData.solutions ? (
        <ChallengeSolutionSection 
          challenges={serviceData.challenges} 
          solutions={serviceData.solutions} 
        />
      ) : null}
      
      {serviceData.features && <FeaturesSection data={serviceData.features} />}
      {serviceData.caseStudies && <CaseStudiesSection data={serviceData.caseStudies} />}
      
      {serviceData.implementation && (
        serviceData.implementation.steps ? (
          <ImplementationSection data={serviceData.implementation} />
        ) : (
          <ProcessSection data={serviceData.implementation} />
        )
      )}
      
      <CTASection 
        data={serviceData.cta} 
        onContactClick={openContactModal}
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        data={serviceData.contactModal}
      />
    </div>
  );
};

export default IndustriesParent;