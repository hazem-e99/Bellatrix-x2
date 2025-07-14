import React from 'react';

const services = [
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
];

const ServicesOverview = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Our Customization Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview; 