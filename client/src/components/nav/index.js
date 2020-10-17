import React from "react";
import SignOut from '../signout/signout'

export default function () {
  return (
    <header>
      <div className="row">
        <div className="col-md-10">
          <p id="title">CollabCal</p>
          
        </div>
        <div className="userInfo col-md-2">
          <p id="username">Jill Adams</p>
          <div id="circle"></div>
          <SignOut />
        </div>
        <div>
          
          </div>
      </div>
    </header>
  );
}
