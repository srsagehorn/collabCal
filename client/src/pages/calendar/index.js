import React from "react";
import Cal from "../../components/calendar";
import NewEvent from "../../components/newEvent";
import Nav from "../../components/nav";
// import Footer from "../../components/Footer"

export default function () {
  return (
    <div>
      <Nav />
      <Cal />
      <NewEvent />
    </div>
  );
}
