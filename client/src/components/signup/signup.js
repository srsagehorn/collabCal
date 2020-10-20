import React from "react";

export default function SignUp() {
  return (
    <div className="sign-up">
      <form className="container">
        <h3 className="col-lg-7">Sign Up</h3>

        <div className="form-group col-lg-7">
          <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group col-lg-7">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group col-lg-7">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group col-lg-7">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group col-lg-7">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block col-lg-7">
          Sign Up
        </button>
        <p className="forgot-password text-right col-lg-7">
          <a href="/"> Already registered? Sign in</a>
        </p>
      </form>
    </div>
  );
}
