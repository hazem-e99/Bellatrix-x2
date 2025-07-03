import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'mission', label: 'Our Mission', icon: '🎯' },
    { id: 'story', label: 'Our Story', icon: '📖' },
    { id: 'values', label: 'Our Values', icon: '💎' },
    { id: 'team', label: 'Our Team', icon: '👥' }
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

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '📊' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '50+', label: 'Team Members', icon: '👨‍💼' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: '/images/indleaders.jpg',
      bio: 'Visionary leader with 20+ years in enterprise software solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '/images/indleaders.jpg',
      bio: 'Technology expert specializing in NetSuite implementations and cloud solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: '/images/indleaders.jpg',
      bio: 'Operations specialist ensuring seamless project delivery and client success.'
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
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              About Bellatrix
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transforming businesses through innovative Oracle NetSuite solutions and expert digital consulting
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Our Journey
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
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeSection === 'mission' && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  To empower businesses worldwide with innovative Oracle NetSuite solutions that drive growth, 
                  efficiency, and digital transformation. We believe in creating lasting partnerships that help 
                  our clients achieve their strategic objectives.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Founded on Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bellatrix was founded with a simple yet powerful vision: to bridge the gap between 
                    complex enterprise software and real business needs. Our journey began when our 
                    founders recognized that many businesses were struggling to fully leverage their 
                    NetSuite investments.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Over the years, we've evolved from a small consulting firm to a comprehensive 
                    digital transformation partner, helping hundreds of organizations unlock their 
                    full potential through strategic technology implementation.
                  </p>
                  <div className="flex space-x-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2008</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Team</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/indleaders.jpg"
                    alt="Our Story"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of experience in enterprise 
                  software, business consulting, and digital transformation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
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
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our expertise can help you achieve your digital transformation goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;