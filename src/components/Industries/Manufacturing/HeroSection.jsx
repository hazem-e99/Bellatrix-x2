import { motion } from "framer-motion";

const HeroSection = ({ data, openContactModal }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-cyan-900/90"></div>
    
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
      />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-2 bg-blue-100/20 text-blue-200 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-blue-300/30">
          {data.tagline}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-semibold">
          {data.subtitle}
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {data.buttons.map((button, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={button.action === "openModal" ? openContactModal : () => {}}
              className={`${
                button.variant === "primary"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "border-2 border-white text-white hover:bg-white hover:text-blue-900"
              } px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {button.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;