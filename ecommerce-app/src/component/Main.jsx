import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import About from './About';
// import categories from './categories';

const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<PrivateRoute Component={About} />} />
        {/* <Route path="/categories" element={<PrivateRoute Component={categories}/>}/> */}
      </Routes>
  );
};

export default Main;
