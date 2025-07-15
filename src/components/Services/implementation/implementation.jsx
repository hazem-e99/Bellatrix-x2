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
                const response = await fetch('/data/Implementation.json');
                const jsonData = await response.json();
            console.log(jsonData.processSection )
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
            <section data-theme="dark">
                <ImplementationHero 
                    heroData={data.heroSection} 
                    onOpenModal={openModal} 
                />
            </section>
            
            <section data-theme="light">
                <ImplementationProcess 
                    processData={data.processSection} 
                />
            </section>
            
            <section data-theme="dark">
                <ImplementationWhyChoose 
                    whyChooseData={data.whyChooseSection} 
                />
            </section>
            
            <section data-theme="light">
                <ImplementationPricing 
                    pricingData={data.pricingSection} 
                />
            </section>
            
            <section data-theme="dark">
                <ImplementationCTA 
                    ctaData={data.ctaSection} 
                    onOpenModal={openModal} 
                />
            </section>
            
            <ImplementationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                modalData={data.modalContent}
            />
        </>
    );
}

export default Implementation;