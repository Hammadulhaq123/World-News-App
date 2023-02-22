import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Sidebar from "./components/Sidebar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar/>
        <News pageSize={11}/>
      </div>
    )
  }
}
