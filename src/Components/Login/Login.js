import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const  {user, signInWithGoogle, signOutBtn}=useFirebase()
    return (
        <div>
            <h1>Login</h1>
            <div style={{"margin":"20px"}}>

            <button onClick={ user?.uid ?signOutBtn: signInWithGoogle}>{user?.uid ? "Sign Out":"Sign in"}</button>


               
            </div>
            <form className=''>
               
                <input type="email" name="" id="" placeholder='email' />
                <br />
                <input type="password" name="" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Login" />
            
            </form>
        </div>
    );
};

export default Login;