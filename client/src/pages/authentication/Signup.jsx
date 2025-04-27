

// import React, { useState } from "react";
// import { CiUser } from "react-icons/ci";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux"
// import { registerUserThunk } from "../../store/slice/user/user.thunk";

// const Signup = () => {

//   const dispatch = useDispatch();
//   const [signupData, setSignupData] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender:"male"
//   });
//   // console.log(signupData)

//   const handleInputChange = (e) => {
//     setSignupData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   // console.log(signupData)

//   const handleSignup = async () => {
//     await dispatch(registerUserThunk(signupData))
//   }

//   return (
//     <div className="relative w-full h-screen flex justify-center items-center">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/video/space2.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

//       {/* Signup Form */}
//       <div className="relative z-10 max-w-[30rem] w-full flex flex-col gap-5 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-white text-center">
//           Please Sign Up
//         </h2>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <CiUser className="text-white" />
//           <input type="text" name="fullName" className="grow w-full bg-transparent text-white" placeholder="Full Name" onChange={handleInputChange} />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <CiUser className="text-white" />
//           <input type="text" name="username" className="grow w-full bg-transparent text-white" placeholder="Username" onChange={handleInputChange} />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <RiLockPasswordLine className="text-white" />
//           <input type="password" name="password" className="grow w-full bg-transparent text-white" placeholder="Password" onChange={handleInputChange} />
//         </label>

//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <RiLockPasswordLine className="text-white" />
//           <input type="password" name="confirmPassword" className="grow w-full bg-transparent text-white" placeholder="Confirm Password" onChange={handleInputChange} />
//         </label>

        
//         <div className="input input-bordered flex items-center gap-6 w-full text-white">
//           <div className="flex items-center gap-6 w-full text-white">
//             <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
//               <input
//               id="male"
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 className="radio radio-primary w-4 h-4"
//                 defaultChecked
//                 onChange={handleInputChange}
//               />
//               <span>Male</span>
//             </label>

//             <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
//               <input
//               id="female"
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 className="radio radio-primary w-4 h-4"
//                 onChange={handleInputChange}
//               />
//               <span>Female</span>
//             </label>
//           </div>

//         </div>


//         <button onClick={handleSignup} className="btn btn-active btn-primary w-full">Sign up</button>

//         <p className="text-center text-white text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-300 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";

const Signup = () => {

  const nevigate = useNavigate()
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "", // ✅ Added email
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await dispatch(registerUserThunk(signupData));
    // console.log(response)
    if(response?.payload?.success){
      nevigate("/")
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/space2.mp4" type="video/mp4" />
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
          <input
            type="text"
            name="fullName"
            className="grow w-full bg-transparent text-white"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser className="text-white" />
          <input
            type="text"
            name="username"
            className="grow w-full bg-transparent text-white"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser className="text-white" />
          <input
            type="email"
            name="email"
            className="grow w-full bg-transparent text-white"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <RiLockPasswordLine className="text-white" />
          <input
            type="password"
            name="password"
            className="grow w-full bg-transparent text-white"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <RiLockPasswordLine className="text-white" />
          <input
            type="password"
            name="confirmPassword"
            className="grow w-full bg-transparent text-white"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
        </label>

        <div className="input input-bordered flex items-center gap-6 w-full text-white">
          <div className="flex items-center gap-6 w-full text-white">
            <label
              htmlFor="male"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                className="radio radio-primary w-4 h-4"
                defaultChecked
                onChange={handleInputChange}
              />
              <span>Male</span>
            </label>

            <label
              htmlFor="female"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                className="radio radio-primary w-4 h-4"
                onChange={handleInputChange}
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleSignup}
          className="btn btn-active btn-primary w-full"
        >
          Sign up
        </button>

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
