// import React from 'react'
// import { CiUser } from "react-icons/ci";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';

// const signup = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen p-5">
//             <div className="max-w-[30rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
//                 <h2 className='font-xl font-semibold'>Please signup.....</h2>
//                 <label className="input input-bordered flex items-center gap-2 w-full">
//                     <CiUser />
//                     <input type="text" className="grow w-full" placeholder="fullname" />
//                 </label>
//                 <label className="input input-bordered flex items-center gap-2 w-full">
//                     <CiUser />
//                     <input type="text" className="grow w-full" placeholder="Username" />
//                 </label>

//                 <label className="input input-bordered flex items-center gap-2 w-full">
//                     <RiLockPasswordLine />
//                     <input type="password" className="grow w-full" placeholder="Password" />
//                 </label>
//                 <label className="input input-bordered flex items-center gap-2 w-full">
//                     <RiLockPasswordLine />
//                     <input type="password" className="grow w-full" placeholder=" Confirm Password" />
//                 </label>

//                 <button className="btn btn-active btn-primary w-full">Sign up</button>
//                 <p className="text-center text-sm">
//                     Already  have an account?{" "}
//                     <Link to="/login" className="text-blue-500 hover:underline">
//                         Login
//                     </Link>
//                 </p>

//             </div>
//         </div>

//   )
// }

// export default signup

import React from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/space1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Signup Form */}
      <div className="relative z-10 max-w-[30rem] w-full flex flex-col gap-5 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center">
          Please Sign Up
        </h2>
        
        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser className="text-white" />
          <input type="text" className="grow w-full bg-transparent text-white" placeholder="Full Name" />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser className="text-white" />
          <input type="text" className="grow w-full bg-transparent text-white" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <RiLockPasswordLine className="text-white" />
          <input type="password" className="grow w-full bg-transparent text-white" placeholder="Password" />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <RiLockPasswordLine className="text-white" />
          <input type="password" className="grow w-full bg-transparent text-white" placeholder="Confirm Password" />
        </label>

        <button className="btn btn-active btn-primary w-full">Sign up</button>

        <p className="text-center text-white text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
