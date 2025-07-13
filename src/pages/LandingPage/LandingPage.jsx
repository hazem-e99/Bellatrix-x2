import { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Industries from '../../components/Industries';
import './LandingPage.css';

// Custom fetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function LandingPage() {
  const { data, loading, error } = useFetch('/data/homeData.json');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-2xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">
        <div className="text-2xl font-bold">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      {data?.hero && (
        <section data-theme="dark">
          <Hero 
            slides={data.hero.slides} 
            stats={data.hero.stats} 
          />
        </section>
      )}
      
      {/* Services Section */}
      {data?.services && (
        <section data-theme="light">
          <Services 
            services={data.services.services}
            sectionHeader={data.services.sectionHeader}
            viewAllButton={data.services.viewAllButton}
          />
        </section>
      )}
      
      {/* Testimonials Section */}
      {data?.testimonials && (
        <section data-theme="dark">
          <Testimonials 
            testimonials={data.testimonials.testimonials}
            sectionHeader={data.testimonials.sectionHeader}
            ctaButton={data.testimonials.ctaButton}
          />
        </section>
      )}
      
      {/* Industries Section */}
      {data?.industries && (
        <section data-theme="light">
          <Industries 
            industries={data.industries.industries}
            sectionHeader={data.industries.sectionHeader}
            styles={data.industries.styles}
          />
        </section>
      )}
    </div>
  );
}

export default LandingPage;