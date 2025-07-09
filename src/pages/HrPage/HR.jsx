import React, { useState, useEffect } from 'react';

// Placeholder assets
const benefits = [
  { icon: '💸', title: 'Payroll Automation', desc: 'Automate payroll processing, tax calculations, and compliance with ease.' },
  { icon: '📂', title: 'Centralized Employee Data', desc: 'All employee records, contracts, and documents in one secure place.' },
  { icon: '🚀', title: 'Streamlined Onboarding', desc: 'Digitize onboarding for new hires with checklists and e-signatures.' },
  { icon: '📊', title: 'Real-Time Performance Tracking', desc: 'Monitor goals, feedback, and reviews in real time.' },
  { icon: '⏰', title: 'Attendance & Leave', desc: 'Track attendance, shifts, and leave requests with built-in workflows.' },
  { icon: '🔒', title: 'Data Security', desc: 'Enterprise-grade security and GDPR compliance.' },
];

const modules = [
  { icon: '👥', title: 'Employee Management', desc: 'Manage profiles, roles, and lifecycle events.' },
  { icon: '⏱️', title: 'Attendance', desc: 'Automated time tracking, leave, and shift management.' },
  { icon: '💰', title: 'Payroll', desc: 'End-to-end payroll with tax, benefits, and payslip generation.' },
  { icon: '🧑‍💼', title: 'Recruitment', desc: 'Job postings, applicant tracking, and interview scheduling.' },
  { icon: '⚖️', title: 'Compliance', desc: 'Built-in legal, tax, and labor compliance for multiple regions.' },
];

const useCases = [
  { title: 'Startups', desc: 'Scale your team fast with automated HR and payroll.' },
  { title: 'Enterprises', desc: 'Centralize HR operations across multiple locations.' },
  { title: 'Remote Teams', desc: 'Seamless onboarding, time tracking, and compliance for distributed teams.' },
  { title: 'SMBs', desc: 'Affordable, all-in-one HR for growing businesses.' },
];

const faqs = [
  { q: 'Is my data secure?', a: 'Yes. We use enterprise-grade encryption, regular audits, and are GDPR compliant.' },
  { q: 'Can I integrate with my payroll/accounting software?', a: 'Yes. We offer integrations with major payroll, accounting, and ERP systems.' },
  { q: 'How long does onboarding take?', a: 'Most customers are up and running in under a week with our guided onboarding.' },
  { q: 'Is there a free trial?', a: 'Yes, you can start with a 14-day free trial. No credit card required.' },
  { q: 'Do you offer multi-language support?', a: 'Yes, our platform supports English, Arabic, and French.' },
];

export default function HRSolution() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeBenefitIdx, setActiveBenefitIdx] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [demoIdx, setDemoIdx] = useState(0);
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

  // Animate benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefitIdx((prev) => (prev + 1) % benefits.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800 light-section">

      {/* Hero Section */}
      <section className="w-full min-h-screen relative overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center bg-black">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              document.getElementById('fallback-bg').style.display = 'block';
            }}
            className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[8s] ease-in-out pointer-events-none"
            style={{
              filter: 'brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg)',
              animation: 'video-enhance 20s ease-in-out infinite',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            <source src="/videos/hr-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            id="fallback-bg"
            className="w-full h-full bg-cover bg-center hidden"
            style={{ backgroundImage: 'url(/images/payrollHeroSection.jpg)' }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="accent-bar mx-auto mb-4" aria-hidden="true"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
            Modern HR, Payroll & People Management
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            Automate HR, empower employees, and stay compliant—on one secure platform.
          </p>
        </div>
      </section>

      {/* Animation Style */}
      <style>{`
        @keyframes video-enhance {
          0%, 100% {
            filter: brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg);
            transform: scale(1.05);
          }
          50% {
            filter: brightness(0.8) contrast(1.3) saturate(1.4) hue-rotate(15deg);
            transform: scale(1.08);
          }
        }
      `}</style>

      {/* باقي السكاشن زي benefits, modules, useCases, pricing, etc. */}
      {/* لو حابب أضيفهم كلهم كمان في نفس الملف قولّي أكمل لك بقية الصفحة بالكامل. */}
    </main>
  );
}
