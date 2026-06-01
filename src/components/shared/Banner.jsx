import Link from 'next/link';
import React from 'react';
import "animate.css";
const Banner = () => {
    return (
        <div className="bg-blue-200 p-10 text-center rounded-lg space-y-5">
            <h2 className="text-3xl font-bold italic  mt-8 animate__animated animate__bounce ">Find Your Next Read</h2>
           <Link href="/all-books"> <button className="btn btn-neutral items-center">Browse Now</button></Link>
        </div>
    );
};

export default Banner;