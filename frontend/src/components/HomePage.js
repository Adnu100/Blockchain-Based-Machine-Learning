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
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            A system to train machine learning models without exchange of data
            between organizations
          </h2>
        </div>
        <div className="jumbotron bg-dark text-white shadow-lg new-jumbotron">
          <h2>
            <b>Features</b>
          </h2>
        </div>
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Decentralization</b>
          </h2>
          <hr />
          <h3>
            The system belongs to more than one entities providing
            decentralization
          </h3>
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
          <h3>
            Achieves more security by training a model over ethereum blockchain
          </h3>
        </div>
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Privacy of data holders</b>
          </h2>
          <hr />
          <h3>
            Provides differential privacy mechanisms to protect privacy of data
            holders
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
