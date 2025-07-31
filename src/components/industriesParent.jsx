import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndustries } from "../Redux/features/industries/industriesSlice";
import HeroSection from "./Industries/Manufacturing/HeroSection";
import StatsSection from "./Industries/Manufacturing/StatsSection";
import ChallengeSolutionSection from "./Industries/Manufacturing/ChallengeSolutionSection";
import SolutionsSection from "./Industries/Retail/SolutionsSection";
import FeaturesSection from "./Industries/Retail/FeaturesSection";
import CaseStudiesSection from "./Industries/Manufacturing/CaseStudiesSection";
import ImplementationSection from "./Industries/Retail/ImplementationSection";
import CTASection from "./Industries/Retail/CTASection";
import ContactModal from "./Payroll/Refactored/ContactModal";
import ProcessSection from "./Industries/Manufacturing/ProcessSection";

const IndustriesParent = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { industries, loading, error } = useSelector(
    (state) => state.industries
  );
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    if (!industries.length) {
      dispatch(fetchIndustries());
    }
  }, [dispatch, industries.length]);

  // Find the industry object by slug
  const matchedIndustry = industries.find((industry) => industry.slug === slug);

  useEffect(() => {
    if (matchedIndustry) {
      console.log("Matched Industry:", matchedIndustry);
    }
  }, [matchedIndustry]);

  // Auto-rotate challenges and solutions if they exist in the data
  useEffect(() => {
    if (!matchedIndustry) return;

    let challengeInterval, solutionInterval;

    if (matchedIndustry.challenges?.items) {
      challengeInterval = setInterval(() => {
        setActiveChallenge(
          (prev) => (prev + 1) % matchedIndustry.challenges.items.length
        );
      }, 4000);
    }

    if (matchedIndustry.solutions?.items) {
      solutionInterval = setInterval(() => {
        setActiveSolution(
          (prev) => (prev + 1) % matchedIndustry.solutions.items.length
        );
      }, 5000);
    }

    return () => {
      challengeInterval && clearInterval(challengeInterval);
      solutionInterval && clearInterval(solutionInterval);
    };
  }, [matchedIndustry]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading industry data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading industries: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!matchedIndustry) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>No data available for this industry.</p>
        </div>
      </div>
    );
  } else {
    console.log(matchedIndustry.stats);
  }

  // Use matchedIndustry for all rendering below
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        data={matchedIndustry.meta || matchedIndustry.hero}
        hero={matchedIndustry.hero}
        openContactModal={openContactModal}
      />
      {matchedIndustry.stats && <StatsSection data={matchedIndustry.stats} />}
      {/* Render either combined or separate challenge/solution sections based on data structure */}
     {matchedIndustry.challenges && matchedIndustry.solutions ? (
  <ChallengeSolutionSection 
    challenges={matchedIndustry.challenges}
    solutions={matchedIndustry.solutions}
  />
) : null}
      {matchedIndustry.features && (
        <FeaturesSection data={matchedIndustry.features} />
      )}
      {matchedIndustry.caseStudies && (
        <CaseStudiesSection data={matchedIndustry.caseStudies} />
      )}
      {matchedIndustry.implementation &&
        (matchedIndustry.implementation.steps ? (
          <ImplementationSection data={matchedIndustry.implementation} />
        ) : (
          <ProcessSection data={matchedIndustry.implementation} />
        ))}
      <CTASection
        data={matchedIndustry.cta}
        onContactClick={openContactModal}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        data={matchedIndustry.contactModal}
      />
    </div>
  );
};

export default IndustriesParent;
