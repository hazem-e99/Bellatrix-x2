import React, { useState } from 'react';

const BenefitsSection = ({ data }) => {
  const { title, subtitle, items, demo, settings } = data;
  const [activeBenefitIdx, setActiveBenefitIdx] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [demoIdx, setDemoIdx] = useState(0);
  const [imgFade, setImgFade] = useState(true);

  if (!settings.show) return null;

  const handleDemoChange = (newIdx) => {
    setImgFade(false);
    setTimeout(() => {
      setDemoIdx(newIdx);
      setImgFade(true);
    }, 200);
  };

  const nextDemo = () => handleDemoChange((demoIdx + 1) % demo.images.length);
  const prevDemo = () => handleDemoChange((demoIdx - 1 + demo.images.length) % demo.images.length);

  // Auto-rotate benefits
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefitIdx((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className={`py-20 bg-gray-50 ${settings.animation} ${settings.theme === 'light' ? 'light-section' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">{title}</h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">{subtitle}</p>
        
        <div className={`grid ${settings.layout === 'grid-cols-3' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md p-12 flex flex-col items-center text-center border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-[2500ms] ${settings.animation} ${
                activeBenefitIdx === idx ? 'scale-105 z-10 shadow-2xl border-blue-400' : 'scale-100'
              }`}
              style={{ transition: 'transform 2.5s cubic-bezier(.4,1,.6,1), box-shadow 2.5s, border-color 2.5s' }}
            >
              <div className="font-bold text-2xl text-blue-900 mb-4">{item.title}</div>
              <div className="text-gray-700 text-lg">{item.description}</div>
            </div>
          ))}
        </div>

        {demo?.images?.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowDemo(true)}
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              See a Live Demo
            </button>
          </div>
        )}

        {/* Demo Modal */}
        {showDemo && demo?.images?.length > 0 && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowDemo(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/70 hover:bg-red-100 shadow-md text-4xl text-gray-700 hover:text-red-600 font-bold transition-all duration-200 focus:outline-none border border-gray-200"
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="flex flex-col items-center">
                <img
                  src={demo.images[demoIdx]}
                  alt={`Demo ${demoIdx + 1}`}
                  className={`rounded-xl shadow-lg w-full h-96 object-cover mb-4 transition-opacity duration-300 ${imgFade ? 'opacity-100' : 'opacity-0'}`}
                  style={{ maxWidth: '100%', maxHeight: '420px' }}
                />
                
                <div className="flex gap-6 items-center justify-center mt-2">
                  <button
                    onClick={prevDemo}
                    className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                    disabled={demo.images.length <= 1}
                    aria-label="Previous image"
                  >
                    &lt;
                  </button>
                  <span className="text-gray-700 font-semibold">{demoIdx + 1} / {demo.images.length}</span>
                  <button
                    onClick={nextDemo}
                    className="bg-blue-100 hover:bg-blue-300 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition-all disabled:opacity-40"
                    disabled={demo.images.length <= 1}
                    aria-label="Next image"
                  >
                    &gt;
                  </button>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {demo.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDemoChange(idx)}
                      className={`w-3 h-3 rounded-full border-2 ${demoIdx === idx ? 'bg-blue-700 border-blue-700' : 'bg-blue-100 border-blue-300'} transition-all`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;