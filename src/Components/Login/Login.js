import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div style={{"margin":"20px"}}><button>Login by google</button></div>
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