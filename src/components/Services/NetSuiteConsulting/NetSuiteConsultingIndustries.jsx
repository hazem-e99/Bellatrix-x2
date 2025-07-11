import React from 'react';
import { motion } from 'framer-motion';

const NetSuiteConsultingIndustries = ({ industries, onIndustryClick }) => {
  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {industries.title.split(' ')[0]} <span className="text-cyan-400">{industries.title.split(' ')[1]}</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {industries.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onIndustryClick(industry.link)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">Key Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution, i) => (
                      <span key={i} className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetSuiteConsultingIndustries; 