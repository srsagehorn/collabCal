import React from "react";

export default function () {
  return (
    <main>
      <form id="signup" className="form col-md-4 center">
        <h1 className="textCenter">Create an Account</h1>
        <div className="form-group">
          <label for="newEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="newEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="newPassword">Password</label>
          <input type="password" className="form-control" id="newPassword" />
        </div>
        <div className="form-group">
          <label for="confirmPass">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPass" />
        </div>
        <div className="row">
          <div className="col-md-10">
            <label for="newGroup">Join a Group</label>
            <input type="password" className="form-control" id="newGroup" />
          </div>
          <div className="col-md-2">
            <div className="add center">
              <p id="plus" className="textCenter">
                +
              </p>
            </div>
          </div>
        </div>
        <a href="/" className="textCenter">
          Log In
        </a>
        <div className="textCenter">
          <button type="submit" id="acctBtn" className="btn center">
            Create
          </button>
        </div>
      </form>
      <script src="./js/signup.js"></script>
    </main>
  );
}
