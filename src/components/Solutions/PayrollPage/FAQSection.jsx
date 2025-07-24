import React, { useState } from 'react';
import data from './data.json';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-xl border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-8 -translate-y-8 group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full opacity-20 transform -translate-x-6 translate-y-6 group-hover:opacity-40 transition-opacity duration-500"></div>
      <button className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset relative z-10" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-blue-300 transition-all duration-300">{question}</h3>
          <div className={`flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 relative z-10">
          <div className="border-t border-gray-600/50 pt-4">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 relative overflow-hidden animate-background-glow" style={{ backgroundColor: '#001038', animation: 'background-glow 12s ease-in-out infinite' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Common Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Get quick answers to the most frequently asked questions about our payroll system</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 