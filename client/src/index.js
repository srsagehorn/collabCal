import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// const localizer = momentLocalizer(moment);
// import { render } from "react-dom";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// moment.locale("en-US");
// const myEventsList = {} //empty object for now
// class App extends Component{
//   constructor(){
//    //We will populate this function later
//   }
//   componentDidMount(){
//    //We will populate this function later
//   }
//   render(){
//     return(
//       <Calendar
//         localizer={localizer}
//         events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//       />
//     )
//   }
// }
