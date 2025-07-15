import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
        <div className="relative z-10 text-center">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
          </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>
      </section>

      {/* Industry Stats Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Manufacturing Excellence in <span className="text-blue-600">Numbers</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Proven results across hundreds of manufacturing implementations
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-cyan-50/20 transition-all duration-500 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Value */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    
                    {/* Label */}
                    <div className="text-base md:text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {stat.description}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full translate-y-8 -translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-16"
          />
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

          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Challenges Showcase - Left Side */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4">
=======
=======
>>>>>>> Stashed changes
            <div className="flex-1 flex flex-col">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10 h-full flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={manufacturingChallenges[activeChallenge].icon} />
                    </svg>
                  </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {manufacturingChallenges[activeChallenge].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {manufacturingChallenges[activeChallenge].description}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
=======
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {manufacturingChallenges[activeChallenge].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {manufacturingChallenges[activeChallenge].description}
                  </p>
                  <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4 mb-6">
>>>>>>> Stashed changes
=======
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {manufacturingChallenges[activeChallenge].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {manufacturingChallenges[activeChallenge].description}
                  </p>
                  <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4 mb-6">
>>>>>>> Stashed changes
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span className="text-red-700 font-semibold">Impact: {manufacturingChallenges[activeChallenge].impact}</span>
                    </div>
                  </div>
                </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
                {/* Challenge Navigation */}
                <div className="flex space-x-2 justify-center pt-4">
                  {manufacturingChallenges.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveChallenge(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeChallenge === index ? 'bg-blue-400' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              </div>
            </div>

            {/* Image - Right Side */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                  <div className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-orange-500/30 to-red-600/20 rounded-3xl blur-2xl"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-gray-900/10 via-red-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl">
=======
            <div className="flex-1 flex justify-center items-center">
              <div className="relative group max-w-xl w-full h-full">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl h-full flex items-center">
>>>>>>> Stashed changes
=======
            <div className="flex-1 flex justify-center items-center">
              <div className="relative group max-w-xl w-full h-full">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl h-full flex items-center">
>>>>>>> Stashed changes
                  <img 
                    src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Manufacturing Challenges" 
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                    className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 transition-all duration-500"
=======
                    className="w-full h-full max-h-96 object-cover rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
>>>>>>> Stashed changes
=======
                    className="w-full h-full max-h-96 object-cover rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="NetSuite Manufacturing Solutions" 
                    className="w-full h-auto rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                  />
=======
=======
>>>>>>> Stashed changes
                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-blue-500/20 to-cyan-500/15 rounded-2xl blur-xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-blue-300/20 to-white/10 rounded-xl blur-lg"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="relative bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-2xl p-4 border border-white/20">
                    <img 
                      src="/solutions.jpg" 
                      alt="NetSuite Manufacturing Solutions" 
                      className="w-full h-110 object-cover rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-xl"
                    />
                    
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-blue-500/5 via-transparent via-transparent to-cyan-400/5 pointer-events-none"></div>
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-bl from-transparent via-white/3 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <div className="relative">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-pulse shadow-md"></div>
                      <div className="absolute -inset-1 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400/40 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl"></div>
                </div>
                
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>NetSuite Expert</span>
                  </div>
>>>>>>> Stashed changes
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
        title="Schedule Your Consultation"
        subtitle="Let's discuss your NetSuite consulting needs"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Manufacturing;