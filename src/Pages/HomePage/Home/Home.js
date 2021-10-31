import React from 'react';
import AboutTravel from '../AboutTravel/AboutTravel';
import Banner from '../Banner/Banner';
import OfferPackages from '../OfferPackages/OfferPackages';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div style={{}}>
            <Banner></Banner>
            <AboutTravel></AboutTravel>
            <OfferPackages></OfferPackages>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;