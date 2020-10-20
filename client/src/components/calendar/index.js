import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function CalendarPage(props) {
  let eventsArray = props.events
  let newEvents =eventsArray.length > 0 ? eventsArray.map(event => ({ title: event.event, start: event.eventStart, end: event.eventEnd })) : [];
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);
  const startDate = moment().toDate();
  const endDate = moment().add(1, "days").toDate();

  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [title, setTitle] = useState("Some title");

  const onEventResize = (data) => {
    const { startDate, endDate } = data;
    console.log(data);
  };

  const onEventDrop = (data) => {
    console.log(data);
  };


  return (
    <div className="col-md-8">
      {/* <button onClick={handleSubmit}>Hello</button> */}
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={eventsArray ? newEvents : []}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
      />
    </div>
  );
}
export default CalendarPage;
