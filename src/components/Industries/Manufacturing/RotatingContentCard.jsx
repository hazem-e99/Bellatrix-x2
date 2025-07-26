import { motion } from "framer-motion";

const RotatingContentCard = ({ type, data, itemCount, activeIndex, setActiveIndex }) => {
  const isChallenge = type === "challenge";
  const isSolution = type === "solution";

  return (
    <div className={`${isChallenge ? 'bg-white' : 'bg-white/5 backdrop-blur-sm'} rounded-2xl ${isChallenge ? 'p-8 border border-gray-200 shadow-xl' : 'p-8 border border-white/10'} h-full flex flex-col justify-between`}>
      <div className="flex-1 flex flex-col justify-center">
        <div className={`w-16 h-16 ${isChallenge ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-gradient-to-br from-green-500 to-green-700'} rounded-xl flex items-center justify-center mb-6`}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={data.icon}
            />
          </svg>
        </div>
        <h3 className={`text-2xl ${isChallenge ? 'lg:text-3xl' : ''} font-bold ${isChallenge ? 'text-gray-800' : 'text-white'} mb-4`}>
          {data.title}
        </h3>
        <p className={`${isChallenge ? 'text-gray-600 text-lg leading-relaxed' : 'text-gray-300'} mb-6`}>
          {data.description}
        </p>

        {isChallenge && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span className="text-blue-700 font-semibold">
                Impact: {data.impact}
              </span>
            </div>
          </div>
        )}

        {isSolution && (
          <>
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-white mb-3">Key Features:</h4>
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span className="text-green-300 font-semibold">
                  Result: {data.benefits}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-6 justify-center">
        {Array.from({ length: itemCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? isChallenge
                  ? "bg-blue-500"
                  : "bg-green-400"
                : isChallenge
                ? "bg-gray-300"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingContentCard;