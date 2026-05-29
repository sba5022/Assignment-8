import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLinks';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className=' flex items-center justify-between container mx-auto py-4 mt-6'>
        <div></div>
             <ul className='flex items-center gap-6 text-lg font-medium justify-between text-gray-700'>
            <li><NavLinks href="/">Home</NavLinks></li>
            <li><NavLinks href="/featured">Featured Books</NavLinks></li>
            <li><NavLinks href="/all-books">All Books</NavLinks></li>
          </ul>
         
         <div className='flex items-center gap-4'>
            <Image src={userAvatar} alt="User Avatar" width={60} height={60} />
            <button className='btn btn-secondary' ><Link href="/login">Login</Link></button>
         </div>
        </div>
    );
};

export default Navbar;