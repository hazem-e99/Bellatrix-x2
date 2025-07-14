import React from 'react';

const BenefitsSection = ({
  benefits,
  activeBenefitIdx,
  setShowDemo,
  showDemo,
  demoImages,
  demoIdx,
  setDemoIdx,
  imgFade,
  handleDemoChange,
  nextDemo,
  prevDemo
}) => (
  <section className="py-20 bg-gray-50 animate-fade-in-up light-section">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Why Choose Our HR Solution?</h2>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">Discover the key advantages that make our HR platform the smart choice for modern businesses of all sizes.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-md p-12 flex flex-col items-center text-center border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-[2500ms] animate-fade-in-up ${activeBenefitIdx === idx ? 'scale-105 z-10 shadow-2xl border-blue-400' : 'scale-100'}`}
            style={{ transition: 'transform 2.5s cubic-bezier(.4,1,.6,1), box-shadow 2.5s, border-color 2.5s' }}
          >
            <div className="font-bold text-2xl text-blue-900 mb-4">{b.title}</div>
            <div className="text-gray-700 text-lg">{b.desc}</div>
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

export default BenefitsSection; 