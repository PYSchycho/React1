import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="rounded-lg text-lg inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    Categories
                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="origin-top-right  absolute  mt-2 w-40 rounded-lg shadow-lg bg-blue-200">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <Link
                                    to="/jewellery"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Jewellery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/electronics"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/mens"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Men's Clothing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/womens"
                                    className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100">
                                    Women's Clothing
                                </Link>
                            </li>
                        </ul>
                    </div>
                )} 
            </div>
        </div>
    )
}
export default Categories;