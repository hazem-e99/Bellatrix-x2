import React, { useState, useEffect } from 'react';

// Import child components
import TrainingHero from './TrainingHero';
import TrainingPrograms from './TrainingPrograms';
import TrainingModules from './TrainingModules';
import TrainingWhyChoose from './TrainingWhyChoose';
import TrainingModals from './TrainingModals';
import TrainingStyles from './TrainingStyles';

const Training = () => {
    const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('data/training.json');
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Video Protection - Apply only to video elements
    useEffect(() => {
        const handleVideoContextMenu = (e) => {
            // Only prevent context menu on video elements
            if (e.target.tagName === 'VIDEO') {
                e.preventDefault();
                return false;
            }
        };

        const handleVideoDragStart = (e) => {
            // Only prevent drag on video elements
            if (e.target.tagName === 'VIDEO') {
                e.preventDefault();
                return false;
            }
        };

        const handleVideoSelectStart = (e) => {
            // Only prevent selection on video elements
            if (e.target.tagName === 'VIDEO') {
                e.preventDefault();
                return false;
            }
        };

        const handleKeyDown = (e) => {
            // Keep keyboard shortcuts disabled globally for dev tools protection
            if (e.keyCode === 123) { // F12
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
                e.preventDefault();
                return false;
            }
            if (e.ctrlKey && e.keyCode === 83) { // Ctrl+S
                e.preventDefault();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleVideoContextMenu);
        document.addEventListener('dragstart', handleVideoDragStart);
        document.addEventListener('selectstart', handleVideoSelectStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleVideoContextMenu);
            document.removeEventListener('dragstart', handleVideoDragStart);
            document.removeEventListener('selectstart', handleVideoSelectStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  // Shared event handlers
    const openProgramModal = (program) => {
        setSelectedProgram(program);
        setIsProgramModalOpen(true);
    };

    const closeProgramModal = () => {
        setIsProgramModalOpen(false);
        setSelectedProgram(null);
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
        setIsProgramModalOpen(false);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };

    const openFeatureModal = (feature) => {
        setSelectedFeature(feature);
        setIsFeatureModalOpen(true);
    };

    const closeFeatureModal = () => {
        setIsFeatureModalOpen(false);
        setSelectedFeature(null);
    };

    // Helper function to render SVG icons
    const renderIcon = (iconPath, className = "w-7 h-7 text-white") => {
        if (!iconPath || typeof iconPath !== 'string') return null;
        const paths = iconPath.split(' M').filter(Boolean);
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {paths.map((path, i) => (
                    <path 
                        key={i} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={`M${path}`} 
                    />
                ))}
            </svg>
        );
    };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        Error loading training data. Please try again later.
      </div>
    );
  }

  return (
    <>
      <TrainingStyles />
            
            <div className="custom-scrollbar" style={{backgroundColor: '#001038'}}>
        {/* Hero Section */}
        <TrainingHero heroContent={data.heroContent} />

        {/* Training Programs Section */}
        <TrainingPrograms 
          programsSection={data.programsSection}
          trainingPrograms={data.trainingPrograms}
          onProgramClick={openProgramModal}
          renderIcon={renderIcon}
        />

                {/* Key Training Modules Section */}
        <TrainingModules 
          keyModulesSection={data.keyModulesSection}
          keyModules={data.keyModules}
          renderIcon={renderIcon}
        />

                {/* Why Choose Our Training Section */}
        <TrainingWhyChoose 
          whyChooseSection={data.whyChooseSection}
          trainingFeatures={data.trainingFeatures}
          onFeatureClick={openFeatureModal}
          renderIcon={renderIcon}
        />

        {/* Modals */}
        <TrainingModals 
          isProgramModalOpen={isProgramModalOpen}
          selectedProgram={selectedProgram}
          closeProgramModal={closeProgramModal}
          openContactModal={openContactModal}
          isFeatureModalOpen={isFeatureModalOpen}
          selectedFeature={selectedFeature}
          closeFeatureModal={closeFeatureModal}
          isContactModalOpen={isContactModalOpen}
          closeContactModal={closeContactModal}
          renderIcon={renderIcon}
        />
            </div>
        </>
    );
};

export default Training;