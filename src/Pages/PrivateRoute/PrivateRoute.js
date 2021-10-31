import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){
       return  <div style={{height:"77vh",backgroundColor:'#DAEBE8'}} className="d-flex justify-content-center py-5">
                    <span>Loading...</span>
                    <div className="spinner-border" role="status">
                    </div>
                </div>
    }
    return (
        <Route {...rest}
        render={({location})=>
        user.email? children:
        <Redirect to={{
            pathname:'/login',
            state:{from:location}
        }}>

        </Redirect>
        }
            >
            
        </Route>
    );
};

export default PrivateRoute;