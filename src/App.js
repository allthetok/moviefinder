import React, { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}
