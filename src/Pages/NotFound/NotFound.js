import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{backgroundColor:'#f0f0f0'}} className="text-center not-found mx-2">
            <div>
            <h1 className="notfound-number">404</h1>
            <p className="h5">Page not found :(</p>
            <p className="h5">This is not the web page you are looking for.</p>
            <Link to="/home">
            <button className=" px-5 rounded-pill  mt-4">back</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFound;