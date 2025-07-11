import React from 'react';
import Modal from '../../Modal';
import ContactForm from '../../ContactForm';

const TrainingModals = ({ 
  isProgramModalOpen, 
  selectedProgram, 
  closeProgramModal, 
  openContactModal, 
  isFeatureModalOpen, 
  selectedFeature, 
  closeFeatureModal, 
  isContactModalOpen, 
  closeContactModal, 
  renderIcon 
}) => {
  return (
    <>
      {/* Program Details Modal */}
      <Modal
        isOpen={isProgramModalOpen && selectedProgram}
        onClose={closeProgramModal}
        icon={renderIcon(selectedProgram?.icon)}
        title={selectedProgram?.title}
        subtitle={selectedProgram?.shortDescription}
      >
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Program Overview</h4>
          <p className="text-gray-700 leading-relaxed">
            {selectedProgram?.longDescription}
          </p>
        </div>
        {/* Program Features */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-3">What You'll Learn</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedProgram?.features && selectedProgram.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 leading-relaxed text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Training Details */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-6">
          <h4 className="text-base font-bold text-gray-800 mb-3">Training Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1 text-xs">Duration</h5>
              <p className="text-xs text-blue-400 font-bold">2-5 Days Intensive</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1 text-xs">Format</h5>
              <p className="text-xs text-blue-400 font-bold">In-Person / Virtual</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-1 text-xs">Certificate</h5>
              <p className="text-xs text-blue-400 font-bold">Completion Certificate</p>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={openContactModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us for This Program
          </button>
        </div>
      </Modal>

      {/* Feature Details Modal */}
      <Modal
        isOpen={isFeatureModalOpen && selectedFeature}
        onClose={closeFeatureModal}
        icon={renderIcon(selectedFeature?.icon)}
        title={selectedFeature?.title}
        subtitle={selectedFeature?.shortDescription}
      >
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Detailed Overview</h4>
          <p className="text-gray-700 leading-relaxed">
            {selectedFeature?.detailedDescription}
          </p>
        </div>
        {/* Benefits & Features */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Key Benefits</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedFeature?.benefits && selectedFeature.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 leading-relaxed text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Statistics */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-6">
          <h4 className="text-base font-bold text-gray-800 mb-3">Key Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedFeature?.statistics && Object.entries(selectedFeature.statistics).map(([key, value], index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1 capitalize text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</h5>
                <p className="text-xs text-blue-400 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={openContactModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get More Information
          </button>
          <button 
            onClick={closeFeatureModal}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Contact Modal */}
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
    </>
  );
};

export default TrainingModals; 