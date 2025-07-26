import { motion } from "framer-motion";

const CtaSection = ({ data, openContactModal }) => (
  <section className="bg-gray-50 py-20 light-section">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {data.title}
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            {data.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {data.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openContactModal}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {data.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;