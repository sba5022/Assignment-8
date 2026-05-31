import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
           <h2>Login With</h2> 
           <button className="btn btn-primary w-full"> <FaGoogle /> Login with Google</button>
        </div>
    );
};

export default RightSideBar;