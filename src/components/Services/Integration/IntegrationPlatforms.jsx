import React from 'react';

const IntegrationPlatforms = ({ integrationPlatforms }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            {integrationPlatforms.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {integrationPlatforms.description}
          </p>
        </div>
        
        <div className="space-y-12">
          {integrationPlatforms.platforms.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.platforms.map((platform, platformIndex) => (
                  <div key={platformIndex} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="text-blue-600 font-bold text-sm">
                        {platform.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      {platform.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationPlatforms; 