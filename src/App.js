import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'


function App() {
 return (
   <div className="App"  > 
  <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='home' element={<Home></Home>}></Route>
    <Route path='register' element={<Register></Register>}></Route>
    <Route path='Login' element={<Login/>}></Route>
    
  </Routes>


  </div>
  );
}

export default App;
