import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Course', path: '/course' },
        { id: 3, name: 'Sessions', path: '/sessions' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='   w-full '>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`bg-blue-400 md:flex w-full justify-center  absolute md:static duration-500 ease-in p-3  ${open ? 'top-6 ' : 'top-[-200px] '}`}>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;