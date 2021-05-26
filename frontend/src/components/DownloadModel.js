import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getCurrentModel } from "../utilities/getCurrentModel";

class DownloadModel extends Component {
  constructor() {
    super();
    this.state = {
      contractAddress: "",
      toShow: false,
      model: {
        intercept: "",
        weights: "",
      },
    };
  }

  changeAddress(event) {
    this.setState({
      contractAddress: event.target.value,
    });
  }

  getModel(event) {
    event.preventDefault();
    const Web3 = require("web3");
    let connection = new Web3("http://localhost:7545/");
    getCurrentModel({
      connection: connection,
      contractAddress: this.state.contractAddress,
    }).then((result) => {
      console.log(result);
      this.setState({
        model: {
          intercept: result[0],
          weights: result[1],
        },
      });
    });
    this.setState({ toShow: true });
  }

  render() {
    return (
      <div>
        <center>
          <Header />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Show Machine Learning Model</b>
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
                onClick={this.getModel.bind(this)}
                className="btn btn-primary"
              >
                <h3>Show Model</h3>
              </button>
            </form>
          </div>
          {this.state.toShow && (
            <div className="jumbotron shadow-lg new-jumbotron">
              <h2>Intercept: {this.state.model.intercept}</h2>
              <h2>Weights: {this.state.model.weights}</h2>
            </div>
          )}
          <Footer />
        </center>
      </div>
    );
  }
}

export default DownloadModel;
