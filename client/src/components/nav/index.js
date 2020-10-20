import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { Link } from "react-router-dom";
import { useUserContext } from '../firebase/userContext'
import firebaseConfig from '../firebase'
const auth = firebase.auth();

export default function (props) {
  const [user, setUser] = useUserContext()
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
          <p id="username">{props.name}</p>
          </a>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <div id="circle"></div>
  </button>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/group">Create a Group</a>
    <a className="dropdown-item" href="/join">Join a Group</a>
    <a className="dropdown-item" href="/calendar">Back to Calendars</a>
    {/* Add the link to the sign up button here */}
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