import React, {useState, useEffect} from "react";
import API from '../../utils/API';
import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'

export default function (props) {
    const calsArray = props.cals  
    console.log("this is what we are looking at" + props.cals)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.value)
        setCal({currentCal: event.target.value})
      }

    return (
      <main>
        <ul>
            {calsArray ? calsArray.map(cal => <button onClick={handleSubmit} value={cal.group} key={cal.group}>{cal.group}</button>) : "You have no calendars!"}
        </ul>
      </main>
    );
  }
  