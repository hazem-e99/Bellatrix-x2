import React from "react";

export default function WhyPerfectSection({ data }) {
  if (!data) return null;
  console.log(data.items);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 light-section">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 leading-tight">
              {data.title || "Why It's"}{" "}
              <span className="text-blue-600">Perfect</span> for Your Business
            </h2>
     <ul className="space-y-4">
  {Array.isArray(data.items) &&
    data.items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-lg text-gray-800">{item}</span>
      </li>
    ))}
</ul>

          </div>

          {/* Image Content */}
          <div className="relative flex justify-center lg:justify-center px-4 lg:px-8">
            <div className="relative group max-w-md w-full">
              {/* Advanced Background Effects */}
              <div className="absolute -inset-4 opacity-30 group-hover:opacity-60 transition-all duration-700">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-2xl blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-xl blur-lg"></div>
                <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 via-blue-300/20 to-white/10 rounded-lg blur-md"></div>
              </div>

              <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-2xl p-3 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="relative bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-xl p-2 border border-white/20">
                  <img
                    src={data.illustration?.url}
                    alt={
                      data.illustration?.alt || "Payroll Dashboard Interface"
                    }
                    className="w-full h-[300px] object-cover rounded-lg shadow-xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.backgroundColor = "#1e40af";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
