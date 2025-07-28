// import SectionHeader from './shared/SectionHeader';
// import Card from './shared/Card';

const FeaturesSection = ({ data }) => (
  <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#001038'}}>
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader 
        title="Retail"
        highlight="Features"
        subtitle={data.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.items.map((feature, index) => (
          <Card 
            key={index}
            item={feature}
            type="feature"
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;