import React from 'react';

export default function ContactCTASection({ onOpenContactModal }) {
  return (
    <section id="contact" className="py-20 bg-gray-50 light-section">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          Ready to Simplify Your <span className="text-blue-600">Payroll?</span>
        </h2>
        <p className="text-xl mb-10 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Get in touch for a personalized demo and see how our solution can transform your payroll process.
        </p>
        <button onClick={onOpenContactModal} className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Request Now !
        </button>
      </div>
    </section>
  );
} 