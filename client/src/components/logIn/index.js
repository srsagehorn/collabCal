import React from "react";

export default function () {
  return (
    <main>
      <form id="login" class="col-md-4 center">
        <h1 class="textCenter">Sign In</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <a href="" class="textCenter">
          Create Account
        </a>
        <div class="textCenter">
          <button type="submit" id="loginBtn" class="btn center">
            Log In
          </button>
        </div>
      </form>
    </main>
  );
}
