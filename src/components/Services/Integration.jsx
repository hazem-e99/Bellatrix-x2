import React from 'react';

const Integration = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-[#191970] via-black to-blue-700 py-24 md:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
            NetSuite Integration Services
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            Connect NetSuite with your existing systems for seamless data flow
          </p>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Integration Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Integration",
                description: "Connect NetSuite with Shopify, Magento, WooCommerce, and other platforms",
                icon: "🛒"
              },
              {
                title: "CRM Integration",
                description: "Integrate with Salesforce, HubSpot, and other CRM systems",
                icon: "👥"
              },
              {
                title: "Payment Gateway Integration",
                description: "Connect with PayPal, Stripe, Square, and other payment processors",
                icon: "💳"
              },
              {
                title: "Warehouse Management",
                description: "Integrate with WMS systems for inventory management",
                icon: "📦"
              },
              {
                title: "Banking & Financial",
                description: "Connect with banks and financial institutions for automated transactions",
                icon: "🏦"
              },
              {
                title: "Custom API Integration",
                description: "Build custom integrations with any third-party system",
                icon: "🔌"
              }
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Integration Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Data Sync",
                description: "Eliminate manual data entry with real-time synchronization"
              },
              {
                title: "Improved Accuracy",
                description: "Reduce errors caused by manual data transfer"
              },
              {
                title: "Enhanced Productivity",
                description: "Save time and resources with automated processes"
              },
              {
                title: "Better Visibility",
                description: "Get a complete view of your business across all systems"
              },
              {
                title: "Scalable Solutions",
                description: "Integrations that grow with your business needs"
              },
              {
                title: "Cost Savings",
                description: "Reduce operational costs through automation"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Popular Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Shopify", "Magento", "Salesforce", "HubSpot", "PayPal", "Stripe",
              "Amazon", "eBay", "QuickBooks", "Xero", "Slack", "Microsoft Office"
            ].map((platform, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-blue-800">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-lg md:text-xl mb-8">Let's connect your systems and streamline your business operations.</p>
          <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition-all duration-300 hover:scale-105">
            Start Integration
          </button>
        </div>
      </section>
    </main>
  );
};

export default Integration; 