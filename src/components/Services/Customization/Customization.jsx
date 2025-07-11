import React from 'react';
import ContactForm from '../../ContactForm';

const Customization = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-[#191970] via-black to-blue-700 py-24 md:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
            NetSuite Customization & Development
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            Tailor NetSuite to fit your unique business processes and requirements
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Our Customization Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Workflows",
                description: "Design automated workflows that match your business processes",
                icon: "🔄"
              },
              {
                title: "Custom Fields & Forms",
                description: "Create custom fields and forms to capture your specific data",
                icon: "📝"
              },
              {
                title: "SuiteScript Development",
                description: "Advanced scripting to extend NetSuite functionality",
                icon: "💻"
              },
              {
                title: "Custom Reports & Dashboards",
                description: "Build tailored reports and dashboards for better insights",
                icon: "📊"
              },
              {
                title: "SuiteApps Development",
                description: "Develop custom applications for NetSuite",
                icon: "🚀"
              },
              {
                title: "Third-Party Integrations",
                description: "Connect NetSuite with external systems and applications",
                icon: "🔗"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We analyze your business requirements and current NetSuite setup"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Design custom solutions that align with your business goals"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Develop and thoroughly test all customizations"
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy solutions and provide ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Customize NetSuite?</h2>
          <p className="text-lg md:text-xl mb-8">Let's discuss your customization needs and create a solution that works for you.</p>
          <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Customization; 