import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/Firebase.init"
import { GoogleAuthProvider, getAuth , signInWithPopup ,onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const [isLoading, setIsLoading]=useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // google sign in declare--------------------
    const googleLogin = () =>{
               setIsLoading(true)
     return   signInWithPopup(auth, googleProvider)
    }

    // log out decalre--------------------------
    const LogOut = () =>{
        signOut(auth)
        .then(() => {

          })
          .catch((error) => {
              setError(error.message)
          })
          .finally(()=>{
              setIsLoading(false)
          })
    }

    // on auth state change----------------------

    useEffect(()=>{
        onAuthStateChanged(auth , user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[])


    return {
        user,
        error,
        setError,
        googleLogin,
        LogOut,
        setIsLoading,
        isLoading
    }

}

export default useFirebase;