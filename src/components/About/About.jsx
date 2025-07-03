import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import Modal from '../Modal';

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, exceeding client expectations consistently.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency, building trust through ethical business practices.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners in their digital transformation journey.',
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
      description: 'Bellatrix was established with a vision to transform businesses through technology.'
    },
    {
      year: '2012',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone of serving 100 satisfied clients.'
    },
    {
      year: '2016',
      title: 'NetSuite Gold Partner',
      description: 'Achieved NetSuite Gold Partner status, recognizing our expertise.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple continents.'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Successfully completed over 500 implementation projects.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions for enhanced business intelligence.'
    }
  ];

  const differentiators = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of various industries and their unique challenges.',
      stats: '15+ Industries'
    },
    {
      title: 'Proven Methodology',
      description: 'Time-tested implementation methodology ensuring project success.',
      stats: '98% Success Rate'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 support and maintenance services for continuous optimization.',
      stats: '24/7 Support'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.',
      stats: '100% Custom'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
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

      {/* About Bellatrix Section */}
      <section id="about-section" className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Bellatrix</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are a leading Oracle NetSuite consultancy dedicated to transforming businesses through 
              innovative technology solutions and strategic digital transformation initiatives.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-2xl blur-xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-blue-300/20 to-white/10 rounded-xl blur-lg"></div>
                </div>
                
                <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="relative bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-2xl p-4 border border-white/20">
                    <img 
                      src="/images/ourProServices.png" 
                      alt="About Bellatrix - Professional Services" 
                      className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-xl"
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
                    <span>Industry Leader</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 space-y-6">
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
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
              <pattern id="journeyGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#journeyGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted Oracle NetSuite partner, 
              our journey has been marked by innovation, growth, and unwavering commitment to excellence.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-white">The Beginning</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Founded in 2008 with a vision to bridge the gap between complex enterprise software 
                and real business needs. Our founders recognized that many businesses were struggling 
                to fully leverage their technology investments.
              </p>
              <h3 className="text-3xl font-bold text-white">Growth & Evolution</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Over the years, we've evolved from a small consulting firm to a comprehensive 
                digital transformation partner, helping hundreds of organizations across various 
                industries unlock their full potential.
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <h4 className="font-bold text-cyan-300 mb-2">Today</h4>
                <p className="text-gray-300">
                  We continue to innovate and expand our services, staying at the forefront of 
                  technology trends while maintaining our core values of excellence and integrity.
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img 
                    src="/images/solution.jpg" 
                    alt="Our Journey - Digital Innovation" 
                    className="w-full h-auto lg:max-w-md rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in enterprise 
              software, business consulting, and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
              <pattern id="valuesGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#valuesGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              These core values guide everything we do and shape how we interact with our clients, 
              partners, and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              What Sets Us <span className="text-blue-600">Apart</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our unique combination of expertise, methodology, and commitment to excellence 
              makes us the preferred choice for Oracle NetSuite implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full text-sm">
                  {item.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones Section */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
              <pattern id="milestonesGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#milestonesGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Milestones</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Key achievements and milestones that mark our journey of growth, 
              innovation, and commitment to excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build Something Great Section */}
      <section className="bg-white py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Something <span className="text-cyan-200">Great?</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Let's collaborate to transform your business with innovative Oracle NetSuite solutions 
                that drive growth, efficiency, and success.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">Quick Start</h4>
                  <p className="opacity-90">Get started with a free consultation</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">Tailored Solutions</h4>
                  <p className="opacity-90">Custom solutions for your business</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                  <p className="opacity-90">98% client satisfaction rate</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Contact Us"
        subtitle="Let's discuss your project needs"
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default About;