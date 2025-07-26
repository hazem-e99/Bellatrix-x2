import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesSection = ({ data }) => (
  <section className="bg-gray-50 py-20 light-section">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {data.title} <span className="text-blue-600">Stories</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.items.map((study, index) => (
          <CaseStudyCard key={index} study={study} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;