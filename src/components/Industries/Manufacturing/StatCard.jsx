import { motion } from "framer-motion";

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
    }}
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 },
    }}
    className="group relative"
  >
    <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-cyan-50/20 transition-all duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={stat.icon}
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2"
        >
          {stat.value}
        </motion.div>

        <div className="text-base md:text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
          {stat.label}
        </div>

        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {stat.description}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full translate-y-8 -translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </motion.div>
);

export default StatCard;