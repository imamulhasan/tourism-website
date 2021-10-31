import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = ({travel}) => {
    
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={travel.image}/>
            <Card.Body>
            <Card.Title>{travel.name}</Card.Title>
            <Card.Text>
               Offer Price: {travel.offerPrice} BDT
            </Card.Text>
            <Link to={`/booking/${travel._id}`}><button className="w-100 border-0 text-light bg-success p-1">See Detail</button></Link>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Package;