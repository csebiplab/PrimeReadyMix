import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import AboutUs from './AboutUs/AboutUs';

const HomePage = () => {
    return (
        <div>
            <section>
                <HomePageBanner />
            </section>

            <section>
                <AboutUs />
            </section>
        </div>
    );
};

export default HomePage;