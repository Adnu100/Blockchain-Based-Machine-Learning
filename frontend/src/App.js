import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import header from "./components/Header";
import footer from "./components/Footer";
import StartProcess from "./components/StartProcess";
import DownloadModel from "./components/DownloadModel";
import AddNewMember from "./components/AddNewMember";
import NewModel from "./components/NewModel";
import HomePage from "./components/HomePage";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <Router>
          <div className="App">
            <Switch>
              <Route exact path="/DownloadModel" component={DownloadModel} />
              <Route exact path="/StartProcess" component={StartProcess} />
              <Route exact path="/NewModel" component={NewModel} />
              <Route exact path="/AddNewMember" component={AddNewMember} />
              <Route exact path="/NewModel" component={NewModel} />
              <Route exact path="/HomePage" component={HomePage} />
              <Route exact path="/Features" component={Features} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
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