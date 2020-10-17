import React from "react";

export default function (user) {
  console.log (user)
  return (
    <header>
      <div className="row">
        <div className="col-md-10">
          <p id="title">CollabCal</p>
        </div>
        <div className="userInfo col-md-2">
          <a href = "/calendar">
  <p id="username">user.uid</p>
          </a>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <div id="circle"></div>
  </button>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/group">Create a Group</a>
    <a className="dropdown-item" href="/join">Join a Group</a>
    {/* Add the link to the sign up button here */}
    <a className="dropdown-item" href="/logout">Logout</a>
  </div>
</div>
        </div>
        {/* <SignOut /> */}
      </div>
    </header>
  );
}
