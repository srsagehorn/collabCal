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
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <div id="circle"></div>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/group">Create a Group</a>
    <a class="dropdown-item" href="/join">Join a Group</a>
    {/* Add the link to the sign up button here */}
    <a class="dropdown-item" href="/logout">Logout</a>
  </div>
</div>
        </div>
        {/* <SignOut /> */}
      </div>
    </header>
  );
}
