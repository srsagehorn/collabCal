import React from "react";
import {Link } from "react-router-dom";
import './style.css';


 export default function LoggedOut() {

     return (
       <div className="center">
         <h2>Successfully Logged Out!</h2>
         <Link to="/"><button className = "btn  btn-primary">
           Return to Login
         </button>
         </Link>
       </div>
     );

 }