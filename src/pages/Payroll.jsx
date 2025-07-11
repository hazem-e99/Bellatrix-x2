import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Fetch data from local JSON file
  useEffect(() => {
    fetch('data/payroll.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-2xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen w-full light-section">
      <PayrollHero hero={data.hero} />
      <PayrollPainPoints painPoints={data.painPoints} />
      <PayrollHowItWorks howItWorks={data.howItWorks} />
      <section className="py-20 bg-white light-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {data.workflowTitle || 'Payroll System Built for All Industries'}
            </h2>
            <p className="text-xl text-gray-600">
              {data.workflowSubtitle || 'Streamline your entire payroll lifecycle — from onboarding to salary disbursement — with a secure, intuitive platform.'}
            </p>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {data.workflowStepTitle || 'Core Workflow'}
          </h3>
          <PayrollStepper stepper={data.stepper} />
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