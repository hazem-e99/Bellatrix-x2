import React from 'react';

const StrongCTASection = ({ data }) => {
  const { title, subtitle, buttons, settings } = data;

  if (!settings.show) return null;

  return (
    <section className={`py-16 ${settings.theme === 'light' ? 'bg-gray-50' : 'bg-blue-800'} text-center ${settings.animation}`}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${settings.theme === 'light' ? 'text-blue-800' : 'text-white'}`}>{title}</h2>
        <p className={`text-lg md:text-xl mb-8 ${settings.theme === 'light' ? 'text-gray-600' : 'text-blue-100'}`}>{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, idx) => (
            <a 
              key={idx}
              href={button.url}
              className={`inline-block ${
                button.variant === 'primary' ? 
                  'bg-blue-700 hover:bg-blue-800 text-white' : 
                  'border-2 border-blue-700 hover:border-blue-400 text-blue-700 hover:text-blue-900 hover:bg-blue-100'
              } font-semibold rounded-lg px-8 py-4 transition-all duration-200 shadow-lg text-lg`}
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongCTASection;