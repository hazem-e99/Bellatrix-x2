import React, { useState } from 'react';
import ContactForm from '../../ContactForm';
import HeroSection from './HeroSection';
import PainPointsSection from './PainPointsSection';
import HowItWorksSection from './HowItWorksSection';
import CoreWorkflowStepper from './CoreWorkflowStepper';
import KeyFeaturesSection from './KeyFeaturesSection';
import WhyPerfectSection from './WhyPerfectSection';
import FAQSection from './FAQSection';
import ContactCTASection from './ContactCTASection';
import ContactModal from './ContactModal';

export default function PayrollParent() {
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
    {
      text: 'Delayed salary processing and errors',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'Manual tax calculations and compliance risks',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'Lack of visibility and transparency for employees',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      text: 'Difficulty scaling payroll operations across geographies',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'Disconnected systems leading to data silos',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];
  // Features data
  const features = [
    {
      title: 'Automated Payroll Runs',
      desc: 'Set up payroll once and let it run automatically, with full audit trails.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Tax & Compliance',
      desc: 'Stay compliant with local tax laws and generate reports in one click.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Employee Self-Service',
      desc: 'Employees access payslips, tax docs, and leave balances anytime.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Analytics',
      desc: 'Get instant insights into payroll costs, trends, and forecasts.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Country Support',
      desc: 'Run payroll for teams in multiple countries, currencies, and languages.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrations',
      desc: 'Connect with HR, time tracking, and accounting tools you already use.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];
  // FAQs data
  const faqs = [
    {
      question: 'Does this system support global payroll?',
      answer:
        'Yes, we support multi-country and multi-currency payroll operations.',
    },
    {
      question: 'Can it integrate with our existing HR system?',
      answer: 'Absolutely, we offer seamless integrations and open APIs.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most companies are onboarded in less than 2 weeks.',
    },
    {
      question: 'Is the platform secure?',
      answer:
        'Yes, we use bank-level encryption and comply with global security standards to protect your sensitive payroll data.',
    },
    {
      question: 'Can employees access their payroll information?',
      answer:
        'Yes, through our employee self-service portal, staff can securely access their payslips, tax documents, and payment history.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full ">
      <HeroSection />
      <PainPointsSection painPoints={painPoints} />
      <HowItWorksSection />
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
          <CoreWorkflowStepper />
        </div>
      </section>
      <KeyFeaturesSection
        features={features}
        demoImages={demoImages}
        showDemo={showDemo}
        setShowDemo={setShowDemo}
        demoIdx={demoIdx}
        setDemoIdx={setDemoIdx}
        imgFade={imgFade}
        setImgFade={setImgFade}
        nextDemo={nextDemo}
        prevDemo={prevDemo}
        handleDemoChange={handleDemoChange}
      />
      <WhyPerfectSection />
      <FAQSection faqs={faqs} />
      <ContactCTASection openContactModal={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal}>
        <ContactForm />
      </ContactModal>
    </div>
  );
} 