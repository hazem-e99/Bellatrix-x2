import React from 'react';

const IntegrationCTA = ({ cta, onStartIntegration }) => {
  return (
    <section className="py-16 bg-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {cta.title}
        </h2>
        <p className="text-lg md:text-xl mb-4">
          {cta.subtitle}
        </p>
        <p className="text-base mb-8 text-blue-100">
          {cta.description}
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {cta.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm font-semibold">
                {feature}
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={onStartIntegration}
          className="bg-white text-blue-800 font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
        >
          {cta.buttonText}
        </button>
      </div>
    </section>
  );
};

export default IntegrationCTA; 