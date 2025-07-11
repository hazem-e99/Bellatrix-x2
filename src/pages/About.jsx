import React, { useState, useEffect } from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutMission from '../components/About/AboutMission';
import AboutJourney from '../components/About/AboutJourney';
import AboutTeam from '../components/About/AboutTeam';
import AboutValues from '../components/About/AboutValues';
import AboutDifferentiators from '../components/About/AboutDifferentiators';
import AboutMilestones from '../components/About/AboutMilestones';
import AboutCTA from '../components/About/AboutCTA';
import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [cardsPerScreen, setCardsPerScreen] = useState(3);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Fetch data from data.json
  useEffect(() => {
    fetch('data/about.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Get cards per screen size
  const getCardsPerScreen = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // mobile screens
    }
    return 3; // default for SSR
  };

  // Update cards per screen on window resize
  useEffect(() => {
    const updateCardsPerScreen = () => {
      setCardsPerScreen(getCardsPerScreen());
    };
    updateCardsPerScreen();
    window.addEventListener('resize', updateCardsPerScreen);
    return () => window.removeEventListener('resize', updateCardsPerScreen);
  }, []);

  // Carousel sliding effect
  useEffect(() => {
    if (!data?.team?.members || !data.team.members.length > cardsPerScreen || isHovering) return;
    
    const slideSpeed = 0.3; // pixels per second - very slow
    let animationId;
    const animate = () => {
      setSlideOffset(prev => {
        const newOffset = prev - slideSpeed / 60; // 60fps
        if (newOffset <= -100) {
          // Reset to beginning for seamless loop
          return 0;
        }
        return newOffset;
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [data?.team?.members, cardsPerScreen, isHovering]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-2xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render components with fetched data
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero hero={data.hero} />
      <AboutMission mission={data.mission} />
      <AboutJourney journey={data.journey} />
      <AboutTeam
        team={data.team}
        cardsPerScreen={cardsPerScreen}
        slideOffset={slideOffset}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
      />
      <AboutValues values={data.values} />
      <AboutDifferentiators differentiators={data.differentiators} />
      <AboutMilestones milestones={data.milestones} />
      <AboutCTA cta={data.cta} onOpenContactModal={openContactModal} />
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Contact Us"
        subtitle="Let's discuss your project needs"
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};

export default About; 