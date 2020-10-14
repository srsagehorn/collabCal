import React from "react";
// import SignOut from '../signout/signout'

export default function () {
  return (
    <header>
      <div class="row">
        <div class="col-md-10">
          <p id="title">CollabCal</p>
        </div>
        <div class="userInfo col-md-2">
          <p id="username">Jill Adams</p>
          <div id="circle"></div>
        </div>
        {/* <SignOut /> */}
      </div>
    </header>
  );
}
