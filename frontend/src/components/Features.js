import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Features extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Features</b>
          </h2>
          <hr />
          <h3>Train a machine learning without exchaging data</h3>
          <h3>And lot more features</h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Features;
