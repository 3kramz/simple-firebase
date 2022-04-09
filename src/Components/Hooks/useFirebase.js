import {useEffect, useState} from 'react'
import app from '../../firebase.init'
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(app)
const googleProvider=new GoogleAuthProvider()

const useFirebase = () => {

  const [user,setUser]=useState({}) 
  
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>setUser(result))
        .catch(data=>console.log(data))
    }

    const signOutBtn=()=>{
        signOut(auth).then(() => setUser({})).catch((error) => {
            console.log("Something went Wrong")
          });
    }


    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])

  return {user, setUser, signInWithGoogle, signOutBtn}
};

export default useFirebase;