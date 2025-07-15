import React from 'react';

const Testimonials = ({ testimonials = [], sectionHeader = {} }) => {

  const renderStars = (rating) => {
    return (
      <ul className="flex space-x-1" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <svg
              className={`w-4 h-4 ${i < rating ? 'text-blue-400 fill-current' : 'text-blue-200 fill-current'}`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </li>
        ))}
      </ul>
    );
  };

  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#001038' }} aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 relative z-10">

        <header className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-white-400">{sectionHeader?.gradientText || 'Trusted by Industry Leaders'}</span>
          </h2>
          <p className="text-lg text-white-200 leading-relaxed max-w-3xl mx-auto">
            {sectionHeader?.subtitle || "Don't just take our word for it—here's what our clients say."}
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Testimonials List */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-8 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group backdrop-blur-sm h-full flex flex-col justify-center">
              <div className="relative z-10 space-y-6">
                {displayedTestimonials.map((testimonial, index) => (
                  <article key={testimonial.id} className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex items-start">
                      <div className="relative mr-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                          <span className="text-white font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                      </div>

                      <div className="flex-1">
                        <figure>
                          <blockquote className="text-white text-sm mb-3 leading-relaxed group-hover/item:text-blue-100 transition-all duration-300">
                            <p>"{testimonial.quote}"</p>
                          </blockquote>
                          <figcaption className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                                {testimonial.avatar}
                              </div>
                              <div>
                                <div className="font-semibold text-white text-sm group-hover/item:text-blue-300 transition-all duration-300">
                                  {testimonial.name}
                                </div>
                                <div className="text-gray-300 text-xs">{testimonial.title}</div>
                              </div>
                            </div>
                            {renderStars(testimonial.rating)}
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <aside className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                <img
                  src="/images/indleaders.jpg"
                  alt="Industry leaders collaborating with technology"
                  className="w-full h-auto rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Industry Leaders</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
