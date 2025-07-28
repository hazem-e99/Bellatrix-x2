import React, { useState, useEffect } from "react";
import Modal from '../../../components/Modal';
import ContactForm from "../../ContactForm";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ChallengeSolutionSection from "./ChallengeSolutionSection";
import CaseStudiesSection from "./CaseStudiesSection";
import ProcessSection from "./ProcessSection";
import CtaSection from "./CtaSection";
import manufacturingUrl from "/data/manufacturing.json?url";

const Manufacturing = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(manufacturingUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPageData(data);
      } catch (error) {
        console.error("Error loading page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  if (loading || !pageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        data={pageData.hero} 
        openContactModal={openContactModal} 
      />
      
      <StatsSection data={pageData.stats} />
      
      <ChallengeSolutionSection 
        challenges={pageData.challenges} 
        solutions={pageData.solutions} 
      />
      
      <CaseStudiesSection data={pageData.caseStudies} />
      
      <ProcessSection data={pageData.implementation} />
      
      <CtaSection 
        data={pageData.cta} 
        openContactModal={openContactModal} 
      />

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

export default Manufacturing;