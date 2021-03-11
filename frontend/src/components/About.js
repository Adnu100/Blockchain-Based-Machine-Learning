import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>About</b>
          </h2>
          <hr />
          <h3>
            We provide a decentralized platform to train your machine learning
            models using data of other data holders
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;

