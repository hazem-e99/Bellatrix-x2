import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../ContactForm';
import Modal from '../../Modal';

// Import child components
import NetSuiteConsultingHero from './NetSuiteConsultingHero';
import NetSuiteConsultingServices from './NetSuiteConsultingServices';
import NetSuiteConsultingIndustries from './NetSuiteConsultingIndustries';
import NetSuiteConsultingProcess from './NetSuiteConsultingProcess';
import NetSuiteConsultingBenefits from './NetSuiteConsultingBenefits';
import NetSuiteConsultingCTA from './NetSuiteConsultingCTA';

const NetSuiteConsulting = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data/netsuite-consulting.json');
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

  // Shared event handlers
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  const handleIndustryClick = (link) => {
    navigate(link);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 text-gray-600">
        Error loading consulting data. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <NetSuiteConsultingHero heroContent={data.heroContent} />

      {/* Consulting Services Section */}
      <NetSuiteConsultingServices 
        consultingServices={data.consultingServices}
      />

      {/* Industry Expertise Section */}
      <NetSuiteConsultingIndustries 
        industries={data.industries}
        onIndustryClick={handleIndustryClick} 
      />

      {/* Consulting Process Section */}
      <NetSuiteConsultingProcess 
        consultingProcess={data.consultingProcess}
        onStartConsulting={openContactModal} 
      />

      {/* Benefits Section */}
      <NetSuiteConsultingBenefits benefits={data.benefits} />

      {/* CTA Section */}
      <NetSuiteConsultingCTA 
        cta={data.cta}
        onScheduleConsultation={openContactModal} 
      />

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Schedule Your Consultation"
        subtitle="Let's discuss your NetSuite consulting needs"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default NetSuiteConsulting;