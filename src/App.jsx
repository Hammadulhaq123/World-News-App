import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";


export default class App extends Component {

  pagesize = 12;
  render() {
    // const category = "sports";
    return (
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />

          <Route exact path="/" element={
            <>
              <News name="Top Headlines" key="gen" pageSize={this.pagesize} counrty="in" category="general" />
            </>
          } />

          <Route exact path="/general" element={
            <>
              <News name="General" key="general" pageSize={this.pagesize} counrty="in" category="general" />
            </>
          } />
          <Route path="/sports" element={
            <>
              <News name="Sports" key="sports" pageSize={this.pagesize} counrty="in" category="sports" />
            </>
          } />
          <Route path="/business" element={
            <>
              <News name="Business" key="business" pageSize={this.pagesize} counrty="in" category="business" />
            </>
          } />
          <Route path="/entertainment" element={
            <>
              <News name="Entertainment" key="entertainment" pageSize={this.pagesize} counrty="in" category="entertainment" />
            </>
          } />
          <Route path="/health" element={
            <>
              <News name="Health" key="health" pageSize={this.pagesize} counrty="in" category="health" />
            </>
          } />
          <Route path="/science" element={
            <>
              <News name="Science" key="science" pageSize={this.pagesize} counrty="in" category="science" />
            </>
          } />
          <Route path="/technology" element={
            <>
              <News name="Technology" key="technology" pageSize={this.pagesize} counrty="in" category="technology" />
            </>
          } />



        </Routes>
      </Router>
    )
  }
}
