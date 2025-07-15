
import React, { useState } from 'react';
import ContactForm from '../../ContactForm';
import Modal from '../../Modal';

const Customization = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    closeContactModal();
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
      {/* Hero Section - Same as BellatrixSupportHero */}
      <div
        className="py-12 relative overflow-hidden animate-background-glow"
        style={{
          backgroundColor: '#001038',
          padding: "150px 0 50px",
          width: "100%",
          color: "white",
          fontSize: "15px",
          lineHeight: "24px",
          fontFamily: '"Gotham A", "Gotham B"',
          animation: 'background-glow 12s ease-in-out infinite'
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-full blur-xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 rounded-full blur-lg opacity-20"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
                <pattern id="customizationGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#customizationGrid)" />
              </svg>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            padding: "0 7.5px",
          }}
          className="relative z-10"
        >
          <div style={{ padding: "40px 15px 20px" }}>
            {/* Title */}
            <h1
              style={{
                fontWeight: "700",
                fontSize: "50px",
                lineHeight: "50px",
                textAlign: "center",
                letterSpacing: "-1px",
                margin: "0 0 13px",
              }}
              className="text-white animate-slide-up"
            >
            NetSuite Customization & Development
          </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                textAlign: "center",
                margin: 0,
              }}
              className="text-gray-300 animate-fade-in"
            >
              Tailor NetSuite to fit your unique business processes and requirements with our expert customization services.
            </p>

            {/* CTA Button */}
            <div style={{ textAlign: "center" }}>
              <button
                onClick={openContactModal}
                className="group relative inline-block min-w-[180px] min-h-[56px] font-bold text-sm uppercase leading-5 rounded-md px-4 py-4 mt-8 mb-0 no-underline transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-2 border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Talk to an Expert
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes background-glow {
            0%, 100% { 
              background-color: #001038; 
            }
            25% { 
              background-color: #001245; 
            }
            50% { 
              background-color: #001038; 
            }
            75% { 
              background-color: #000e30; 
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out 0.3s both;
          }
          
          .animate-background-glow {
            animation: background-glow 12s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Services Overview - Light */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our <span className="text-blue-600">Customization Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your NetSuite experience with our comprehensive customization solutions 
              designed to meet your unique business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Workflows",
                description: "Design automated workflows that match your business processes and improve operational efficiency",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                title: "Custom Fields & Forms",
                description: "Create custom fields and forms to capture your specific data requirements seamlessly",
                gradient: "from-blue-500 to-blue-700"
              },
              {
                title: "SuiteScript Development",
                description: "Advanced scripting solutions to extend NetSuite functionality beyond standard capabilities",
                gradient: "from-blue-600 to-blue-800"
              },
              {
                title: "Custom Reports & Dashboards",
                description: "Build tailored reports and interactive dashboards for better business insights and decision-making",
                gradient: "from-blue-300 to-blue-500"
              },
              {
                title: "SuiteApps Development",
                description: "Develop custom applications and modules specifically designed for your NetSuite environment",
                gradient: "from-blue-700 to-blue-900"
              },
              {
                title: "Third-Party Integrations",
                description: "Connect NetSuite with external systems and applications for seamless data flow and automation",
                gradient: "from-sky-400 to-blue-600"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>
                
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-125"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Ready to customize your NetSuite experience?
            </p>
            <button 
              onClick={openContactModal}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA Section - Dark */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
              <pattern id="ctaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your <span className="text-cyan-400">NetSuite Experience</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              Don't let standard NetSuite limitations hold back your business. Our expert customization team can unlock the full potential of your NetSuite system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openContactModal}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process - Light */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-gray-800 text-center">
            Our <span className="text-blue-600">Development Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description: "We analyze your business requirements and current NetSuite setup"
              },
              {
                step: "2",
                title: "Solution Design",
                description: "Design custom solutions that align with your business goals"
              },
              {
                step: "3",
                title: "Development & Testing",
                description: "Develop and thoroughly test all customizations"
              },
              {
                step: "4",
                title: "Deployment & Support",
                description: "Deploy solutions and provide ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
              <pattern id="faqGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#faqGrid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about NetSuite customization and development services.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What types of NetSuite customizations can you develop?",
                answer: "We can develop a wide range of customizations including custom workflows, forms, fields, reports, dashboards, SuiteScript solutions, SuiteApps, third-party integrations, and complex business process automation. Our team handles everything from simple field additions to complex multi-module customizations."
              },
              {
                question: "How long does a typical customization project take?",
                answer: "Project timelines vary depending on complexity. Simple customizations like custom fields or basic workflows typically take 1-2 weeks. More complex projects involving SuiteScript development, integrations, or custom SuiteApps can take 4-12 weeks. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Will customizations affect NetSuite upgrades?",
                answer: "Our customizations are built following NetSuite best practices to ensure compatibility with future upgrades. We use standard APIs and avoid modifications that could break during updates. We also provide testing and support during NetSuite releases to ensure everything continues working smoothly."
              },
              {
                question: "What's included in your customization pricing?",
                answer: "Our pricing includes requirements analysis, solution design, development, testing, deployment, documentation, and training. We also provide 30 days of post-deployment support. Ongoing maintenance and support packages are available separately."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/10 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Have more questions about our customization services?
            </p>
            <button 
              onClick={openContactModal}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Light */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-12 text-gray-800 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Unlock NetSuite's <span className="text-blue-600">Full Potential?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our expert NetSuite customization services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Custom Solutions Delivered</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={openContactModal}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Customization Project
          </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="NetSuite Customization Consultation"
        subtitle="Let's discuss your customization needs"
        icon="🚀"
      >
        <ContactForm
          title="Get Started Today"
          subtitle="Tell us about your NetSuite customization requirements"
          messagePlaceholder="Describe your current NetSuite setup and what customizations you need..."
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </main>
  );
};

export default Customization; 