import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RotatingContentCard from "./RotatingContentCard";

const ChallengeSolutionSection = ({ challenges, solutions }) => {
  // تحقق متعمق من وجود البيانات
  if (
    !challenges ||
    !solutions ||
    !challenges.items ||
    !Array.isArray(challenges.items) ||
    !solutions.items ||
    !Array.isArray(solutions.items)
  ) {
    return (
      <div className="text-red-500 text-center py-8">
        No challenge/solution data available.
      </div>
    );
  }

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    // تأكد من وجود items قبل إنشاء المؤقتات
    if (!challenges.items.length || !solutions.items.length) return;

    const challengeInterval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % challenges.items.length);
    }, 4000);

    const solutionInterval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.items.length);
    }, 5000);

    return () => {
      clearInterval(challengeInterval);
      clearInterval(solutionInterval);
    };
  }, [challenges.items.length, solutions.items.length]);

  // باقي الكود بدون تغيير
  return (
    <>
      {/* Challenges Section */}
      <section className="bg-gray-50 py-20 light-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {challenges.title}{" "}
              <span className="text-blue-600">Challenges</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {challenges.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="flex-1 flex flex-col">
              <RotatingContentCard
                type="challenge"
                data={challenges.items[activeChallenge]}
                itemCount={challenges.items.length}
                activeIndex={activeChallenge}
                setActiveIndex={setActiveChallenge}
              />
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative group max-w-xl w-full h-full">
                <div className="relative bg-white rounded-2xl p-4 border border-gray-200 shadow-2xl h-full flex items-center">
                  <img
                    src={challenges.items[0].image}
                    alt="Manufacturing Challenges"
                    className="w-full h-full max-h-96 object-cover rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#001038" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {solutions.title} <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {solutions.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <img
                    src={solutions.items[0].image}
                    alt="NetSuite Manufacturing Solutions"
                    className="w-full h-auto rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <RotatingContentCard
                type="solution"
                data={solutions.items[activeSolution]}
                itemCount={solutions.items.length}
                activeIndex={activeSolution}
                setActiveIndex={setActiveSolution}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengeSolutionSection;
