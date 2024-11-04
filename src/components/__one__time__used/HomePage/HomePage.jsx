import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import TrustedServices from './TrustedServices/TrustedServices';
import BestDesign from './BestDesign/BestDesign';
import ReadyToStart from './ReadyToStart/ReadyToStart';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import Equipped from './Equipped/Equipped';

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
                <Equipped />
            </section>

            <section>
                <AdditionalServices />
            </section>

            <section>
                <ReadyToStart />
            </section>

        </div>
    );
};

export default HomePage;