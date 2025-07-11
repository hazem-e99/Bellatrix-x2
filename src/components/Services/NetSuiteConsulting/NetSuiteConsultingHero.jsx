import React from 'react';
import { motion } from 'framer-motion';

const NetSuiteConsultingHero = ({ heroContent }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <img
        src={heroContent.backgroundImage}
        alt="NetSuite Consulting Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />
      
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            {heroContent.title.split(' ')[0]} <span className="text-blue-600">{heroContent.title.split(' ')[1]}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
            {heroContent.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            {heroContent.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NetSuiteConsultingHero; 