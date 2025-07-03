import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About Bellatrix', icon: '🏢' },
    { id: 'journey', label: 'Our Journey', icon: '🚀' },
    { id: 'team', label: 'Meet Our Team', icon: '👥' },
    { id: 'values', label: 'Our Values', icon: '💎' },
    { id: 'sets-apart', label: 'What Sets Us Apart', icon: '⭐' },
    { id: 'milestones', label: 'Our Milestones', icon: '🏆' },
    { id: 'cta', label: 'Build Something Great', icon: '🔥' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, exceeding client expectations consistently.',
      icon: '⭐',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency, building trust through ethical business practices.',
      icon: '🤝',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners in their digital transformation journey.',
      icon: '🚀',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: '/images/indleaders.jpg',
      bio: 'Visionary leader with 20+ years in enterprise software solutions.',
      expertise: ['Strategic Planning', 'Business Development', 'Leadership']
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '/images/indleaders.jpg',
      bio: 'Technology expert specializing in NetSuite implementations and cloud solutions.',
      expertise: ['NetSuite Development', 'Cloud Architecture', 'System Integration']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: '/images/indleaders.jpg',
      bio: 'Operations specialist ensuring seamless project delivery and client success.',
      expertise: ['Project Management', 'Process Optimization', 'Quality Assurance']
    },
    {
      name: 'David Kim',
      role: 'Lead Consultant',
      image: '/images/indleaders.jpg',
      bio: 'Senior consultant with expertise in business process optimization.',
      expertise: ['Business Analysis', 'Process Design', 'Training']
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Bellatrix was established with a vision to transform businesses through technology.',
      icon: '🏗️'
    },
    {
      year: '2012',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone of serving 100 satisfied clients.',
      icon: '🎯'
    },
    {
      year: '2016',
      title: 'NetSuite Gold Partner',
      description: 'Achieved NetSuite Gold Partner status, recognizing our expertise.',
      icon: '🥇'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple continents.',
      icon: '🌍'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Successfully completed over 500 implementation projects.',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions for enhanced business intelligence.',
      icon: '🤖'
    }
  ];

  const differentiators = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of various industries and their unique challenges.',
      icon: '🏭',
      stats: '15+ Industries'
    },
    {
      title: 'Proven Methodology',
      description: 'Time-tested implementation methodology ensuring project success.',
      icon: '📋',
      stats: '98% Success Rate'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 support and maintenance services for continuous optimization.',
      icon: '🛠️',
      stats: '24/7 Support'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.',
      icon: '🎨',
      stats: '100% Custom'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videos/HomeHeroSectionV.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/60 to-cyan-900/80"></div>
        
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
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              About Bellatrix
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Empowering businesses worldwide with innovative Oracle NetSuite solutions, 
              expert consulting, and transformative digital experiences that drive sustainable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('about')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center overflow-x-auto">
            <div className="flex space-x-1 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="text-sm md:text-base">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {/* About Bellatrix Section */}
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Bellatrix</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  We are a leading Oracle NetSuite consultancy dedicated to transforming businesses through 
                  innovative technology solutions and strategic digital transformation initiatives.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To empower businesses worldwide with cutting-edge Oracle NetSuite solutions that drive 
                    operational excellence, enhance productivity, and accelerate growth. We believe in 
                    creating lasting partnerships that deliver measurable value and sustainable success.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                      <div className="text-2xl font-bold text-orange-600">50+</div>
                      <div className="text-sm text-gray-600">Expert Team</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/images/ourProServices.png"
                      alt="About Bellatrix"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Our Journey Section */}
          {activeSection === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Journey</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  From humble beginnings to becoming a trusted Oracle NetSuite partner, 
                  our journey has been marked by innovation, growth, and unwavering commitment to excellence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/solution.jpg"
                    alt="Our Journey"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Founded in 2008 with a vision to bridge the gap between complex enterprise software 
                    and real business needs. Our founders recognized that many businesses were struggling 
                    to fully leverage their technology investments.
                  </p>
                  <h3 className="text-3xl font-bold text-gray-800">Growth & Evolution</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Over the years, we've evolved from a small consulting firm to a comprehensive 
                    digital transformation partner, helping hundreds of organizations across various 
                    industries unlock their full potential.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-2">Today</h4>
                    <p className="text-blue-700">
                      We continue to innovate and expand our services, staying at the forefront of 
                      technology trends while maintaining our core values of excellence and integrity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Meet Our Team Section */}
          {activeSection === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our diverse team of experts brings together decades of experience in enterprise 
                  software, business consulting, and digital transformation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="space-y-1">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full mr-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Our Values Section */}
          {activeSection === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  These core values guide everything we do and shape how we interact with our clients, 
                  partners, and each other.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className="text-5xl mb-6">{value.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* What Sets Us Apart Section */}
          {activeSection === 'sets-apart' && (
            <motion.div
              key="sets-apart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our unique combination of expertise, methodology, and commitment to excellence 
                  makes us the preferred choice for Oracle NetSuite implementations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full text-sm">
                      {item.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Our Milestones Section */}
          {activeSection === 'milestones' && (
            <motion.div
              key="milestones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Milestones</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Key achievements and milestones that mark our journey of growth, 
                  innovation, and commitment to excellence.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="text-3xl mb-4">{milestone.icon}</div>
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative z-10 w-2/12 flex justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      
                      <div className="w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Ready to Build Something Great Section */}
          {activeSection === 'cta' && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Build Something Great?</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Let's collaborate to transform your business with innovative Oracle NetSuite solutions 
                  that drive growth, efficiency, and success.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Start Your Transformation Journey</h3>
                  <p className="text-xl mb-8 opacity-90">
                    Join hundreds of successful businesses that have transformed their operations with our expertise.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <h4 className="text-xl font-bold mb-2">Quick Start</h4>
                      <p className="opacity-90">Get started with a free consultation</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold mb-2">Tailored Solutions</h4>
                      <p className="opacity-90">Custom solutions for your business</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🏆</div>
                      <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                      <p className="opacity-90">98% client satisfaction rate</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Free Consultation
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                    >
                      View Our Portfolio
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default About;