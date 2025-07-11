import React, { useState, useEffect } from 'react';

const NetSuiteConsultingServices = ({ consultingServices }) => {
  const [activeService, setActiveService] = useState(0);

  // Auto-rotate services showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % consultingServices.services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [consultingServices.services.length]);

  return (
    <section className="bg-gray-50 py-20 light-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {consultingServices.title.split(' ')[0]} <span className="text-blue-600">{consultingServices.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {consultingServices.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Services Showcase - Left Side */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {consultingServices.services[activeService].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {consultingServices.services[activeService].description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                {consultingServices.services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Navigation */}
            <div className="flex space-x-2 mt-6 justify-center">
              {consultingServices.services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeService === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative group max-w-xl">
              <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-2xl blur-xl"></div>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl">
                <img 
                  src="/images/ourProServices.png" 
                  alt="NetSuite Consulting Services" 
                  className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetSuiteConsultingServices; 