import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getCurrentModel } from "../utilities/getCurrentModel";

class DownloadModel extends Component {
  constructor() {
    super();
    this.state = {
      contractAddress: "",
    };
  }

  changeAddress(event) {
    this.setState({
      contractAddress: event.target.value,
    });
  }

  sendGradient(event) {
    event.preventDefault();
    const Web3 = require("web3");
    let connection = new Web3("http://localhost:7545/");
    getCurrentModel({
      connection: connection,
      contractAddress: this.state.contractAddress,
    }).then((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        <center>
          <Header />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Download Machine Learning Model</b>
            </h2>
            <hr />
            <form onSubmit={this.onSubmit} className="login-form">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="name">
                      <h3>
                        <b>Model Address</b>
                      </h3>
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.contractAddress}
                      id="model"
                      placeholder="Model Address"
                      onChange={this.changeAddress.bind(this)}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={this.sendGradient.bind(this)}
                className="btn btn-primary"
              >
                <h3>Download Model</h3>
              </button>
            </form>
          </div>
          <Footer />
        </center>
      </div>
    );
  }
}

export default DownloadModel;
