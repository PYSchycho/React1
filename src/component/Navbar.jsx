import React from 'react';
import { Link } from 'react-router-dom';
import 'D:/React-Route/my-app/src/App.css';
import 'D:/React-Route/my-app/src/index.css';
const Navbar = () => {
    return (
        <>
        <div>
        <nav className='flex p-5 space-x-10 bg-gray-950 text-white font-bold'>
            <ul><Link to='/'>Home</Link></ul>
            <ul><Link to='/about'>About</Link></ul>
            <ul><Link to='/login'>Login</Link></ul>
        </nav>
        </div>
        </>
  )}
export default Navbar;
