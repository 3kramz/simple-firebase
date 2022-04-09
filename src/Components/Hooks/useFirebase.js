import {useState, useEffect} from 'react'



const useFirebase = () => {
  const [user,setUser]=useState({}) 

  useEffect(()=>{


  },[])

  const signInWithGoogle=()=>{
    console.log("signned")
  }

  return {user, setUser, signInWithGoogle}

};

export default useFirebase;