const CTASection = ({ data, onContactClick }) => (
  <section className="bg-gray-50 py-20 light-section">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-12 text-gray-800 text-center border border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {data.title}
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            {data.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {data.offers.map((offer, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={offer.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">{offer.title}</h4>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
          
          <button
            onClick={onContactClick}
            className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900"
          >
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;