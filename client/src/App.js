import React, { Component } from "react";
// removed , Link  from below brackets to get rid of error
import { BrowserRouter, Route} from "react-router-dom";
// import ReactDOM from "react-dom";
import "./App.css";
import Cal from "./pages/calendar";
import LogIn from "./pages/logIn";
import Group from "./pages/createGroup";
import Acct from "./pages/createAcct";
import SignUp from "./pages/signUp/signup";
import Join from "./pages/joinGroup";
import "./style.css";
import { UserProvider } from './components/firebase/userContext'
import LoggedOut from "./pages/loggedOut";
import ForgotPassword from "./components/forgotPassword";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <BrowserRouter>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/calendar" component={Cal} />
          <Route exact path="/newaccount" component={Acct} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/loggedout" component={LoggedOut} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </BrowserRouter>
      </UserProvider>
    );
  }
}
export default App;
