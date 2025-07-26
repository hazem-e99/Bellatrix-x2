import { motion } from "framer-motion";

const CaseStudyCard = ({ study, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
  >
    <div className="relative h-48">
      <img
        src={study.image}
        alt={study.company}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <h3 className="text-xl font-bold text-white">{study.company}</h3>
        <p className="text-blue-200">{study.industry}</p>
      </div>
    </div>

    <div className="p-6">
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
        <p className="text-gray-600 text-sm">{study.challenge}</p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
        <p className="text-gray-600 text-sm">{study.solution}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Results:</h4>
        <div className="space-y-2">
          {study.results.map((result, i) => (
            <div key={i} className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default CaseStudyCard;