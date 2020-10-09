import React from "react";

export default function () {
  return (
    <form id="login" class="col-md-4 center">
      <h1 class="textCenter">Create an Account</h1>
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
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="row">
        <div class="col-md-10">
          <label for="exampleInputPassword1">Join a Group</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="col-md-2">
          <div class="add center">
            <p id="plus" class="textCenter">
              +
            </p>
          </div>
        </div>
      </div>
      <div class="textCenter">
        <button type="submit" id="acctBtn" class="btn center">
          Create
        </button>
      </div>
    </form>
  );
}
