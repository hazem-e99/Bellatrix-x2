import React from 'react';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-cyan-900/90"></div>
    {/* Floating Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
    </div>
    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
          Retail Excellence
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-semibold">
          Powered by NetSuite
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
          Transform your retail operations with integrated commerce solutions that unify online, 
          mobile, and in-store experiences while optimizing inventory and enhancing customer satisfaction.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection; 