import React from "react";

const CustomerSupport = () => {
  return (
    <div className="bg-white text-gray-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight tracking-tight">
            Bellatrix Customer Support: When and How You Need It
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                alt="Bellatrix Customer Support"
                src="/TrainingWhy.jpg"
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              For Bellatrix technical support concerning unexpected ERP
              implementation issues or keeping an eye on customizations and
              configurations, our team of Bellatrix consultants are available for
              as much or as little support as you need.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <span className="leading-relaxed">
                  Always be in the loop with weekly status update calls with your
                  designated project manager.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <span className="leading-relaxed">
                  Get a peek into what is being done with access to JIRA, giving you
                  a real-time view into progress.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <span className="leading-relaxed">
                  Remain in direct communication throughout the day with your
                  designated team through Slack.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                <span className="leading-relaxed">
                  Whether you prefer tickets, calls, or emails, communicating with
                  us is a breeze.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
