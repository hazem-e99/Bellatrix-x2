import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
  fetchAllServices, 
  setCurrentService,
  fetchSolutionData // For backward compatibility
} from "../Redux/features/services/servicesSlice";

// Import all sections
import HeroSection from "../components/Solutions/HrPage/HeroSection";
import BenefitsSection from "../components/Solutions/HrPage/BenefitsSection";
import PainPointsSection from "./Payroll/Refactored/PainPointsSection";
import FAQSection from "./Payroll/Refactored/FAQSection";
import WhyPerfectSection from "./Payroll/Refactored/WhyPerfectSection";
import HowItWorksSection from "./Payroll/Refactored/HowItWorksSection";
import KeyFeaturesSection from "./Payroll/Refactored/KeyFeaturesSection";
import CoreWorkflowStepper from "./Payroll/Refactored/CoreWorkflowStepper";
import UseCasesSection from "../components/Solutions/HrPage/UseCasesSection";
import ProductModulesSection from "../components/Solutions/HrPage/ProductModulesSection";
import PricingSection from "../components/Solutions/HrPage/PricingSection";
import StrongCTASection from "../components/Solutions/HrPage/StrongCTASection";
import ContactCTASection from "./Payroll/Refactored/ContactCTASection";
import ContactModal from "./Payroll/Refactored/ContactModal";

const DynamicPage = () => {
  const { pageType } = useParams();
  const [showContactModal, setShowContactModal] = useState(false);
  const [demoState, setDemoState] = useState({
    showDemo: false,
    demoIdx: 0,
    imgFade: true,
  });
  const dispatch = useDispatch();
  
  const { 
    allServices, 
    currentService,
    loading, 
    error 
  } = useSelector((state) => state.services);

  // Fetch all services on component mount
  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);

  // Find and set current service when pageType or services change
  useEffect(() => {
    if (pageType && allServices.length > 0) {
      const matchedService = allServices.find(service => 
        service.slug === pageType.toLowerCase() || 
        service.slug?.toLowerCase() === pageType.toLowerCase()
      );
      
      if (matchedService) {
        console.log('Matched service data:', matchedService);
        dispatch(setCurrentService(matchedService));
      } else {
        console.warn(`No service found for slug: ${pageType}`);
      }
    }
  }, [pageType, allServices, dispatch]);

  // Demo control functions
  const handleDemoChange = (newIdx) => {
    setDemoState((prev) => ({ ...prev, imgFade: false }));
    setTimeout(() => {
      setDemoState((prev) => ({
        ...prev,
        demoIdx: newIdx,
        imgFade: true,
      }));
    }, 200);
  };

  const nextDemo = () => {
    const demoImages = currentService?.demo?.images || [];
    handleDemoChange((demoState.demoIdx + 1) % demoImages.length);
  };

  const prevDemo = () => {
    const demoImages = currentService?.demo?.images || [];
    handleDemoChange(
      (demoState.demoIdx - 1 + demoImages.length) % demoImages.length
    );
  };

  // Loading and error states
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading services...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error loading services: {error}</div>;
  }

  if (!currentService) {
    return (
      <div className="text-center p-8">
        <h2>No data available for this page.</h2>
        <p>Available services: {allServices.map(s => s.name).join(', ')}</p>
      </div>
    );
  }

  return (
    <div className="dynamic-page">
      {/* Hero Section */}
      {currentService.hero?.settings?.show && (
        <HeroSection data={currentService.hero} />
      )}

      {/* Benefits Section */}
      {currentService.benefits?.settings?.show && (
        <BenefitsSection
          data={{
            ...currentService.benefits,
            demo: currentService.demo,
          }}
        />
      )}

      {/* Pain Points Section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentService.painPoints?.settings?.show && (
          <div style={{ width: "80%" }}>
            <PainPointsSection
              painPoints={currentService.painPoints.items}
              illustration={currentService.painPoints.illustration}
            />
          </div>
        )}
      </div>

      {/* Why Perfect Section (Payroll only) */}
      {pageType === "payroll" &&
        currentService.useCases?.settings?.show && (
          <WhyPerfectSection data={currentService.useCases} />
        )}

      {/* How It Works Section */}
      {currentService.howItWorks?.settings?.show && (
        <HowItWorksSection />
      )}

      {/* Key Features Section */}
      {currentService.features?.settings?.show && (
        <KeyFeaturesSection
          features={currentService.features.items}
          demoImages={currentService.demo?.images || []}
          {...demoState}
          setShowDemo={(show) =>
            setDemoState((prev) => ({ ...prev, showDemo: show }))
          }
          setDemoIdx={(idx) =>
            setDemoState((prev) => ({ ...prev, demoIdx: idx }))
          }
          setImgFade={(fade) =>
            setDemoState((prev) => ({ ...prev, imgFade: fade }))
          }
          nextDemo={nextDemo}
          prevDemo={prevDemo}
          handleDemoChange={handleDemoChange}
        />
      )}

      {/* Core Workflow Stepper */}
      {currentService.workflow?.settings?.show && (
        <section className="py-20 bg-white light-section">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {currentService.name}
              </h2>
              <p className="text-xl text-gray-600">
                {currentService.description}
              </p>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Core Workflow
            </h3>
            <CoreWorkflowStepper />
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {currentService.useCases?.settings?.show && (
        <UseCasesSection data={currentService.useCases} />
      )}

      {/* Product Modules Section */}
      {currentService.modules?.settings?.show && (
        <ProductModulesSection data={currentService.modules} />
      )}

      {/* Pricing Section */}
      {currentService.pricing?.settings?.show && (
        <PricingSection data={currentService.pricing} />
      )}

      {/* Strong CTA Section */}
      {currentService.cta?.settings?.show && (
        <StrongCTASection data={currentService.cta} />
      )}

      {/* FAQ Section */}
      {currentService.faq?.settings?.show && (
        <FAQSection faqs={currentService.faq.items} />
      )}

      {/* Contact CTA Section */}
      {currentService.contactCTA?.settings?.show && (
        <ContactCTASection openContactModal={() => setShowContactModal(true)} />
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-6">
            Fill out the form below and we'll get back to you soon.
          </p>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </ContactModal>
    </div>
  );
};

export default DynamicPage;