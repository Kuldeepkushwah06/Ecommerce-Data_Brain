import React, { useState } from 'react'
import Filter from './Filter';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    // const [menClicked, setMenClicked] = useState(false);

    const toggleCategory = () => {
        setIsOpen(!isOpen)
    }



    // const menHandler = () => {
    //     setMenClicked(!menClicked)
    // }
    return (
        <div className='flex items-center justify-center my-4 mx-2 z-10 '>
            <nav className='outline flex justify-evenly items-center w-[95%] bg-slate-900'>
                <div className=' w-[10%]'>
                    <img src='https://img.freepik.com/premium-vector/brain-idea-technology-with-lamp-logo-design_73539-589.jpg?w=360'
                        className=''
                    />
                </div>
                <div className=' w-1/2'>
                    <ul className='flex justify-evenly w-full px-4 py-2 '>
                        <NavLink to='/'>
                            <li className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>
                                Home
                            </li>
                        </NavLink>


                        <div className="relative inline-block text-left ml-2 ">
                            <button
                                onClick={toggleCategory}
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
                            >
                                Category

                                <svg className="w-2.5 h-2.5 ms-2.5 mt-[5px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <NavLink to='/men'>
                                            <a
                                                // onClick={menHandler}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                role="menuitem"
                                            >
                                                Men
                                            </a>
                                        </NavLink>

                                        <NavLink to='/women'>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                role="menuitem"
                                            >
                                                Women
                                            </a>
                                        </NavLink>

                                        <NavLink to='/jewelery'>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                role="menuitem"
                                            >
                                                Jewelery
                                            </a>
                                        </NavLink>

                                        <NavLink to='/electronics'>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                role="menuitem"
                                            >
                                                Electronics
                                            </a>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                        <li className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>About</li>

                        <li className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>Services</li>
                    </ul>
                </div>

                <div className='flex justify-between items-center w-[20%]'>

                    <button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-700 focus-visible:ring-opacity-75 '>
                        Log In
                    </button>
                    {/* <NavLink to='/signUpForm'> */}
                    <button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 bg-slate-600'
                    a>
                        Sign In
                    </button>
                    {/* </NavLink> */}

                </div>
            </nav>
            {/* <Routes>
                <Route path='/filter' element={<Filter menStatus={menClicked} />} />
            </Routes> */}
        </div>
    )
}

export default Navbar