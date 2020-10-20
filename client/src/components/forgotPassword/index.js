import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import Modal from 'react-bootstrap/Modal'


 export default function ForgotPassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
     <div className="container form-group col-lg-5">
       <label for="email"><h3>Forgot your Password?</h3></label>
       <p>Confirm your email address and we'll send you a password reset</p>
       <input type="email" className="form-control" placeholder="Enter Email "></input>
       <p className="forgot-password text-right">
          <a href="/"> Remember your password? Sign in</a>
        </p>
       <br />
       <button className = "btn btn-primary" onClick={handleShow} >
        Reset Password
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="model-title">Email sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-body">
          Please check your email for the password reset
        </Modal.Body>
        <Modal.Footer>
          <button className = "btn btn-primary" onClick={handleClose}>
            Close
          </button>
          <Link to="/"><button className = "btn btn-primary">
           Return to Login
         </button>
         </Link>
        </Modal.Footer>
      </Modal>
      <br /> 
      <br />
     </div>
   )
 }

