import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
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
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"
      />
    </div>
    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
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
  </section>
);

export default HeroSection; 