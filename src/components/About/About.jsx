import React from 'react';

const navLinks = [
  { id: 'who', label: 'Who We Are' },
  { id: 'values', label: 'Our Values' },
  { id: 'services', label: 'Services' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-900 min-h-screen w-full">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-28 pb-16 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Videos/HomeHeroSectionV.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-cyan-900/40 z-10"></div>
        {/* Quick Nav Bar */}
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/20">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-100 hover:text-cyan-300 font-medium px-3 py-1 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-slide-up">
            About Bellatrix
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mb-8 animate-fade-in delay-200 drop-shadow-xl">
            Empowering businesses with innovative Oracle NetSuite solutions, digital transformation, and expert consulting.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in delay-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who" className="relative bg-white/90 backdrop-blur-lg py-20 text-gray-900 rounded-t-3xl shadow-2xl animate-fade-in flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1 flex justify-center">
            <img
              src="/public/images/indleaders.jpg"
              alt="Leadership"
              className="rounded-full shadow-2xl w-56 h-56 object-cover border-4 border-cyan-400/30 animate-fade-in"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 flex items-center gap-2 mb-2">
              <svg className="w-7 h-7 text-cyan-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              Who We Are
            </h2>
            <p className="text-lg text-gray-700">
              Bellatrix is a leading consultancy specializing in Oracle NetSuite implementation, cloud solutions, and business process optimization. Our mission is to drive growth and efficiency for organizations through tailored digital strategies and expert support.
            </p>
            <div className="flex flex-col gap-2 mt-4 w-full">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 via-cyan-50 to-white rounded-xl shadow p-4 border-l-4 border-blue-600/30 hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                <span className="font-semibold text-blue-700">Vision:</span>
                <span className="text-gray-700">To be the trusted partner for digital transformation, enabling businesses to thrive in a rapidly evolving world.</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-50 via-blue-50 to-white rounded-xl shadow p-4 border-l-4 border-cyan-500/30 hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                <span className="font-semibold text-cyan-700">Approach:</span>
                <span className="text-gray-700">We combine deep industry expertise with innovative technology to deliver solutions that are practical, scalable, and results-driven.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative bg-gradient-to-br from-gray-900 via-blue-900/80 to-cyan-900/60 py-20 text-white overflow-hidden animate-fade-in flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300 flex items-center gap-2 justify-center">
            <svg className="w-7 h-7 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-800/60 to-cyan-700/40 rounded-2xl p-8 shadow-xl border-t-4 border-cyan-400 hover:scale-105 transition-all duration-300 animate-slide-up flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Integrity</h3>
              <p className="text-gray-100">We act with honesty and transparency, always putting our clients' interests first.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-cyan-700/40 rounded-2xl p-8 shadow-xl border-t-4 border-blue-400 hover:scale-105 transition-all duration-300 animate-slide-up delay-100 flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Innovation</h3>
              <p className="text-gray-100">We embrace new technologies and creative thinking to solve complex business challenges.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-cyan-700/40 rounded-2xl p-8 shadow-xl border-t-4 border-cyan-500 hover:scale-105 transition-all duration-300 animate-slide-up delay-200 flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">Client Success</h3>
              <p className="text-gray-100">Your success is our mission. We go the extra mile to ensure you achieve your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 text-gray-900 animate-fade-in flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 flex items-center gap-2 justify-center">
            <svg className="w-7 h-7 text-cyan-500 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none" /></svg>
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border-t-4 border-blue-600 hover:scale-105 transition-all duration-300 animate-slide-up flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">NetSuite Implementation</h3>
              <p className="text-gray-700">Seamless Oracle NetSuite deployment tailored to your business needs.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border-t-4 border-cyan-500 hover:scale-105 transition-all duration-300 animate-slide-up delay-100 flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Cloud Solutions</h3>
              <p className="text-gray-700">Modernize your operations with secure, scalable cloud technologies.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border-t-4 border-blue-400 hover:scale-105 transition-all duration-300 animate-slide-up delay-200 flex flex-col items-center text-center">
              <svg className="w-10 h-10 mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Business Consulting</h3>
              <p className="text-gray-700">Expert advice to optimize processes and drive digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative bg-gradient-to-br from-cyan-700 via-blue-700 to-gray-900 py-16 text-white flex flex-col items-center animate-fade-in mt-10">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-100 mb-8">Contact our team today to discuss your needs and discover how Bellatrix can help you achieve your goals.</p>
          <a
            href="mailto:info@bellatrix.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
