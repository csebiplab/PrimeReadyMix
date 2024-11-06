import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import TrustedServices from './TrustedServices/TrustedServices';
import BestDesign from './BestDesign/BestDesign';
import ReadyToStart from './ReadyToStart/ReadyToStart';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import Equipped from './Equipped/Equipped';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import Benefits from './Benefits/Benefits';
import ConcreteCost from './ConcreteCost/ConcreteCost';
import Process from './Process/Process';
import Review from './Review/Review';
import Faq from './Faq/Faq';
import LocationMap from './LocationMap/LocationMap';
import ContactUs from './ContactUs/ContactUs';
import ConsiderationsAndLimitations from './ConsiderationsAndLimitations/ConsiderationsAndLimitations';

const HomePage = () => {
    return (
        <div>
            <section>
                <HomePageBanner />
            </section>

            <section>
                <AboutUs />
            </section>

            <section>
                <TrustedServices />
            </section>

            <section>
                <Experienced />
            </section>

            <section>
                <BestDesign />
            </section>

            <section>
                <ProjectGallery />
            </section>

            <section>
                <Equipped />
            </section>

            <section>
                <Benefits />
            </section>

            <section>
                <ConcreteCost />
            </section>

            <section>
                <AdditionalServices />
            </section>

            <section>
                <ConsiderationsAndLimitations />
            </section>

            <section>
                <Process />
            </section>

            <section>
                <Review />
            </section>

            <section>
                <ReadyToStart />
            </section>

            <section>
                <Faq />
            </section>

            <section>
                <LocationMap />
            </section>

            <section>
                <ContactUs />
            </section>

        </div>
    );
};

export default HomePage;