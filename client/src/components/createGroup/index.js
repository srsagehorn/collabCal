// , useEffect was removed from the below brackets to get rid of an error, if needed put back in
import React, { useState} from "react";
import API from '../../utils/API';
// import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'

export default function () {
  const [user] = useUserContext()

  const [values, setValues] = useState({
    group: "",
    groupmembers: ""
  });

  const handleInputChange = event => {
    const {name, value} = event.target
    setValues({
      ...values, 
      [name]: value,
      groupmembers: user.uid
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    API.createGroup(values).then((results) => {
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <main>
      <form id="login" className="col-md-4">
        <h1 className="textCenter">Create a Group</h1>
        <div className="form-group">
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
          <button
            type="submit"
            onClick={handleSubmit}
            id="createBtn"
            className="btn"
          >
            Create
          </button>
        </div>
      </form>
      <script src="./js/createGroup.js"></script>
    </main>
  );
}
