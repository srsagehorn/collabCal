import React, {useState, useEffect}  from "react";
import Cal from "../../components/calendar";
import NewEvent from "../../components/newEvent";
import Nav from "../../components/nav";
import Chat from '../../components/chat'
import Choosecal from '../../components/choosecal';
import API from '../../utils/API';
import { useUserContext } from '../../components/firebase/userContext'


export default function () {
  const [user] = useUserContext()
  console.log(user);
  if(user) {
    console.log(user.uid)
  }
  const [mycals, setMycals] = useState(
    []
  )
  const [events, setEvents] = useState({
    currentEvents: []
  })
  const [currentCal, setCal] = useState({
    currentCal: ""
  })
  
  useEffect(() => {
    if(user) {
      console.log(user)
      API.getCalendars(user.uid).then(results => {
            console.log(results.data)
            setMycals(results.data)
      })
    }
  }, [user]);

  function handleChange(newcal) {
    setCal({currentCal: newcal});
    getEvents()
  }

  function getEvents() {
    console.log(currentCal.currentCal)
    API.getEvents(currentCal.currentCal).then(results => {

      setEvents({currentEvents: results.data})
    })
  }

  return (
    <div>
      <Nav />
      <p>{user ? mycals.length : "loading calendars..."}</p>
      <Choosecal onClick={handleChange} cals={mycals} />
      <div className="row">
        <Cal events={events.currentEvents} />
        <div className="col-md-4 pad">
        <NewEvent getEvents={getEvents} calendar={currentCal.currentCal}/>
        <Chat />
        </div>
      </div>
    </div>
  );
}
