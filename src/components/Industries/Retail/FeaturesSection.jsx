const FeaturesSection = ({ data }) => (
  <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Retail <span className="text-cyan-400">Features</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.items.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-2">{feature.description}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;