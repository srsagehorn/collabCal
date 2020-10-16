import React, {useState, useEffect} from "react";
import API from '../../utils/API';

export default function () {

  const [values, setValues] = useState({
    event: "",
    eventDate: "",
    description: "",
    CalendarId: 1
  })

  const handleInputChange = event => {
    const {name, value} = event.target
    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    API.createEvent(values).then(results => {
      console.log(results)
    });
  }

  return (
      <form>
        <div class="form-group">
          <label for="newEventTitle">Event Title</label>
          <input type="text" name="event" onChange={handleInputChange} value={values.event} class="form-control" id="newEventTitle" />
        </div>
        <div class="form-group">
          <label for="newEventDate">Date</label>
          <input type="text" name="eventDate" onChange={handleInputChange} value={values.eventDate} class="form-control" id="newEventDate" />
        </div>
        <div class="form-group">
          <label for="description">Description (optional)</label>
          <p></p>
          <textarea type="text" name="description" onChange={handleInputChange} value={values.description}id="description" />
        </div>
        <button type="Create Event" onClick={handleSubmit} class="btn btn-primary">
          Submit
        </button>
      </form>
  );
}
