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
  const [mycals, setMycals] = useState(
    []
  )
  const [events, setEvents] = useState({
    currentEvents: []
  })
  const [displayName, setDisplayName] = useState(
    "")
  const [currentCal, setCal] = useState("")
  
  useEffect(() => {
    if(user) {
      setDisplayName(user.displayName)
      API.getCalendars(user.uid).then(results => {
        setMycals(results.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [user]);

  const handleChange = (newcal) => {
    setCal(newcal);
    API.getEvents(newcal).then(results => {
      setEvents({currentEvents: results.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getEvents = () => {
    API.getEvents(currentCal).then(results => {
      setEvents({currentEvents: results.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Nav name={displayName}/>
      <Choosecal onClick={handleChange} cals={mycals} />
      <div className="row">
        <Cal events={events.currentEvents} />
        <div className="col-md-4 pad">
        <NewEvent getEvents={getEvents} calendar={currentCal}/>
        <Chat calendar={currentCal}/>
        </div>
      </div>
    </div>
  );
}
