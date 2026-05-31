'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
   const { register,
     handleSubmit,formState: { errors } }= useForm();
     console.log(errors,'errors');
  const handleLoginFunc = (data) => {
   console.log(data,'data');
  };

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex items-center justify-center space-y-5'>
          <div className="p-4 rounded-md bg-white">
             <h2 className='text-lg font-bold'>Login</h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}> 
           <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  
  <input 
 {...register('email',{ required: true })}
  type="text" className="input" placeholder="Enter your Email" />
  {errors.email && <p className='text-sm text-red-500'>Email is required</p>}
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input 
  {...register('password',{ required: "password is required" })}
  type="text" className="input" placeholder="Enter your Password" />
  {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
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