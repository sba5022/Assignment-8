'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
   const { register,
     handleSubmit,formState: { errors } }= useForm();
   
  const handleRegisterFunc = (data) => {
   console.log(data,'data');
  };

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex items-center justify-center space-y-5'>
          <div className="p-4 rounded-md bg-white">
             <h2 className='text-lg font-bold'>Register</h2>
        <form onSubmit={handleSubmit(handleRegisterFunc)}> 
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  
  <input 
 {...register('name',{ required: true })}
  type="text" className="input" placeholder="Enter your Name" />
  {errors.name && <p className='text-sm text-red-500'>Name is required</p>}
</fieldset>
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
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  
  <input 
 {...register('photoURL',{ required: true })}
  type="text" className="input" placeholder="Enter your Photo URL" />
  {errors.photoURL && <p className='text-sm text-red-500'>Photo URL is required</p>}
</fieldset>
<button className="btn btn-primary">Register</button></form>
<p className="text-sm text-muted-foreground">
  Already have an account?{' '}
  <Link href="/login" className="underline text-red-500">
    Login
  </Link>
</p>
          </div>
        </div>
    );
};

export default RegisterPage;