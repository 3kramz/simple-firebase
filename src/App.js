import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import About from './Components/About/About'


function App() {
 return (
   <div className="App"  > 
  <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='home' element={<Home></Home>}></Route>
    <Route path='register' element={<Register></Register>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='about' element={<About/>}></Route>
    
  </Routes>


  </div>
  );
}

export default App;
