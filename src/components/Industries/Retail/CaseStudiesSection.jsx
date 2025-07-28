// import SectionHeader from './shared/SectionHeader';

const CaseStudiesSection = ({ data }) => (
  <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader 
        title="Success"
        highlight="Stories"
        subtitle={data.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.items.map((study, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-48">
              <img 
                src={study.image} 
                alt={study.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{study.company}</h3>
                <p className="text-cyan-300">{study.industry}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Results:</h4>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;