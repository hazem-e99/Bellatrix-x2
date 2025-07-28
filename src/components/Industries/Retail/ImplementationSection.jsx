// import SectionHeader from './shared/SectionHeader';
// import Stepper from './shared/Stepper';

const ImplementationSection = ({ data }) => (
  <section className="py-20 bg-white light-section">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600">
          {data.description}
        </p>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        {data.processTitle}
      </h3>
      <Stepper steps={data.steps} />
    </div>
  </section>
);

export default ImplementationSection;