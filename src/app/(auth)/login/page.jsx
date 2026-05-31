'use client';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  const handleLoginFunc = (e) => {
    e.preventDefault();
    // Handle login logic here
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  };

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex items-center justify-center space-y-5'>
          <div className="p-4 rounded-md bg-white">
             <h2 className='text-lg font-bold'>Login</h2>
        <form onSubmit={handleLoginFunc}> 
           <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  
  <input 
  name="email"
  type="text" className="input" placeholder="Enter your Email" />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input 
  name="password"
  type="text" className="input" placeholder="Enter your Password" />
  
</fieldset>
<button className="btn btn-primary">Login</button></form>
<p className="text-sm text-muted-foreground">
  Don't have an account?{' '}
  <Link href="/register" className="underline text-red-500">
    Register
  </Link>
</p>
          </div>
        </div>
    );
};

export default LoginPage;