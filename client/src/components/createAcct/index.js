import React from "react";

export default function () {
  return (
    <main>
      <form id="signup" class="form col-md-4 center">
        <h1 class="textCenter">Create an Account</h1>
        <div class="form-group">
          <label for="newEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="newEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="newPassword">Password</label>
          <input type="password" class="form-control" id="newPassword" />
        </div>
        <div class="form-group">
          <label for="confirmPass">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPass" />
        </div>
        <div class="row">
          <div class="col-md-10">
            <label for="newGroup">Join a Group</label>
            <input type="password" class="form-control" id="newGroup" />
          </div>
          <div class="col-md-2">
            <div class="add center">
              <p id="plus" class="textCenter">
                +
              </p>
            </div>
          </div>
        </div>
        <a href="/" class="textCenter">
          Log In
        </a>
        <div class="textCenter">
          <button type="submit" id="acctBtn" class="btn center">
            Create
          </button>
        </div>
      </form>
      <script src="./js/signup.js"></script>
    </main>
  );
}
