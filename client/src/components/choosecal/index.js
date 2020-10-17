import React, {useState, useEffect} from "react";
import API from '../../utils/API';
import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'

export default function (props) {
    const calsArray = props.cals  
    const handleChange = event => {
        event.preventDefault();
        console.log(event.target.value)
        props.onClick(event.target.value)

      }

    return (
      <main>
        <ul>
            {calsArray ? calsArray.map(cal => <button onClick={handleChange} value={cal.group} key={cal.group}>{cal.group}</button>) : "You have no calendars!"}
        </ul>
      </main>
    );
  }
  