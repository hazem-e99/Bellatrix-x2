import React from 'react';

const PricingSection = ({ data }) => {
  const { title, subtitle, plans, settings } = data;

  if (!settings.show) return null;

  return (
    <section className={`py-12 relative`} style={{ backgroundColor: settings.theme === 'dark' ? '#001038' : '#f9fafb' }}>
      {settings.theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10 pointer-events-none"></div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${settings.theme === 'dark' ? 'text-white' : 'text-blue-800'}`}>
            {title.includes('<span>') ? (
              <span dangerouslySetInnerHTML={{ __html: title.replace('<span>', `<span class="${settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}">`) }} />
            ) : title}
          </h2>
          <p className={`text-lg ${settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>
        
        <div className={`grid ${settings.layout === 'grid-cols-3' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-8 max-w-6xl mx-auto`}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${settings.theme === 'dark' ? 'bg-white/5 backdrop-blur-sm' : 'bg-white'} rounded-2xl p-8 border-2 ${
                plan.highlight ? 
                  `${settings.theme === 'dark' ? 'border-blue-400 hover:border-blue-600' : 'border-blue-500 hover:border-blue-700'} transform scale-105` : 
                  `${settings.theme === 'dark' ? 'border-white/10 hover:border-blue-300' : 'border-gray-200 hover:border-blue-300'}`
              } transition-all duration-300 relative`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className={`text-2xl font-bold ${settings.theme === 'dark' ? 'text-white' : 'text-blue-800'} mb-2`}>{plan.name}</h3>
                <p className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{plan.description}</p>
                <div className="my-6">
                  <span className={`text-4xl font-bold ${plan.highlight ? (settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600') : (settings.theme === 'dark' ? 'text-white' : 'text-blue-800')}`}>
                    {plan.price}
                  </span>
                  <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{plan.priceNote}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={settings.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.cta.url} 
                className={`w-full ${
                  plan.highlight ? 
                    'bg-blue-600 hover:bg-blue-700' : 
                    `${settings.theme === 'dark' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`
                } text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center`}
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
        
        {settings.disclaimer && (
          <div className="text-center mt-12">
            <p className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{settings.disclaimer}</p>
            <p className={`text-sm ${settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Need a custom solution? <a href="#contact" className="text-blue-400 font-semibold cursor-pointer hover:underline">Contact our team</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;