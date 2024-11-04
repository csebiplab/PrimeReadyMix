import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import TrustedServices from './TrustedServices/TrustedServices';
import BestDesign from './BestDesign/BestDesign';

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
            
        </div>
    );
};

export default HomePage;