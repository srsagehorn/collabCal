import React, {useState, useEffect}  from "react";
import Cal from "../../components/calendar";
import NewEvent from "../../components/newEvent";
import Nav from "../../components/nav";
import Chat from '../../components/chat'
import ChatList from '../../components/chat/App'
// import API from '../../utils/API';
// import firebase from '../firebase'
import { useUserContext } from '../../components/firebase/userContext'
// import Footer from "../../components/Footer"

export default function () {
  const [user] = useUserContext()
  console.log(user);
  if(user) {
    console.log(user.uid)
  }
  const [mycals, setMycals] = useState({
    cals: []
  }, [])
  const [currentCal, setCurrentCal] = useState({
    currentCal: ""
  })
  // API 'get' request from events table. store in array. pass array into the CAL tag below (as a prop?). 

  // call getCalendars route to get calendars user belongs to. 
  // set the returned calendars in the mycals state. 
  // pass mycals data down into "pick a calendar" component. when user selects calendar, set currentCal state to the value of calendar clicked on. 
  // then call getEvents endpoint to retrive events from that calendar and save into an array of objects.
  // pass that array into the calendar component as a prop?
  
  // useEffect(() => {
  //   console.log(user.uid)
  //   API.getCalendars(user.uid).then(results => {
  //     console.log(results)
  //   })
  //   .then(res => this.setState({cals: res}))
  // });

  return (
    <div>
      <Nav />
      <div className="row">
        <Cal />
        <div className="col-md-4 pad">
        <NewEvent />
        <ChatList />
        {/* <Chat /> */}
        </div>
      </div>
    </div>
  );
}
