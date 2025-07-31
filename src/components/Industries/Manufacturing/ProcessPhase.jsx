import { motion } from "framer-motion";

const ProcessPhase = ({ phase, index, totalPhases }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="text-center"
  >
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
        <span className="text-white font-bold text-lg">{index + 1}</span>
      </div>
      {index < totalPhases - 1 && (
        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-y-1/2"></div>
      )}
    </div>

    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
      <div className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full mb-3 inline-block">
        {phase.duration}
      </div>
      <p className="text-gray-300 text-sm mb-3">{phase.description}</p>
      <div className="space-y-1">
        {Array.isArray(phase.deliverables) ? (
          phase.deliverables.map((deliverable, i) => (
            <div key={i} className="text-xs text-gray-400">• {deliverable}</div>
          ))
        ) : (
          <div className="text-xs text-gray-400 italic">No deliverables listed.</div>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProcessPhase;