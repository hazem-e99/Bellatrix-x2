import React from 'react';

const ProductModulesSection = ({ data }) => {
  const { title, subtitle, items, settings } = data;

  if (!settings.show) return null;

  return (
    <section className={`py-20 ${settings.animation} relative`} style={{ backgroundColor: settings.theme === 'dark' ? '#001038' : '#fff' }}>
      {settings.theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10 pointer-events-none"></div>
      )}
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className={`text-3xl font-bold mb-6 ${settings.theme === 'dark' ? 'text-white' : 'text-blue-800'} text-center`}>{title}</h2>
        <p className={`text-lg ${settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-10 text-center max-w-2xl mx-auto`}>{subtitle}</p>
        
        <div className={`grid ${settings.layout === 'grid-cols-3' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`${settings.theme === 'dark' ? 
                'bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-500 hover:shadow-blue-500/20 text-white' : 
                'bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-200/40 text-blue-800'
              } rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center border hover:shadow-2xl transition-all duration-300 ${settings.animation}`}
            >
              <div className="font-bold text-xl mb-3">{item.title}</div>
              <div className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModulesSection;