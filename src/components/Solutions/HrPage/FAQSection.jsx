import React, { useState } from 'react';

const FAQSection = ({ data }) => {
  const { title, items, settings } = data;
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!settings.show) return null;

  return (
    <section className={`py-20 ${settings.theme === 'light' ? 'bg-white/90 light-section' : 'bg-gray-50'} ${settings.animation}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-10 ${settings.theme === 'light' ? 'text-blue-800' : 'text-blue-700'} text-center`}>{title}</h2>
        
        <div className="space-y-6">
          {items.map((faq, idx) => (
            <div key={idx} className="border-b border-blue-100 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-lg font-medium text-blue-900 focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                aria-expanded={openFAQ === idx}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {openFAQ === idx && (
                <div className={`mt-2 ${settings.theme === 'light' ? 'text-gray-700' : 'text-gray-600'} animate-fade-in-up`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;