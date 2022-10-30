import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_bootstrap from './components/Navbar_bootstrap'
//import Nav_bar from './components/Nav'
import First from './components/First'
//import Form from './components/Form';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
//import {Route, Routes} from "react-router-dom"
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'


function App() {
  return (
     <div className="container">
      <BrowserRouter>
      {/* <Nav_bar /> */}
      <Navbar_bootstrap />
      <br />
      
      {/* <Route exact path="/" component={Second}/> // not working in v6 of react router dom
      <Route path="/third" component={Third}/>
      <Route path="/fourth" component={Fourth}/> */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="Second" element={<Second />} />
        <Route path="Third" element={<Third />} />
        <Route path="Fourth" element={<Fourth />} />
        <Route path="Login" element={<Login />} />
        {<Route path="Register" element={<Register />} />}
       
      </Routes>
     
      {/*<Form />  */}
    </BrowserRouter>
     </div> 
  );

 /*  <Routes>
    <Route path="/" element={<First />}></Route>
    <Route path="/second" element={<Second />}></Route>
    
  </Routes> */
  
}

export default App;
