import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Mybooking = ({booking, myBookings, setBookings}) => {

    const handleUpadateStatus=(id)=>{     
       
        if(booking?.status==='pending'){
            const process = window.confirm('you want to confirm?')
        if(process){
            fetch(`https://salty-cove-06755.herokuapp.com/bookings/${id}`,{
            method:'PUT'
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.matchedCount>0){
               window.location.reload(true)
           }
        })
        }
        }
       }
    
    const handleDeleteBookng=(id)=>{
        const process = window.confirm('You want to delete this travel?')
      if(process){
        fetch(`https://salty-cove-06755.herokuapp.com/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            if(data){
                const remaining = myBookings.filter(td => td._id !==id)
                setBookings(remaining)
            }
        })
      }
    }
    return (
        <Col>
        <Card>
            <Card.Body>
            <Card.Title className="fw-bolder" style={{color:'#25b04b'}}>{booking?.packageName}</Card.Title>
            <Card.Text>
                <p className="fw-bolder">{booking?.email}</p>
            </Card.Text>
            <div className="d-flex justify-content-between">
            <Card.Text>
                <p>Address: {booking?.address}</p>
            </Card.Text>
            <Card.Text>
                <p> Pement: {booking?.pement}</p>
            </Card.Text>
            </div>
            <div className="d-flex justify-content-between">
            <Card.Text>
                <p>Status: {booking?.status}</p>
            </Card.Text>
            <Card.Text>
                <p>Price: {booking.price} BDT</p>
            </Card.Text>
            </div>
            <div className="d-flex justify-content-between">
            <button onClick={()=>handleUpadateStatus(booking._id)} className="btn btn-success">confirm</button>
            <button onClick={()=> handleDeleteBookng(booking._id)} className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i></button>
            </div>


            
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Mybooking;