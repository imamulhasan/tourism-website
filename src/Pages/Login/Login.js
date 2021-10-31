import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const {googleLogin,setError, setIsLoading}=useAuth()
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || '/home'

    const handleGoogleSingIn = () =>{
        googleLogin()
        .then(result =>{
            history.push(url)
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    
    return (
        <div style={{backgroundColor:'#DAEBE8'}}>
          <div style={{height:'75vh', textAlign:'center'}}>
          <h1 style={{color:'#25b04b', paddingTop:'100px'}} className="fw-bold">Sign in with Google</h1>
            <button onClick={handleGoogleSingIn} className=" btn btn-outline-success fw-bold fs-2 px-5 my-3"><i className="fab fa-google"></i></button>
          </div>
        </div>
    );
};

export default Login;