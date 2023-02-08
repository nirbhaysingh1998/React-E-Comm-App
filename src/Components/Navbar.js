import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setmenu] = useState(true);
    return (
        <>
            <div className='bg-blue-900 h-14 p-3  font-serif text-lg text-white'>


                <div className='grid grid-cols-2 '>
                    <div className='flex float-left text-2xl font-bold'>
                        logo
                    </div>

                    <div className='visible md:invisible md:hidden text-white '>
                        {menu ? <GiHamburgerMenu className='flex float-right cursor-pointer text-2xl' onClick={() => setmenu(false)} />

                            : <><MdClear className='float-right font-bold text-2xl cursor-pointer' onClick={() => setmenu(true)} />
                            </>
                        }

                    </div>
                    <div className='invisible md:visible'>
                        <ul className='flex space-x-4 float-right  '>
                            <li className=''>
                                <Link to='/'>Home</Link>
                            </li><li>
                                <Link to='/About'>About</Link>
                            </li>
                            <li>
                                <Link to='/productList'>product</Link>
                            </li>
                            <li>
                                <Link to='/Contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/Blog'>Blog</Link>
                            </li>
                            <li >
                                <Link to='/cart'>  Cart<span className='relative bg-blue-400 rounded-full p-0.5 -top-2 -left-1 '>10</span></Link>
                            </li>
                            <li className='bg-blue-600 p-1 rounded-xl cursor-pointer'>Login</li>
                        </ul>

                    </div>

                </div>
            </div>
            {!menu ? <div className='visible md:invisible h-auto bg-blue-900 '>
                <ul className='text-2xl font-bold flex flex-col text-white justify-center  p-10'>
                    <li className='pt-4'>Home</li>
                    <li className='pt-4'>About</li>
                    <li className='pt-4'>Login</li>
                    <li className='pt-4'>Cart</li>
                </ul>
            </div> : ""}

        </>
    )
}

export default Navbar
