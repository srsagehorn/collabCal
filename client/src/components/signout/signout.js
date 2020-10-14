// import React from 'react';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';


// const auth = firebase.auth();
// firebase.initializeApp({
//   apiKey: "AIzaSyBDiZ1cd__o8osgSq5oy_DAsCrfD84EI0A",
//   authDomain: "collabcal-861dc.firebaseapp.com",
//   databaseURL: "https://collabcal-861dc.firebaseio.com",
//   projectId: "collabcal-861dc",
//   storageBucket: "collabcal-861dc.appspot.com",
//   messagingSenderId: "902494027901",
//   appId: "1:902494027901:web:d19b22b4b665cf16f2f114",
//   measurementId: "G-2847LL859L"
// })

// export default function SignOut() {
//   const [user] = useAuthState(auth);
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }