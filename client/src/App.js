import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
      <BrowserRouter>
        <Nav />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/" component={LogIn} />
        <Route exact path="/group" component={Group} />
        <Route exact path="/accounts" component={Acct} />
      </BrowserRouter>
    );
  }
}
export default App;
