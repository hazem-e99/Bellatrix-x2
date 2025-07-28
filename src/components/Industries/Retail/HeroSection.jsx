const HeroSection = ({ data, hero }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-cyan-900/90"></div>
    
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-semibold">
          {data.subtitle}
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
          {data.description}
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;