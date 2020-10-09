import React from "react";

export default function () {
  return (
    <main>
      <form class="form col-md-4 center">
        <h1 class="textCenter">Sign In</h1>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <a href="/newaccount" class="textCenter">
          Create Account
        </a>
        <div class="textCenter">
          <button type="submit" id="loginBtn" class="btn center">
            Go!
          </button>
        </div>
      </form>
      <script src="./js/login.js"></script>
    </main>
  );
}
