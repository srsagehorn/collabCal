import React from 'react';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import {Link } from "react-router-dom";

import firebaseConfig from '../firebase'
const auth = firebase.auth();

export default function SignOut() {
  // const history = useHistory();
  // history.push("/");
  
  return auth.currentUser && (
    <Link to="/loggedout"><button className="sign-out" onClick={() => auth.signOut()}>Log Out</button></Link>
  )
}

