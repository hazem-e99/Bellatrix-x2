import React from 'react';

const UseCasesSection = ({ data }) => {
  const { title, subtitle, items, settings } = data;

  if (!settings.show) return null;

  return (
    <section className={`py-20 bg-gray-50 ${settings.animation} ${settings.theme === 'light' ? 'light-section' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-3 text-blue-800 text-center">
          {title.includes('<span>') ? (
            <span dangerouslySetInnerHTML={{ __html: title.replace('<span>', '<span class="text-blue-600">') }} />
          ) : title}
        </h2>
        <div className="mx-auto mb-10 w-16 h-1 bg-blue-600 rounded-full"></div>
        
        <div className={`grid ${settings.layout === 'grid-cols-4' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-8`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow p-10 flex flex-col items-center text-center border border-gray-200 animate-fade-in-up transition-transform duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-blue-200/40 hover:shadow-2xl cursor-pointer"
              style={{ willChange: 'transform' }}
            >
              <div className="font-bold text-xl text-blue-800 mb-3">{item.title}</div>
              <div className="text-gray-600 text-base">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;