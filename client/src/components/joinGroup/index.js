// , useEffect was removed from the below brackets to get rid of an error, if needed put back in
import React, { useState} from "react";
// import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'
import API from '../../utils/API';

export default function () {
  const [user] = useUserContext()

  const [values, setValues] = useState({
    group: "",
    groupmembers: ""
  }) 

  const handleInputChange = event => {
    const {name, value} = event.target
    console.log(user.uid);
    setValues({
      ...values, 
      [name]: value,
      groupmembers: user.uid
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    API.updateGroup(values).then(results => {
      console.log(results)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
    <form id="login" className="col-md-4">
      <div className="form-group">
      <h1 className="textCenter">Join a Group</h1>
        <label for="exampleInputEmail1">Group Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="group" 
          onChange={handleInputChange} 
          value={values.group}
        />
      </div>
      <div className="textCenter">
        <button type="submit" onClick={handleSubmit} id="createBtn" className="btn">
          Join
        </button>
      </div>
    </form>
    </div>
  );
}
