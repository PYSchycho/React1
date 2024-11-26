import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import About from './About';
import Navbar from './Navbar';


const Main = () => {
  return(
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute Component={Home}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<PrivateRoute Component={About}/>} />
      </Routes>
    </Router>
  );
};

export default Main;
