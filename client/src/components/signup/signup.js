import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Link from '@material-ui/core/Link';

export default function FormPage() {
return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
              Your password
            </label>
            <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                <Link href="/">
                  Register
                </Link>
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

// const SignUp = ({ history }) => {
//   const provider = new firebase.auth.signUp();
//   const handleSignUp = useCallback(async event => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;
//     try {
//       await provider
//         .auth()
//         .createUserWithEmailAndPassword(email.value, password.value);
//       history.push("/");
//     } catch (error) {
//       alert(error);
//     }
//   }, [history]);