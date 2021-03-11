import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class HomePage extends Component {
  sendGradient(event) {
    console.log("here");

    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div>
        <Header />
        <h2>
          A system to train machine learning models without exchange of data
          between organizations
        </h2>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

