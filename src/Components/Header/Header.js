import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'





const Header = () => {
    const{user}=useFirebase()

    return (
        <div className="nav">
            <Link to="./" >Home</Link>
            <Link to="./register" >Register</Link>
           {user.uid?<button>Sign out</button>: <Link to="./login" >Login</Link>}
            <Link to="./about" >About</Link>
        </div>
    );
};

export default Header;