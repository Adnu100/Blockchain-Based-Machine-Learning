import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import header from "./components/Header";
import footer from "./components/Footer";
import StartProcess from "./components/StartProcess";
import DownloadModel from "./components/DownloadModel";
import HomePage from "./components/HomePage";
import "./static/gradientform.css";

function App() {
  return (
    <div>
    <Router>
          <div className="App">
            <Switch>
              <Route exact path="/DownloadModel" component={DownloadModel} />
              <Route exact path="/StartProcess" component={StartProcess} />
              <Route exact path="/HomePage" component={HomePage} />
              <Redirect from="/" to="/HomePage" />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;


/*
  <FileInput></FileInput> 
  <Header></Header>
      <div
        className="container rounded border border-primary shadow-lg myform"
        style={{ padding: "20px" }}
      >
        <GradientForm></GradientForm>
      </div>
      <Footer></Footer>

<<<<<<< HEAD
=======
export default App;


/*
  <FileInput></FileInput> 
  <Header></Header>
      <div
        className="container rounded border border-primary shadow-lg myform"
        style={{ padding: "20px" }}
      >
        <GradientForm></GradientForm>
      </div>
      <Footer></Footer>

>>>>>>> dad44a7c0a620fb796daf3e64787fbb909e21537
*/