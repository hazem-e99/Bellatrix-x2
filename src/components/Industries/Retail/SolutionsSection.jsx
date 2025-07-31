// import Card from './shared/Card';

const SolutionsSection = ({ data, activeIndex, setActiveIndex }) => (
  <section className="bg-gray-50 py-20 light-section">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          NetSuite <span className="text-blue-600">Solutions</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <div className="relative group max-w-xl">
            <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
              <img 
                src={data.items[activeIndex].image} 
                alt="NetSuite Retail Solutions" 
                className="w-full h-110 object-cover rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-xl shadow p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">{data.items[activeIndex]?.title}</h3>
            <p className="text-gray-700 mb-2">{data.items[activeIndex]?.description}</p>
            {/* Add more fields as needed */}
          </div>
          
          <div className="flex space-x-2 mt-6 justify-center">
            {data.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsSection;