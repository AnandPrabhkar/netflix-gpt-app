import React, { useState } from "react";

import Header from "./Header";

const Login = () => {
  const[isSignIn, setSignIn] = useState(false);
  function validateSignIn() {
      setSignIn(!isSignIn)
  }
  return (
   
    <div>
      <Header></Header>
      <div className="absolute">
        <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"></img>
      </div>
     
        <form className=" w-3/12 bg-black absolute  p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1>{!isSignIn? "Sign In": "Sign Up"}</h1>
        {isSignIn && ( <input type="text" placeholder="Full Name" className="w-full p-4 my-4  bg-gray-700"/>)}
          <input type="text" placeholder="Email Address" className="w-full p-4 my-4  bg-gray-700"/>
          <input type="password" placeholder="Enter Password" className="w-full p-4 my-4  bg-gray-700"/>
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign In </button>
          <p className="py-4 cursor-pointer" onClick={validateSignIn}>{!isSignIn ? "Already Sign Up Please Sign": "New to Netfix? Please Sign Up" }</p>

        </form>
     
    </div>
  );
};

export default Login;
