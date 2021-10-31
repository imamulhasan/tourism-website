import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import Mybooking from '../MyBooking/Mybooking';

const MyBookings = () => {
    const {user}=useAuth()
    const [Bookings, setBookings]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://salty-cove-06755.herokuapp.com/bookings')
        .then(res=> res.json())
        .then(data=>{
            setBookings(data)
            setIsLoading(false)
        })
    },[])

    const myBookings =  Bookings.filter(book => book.userName===user.displayName)
    
    
    return (
        <div style={{backgroundColor:'#DAEBE8', padding:'50px 0 200px 0'}}>
            <h1 style={{ paddingTop:'50px', paddingBottom:'50px'}} className="text-center">My Bookings</h1>
            <div className="container">
            { isLoading ? <div style={{height:"35vh"}} className="text-center text-primary"> <h3>loading...</h3> </div>
                :myBookings.length===0 ? 
            
            
            <div style={{marginBottom:'25vh'}} className="text-center">
                <h2 style={{color:'#25b04b'}}>You have no booking travel!</h2>
                <h3>Please,Booking a travel and enjoy your life</h3>
                <Link to="/"><button className="btn btn-outline-success my-3 px-5">Go Home</button></Link>
            </div>
            
            
            :<Row xs={1} md={3} className="g-4 pb-5">
                   {
                       myBookings.map(myBooking =><Mybooking
                       key={myBooking._id}
                       booking = {myBooking}
                       myBookings ={myBookings}
                       setBookings={setBookings}
                       ></Mybooking>)
                   }
            </Row>}
            </div>
        </div>
    );
};

export default MyBookings;