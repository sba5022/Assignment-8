'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName= usePathname();
    console.log(pathName, 'pathname');
    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default NavLinks;