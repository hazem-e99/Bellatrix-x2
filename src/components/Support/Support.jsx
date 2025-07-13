import React from 'react';
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
    return (
        <>
            <section data-theme="dark">
                <BellatrixSupportHero />
            </section>
            <section data-theme="light">
                <SupportSecondSec />
            </section>
            <section data-theme="dark">
                <SherpaCareServices />
            </section>
            <section data-theme="light">
                <WhatWeOfferSection />
            </section>
            <section data-theme="dark">
                <DedicatedTeamSection />
            </section>
            <section data-theme="light">
                <PrePackagedSection />
            </section>
            <section data-theme="dark">
                <BellatrixSupportSection />
            </section>
            <section data-theme="light">
                <PayPerUseSection />
            </section>
            <section data-theme="dark">
                <CustomerSupport />
            </section>
            <section data-theme="light">
                <WhyChoeseBellatrix />
            </section>
        </>
    );
}

export default Support;
