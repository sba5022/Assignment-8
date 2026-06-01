import React from 'react';

const UpdateProfile = () => {
    return (
        <div className="container mx-auto  min-h-[80vh]  items-center  space-y-5">
           <div className='bg-slate-100 p-10'> <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  
  <input
 
  type="text" className="input" placeholder="Enter your Name" />
  
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Image</legend>
  
  <input 
 
  type="text" className="input" placeholder="Enter your Image" />
  
</fieldset>
<button className="btn btn-neutral ">Update</button>
</div>
        </div>
    );
};

export default UpdateProfile;