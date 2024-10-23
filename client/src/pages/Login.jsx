import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice"
import {useDispatch} from "react-redux"

const Login = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
  const dispatch=useDispatch();
  const navigate =useNavigate();

  const handleLogin =async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post(import.meta.env.VITE_API_URL+"/login",{
        email,
        password,
        });
        const data=await res.data;
        toast.success(data.message);
        // want to dispatch login->jo bhi data aa raha hai use push karna hai state me
        dispatch(login(data));
        navigate(`/${data.role}/profile`);
    }catch(error){
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full" >      
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">Let's Connect!</h1>
        <form onSubmit={handleLogin}>

          {/* for email address */}
          <div className="mb-4">
            <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2">Email Address
            </label>
            <input 
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          {/* for password */}
          <div className="mb-4">
            <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-2">Password
            </label>
            <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter Your Password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* For forgot password add this part from another video */}
          <a href="#" className="text-xs text-gray-600 hover:text-black">Forgot Password?</a>

          {/*  Signup with account */}
          <div className="flex items-center justify-end mb-4">
          <Link className="text-xs text-black" to="/signup">Create Account</Link>
          </div>

          <button type="submit" className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login