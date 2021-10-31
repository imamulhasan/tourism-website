import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <div style={{backgroundColor:'#137257' ,padding:'5px'}}>
                <h2 className="text-center py-5 text-light">Why Us</h2>
            </div>

            <div style={{backgroundColor:'#DAEBE8'}}>

                <div className="container">
                <div className="d-md-flex justify-content-around py-5">
                    <div className="mx-4">
                        <h1 className="text-primary fw-bold text-center"> <i aria-hidden="true" class="far fa-circle"></i> </h1>
                        <h3 className="text-center">High Quality Service Assurance</h3>
                        <p style={{textAlign:'justify'}} >High Quality Service AssuranceWe assure the quality services for every single trip with best tour plan, high rated accommodations, transportations and quality food. Our full time knowledgeable and accompanied guide are committed to make it perfect.</p>
                    </div>
                    <div className="mx-4">
                        <h1 className="text-primary fw-bold text-center"> <i aria-hidden="true" class="far fa-circle"></i> </h1>
                        <h3 className="text-center">Free Cancellation & Booking Policy</h3>
                        <p style={{textAlign:'justify'}}>We offer free cancellation & booking Policy for any tour. In some cases, you can cancel or book the tour on the day before it starts. Please check our Booking & Cancellation Policy to know more about each tour.</p>
                    </div>
                </div>
                <div className="d-md-flex justify-content-around py-5">
                    <div className="mx-4">
                        <h1 className="text-primary fw-bold text-center"> <i aria-hidden="true" class="far fa-circle"></i> </h1>
                        <h3 className="text-center">Safe & Sustainable Travel</h3>
                        <p style={{textAlign:'justify'}} >Your next travel should be safe & sustainable after the COVID-19 outbreak. We assure safety on every step maintaining rules awareness and offering healthy food. We focus on sustainability of nature and eco-friendly travel.</p>
                    </div>
                    <div className="mx-4">
                        <h1 className="text-primary fw-bold text-center"> <i aria-hidden="true" class="far fa-circle"></i> </h1>
                        <h3 className="text-center"> Private & Small Group</h3>
                        <p style={{textAlign:'justify'}}>We offer free cancellation & booking Policy for any tour. In some cases, you can cancel or book the tour on the day before it starts. Please check our Booking & Cancellation Policy to know more about each tour.</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;