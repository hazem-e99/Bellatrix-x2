import React from 'react';
import { motion } from 'framer-motion';

const NetSuiteConsultingCTA = ({ cta, onScheduleConsultation }) => {
  return (
    <section className="bg-gray-50 py-20 light-section">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              {cta.title.split(' ')[0]} <span className="text-blue-600">{cta.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl mb-4 leading-relaxed text-gray-600">
              {cta.subtitle}
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              {cta.description}
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {cta.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{feature}</h4>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onScheduleConsultation}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
            >
              {cta.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetSuiteConsultingCTA; 