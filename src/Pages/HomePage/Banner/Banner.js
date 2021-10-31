import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import Dhaka from '../../../images/banner/Dhaka_banner.jpg';
import sajek from '../../../images/banner/sajek.png';
import sylet from '../../../images/banner/sylet.jpg';

const Banner = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img 
                className="d-block w-100 carousel-image"
                src={Dhaka}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Rangamati, Bandarban & Cox’s Bazar</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src={sajek}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>Saint Martin Tour Bangladesh</h1>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src={sylet}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1>Sylet Hill Tracts Tour</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Banner;