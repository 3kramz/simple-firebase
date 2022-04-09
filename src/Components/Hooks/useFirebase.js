import {useState} from 'react'
import app from '../../firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app)
const googleProvider=new GoogleAuthProvider()

const useFirebase = () => {

  const [user,setUser]=useState({}) 
    const signInWithGoogle=()=>{

    signInWithPopup(auth,googleProvider)
    .then(result=>setUser(result))
    .catch(data=>console.log(data))
    }

    
  return {user, setUser, signInWithGoogle}

};

export default useFirebase;