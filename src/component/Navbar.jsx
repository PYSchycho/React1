import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from '../Pages/categories';
import { faCartShopping,  faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div>
                <nav className='flex p-3 h-16 max-w-screen-2xl max-h-screen bg-gray-950 text-white font-bold justify-between'>
                    <div className=' flex px-4' >
                        <img className='size-12' src="./logo.png" alt="loading" />
                    </div>
                    <div className='hidden md:flex items-center space-x-6 px-6'>
                        <ul className=' px-4 py-2 hover:border-2 rounded-lg'>
                            <Link to='/'>Home</Link>
                        </ul>
                        <ul className=' px-4 py-2 hover:border-2 rounded-lg'>
                            <Link to='/about'>About</Link>
                        </ul>
                        <ul className=' px-4 py-2 hover:border-2 rounded-lg'>
                            
                            <Categories />
                        </ul>
                        <ul className=' px-4 py-2 hover:border-2 rounded-lg' >
                            <Link to='/cart'>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </ul>
                        <ul className='flex space-x-8 px-4 py-2 hover:border-2 rounded-lg'>
                            <Link to='/login'><FontAwesomeIcon icon={faUser} /></Link></ul> <ul className='flex space-x-8 px-4 py-2 hover:border-2 rounded-lg'>
                            <Link to='/logout'><FontAwesomeIcon icon={faRightFromBracket} className='text-white'/></Link></ul>
                    </div>
                    <div className="md:hidden flex items-center px-4 py-2 hover:border border-slate-300 rounded-lg">
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-violet-300 flex flex-col text-black space-y-4 p-4">
                    <Link to="/" className="hover:border px-4 py-2 rounded-lg border-slate-300">Home</Link>
                    <Link to="/about" className="hover:border px-4 py-2 rounded-lg border-slate-300">About</Link>
                    <div className="relative group">
                        <h1 className="cursor-pointer hover:border px-4 py-2 rounded-lg  border-slate-300">
                            <Categories /> 
                        </h1>
                        <categories />
                    </div>
                    <Link to="/cart" className="hover:border px-4 py-2 rounded-lg border-slate-300">
                        Cart
                    </Link>
                    <Link to="/login" className="hover:border px-4 py-2 rounded-lg border-slate-300">Login</Link>
                </div>
            )}
        </>
    )
}
export default Navbar;