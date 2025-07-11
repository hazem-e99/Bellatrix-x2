import React, { useState, useEffect } from 'react';
import IntegrationHero from './IntegrationHero';
import IntegrationTypes from './IntegrationTypes';
import IntegrationBenefits from './IntegrationBenefits';
import IntegrationPlatforms from './IntegrationPlatforms';
import IntegrationCTA from './IntegrationCTA';

const Integration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data/integration.json');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleStartIntegration = () => {
    // Handle integration start logic here
    console.log('Starting integration process...');
    // You could open a modal, navigate to a form, etc.
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-white text-gray-600">
        Error loading integration data. Please try again later.
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
      <IntegrationHero heroContent={data.heroContent} />
      <IntegrationTypes integrationTypes={data.integrationTypes} />
      <IntegrationBenefits integrationBenefits={data.integrationBenefits} />
      <IntegrationPlatforms integrationPlatforms={data.integrationPlatforms} />
      <IntegrationCTA 
        cta={data.cta}
        onStartIntegration={handleStartIntegration} 
      />
    </main>
  );
};

export default Integration; 