import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm';
import Modal from '../Modal';

const NetSuiteConsulting = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Auto-rotate services showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % consultingServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const consultingServices = [
    {
      title: "NetSuite Implementation Strategy",
      description: "Comprehensive planning and roadmap development for successful NetSuite deployment",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: [
        "Business process analysis and optimization",
        "System architecture design",
        "Implementation timeline and milestones",
        "Risk assessment and mitigation strategies",
        "Change management planning"
      ]
    },
    {
      title: "Business Process Optimization",
      description: "Streamline your operations with NetSuite's powerful automation capabilities",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      features: [
        "Workflow automation design",
        "Custom field and form configuration",
        "Approval process optimization",
        "Data validation and integrity",
        "Performance monitoring setup"
      ]
    },
    {
      title: "Financial Management Consulting",
      description: "Optimize your financial operations with NetSuite's comprehensive financial suite",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      features: [
        "Chart of accounts optimization",
        "Revenue recognition setup",
        "Multi-currency configuration",
        "Financial reporting and dashboards",
        "Budgeting and forecasting"
      ]
    },
    {
      title: "System Integration & Data Migration",
      description: "Seamlessly connect NetSuite with your existing systems and migrate critical data",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      features: [
        "Third-party system integrations",
        "Data mapping and transformation",
        "API development and management",
        "Legacy system migration",
        "Real-time data synchronization"
      ]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Optimize production planning, inventory management, and supply chain operations",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      solutions: ["Production Planning", "Inventory Optimization", "Quality Control", "Cost Accounting"]
    },
    {
      name: "Retail & E-commerce",
      description: "Streamline multi-channel operations and enhance customer experience",
      image: "https://images.unsplash.com/photo-1441986300917-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      solutions: ["Omnichannel Management", "POS Integration", "Customer Analytics", "Inventory Tracking"]
    },
    {
      name: "Professional Services",
      description: "Enhance project management and resource allocation for service-based businesses",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      solutions: ["Project Accounting", "Resource Planning", "Time Tracking", "Client Billing"]
    },
    {
      name: "Healthcare",
      description: "Ensure compliance and optimize operations in healthcare organizations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      solutions: ["Compliance Management", "Patient Data Security", "Revenue Cycle", "Inventory Control"]
    }
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current systems, processes, and business requirements",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a detailed roadmap with timelines, milestones, and success metrics",
      duration: "1 week"
    },
    {
      step: "03",
      title: "Solution Design",
      description: "Design custom NetSuite configuration tailored to your specific needs",
      duration: "2-3 weeks"
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Hands-on guidance throughout the implementation process",
      duration: "4-12 weeks"
    },
    {
      step: "05",
      title: "Optimization & Training",
      description: "Fine-tune the system and train your team for maximum efficiency",
      duration: "2-4 weeks"
    }
  ];

  const benefits = [
    {
      title: "Faster Implementation",
      description: "Reduce implementation time by up to 40% with our proven methodologies",
      metric: "40% Faster"
    },
    {
      title: "Cost Optimization",
      description: "Minimize total cost of ownership through efficient system design",
      metric: "30% Savings"
    },
    {
      title: "Risk Mitigation",
      description: "Avoid common pitfalls with our experienced consulting approach",
      metric: "95% Success Rate"
    },
    {
      title: "ROI Acceleration",
      description: "Achieve faster return on investment with optimized configurations",
      metric: "6 Months ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
<<<<<<< Updated upstream
      {/* Hero Section - Modern, visually appealing version */}
=======
      
      {/* Hero Section - Same as BellatrixSupportHero */}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-full blur-xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 rounded-full blur-lg opacity-20"></div>
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
                <pattern id="consultingGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#consultingGrid)" />
              </svg>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
              NetSuite Consulting
            </h1>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            {/* Subtitle */}
            <h2
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
                textAlign: "center",
                margin: "0 0 20px",
              }}
              className="text-white animate-slide-up"
            >
              Strategic Guidance for Maximum ROI
            </h2>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
              Transform your business operations with expert NetSuite consulting and strategic planning for maximum return on investment.
            </p>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
<<<<<<< Updated upstream
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out 0.3s both;
          }
=======
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out 0.3s both;
          }
          
>>>>>>> Stashed changes
          .animate-background-glow {
            animation: background-glow 12s ease-in-out infinite;
          }
        `}</style>
      </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      {/* Consulting Services Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Consulting Services</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive NetSuite consulting services designed to optimize your business processes 
              and maximize your return on investment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Showcase - Left Side */}
            <div className="flex-1 flex flex-col">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 flex-1">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={consultingServices[activeService].icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {consultingServices[activeService].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {consultingServices[activeService].description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  {consultingServices[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Navigation */}
              <div className="flex space-x-2 mt-6 justify-center">
                {consultingServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl w-full">
                <div className="bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-8 backdrop-blur-md border border-white/30 shadow-2xl">
                  <img 
                    src="/images/ourProServices.png" 
                    alt="NetSuite Consulting Services" 
                    className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Industry <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Deep industry knowledge across multiple sectors, ensuring your NetSuite implementation 
              aligns with industry best practices and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, i) => (
                        <span key={i} className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Consulting <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A proven methodology that ensures successful NetSuite implementations and optimizations 
              tailored to your unique business requirements.
            </p>
          </div>

          {/* Process Steps - Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {consultingProcess.map((phase, index) => {
              const bgColors = ['bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900'];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:transform group-hover:-translate-y-2 h-full">
                    {/* Step Number */}
                    <div className={`w-16 h-16 ${bgColors[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-white font-bold text-xl">{phase.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full border border-blue-100">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    
                    {/* Progress Arrow for non-last items */}
                    {index < consultingProcess.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Our Process Works</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Proven Methodology</h4>
                <p className="text-sm text-gray-600">Tested approach with 95% success rate</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Time Efficient</h4>
                <p className="text-sm text-gray-600">Reduced implementation time by 40%</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Support</h4>
                <p className="text-sm text-gray-600">Dedicated team throughout the journey</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button 
              onClick={openContactModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Consulting Journey
            </button>
            <p className="text-gray-500 text-sm mt-4">Free initial consultation • No commitment required</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="text-cyan-400">Consulting</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Proven results that drive business value and accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Optimize Your NetSuite Investment?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Get expert guidance from certified NetSuite consultants. Schedule your free consultation 
                today and discover how we can help you achieve maximum ROI.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Free Assessment</h4>
                  <p>Comprehensive evaluation of your current setup</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                  <p>Track record of successful implementations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                  <p>Certified NetSuite professionals</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Schedule Your Consultation"
        subtitle="Let's discuss your NetSuite consulting needs"
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};

export default NetSuiteConsulting;