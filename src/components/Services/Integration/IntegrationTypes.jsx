import React from 'react';

const IntegrationTypes = ({ integrationTypes }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            {integrationTypes.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {integrationTypes.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrationTypes.types.map((integration, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={integration.icon} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{integration.title}</h3>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationTypes; 