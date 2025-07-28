const StatsSection = ({ stats }) => (
  <section className="bg-white py-16 light-section">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
            <div className="text-sm text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;