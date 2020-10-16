import React, {useState, useEffect} from "react";
import firebase from '../firebase'
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
    });
  }

  return (
  <div>
    <h1 class = "textCenter">Join a Group</h1>
    <form id="login" class="col-md-4 center">
      <div class="form-group">
        <label for="exampleInputEmail1">Group Name</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="group" 
          onChange={handleInputChange} 
          value={values.group}
        />
      </div>
      <div class="textCenter">
        <button type="submit" onClick={handleSubmit} id="createBtn" class="btn center">
          Join Group
        </button>
      </div>
    </form>
    </div>
  );
}
