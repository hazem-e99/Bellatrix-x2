import React, { useEffect, useState } from 'react';
// HR Sections
import HeroSection from './Solutions/HrPage/HeroSection';
import BenefitsSection from './Solutions/HrPage/BenefitsSection';
import ProductModulesSection from './Solutions/HrPage/ProductModulesSection';
import UseCasesSection from './Solutions/HrPage/UseCasesSection';
import PricingSection from './Solutions/HrPage/PricingSection';
import StrongCTASection from './Solutions/HrPage/StrongCTASection';
import FAQSection from './Solutions/HrPage/FAQSection';
// Payroll Sections
import PayrollHeroSection from './Solutions/PayrollPage/HeroSection';
// import PayrollBenefitsSection from './Solutions/PayrollPage/BenefitsSection'; // If exists
import PayrollFAQSection from './Solutions/PayrollPage/FAQSection';
// import PayrollPricingSection from './Solutions/PayrollPage/PricingSection'; // If exists
// import PayrollProductModulesSection from './Solutions/PayrollPage/ProductModulesSection'; // If exists
// import PayrollUseCasesSection from './Solutions/PayrollPage/UseCasesSection'; // If exists
import ContactCTASection from './Solutions/PayrollPage/ContactCTASection';
import CoreWorkflowStepper from './Solutions/PayrollPage/CoreWorkflowStepper';
import HowItWorksSection from './Solutions/PayrollPage/HowItWorksSection';
import KeyFeaturesSection from './Solutions/PayrollPage/KeyFeaturesSection';
import WhyPerfectSection from './Solutions/PayrollPage/WhyPerfectSection';
import LiveDemoModal from './Solutions/PayrollPage/LiveDemoModal';
import PainPointsSection from './Solutions/PayrollPage/PainPointsSection';

// Map section keys to their corresponding components
const SECTION_COMPONENTS = {
  // HR
  hero: HeroSection,
  benefits: BenefitsSection,
  modules: ProductModulesSection,
  useCases: UseCasesSection,
  pricing: PricingSection,
  cta: StrongCTASection,
  faq: FAQSection,
  // Payroll
  payrollHero: PayrollHeroSection,
  // payrollBenefits: PayrollBenefitsSection, // If exists
  payrollFaq: PayrollFAQSection,
  // payrollPricing: PayrollPricingSection, // If exists
  // payrollModules: PayrollProductModulesSection, // If exists
  // payrollUseCases: PayrollUseCasesSection, // If exists
  contactCTA: ContactCTASection,
  coreWorkflowStepper: CoreWorkflowStepper,
  howItWorks: HowItWorksSection,
  keyFeatures: KeyFeaturesSection,
  whyPerfect: WhyPerfectSection,
  liveDemoModal: LiveDemoModal,
  painPoints: PainPointsSection,
};

/**
 * DynamicPage - Parent component for dynamic, data-driven pages
 * @param {string} pageType - The type of page to load (e.g., 'hr', 'payroll')
 */
export default function DynamicPage({ pageType }) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/data/${pageType}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load page data');
        return res.json();
      })
      .then((data) => {
        // Try to get the solution object (e.g. hrSolution, payrollSolution), fallback to root
        const solutionKey = Object.keys(data).find((k) => k.endsWith('Solution'));
        setPageData(solutionKey ? data[solutionKey] : data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [pageType]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading..</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;
  if (!pageData || !pageData.sections) return <div>No data available</div>;

  return (
    <main>
      {/* Dynamically render each section if settings.show === true */}
      {Object.entries(pageData.sections).map(([sectionKey, sectionData]) => {
        const SectionComponent = SECTION_COMPONENTS[sectionKey];
        if (!SectionComponent || !sectionData?.settings?.show) return null;
        return <SectionComponent key={sectionKey} data={sectionData} />;
      })}
    </main>
  );
} 