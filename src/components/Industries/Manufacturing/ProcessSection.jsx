import { motion } from "framer-motion";
import ProcessPhase from "./ProcessPhase";

const ProcessSection = ({ data }) => (
  <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#001038" }}>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {data.title} <span className="text-cyan-400">Process</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {data.items.map((phase, index) => (
            <ProcessPhase key={index} phase={phase} index={index} totalPhases={data.items.length} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;