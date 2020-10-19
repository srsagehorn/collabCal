import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { Link } from "react-router-dom";

import firebaseConfig from '../firebase'
const auth = firebase.auth();

export default function () {
  return (
    <header>
      <div className="row">
        <div className="col-md-10">
          <a href = "/calendar">
        <p id = "title">CollabCal</p>
        </a>
        </div>
        <div className="userInfo col-md-2">
          <a href = "/calendar">
          <p id="username">Jill Adams</p>
          </a>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <div id="circle"></div>
  </button>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/group">Create a Group</a>
    <a className="dropdown-item" href="/join">Join a Group</a>
    <a className="dropdown-item" href="/loggedout"><SignOut /></a>
  </div>
</div>
        </div>
        
      </div>
    </header>
  );
}

function SignOut() {
  return auth.currentUser && (
    <Link to="/loggedout"><a className="sign-out" onClick={() => auth.signOut()}>Logout</a></Link>
  )
}