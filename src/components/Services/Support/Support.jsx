import React, { useState, useEffect } from 'react';
import SupportSecondSec from './SupportSecondSec';
import SherpaCareServices from './SherpaCareServices';
import WhatWeOfferSection from './WhatWeOfferSection';
import DedicatedTeamSection from './DedicatedTeamSection';
import PrePackagedSection from './PrePackagedSection';
import BellatrixSupportSection from './BellatrixSupportSection';
import PayPerUseSection from './PayPerUseSection';
import CustomerSupport from './CustomerSupport';
import WhyChoeseBellatrix from './WhyChoeseBellatrix';
import BellatrixSupportHero from './BellatrixSupportHero';

const Support = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPageData(data.supportPage);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
    }

    if (!pageData) {
        return <div className="flex justify-center items-center min-h-screen">No data available</div>;
    }

    return (
        <>
            <section data-theme="dark">
                <BellatrixSupportHero 
                    title={pageData.hero.title}
                    description={pageData.hero.description}
                    ctaButton={pageData.hero.ctaButton}
                    modal={pageData.hero.modal}
                />
            </section>
            <section data-theme="light">
                <SupportSecondSec 
                    title={pageData.secondSection.title}
                    description1={pageData.secondSection.description1}
                    description2={pageData.secondSection.description2}
                    image={pageData.secondSection.image}
                />
            </section>
            <section data-theme="dark">
                <SherpaCareServices 
                    title={pageData.sherpaCareServices.title}
                    subtitle={pageData.sherpaCareServices.subtitle}
                    services={pageData.sherpaCareServices.services}
                />
            </section>
            <section data-theme="light">
                <WhatWeOfferSection 
                    title={pageData.whatWeOffer.title}
                    description={pageData.whatWeOffer.description}
                    cards={pageData.whatWeOffer.cards}
                />
            </section>
            <section data-theme="dark">
                <DedicatedTeamSection 
                    title={pageData.dedicatedTeam.title}
                    items={pageData.dedicatedTeam.items}
                    image={pageData.dedicatedTeam.image}
                />
            </section>
            <section data-theme="light">
                <PrePackagedSection 
                    title={pageData.prePackaged.title}
                    description={pageData.prePackaged.description}
                />
            </section>
            <section data-theme="dark">
                <BellatrixSupportSection 
                    title={pageData.bellatrixSupport.title}
                    description1={pageData.bellatrixSupport.description1}
                    description2={pageData.bellatrixSupport.description2}
                    supportTypes={pageData.bellatrixSupport.supportTypes}
                />
            </section>
            <section data-theme="light">
                <PayPerUseSection 
                    title={pageData.payPerUse.title}
                    description1={pageData.payPerUse.description1}
                    description2={pageData.payPerUse.description2}
                    image={pageData.payPerUse.image}
                />
            </section>
            <section data-theme="dark">
                <CustomerSupport 
                    title={pageData.customerSupport.title}
                    description={pageData.customerSupport.description}
                    content={pageData.customerSupport.content}
                    features={pageData.customerSupport.features}
                    supportInfo={pageData.customerSupport.supportInfo}
                    image={pageData.customerSupport.image}
                />
            </section>
            <section data-theme="light">
                <WhyChoeseBellatrix 
                    title={pageData.whyChooseBellatrix.title}
                    description={pageData.whyChooseBellatrix.description}
                    stats={pageData.whyChooseBellatrix.stats}
                    quote={pageData.whyChooseBellatrix.quote}
                    image={pageData.whyChooseBellatrix.image}
                    badgeText={pageData.whyChooseBellatrix.badgeText}
                />
            </section>
        </>
    );
}

export default Support;