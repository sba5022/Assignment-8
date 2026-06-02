'use client'

import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';

import NavLinks from './NavLinks';
import { authClient } from "@/lib/auth-client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, isPending, 'user');
    return (
        <div className="container mx-auto py-4 mt-6 px-4">
          <div className="flex flex-col lg:flex-row  items-center justify-between gap-4">  <button className='btn'>
                <Link href="/">Category-A8-Mango
                </Link>
            </button>
            
            <div></div>
            <ul className='flex  lg:flex-row flex-col sm:gap-6 font-medium  items-center gap-6 text-lg  justify-between text-gray-700'>
                <li><NavLinks href="/">Home</NavLinks></li>
                <li><NavLinks href="/all-books">All Books</NavLinks></li>
                <li><NavLinks href="/my-profile">My Profile</NavLinks></li>
            </ul> 
<div  className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4">
            {isPending ? (<p>Loading...</p>) : user ? (<div className='flex flex-col lg:flex-row items-center gap-3 sm:gap-4'>
                <h2>Hello, {user?.name || 'Guest'}</h2>
                <Image src={user?.image || userAvatar} alt="User Avatar" width={60} height={60} />
                <button className='btn btn-secondary ' onClick={async () => {
                    await authClient.signOut();
                    router.push('/')
                }}>LogOut</button>
            </div>) :
                (<button className='btn btn-secondary' ><Link href="/login">Login</Link></button>)}
                </div>
       </div>
        </div>
    );
};

export default Navbar;