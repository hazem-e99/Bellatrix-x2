import React from 'react';
import data from './data.json';

const iconMap = {
  automation: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  compliance: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  selfservice: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),
  analytics: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
  multicountry: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  integrations: (<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
};

export default function KeyFeaturesSection({ onShowDemo }) {
  return (
    <section className="py-20 relative overflow-hidden animate-background-glow" style={{ backgroundColor: '#001038', animation: 'background-glow 12s ease-in-out infinite' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Key Features for Modern Consultancies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((f, idx) => (
            <div key={idx} tabIndex={0} className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-xl p-8 shadow-2xl border border-gray-600/50 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 min-h-[200px] flex flex-col justify-center items-center text-center backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-8 -translate-y-8 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full opacity-20 transform -translate-x-6 translate-y-6 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-all duration-300 flex justify-center">{iconMap[f.icon]}<span className="ml-2">{f.title}</span></div>
                <div className="text-gray-300 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button onClick={onShowDemo} className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105 focus:outline-none">See a Live Demo</button>
        </div>
      </div>
    </section>
  );
} 