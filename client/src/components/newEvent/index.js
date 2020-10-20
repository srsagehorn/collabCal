// , useEffect was removed from the below brackets to get rid of an error, if needed put back in
import React, { useEffect, useState} from "react";
import API from '../../utils/API';

export default function (props) {
  const cal = props.calendar;
  const [values, setValues] = useState({
    event: "",
    eventStart: "",
    eventEnd: "",
    description: "",
    calName: cal
  })

  useEffect(() => {
    setValues({
      ...values,
      calName: props.calendar
    })
  }, [props.calendar])

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
      props.getEvents()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <form>
        <div className="form-group">
          <h2 className = "textCenter">Create Event</h2>
          <label htmlFor="newEventTitle">Event Title</label>
          <input type="text" name="event" onChange={handleInputChange} value={values.event} className="form-control" id="newEventTitle" />
        </div>
        <div class = "row">
        <div className="col-md-6 form-group">
          <label htmlFor="newEventDate">Start Date</label>
          <input placeholder = "MM-DD-YYYY" type="text" name="eventStart" onChange={handleInputChange} value={values.eventStart} className="form-control" id="newEventDate" />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="newEventDate">End Date</label>
          <input placeholder = "MM-DD-YYYY"  type="text" name="eventEnd" onChange={handleInputChange} value={values.eventEnd} className="form-control" id="newEventDate" />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description (optional)</label>
          <p></p>
          <textarea type="text" name="description" onChange={handleInputChange} value={values.description}id="description" />
        </div>
        <div className = "alignRight">
        <button type="Create Event" onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
  );
}
