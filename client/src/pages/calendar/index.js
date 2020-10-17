import React from "react";
import Cal from "../../components/calendar";
import NewEvent from "../../components/newEvent";
import Nav from "../../components/nav";
import Chat from '../../components/chat'
// import Footer from "../../components/Footer"

export default function () {
  // API 'get' request from events table. store in array. pass array into the CAL tag below (as a prop?). 

  return (
    <div>
      <Nav />
      <div className="row">
        <Cal />
        <NewEvent />
        <Chat />
      </div>
    </div>
  );
}
