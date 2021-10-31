import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const OfferPackages = () => {
    const [travels,setTravels]=useState([]) 
    const [isLoading,setIsLoading] = useState(true)                           
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://salty-cove-06755.herokuapp.com/travels')
        .then(res=>res.json())
        .then(data=>{
            setTravels(data)
            setIsLoading(false)
        })
    },[])
    console.log(travels)
    return (
        <div style={{backgroundColor:'#DAEBE8', padding:'20px 0'}}>
            <h1 className="text-center text-secondary pt-5">Offer Package</h1>

            {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
                :<Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                    {
                        travels.map(travel=><Package
                        key={travel._id}
                        travel={travel}
                        ></Package>)
                    }
            </Row>}
        </div>
    );
};

export default OfferPackages;