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
         </div>
         <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>No data exchange</b>
          </h2>
          <hr />
          <h3>Trains a machine learning without exchaging data</h3>
         </div>
         <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Secure</b>
          </h2>
          <hr />
          <h3>Achieves more security by training a model over ethereum blockchain</h3>
        </div>
         <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Privacy of data holders</b>
          </h2>
          <hr />
          <h3>Provides differential privacy mechanisms to protect privacy of data holders</h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Features;
