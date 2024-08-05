import {Route,Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import SellerDashboard from "../pages/SellerDashboard"
import BuyerDashboard from "../pages/BuyerDashboard"
import gsap from "gsap"
import { useEffect,useRef } from "react";
import {Toaster} from "react-hot-toast";

const GsapTransition = () => {

    const nodeRef=useRef(null);
    const location=useLocation();
    // whenever the location will be changed, at that moment the use effect will run, because we will make this useEffect hook dependent

    // when a page renders the use effect runs first
    useEffect(() => { 
        if(nodeRef.Current){
            // for Gsap:
            // 1)target
            // 2)logic
            gsap.fromTo(nodeRef.Current,{opacity:0},{opacity:1,duration:1});
           
        }
       },[location]);
    // when we keep dependency array empty it means that this page will call whenever we refresh
    return (
        <div ref={nodeRef} >
            <Toaster/>
            <Routes location={location}>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/seller/profile" element={<SellerDashboard/>}/>
                <Route path="/buyer/profile" element={<BuyerDashboard/>}/>
            </Routes>
        </div>
  );
};

export default GsapTransition