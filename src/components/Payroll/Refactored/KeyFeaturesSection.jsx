import React from 'react';

export default function KeyFeaturesSection({ features, demoImages, showDemo, setShowDemo, demoIdx, setDemoIdx, imgFade, setImgFade, nextDemo, prevDemo, handleDemoChange }) {
  return (
    <section className="py-20 relative overflow-hidden animate-background-glow" style={{
      backgroundColor: '#001038',
      animation: 'background-glow 12s ease-in-out infinite'
    }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Key Features for Modern Consultancies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-xl p-8 shadow-2xl border border-gray-600/50 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 min-h-[200px] flex flex-col justify-center items-center text-center backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Creative Background Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-8 -translate-y-8 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full opacity-20 transform -translate-x-6 translate-y-6 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-all duration-300">
                  {f.title}
                </div>
                <div className="text-gray-300 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowDemo(true)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            See a Live Demo
          </button>
        </div>
      </div>
      {/* Live Demo Modal */}
      {showDemo && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/70 hover:bg-red-100 shadow-md text-4xl text-gray-700 hover:text-red-600 font-bold transition-all duration-200 focus:outline-none border border-gray-200"
              aria-label="Close"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#191970]">
                <circle cx="12" cy="12" r="11" fill="none" />
                <line x1="8" y1="8" x2="16" y2="16" />
                <line x1="16" y1="8" x2="8" y2="16" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <img
                src={demoImages[demoIdx]}
                alt={`Demo ${demoIdx + 1}`}
                className={`rounded-xl shadow-lg w-full h-96 object-cover mb-4 transition-opacity duration-300 ${imgFade ? 'opacity-100' : 'opacity-0'}`}
                style={{maxWidth:'100%', maxHeight:'420px'}}
              />
              <div className="flex gap-6 items-center justify-center mt-2">
                <button
                  onClick={prevDemo}
                  className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                  disabled={demoImages.length <= 1}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.5 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-gray-700 font-semibold">{demoIdx+1} / {demoImages.length}</span>
                <button
                  onClick={nextDemo}
                  className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                  disabled={demoImages.length <= 1}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.5 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {demoImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDemoChange(idx)}
                    className={`w-3 h-3 rounded-full border-2 ${demoIdx === idx ? 'bg-blue-700 border-blue-700' : 'bg-blue-100 border-blue-300'} transition-all`}
                    aria-label={`Go to slide ${idx+1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 