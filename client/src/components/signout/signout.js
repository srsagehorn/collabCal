import React from 'react';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import firebaseConfig from '../firebase'
const auth = firebase.auth();

export default function SignOut() {
  // const history = useHistory();
  // history.push("/");
  
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

