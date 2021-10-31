import React from 'react';
import './AboutTravel.css'
import bangladesh from '../../../images/AboutBd/bangladesh-icon.png';
import tourist from '../../../images/AboutBd/tourist-icon.png';
import placeIcon from '../../../images/AboutBd/tourist-place-icon.png';
import worldHeritage from '../../../images/AboutBd/world-heritages-icon.png';

const AboutTravel = () => {
    return (
        <div className="about-place">
        <div className="container pt-5">
            <p className="about-place-text">Bangladesh is a land of river and smiling people in South Asia, exhilarating mix with fascinating history, vibrant cultures and panoramic beauty of nature is waiting to welcome you. The world's single largest mangrove forest, ruins of the largest Buddhist monastery, colorful Indigenous groups, the mystery of hilly regions, longest unbroken sea-beach & the flourishing islands, endless tea plantations, and the generous people are a lifetime experience for travelers.</p>
        </div>
        <div className=" pb-5 mx-auto about-pic-container container d-md-flex justify-content-md-around
">
            <div className="d-flex flex-column align-items-center my-5 ">
                <div>
                    <img src={bangladesh} alt="" />
                </div>
                <div>
                    <h5>Meet Bangladesh</h5>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center my-5 ">
                <div>
                    <img src={tourist} alt="" />
                </div>
                <div>
                    <h5>Things to do</h5>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center my-5 ">
                <div>
                    <img src={placeIcon} alt="" />
                </div>
                <div>
                    <h5>Place of visit</h5>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center my-5 ">
                <div>
                    <img src={worldHeritage} alt="" />
                </div>
                <div>
                    <h5>World Heritages</h5>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutTravel;