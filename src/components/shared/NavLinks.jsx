'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName= usePathname();
    console.log(pathName, 'pathname');
    const isActive= href === pathName;

    return (
        <Link href={href} 
        className={` ${isActive ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 transition-colors duration-300`}>
            {children}
        </Link>
    );
};

export default NavLinks;