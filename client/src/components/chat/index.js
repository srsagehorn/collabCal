import React, { useRef, useState } from 'react';
import './chat.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebaseConfig from '../firebase'

//project-194166058685

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


export default function Chat() {

  // const [user] = useAuthState(auth);

  return (
    <div>
        <ChatRoom />
      </div>
      
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="chat-app">
      <header className="chat-header"><h3>Chat</h3></header>
      <main className="chat-main">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form className= "chat-form" onSubmit={sendMessage}>
        <input className="chat-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="message" />
        <button className="chat-button" type="submit" disabled={!formValue}>Send</button>
      </form>
    </div>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img className="chat-img" alt="" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p className="chat-p">{text}</p>
      </div>
    </>)
}

