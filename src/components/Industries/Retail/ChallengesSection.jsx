// import SectionHeader from './shared/SectionHeader';
// import Card from './shared/Card';

const ChallengesSection = ({ data, activeIndex, setActiveIndex }) => (
  <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
          <pattern id="challengesGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#challengesGrid)" />
        </svg>
      </div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader 
        title="Retail"
        highlight="Challenges"
        subtitle={data.subtitle}
      />

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <Card 
            item={data.items[activeIndex]} 
            type="challenge" 
          />
          
          <div className="flex space-x-2 mt-6 justify-center">
            {data.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-400' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative group max-w-xl">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
              <img 
                src={data.items[activeIndex].image} 
                alt="Retail Challenges" 
                className="w-full h-auto rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ChallengesSection;