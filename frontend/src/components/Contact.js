import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron shadow-lg new-jumbotron">      
          <h2><b>Contact</b></h2>
          <hr />
          <h3>
          Contact us at learningchain@gmail.com
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;