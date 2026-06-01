'use client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authClient } from "@/lib/auth-client"

const RightSideBar = () => {
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div>
           <h2 className="text-xl font-bold mb-4">Login With</h2> 
           <button className="btn btn-primary w-full" onClick={handleGoogleLogin}> <FaGoogle /> Login with Google</button>
        </div>
    );
};

export default RightSideBar;