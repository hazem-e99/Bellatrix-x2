import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  const [solutionData, setSolutionData] = useState(null);

  useEffect(() => {
    if (!pageType) return; // تأكيد إن pageType موجود
    var url = "";
    if (pageType == "hr") {
      url = "hr  link";
    } else if (pageType == "payroll") {
      url = "payroll link";
    }
    const loadData = async () => {
      try {
        const response = await fetch(`/data/${pageType}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const key = `${pageType.toLowerCase()}Solution`;
        setSolutionData(data[key]);
      } catch (err) {
        console.error("Failed to load JSON:", err);
      }
    };

    loadData();
  }, [pageType]);

  if (!solutionData) return <div>Loading...</div>;

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
    const demoImages = solutionData.demo?.images || [];
    handleDemoChange((demoState.demoIdx + 1) % demoImages.length);
  };

  const prevDemo = () => {
    const demoImages = solutionData.demo?.images || [];
    handleDemoChange(
      (demoState.demoIdx - 1 + demoImages.length) % demoImages.length
    );
  };
  console.log(solutionData.sections.useCases.items);

  return (
    <div className="dynamic-page">
      {/* Hero Section */}
      {solutionData.sections?.hero?.settings?.show && (
        <HeroSection data={solutionData.sections.hero} />
      )}

      {/* Benefits Section */}
      {solutionData.sections?.benefits?.settings?.show && (
        <BenefitsSection
          data={{
            ...solutionData.sections.benefits,
            demo: solutionData.demo,
          }}
        />
      )}

      {/* Pain Points Section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {solutionData.sections?.painPoints?.settings?.show && (
          <div style={{ width: "80%" }}>
            <PainPointsSection
              painPoints={solutionData.sections.painPoints.items}
              illustration={solutionData.sections.painPoints.illustration}
            />
          </div>
        )}
      </div>

      {/* Why Perfect Section (Payroll only) */}
      {pageType === "payroll" &&
        solutionData.sections?.useCases?.settings?.show && (
          <WhyPerfectSection data={solutionData.sections.useCases} />
        )}

      {/* How It Works Section */}
      {solutionData.sections?.howItWorks?.settings?.show && (
        <HowItWorksSection />
      )}

      {/* Key Features Section */}
      {solutionData.sections?.features?.settings?.show && (
        <KeyFeaturesSection
          features={solutionData.sections.features.items}
          demoImages={solutionData.demo?.images || []}
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
      {solutionData.sections?.workflow?.settings?.show && (
        <section className="py-20 bg-white light-section">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Payroll System Built for All Industries
              </h2>
              <p className="text-xl text-gray-600">
                Streamline your entire payroll lifecycle — from onboarding to
                salary disbursement — with a secure, intuitive platform.
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
      {solutionData.sections?.useCases?.settings?.show && (
        <UseCasesSection data={solutionData.sections.useCases} />
      )}

      {/* Product Modules Section */}
      {solutionData.sections?.modules?.settings?.show && (
        <ProductModulesSection data={solutionData.sections.modules} />
      )}

      {/* Pricing Section */}
      {solutionData.sections?.pricing?.settings?.show && (
        <PricingSection data={solutionData.sections.pricing} />
      )}

      {/* Strong CTA Section */}
      {solutionData.sections?.cta?.settings?.show && (
        <StrongCTASection data={solutionData.sections.cta} />
      )}

      {/* FAQ Section */}
      {solutionData.sections?.faq?.settings?.show && (
        <FAQSection faqs={solutionData.sections.faq.items} />
      )}

      {/* Contact CTA Section */}
      {solutionData.sections?.contactCTA?.settings?.show && (
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
