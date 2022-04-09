import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const  {user, signInWithGoogle}=useFirebase()
    return (
        <div>
            <h1>Login</h1>
            <div style={{"margin":"20px"}}>
                {
                    user?.uid?<button>Logged by google</button>:<button onClick={signInWithGoogle}>Login by google</button>
                }
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