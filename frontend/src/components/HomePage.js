import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";

class HomePage extends Component {
  constructor() {
    super();
  }
  sendGradient(event) {
    console.log('here');

    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div> 
        <Header/>
        <h2>A system to train machine learning models without exchange of data between organizations</h2>        
        <Footer/>
      </div>
    );
  }
}

export default HomePage;

/*
 <div id="features-section">
          <Features/>
        </div>
        <div id="about-section">
          <About/>
        </div>
        <div id="contact-section">
          <Contact/>
        </div>
*/