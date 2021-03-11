import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
class HomePage extends Component {
  constructor() {
    super();
  }
  sendGradient(event) {
    console.log("here");

    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div>
        <Header />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
