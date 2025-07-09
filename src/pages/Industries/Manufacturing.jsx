import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import Modal from '../../components/Modal';

const Manufacturing = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Auto-rotate challenges and solutions
  useEffect(() => {
    const challengeInterval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % manufacturingChallenges.length);
    }, 4000);
    
    const solutionInterval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % netSuiteSolutions.length);
    }, 5000);

    return () => {
      clearInterval(challengeInterval);
      clearInterval(solutionInterval);
    };
  }, []);

  const manufacturingChallenges = [
    {
      title: "Complex Production Planning",
      description: "Managing multi-level BOMs, work orders, and production schedules across multiple facilities",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      impact: "30% production delays"
    },
    {
      title: "Inventory Management Complexity",
      description: "Tracking raw materials, WIP, and finished goods across multiple locations with real-time visibility",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      impact: "25% excess inventory"
    },
    {
      title: "Quality Control & Compliance",
      description: "Maintaining quality standards and regulatory compliance throughout the manufacturing process",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      impact: "15% quality issues"
    },
    {
      title: "Supply Chain Visibility",
      description: "Managing supplier relationships and ensuring timely delivery of materials and components",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      impact: "20% supply delays"
    }
  ];

  const netSuiteSolutions = [
    {
      title: "Advanced Manufacturing",
      description: "Complete production planning with work orders, routing, and capacity planning",
      features: [
        "Multi-level BOM management",
        "Work order scheduling",
        "Capacity planning",
        "Shop floor control",
        "Production reporting"
      ],
      benefits: "40% improvement in production efficiency"
    },
    {
      title: "Inventory & Warehouse Management",
      description: "Real-time inventory tracking with automated replenishment and cycle counting",
      features: [
        "Real-time inventory tracking",
        "Automated reorder points",
        "Cycle counting",
        "Lot and serial tracking",
        "Multi-location management"
      ],
      benefits: "35% reduction in inventory costs"
    },
    {
      title: "Quality Management",
      description: "Comprehensive quality control with inspection plans and non-conformance tracking",
      features: [
        "Quality inspection plans",
        "Non-conformance tracking",
        "Supplier quality management",
        "Certificate of analysis",
        "Corrective action tracking"
      ],
      benefits: "50% reduction in quality issues"
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility with supplier collaboration tools",
      features: [
        "Supplier portal",
        "Purchase order automation",
        "Vendor performance tracking",
        "Drop shipment management",
        "Supply chain analytics"
      ],
      benefits: "30% improvement in on-time delivery"
    }
  ];

  const industryStats = [
    { value: "500+", label: "Manufacturing Clients", description: "Successful implementations" },
    { value: "40%", label: "Efficiency Gain", description: "Average improvement" },
    { value: "35%", label: "Cost Reduction", description: "In operational costs" },
    { value: "98%", label: "Client Satisfaction", description: "Success rate" }
  ];

  const caseStudies = [
    {
      company: "TechManufacturing Corp",
      industry: "Electronics Manufacturing",
      challenge: "Complex multi-level BOMs and production scheduling across 3 facilities",
      solution: "Implemented NetSuite Advanced Manufacturing with custom workflows",
      results: [
        "45% reduction in production lead times",
        "30% improvement in on-time delivery",
        "25% reduction in inventory carrying costs",
        "Real-time visibility across all facilities"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "Precision Parts Ltd",
      industry: "Automotive Parts",
      challenge: "Quality control and traceability requirements for automotive industry",
      solution: "NetSuite Quality Management with lot tracking and supplier integration",
      results: [
        "60% reduction in quality incidents",
        "100% lot traceability achieved",
        "40% faster supplier onboarding",
        "Automated compliance reporting"
      ],
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const implementationProcess = [
    {
      phase: "Discovery & Assessment",
      duration: "2-3 weeks",
      description: "Analyze current manufacturing processes, systems, and requirements",
      deliverables: ["Current state assessment", "Gap analysis", "Requirements documentation"]
    },
    {
      phase: "Solution Design",
      duration: "3-4 weeks", 
      description: "Design NetSuite configuration tailored to manufacturing workflows",
      deliverables: ["System architecture", "Process flows", "Integration design"]
    },
    {
      phase: "Configuration & Development",
      duration: "6-8 weeks",
      description: "Configure NetSuite modules and develop custom manufacturing features",
      deliverables: ["Configured system", "Custom developments", "Integration setup"]
    },
    {
      phase: "Testing & Training",
      duration: "3-4 weeks",
      description: "Comprehensive testing and user training for manufacturing teams",
      deliverables: ["Test results", "Training materials", "User documentation"]
    },
    {
      phase: "Go-Live & Support",
      duration: "2-3 weeks",
      description: "Production deployment with ongoing support and optimization",
      deliverables: ["Live system", "Support documentation", "Performance monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-cyan-900/90"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100/20 text-blue-200 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-blue-300/30">
              MANUFACTURING SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Manufacturing Excellence
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-semibold">
              Powered by NetSuite
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your manufacturing operations with integrated ERP solutions that streamline 
              production, optimize inventory, and ensure quality compliance across your entire value chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Manufacturing Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Download Case Study
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Stats Section */}
      <section className="bg-white py-16 light-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Challenges Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Manufacturing <span className="text-blue-600">Challenges</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Modern manufacturing faces complex challenges that require integrated solutions 
              to maintain competitiveness and operational efficiency.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Challenges Showcase - Left Side */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={manufacturingChallenges[activeChallenge].icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {manufacturingChallenges[activeChallenge].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {manufacturingChallenges[activeChallenge].description}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span className="text-red-700 font-semibold">Impact: {manufacturingChallenges[activeChallenge].impact}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge Navigation */}
              <div className="flex space-x-2 mt-6 justify-center">
                {manufacturingChallenges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveChallenge(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeChallenge === index ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                  <div className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-orange-500/30 to-red-600/20 rounded-3xl blur-2xl"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-gray-900/10 via-red-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Manufacturing Challenges" 
                    className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Solutions Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              NetSuite <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive manufacturing solutions that address every aspect of your operations, 
              from planning to production to delivery.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="NetSuite Manufacturing Solutions" 
                    className="w-full h-auto rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Solutions Showcase - Right Side */}
            <div className="flex-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {netSuiteSolutions[activeSolution].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {netSuiteSolutions[activeSolution].description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  {netSuiteSolutions[activeSolution].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-green-300 font-semibold">Result: {netSuiteSolutions[activeSolution].benefits}</span>
                  </div>
                </div>
              </div>

              {/* Solution Navigation */}
              <div className="flex space-x-2 mt-6 justify-center">
                {netSuiteSolutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSolution(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSolution === index ? 'bg-green-400' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Real manufacturing companies achieving remarkable results with NetSuite solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className="relative h-48">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{study.company}</h3>
                    <p className="text-blue-200">{study.industry}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Implementation <span className="text-cyan-400">Process</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our proven methodology ensures successful NetSuite implementation for manufacturing companies.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {implementationProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    {index < implementationProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
                    <div className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      {phase.duration}
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{phase.description}</p>
                    <div className="space-y-1">
                      {phase.deliverables.map((deliverable, i) => (
                        <div key={i} className="text-xs text-gray-400">• {deliverable}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Manufacturing Operations?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Join hundreds of manufacturing companies that have streamlined their operations 
                and improved efficiency with NetSuite. Get started with a free consultation today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Free Assessment</h4>
                  <p>Comprehensive evaluation of your manufacturing processes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Rapid Implementation</h4>
                  <p>Get up and running faster with our proven methodology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Ongoing Support</h4>
                  <p>Continuous optimization and support for your success</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Manufacturing Demo
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Schedule Your Manufacturing Demo"
        subtitle="Let's discuss your manufacturing challenges and solutions"
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};

export default Manufacturing;