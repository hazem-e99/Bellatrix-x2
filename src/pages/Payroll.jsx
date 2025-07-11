import React, { useState } from 'react';
import PayrollHero from '../components/Payroll/PayrollHero';
import PayrollPainPoints from '../components/Payroll/PayrollPainPoints';
import PayrollHowItWorks from '../components/Payroll/PayrollHowItWorks';
import PayrollStepper from '../components/Payroll/PayrollStepper';
// import PayrollFeatures from '../components/Payroll/PayrollFeatures';
// import PayrollDemoModal from '../components/Payroll/PayrollDemoModal';
// import PayrollWhyPerfect from '../components/Payroll/PayrollWhyPerfect';
// import PayrollFAQ from '../components/Payroll/PayrollFAQ';
// import PayrollCTA from '../components/Payroll/PayrollCTA';
import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';

export default function PayrollPage() {
  // Demo Modal states
  const [showDemo, setShowDemo] = useState(false);
  const [demoIdx, setDemoIdx] = useState(0);
  // Contact Modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const demoImages = [
    '/images/Hr/hrS1.png',
    '/images/Hr/hrS2.jpeg',
  ];
  const [imgFade, setImgFade] = useState(true);

  const handleDemoChange = (newIdx) => {
    setImgFade(false);
    setTimeout(() => {
      setDemoIdx(newIdx);
      setImgFade(true);
    }, 200);
  };
  const nextDemo = () => handleDemoChange((demoIdx + 1) % demoImages.length);
  const prevDemo = () => handleDemoChange((demoIdx - 1 + demoImages.length) % demoImages.length);

  // Contact modal functions
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Pain Points data
  const painPoints = [
    { text: 'Delayed salary processing and errors' },
    { text: 'Manual tax calculations and compliance risks' },
    { text: 'Lack of visibility and transparency for employees' },
    { text: 'Difficulty scaling payroll operations across geographies' },
    { text: 'Disconnected systems leading to data silos' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full light-section">
      <PayrollHero />
      <PayrollPainPoints painPoints={painPoints} />
      <PayrollHowItWorks />
      <section className="py-20 bg-white light-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Payroll System Built for All Industries
            </h2>
            <p className="text-xl text-gray-600">
              Streamline your entire payroll lifecycle — from onboarding to
              salary disbursement — with a secure, intuitive platform.
            </p>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Core Workflow
          </h3>
          <PayrollStepper />
        </div>
      </section>
      {/* Add other sections here as you refactor them out */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Contact Us"
        subtitle="Let's discuss your payroll needs"
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
} 