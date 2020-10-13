import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
// import Nav from "./components/nav";
import "./App.css";
import Cal from "./pages/calendar";
import LogIn from "./pages/logIn";
import Group from "./pages/createGroup";
import Acct from "./pages/createAcct";
import SignUp from "./pages/signUp/signup";
import "./style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/group" component={Group} />
        <Route exact path="/calendar" component={Cal} />
        <Route exact path="/newaccount" component={Acct} />
        <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
    );
  }
}
export default App;
