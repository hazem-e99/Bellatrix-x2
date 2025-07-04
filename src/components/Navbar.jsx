import { useState, useEffect, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Navbar = ({ services = [], industries = [], solutions = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [isLightSection, setIsLightSection] = useState(false);

  // Contact form modal functions
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Contact form data
  const modalContent = {
    title: "Contact Us",
    subtitle: "Let's discuss your project",
    formFields: {
      contactInfo: {
        title: "Contact Information",
        fields: [
          {
            label: "Full Name *",
            type: "text",
            placeholder: "John Doe",
            required: true
          },
          {
            label: "Email Address *",
            type: "email",
            placeholder: "john@company.com",
            required: true
          },
          {
            label: "Phone Number",
            type: "tel",
            placeholder: "+1 (555) 123-4567"
          }
        ]
      },
      companyInfo: {
        title: "Company Details",
        fields: [
          {
            label: "Company Name",
            type: "text",
            placeholder: "Your Company Inc."
          },
          {
            label: "Industry",
            type: "select",
            options: [
              "Select Industry",
              "Manufacturing",
              "Retail & E-commerce",
              "Healthcare",
              "Finance & Banking",
              "Technology",
              "Professional Services",
              "Non-Profit",
              "Other"
            ]
          },
          {
            label: "Country",
            type: "select",
            options: [
              "Select Country",
              "United States",
              "Canada",
              "United Kingdom",
              "Australia",
              "Germany",
              "France",
              "United Arab Emirates",
              "Saudi Arabia",
              "Egypt",
              "Other"
            ]
          }
        ]
      },
      message: {
        label: "Message",
        placeholder: "Tell us about your project requirements..."
      },
      submitNote: "✓ 24hr response",
      submitText: "Send Message"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // حل scrollY + getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollPosition = window.scrollY + navbarHeight + 1;
      const sections = Array.from(document.querySelectorAll('.light-section'));
      let isLight = false;
      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          isLight = true;
          break;
        }
      }
      setIsLightSection(isLight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Default solutions data if not provided
  const defaultSolutions = [
    {
      title: "NetSuite Implementation",
      description: "Complete NetSuite deployment and configuration solutions"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for your business needs"
    },
    {
      title: "System Integration",
      description: "Seamless integration with your existing systems"
    },
    {
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support"
    },
    {
      title: "Data Migration",
      description: "Secure and efficient data migration services"
    },
    {
      title: "Process Optimization",
      description: "Business process improvement and automation"
    }
  ];

  const solutionsData = solutions.length > 0 ? solutions : defaultSolutions;

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/10 shadow-2xl backdrop-blur-md"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-cyan-300/50 to-blue-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Premium Logo */}
            <a href="/" className="flex items-center group">
              <div className="flex items-center justify-center h-56 w-56 mr-2 relative">
                <div className="absolute top-0 left-0 h-56 w-56 w-full h-full">
                  <AnimatePresence mode="wait">
                    {isLightSection ? (
                      <motion.img
                        key="logoThree"
                        src="/images/logoThree.png"
                        alt="Bellatrix Logo Three"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute top-1/2 left-1/2 h-20 w-20 object-contain -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: 2 }}
                      />
                    ) : scrolled ? (
                      <motion.img
                        key="logoTwo"
                        src="/images/logoTwo.png"
                        alt="Bellatrix Logo Two"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute top-1/2 left-1/2 h-56 w-56 object-contain -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: 2 }}
                      />
                    ) : (
                      <motion.img
                        key="logoOne"
                        src="/images/logoOne.png"
                        alt="Bellatrix Logo One"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute top-1/2 left-1/2 h-36 w-36 object-contain -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: 2 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => handleMenuEnter("services")} onMouseLeave={handleMenuLeave}>
                <button
                  className={`flex items-center px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 border ${
                    openDropdown === "services"
                      ? `${isLightSection ? "text-black border-blue-400/20 shadow" : "text-white border-blue-400/30 shadow"}`
                      : `${isLightSection ? "text-black/90 hover:text-black border-transparent hover:border-black/20" : "text-white/90 hover:text-white border-transparent hover:border-white/20"}`
                  }`}
                >
                  <span>Services</span>
                </button>
                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-56 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg z-50 py-2"
                      onMouseEnter={() => handleMenuEnter("services")}
                      onMouseLeave={handleMenuLeave}
                    >
                      {services.map((service, index) => (
                        <a
                          key={service.title || index}
                          href="#"
                          className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-150 text-base font-medium"
                        >
                          {service.title || `Service ${index + 1}`}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative" onMouseEnter={() => handleMenuEnter("solutions")} onMouseLeave={handleMenuLeave}>
                <button
                  className={`flex items-center px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 border ${
                    openDropdown === "solutions"
                      ? `${isLightSection ? "text-black border-blue-400/20 shadow" : "text-white border-blue-400/30 shadow"}`
                      : `${isLightSection ? "text-black/90 hover:text-black border-transparent hover:border-black/20" : "text-white/90 hover:text-white border-transparent hover:border-white/20"}`
                  }`}
                >
                  <span>Solutions</span>
                </button>
                <AnimatePresence>
                  {openDropdown === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-56 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg z-50 py-2"
                      onMouseEnter={() => handleMenuEnter("solutions")}
                      onMouseLeave={handleMenuLeave}
                    >
                      {solutionsData.map((solution, index) => (
                        <a
                          key={solution.title || index}
                          href="#"
                          className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-150 text-base font-medium"
                        >
                          {solution.title || `Solution ${index + 1}`}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div className="relative" onMouseEnter={() => handleMenuEnter("industries")} onMouseLeave={handleMenuLeave}>
                <button
                  className={`flex items-center px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 border ${
                    openDropdown === "industries"
                      ? `${isLightSection ? "text-black border-blue-400/20 shadow" : "text-white border-blue-400/30 shadow"}`
                      : `${isLightSection ? "text-black/90 hover:text-black border-transparent hover:border-black/20" : "text-white/90 hover:text-white border-transparent hover:border-white/20"}`
                  }`}
                >
                  <span>Industries</span>
                </button>
                <AnimatePresence>
                  {openDropdown === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-56 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg z-50 py-2"
                      onMouseEnter={() => handleMenuEnter("industries")}
                      onMouseLeave={handleMenuLeave}
                    >
                      {industries.map((item, index) => (
                        <a
                          key={item.label || index}
                          href="#"
                          className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-150 text-base font-medium"
                        >
                          {item.label || `Industry ${index + 1}`}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 border border-transparent hover:border-white/20 ${isLightSection ? "text-black hover:text-black" : "text-white/90 hover:text-white"}`}
              >
                About
              </Link>

              {/* Premium Contact button */}
              <button
                onClick={openContactModal}
                className="relative ml-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-blue-200/40 transition-all duration-300 transform hover:scale-105 border border-white/10 backdrop-blur-sm group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Contact</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 focus:outline-none border border-white/10 backdrop-blur-sm transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Premium Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/40 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("mobileServices")}
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <span>Services</span>
                </button>
                {openDropdown === "mobileServices" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 ml-4 space-y-2"
                  >
                    {services.slice(0, 3).map((item, index) => (
                      <a
                        key={item.title || index}
                        href="#"
                        className="block px-4 py-3 text-sm text-white/70 rounded-lg hover:bg-white/5 hover:text-white border border-white/5 backdrop-blur-sm transition-all duration-300"
                      >
                        {item.title || `Service ${index + 1}`}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("mobileSolutions")}
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <span>Solutions</span>
                </button>
                {openDropdown === "mobileSolutions" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 ml-4 space-y-2"
                  >
                    {solutionsData.slice(0, 3).map((item, index) => (
                      <a
                        key={item.title || index}
                        href="#"
                        className="block px-4 py-3 text-sm text-white/70 rounded-lg hover:bg-white/5 hover:text-white border border-white/5 backdrop-blur-sm transition-all duration-300"
                      >
                        {item.title || `Solution ${index + 1}`}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("mobileIndustries")}
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <span>Industries</span>
                </button>
                {openDropdown === "mobileIndustries" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 ml-4 space-y-2"
                  >
                    {industries.slice(0, 3).map((item, index) => (
                      <a
                        key={item.label || index}
                        href="#"
                        className="block px-4 py-3 text-sm text-white/70 rounded-lg hover:bg-white/5 hover:text-white border border-white/5 backdrop-blur-sm transition-all duration-300"
                      >
                        {item.label || `Industry ${index + 1}`}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-4 py-3 text-base font-medium text-white/90 rounded-xl hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300"
              >
                About
              </Link>

              {/* Mobile Contact button */}
              <button
                onClick={openContactModal}
                className="block w-full px-4 py-3 mt-4 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-white/10 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title={modalContent.title}
        subtitle={modalContent.subtitle}
      >
        <div className="p-2">
          <ContactForm />
        </div>
      </Modal>

      <style>{`
        @keyframes fade-slide {
          0% { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-slide {
          animation: fade-slide 0.22s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
