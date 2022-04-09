import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'





const Header = () => {
    const{user ,signOutBtn}=useFirebase()

    return (
        <div className="nav">
            <Link to="./" >Home</Link>
            <Link to="./register" >Register</Link>
            <Link to="./about" >About</Link>
            {user?.uid?<button onClick={signOutBtn}>Sign out</button>: <Link to="./login" >Login</Link>}
           
        </div>
    );
};

export default Header;