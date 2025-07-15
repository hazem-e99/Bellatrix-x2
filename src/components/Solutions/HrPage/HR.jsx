import React, { useState, useEffect } from 'react';
import ContactForm from '../../components/ContactForm';
import Modal from '../../components/Modal';

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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  // Animate benefits
=======
=======
>>>>>>> Stashed changes
  // Contact modal functions
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Animation for Benefits Cards
>>>>>>> Stashed changes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefitIdx((prev) => (prev + 1) % benefits.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< Updated upstream
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
=======
    <>
      <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
        {/* Hero Section */}
        <section className="w-full min-h-screen bg-gradient-to-br from-[#191970] via-black to-blue-700 py-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onDrop={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[8s] ease-in-out pointer-events-none"
              style={{ 
                filter: 'brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg)',
                animation: 'video-enhance 20s ease-in-out infinite',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
            >
              <source src="https://drive.google.com/file/d/1LuHKH3f8D6zYVLy4gdVueWVu1pBjlIlx/view?usp=sharing" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="max-w-3xl mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="accent-bar mx-auto mb-8" aria-hidden="true"></div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl">Modern HR, Payroll & People Management</h1>
            <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg">Automate HR, empower employees, and stay compliant—on one secure platform.</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50 animate-fade-in-up light-section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Why Choose Our HR Solution?</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">Discover the key advantages that make our HR platform the smart choice for modern businesses of all sizes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-[2500ms] animate-fade-in-up ${activeBenefitIdx === idx ? 'scale-105 z-10 shadow-2xl border-blue-400' : 'scale-100'}`}
                  style={{ transition: 'transform 2.5s cubic-bezier(.4,1,.6,1), box-shadow 2.5s, border-color 2.5s' }}
                >
                  <div className="font-bold text-2xl text-blue-900 mb-6">{b.title}</div>
                  <div className="text-gray-700 text-lg">{b.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowDemo(true)}
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 focus:outline-none"
              >
                See a Live Demo
              </button>
            </div>
          </div>
          {/* Live Demo Modal */}
          {showDemo && (
            <div
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              onClick={() => setShowDemo(false)}
            >
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative animate-fade-in-up"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowDemo(false)}
                  className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/70 hover:bg-red-100 shadow-md text-4xl text-gray-700 hover:text-red-600 font-bold transition-all duration-200 focus:outline-none border border-gray-200"
                  aria-label="Close"
                  tabIndex={0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#191970]">
                    <circle cx="12" cy="12" r="11" fill="none" />
                    <line x1="8" y1="8" x2="16" y2="16" />
                    <line x1="16" y1="8" x2="8" y2="16" />
                  </svg>
                </button>
                <div className="flex flex-col items-center">
                  <img
                    src={demoImages[demoIdx]}
                    alt={`Demo ${demoIdx + 1}`}
                    className={`rounded-xl shadow-lg w-full h-96 object-cover mb-8 transition-opacity duration-300 ${imgFade ? 'opacity-100' : 'opacity-0'}`}
                    style={{maxWidth:'100%', maxHeight:'420px'}}
                  />
                  <div className="flex gap-6 items-center justify-center mt-2">
                    <button
                      onClick={prevDemo}
                      className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                      disabled={demoImages.length <= 1}
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.5 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-gray-700 font-semibold">{demoIdx+1} / {demoImages.length}</span>
                    <button
                      onClick={nextDemo}
                      className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                      disabled={demoImages.length <= 1}
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.5 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-2 mt-6">
                    {demoImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDemoChange(idx)}
                        className={`w-3 h-3 rounded-full border-2 ${demoIdx === idx ? 'bg-blue-700 border-blue-700' : 'bg-blue-100 border-blue-300'} transition-all`}
                        aria-label={`Go to slide ${idx+1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Product Features by Module */}
        <section className="py-20 animate-fade-in-up relative" style={{backgroundColor:'#001038'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Product Modules</h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">Our platform is built from modular components to cover every aspect of HR, payroll, and compliance—choose what fits your business best.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {modules.map((m, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border border-white/10 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
                  <div className="font-bold text-xl text-white mb-6">{m.title}</div>
                  <div className="text-gray-300 text-base">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50 animate-fade-in-up light-section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold mb-8 text-blue-800 text-center">
              Who Is It <span className="text-blue-600">For?</span>
            </h2>
            <div className="mx-auto mb-12 w-16 h-1 bg-blue-600 rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {useCases.map((u, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow p-8 flex flex-col items-center text-center border border-gray-200 animate-fade-in-up transition-transform duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-blue-200/40 hover:shadow-2xl cursor-pointer"
                  style={{ willChange: 'transform' }}
                >
                  <div className="font-bold text-xl text-blue-800 mb-6">{u.title}</div>
                  <div className="text-gray-600 text-base">{u.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Pricing Section (Full Details) */}
        <section className="py-20 relative" style={{backgroundColor:'#001038'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Implementation <span className="text-blue-400">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Choose the perfect implementation plan that fits your business needs and budget
              </p>
            </div>
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Basic',
                  description: 'Perfect for small businesses',
                  price: '$2,500',
                  priceNote: 'starting from',
                  features: [
                    'Basic system analysis',
                    'Standard implementation',
                    'Basic testing & QA',
                    '30 days support',
                    'Email support',
                  ],
                  ctaText: 'Get Started',
                  isPopular: false,
                },
                {
                  name: 'Professional',
                  description: 'Ideal for growing companies',
                  price: '$5,000',
                  priceNote: 'starting from',
                  isPopular: true,
                  features: [
                    'Comprehensive analysis',
                    'Custom implementation',
                    'Advanced testing & QA',
                    '90 days support',
                    'Phone & email support',
                    'Training sessions',
                  ],
                  ctaText: 'Get Started',
                },
                {
                  name: 'Enterprise',
                  description: 'For large organizations',
                  price: 'Custom',
                  priceNote: 'pricing',
                  features: [
                    'Enterprise-grade analysis',
                    'Fully customized solution',
                    'Comprehensive testing',
                    'Unlimited support',
                    '24/7 dedicated support',
                    'On-site training',
                  ],
                  ctaText: 'Contact Sales',
                  isPopular: false,
                },
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 ${plan.isPopular ? 'border-blue-400 hover:border-blue-600 transform scale-105' : 'border-white/10 hover:border-blue-300'} transition-all duration-300 relative`}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                    <p className="text-gray-300 mb-8">{plan.description}</p>
                    <div className="mb-8">
                      <span className={`text-4xl font-bold ${plan.isPopular ? 'text-blue-400' : 'text-white'}`}>{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.priceNote}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'} text-white py-3 rounded-lg font-semibold transition-all duration-300`}>
                    {plan.ctaText}
                  </button>
                </div>
              ))}
            </div>
            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">All plans include free consultation and project scoping</p>
              <p className="text-sm text-gray-400">Need a custom solution? <span className="text-blue-400 font-semibold cursor-pointer hover:underline">Contact our team for personalized pricing</span></p>
            </div>
          </div>
        </section>

        {/* Strong CTA Block */}
        <section className="py-20 bg-gray-50 text-center animate-fade-in-up light-section">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-800">Ready to Transform Your HR?</h2>
            <p className="text-lg md:text-xl mb-12 text-gray-600">Start your free trial or book a personalized demo with our experts today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openContactModal}
                className="inline-block border-2 border-blue-700 hover:border-blue-400 text-blue-700 hover:text-blue-900 font-semibold rounded-lg px-8 py-4 transition-all duration-200 shadow-lg text-lg hover:bg-blue-100 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white/90 animate-fade-in-up light-section">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-blue-100 pb-6">
                  <button
                    className="w-full text-left flex justify-between items-center text-lg font-medium text-blue-900 focus:outline-none"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    aria-expanded={openFAQ === idx}
                  >
                    <span>{faq.q}</span>
                    <span className={`ml-4 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openFAQ === idx && (
                    <div className="mt-4 text-gray-700 animate-fade-in-up">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
      </main>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Schedule Your Consultation"
        subtitle="Let's discuss your NetSuite consulting needs"
      >
        <ContactForm />
      </Modal>

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
