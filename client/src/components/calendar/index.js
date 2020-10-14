import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

// import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Cal from "../../components/calendar";
// import NewEvent from "../../components/newEvent";
// // import Footer from "../../components/Footer"

function CalendarPage() {
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);
  const startDate = moment().toDate();
  const endDate = moment().add(1, "days").toDate();

  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [title, setTitle] = useState("Some title");
  console.log(start, end);

  const onEventResize = (data) => {
    const { startDate, endDate } = data;
    console.log(data);
  };

  const onEventDrop = (data) => {
    console.log(data);
  };
  return (
    <div className="App col-md-8">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={[
          {
            start: moment().toDate(),
            end: moment().toDate(),
            title: "Some title",
          },
        ]}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: "100vh" }}
      />
    </div>
  );
}
export default CalendarPage;
