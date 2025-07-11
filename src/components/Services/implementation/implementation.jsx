import React, { useState, useEffect } from 'react';
import ImplementationHero from './ImplementationHero';
import ImplementationProcess from './ImplementationProcess';
import ImplementationWhyChoose from './ImplementationWhyChoose';
import ImplementationPricing from './ImplementationPricing';
import ImplementationCTA from './ImplementationCTA';
import ImplementationModal from './ImplementationModal';

const Implementation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data/implementation.json');
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    // Error state
    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white text-gray-600">
                Error loading implementation data. Please try again later.
            </div>
        );
    }

    return (
        <>
            <ImplementationHero 
                heroData={data.heroSection} 
                onOpenModal={openModal} 
            />
            
            <ImplementationProcess 
                processData={data.processSection} 
            />
            
            <ImplementationWhyChoose 
                whyChooseData={data.whyChooseSection} 
            />
            
            <ImplementationPricing 
                pricingData={data.pricingSection} 
            />
            
            <ImplementationCTA 
                ctaData={data.ctaSection} 
                onOpenModal={openModal} 
            />
            
            <ImplementationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                modalData={data.modalContent}
            />
        </>
    );
}

export default Implementation;