import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./pages/calendar";
import LogIn from "./pages/logIn";
import Group from "./pages/createGroup";
import Acct from "./pages/createAcct";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/group" component={Group} />
        <Route exact path="/accounts" component={Acct} />
      </Router>
    );
  }
}
export default App;
