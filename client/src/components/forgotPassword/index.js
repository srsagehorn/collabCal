import React from "react";
import {Link } from "react-router-dom";
import './style.css';


 export default function ForgotPassword() {
   return (
     <div className="container form-group col-lg-5">
       <label for="email"><h3>Forgot your Password?</h3></label>
       <p>Confirm your email address and we'll send you a password reset</p>
       <input type="email" class="form-control" placeholder="Enter Email "></input>
       <br />
       
       <button className= "alert alert-info btn btn-primary" role="alert">
           Reset Password
         </button>
        
     </div>
   )
 }

