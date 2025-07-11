import React from 'react';

const IntegrationHero = ({ heroContent }) => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#191970] via-black to-blue-700 py-24 md:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
          {heroContent.title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg">
          {heroContent.subtitle}
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg leading-relaxed">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
};

export default IntegrationHero; 