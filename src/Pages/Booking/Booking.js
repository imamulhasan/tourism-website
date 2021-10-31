import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../Hooks/UseAuth';
import { useForm } from "react-hook-form";


const Booking = () => {
    const {user}=useAuth()
    const history = useHistory()
    // set single travel ------------------
    const [travels,setTravels]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const {id}=useParams()

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://salty-cove-06755.herokuapp.com/travels')
        .then(res=>res.json())
        .then(data=>{
            setTravels(data)
            setIsLoading(false)
        })
    },[])

    const selectedTravel = travels.filter(td=>td._id===id)
    const bookingTravel = selectedTravel[0];

    // booking from declare

  const { register, handleSubmit ,reset } = useForm();
  const onSubmit = result =>{
      const procced = window.confirm('You want to book this tour?');
      if(procced){
        result.packageName = bookingTravel?.name;
        result.price = bookingTravel?.offerPrice;
        result.status = 'pending'
        fetch('https://salty-cove-06755.herokuapp.com/bookingtravels',{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(result)
          })
          .then(res=> res.json())
          .then(data=> {
              if(data.insertedId){
                reset()
                history.push('/mybookings')
              }
          })
      }
     
  };
    


    

    return (
        <div style={{backgroundColor:'#DAEBE8', padding:'20px 0'}}>
            <div className="row container mx-auto">

                <div className="col-md-6">
                {isLoading ? <div style={{height:"70vh" , marginTop:'100px'}} className="text-center text-primary"> <h3>loading...</h3> </div>
                :<Row  xs={1} md={1} className="g-4 container mx-auto my-5">
                <Col>
                    <Card>
                        <img height="60%" src={bookingTravel?.image} alt="" />
                        <Card.Body>
                        <Card.Title className="text-success fs-4">{bookingTravel?.name}</Card.Title>
                        <Card.Text>
                        Offer Price: {bookingTravel?.offerPrice} BDT
                        </Card.Text>
                        
                        <Card.Text>
                             {bookingTravel?.dercription}
                        </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                </Row>}
                    
                </div>
                <div className="col-md-6">
                <div className="text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                     <h2 style={{color:'#25b04b', paddingTop:'100px'}}>Booking travel</h2>

                    <input defaultValue={user?.displayName}  className="input-field" {...register("userName")} placeholder="userName" /> <br />

                    <input defaultValue={user?.email}  className="input-field" {...register("email")} placeholder="email" /> <br />

                    <input  className="input-field" {...register("address",{ required: true })} placeholder="address" /> <br />

                    <input type="date" className="input-field" {...register("date")} placeholder="Date" /> <br />

                    <select className="input-field" {...register("pement")}>
                        <option value="bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                    </select> <br />
                    <input className="input-button" type="submit" />
                </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;