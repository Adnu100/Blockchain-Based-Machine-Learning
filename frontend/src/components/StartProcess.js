import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { gradientDescent } from "../utilities/gd";
import { getCurrentModel } from "../utilities/getCurrentModel";
import { addGradient } from "../utilities/addGradient";

class StartProcess extends Component {
  constructor() {
    super();
    this.state = {
      modelAddress: "",
      filesProvided: [],
      iterations: 0,
    };
  }

  sendGradientByProcessing(data) {
    const Web3 = require("web3");
    let connection = new Web3("http://localhost:7545/");
    getCurrentModel({
      connection: connection,
      contractAddress: this.state.modelAddress,
    }).then((result) => {
      let newline = {
        slope: parseFloat(result["0"]),
        intercept: parseFloat(result["1"]),
      };
      let x = [],
        y = [];
      data.forEach((s) => {
        const [xi, yi] = s.split(",");
        x.push([xi]);
        y.push(yi);
      });
      let model = gradientDescent(
        x,
        y,
        0.001,
        this.state.iterations,
        0.00001,
        null,
        true
      );
      const [newintercept, newslope] = model;
      newline.slope = newslope;
      newline.intercept = newintercept;
      console.log(newline);
      newline.slope = newline.slope.toString();
      newline.intercept = newline.intercept.toString();
      connection.eth.getAccounts().then((accounts) => {
        addGradient(
          {
            connection: connection,
            contractAddress: this.state.modelAddress,
            senderAddress: accounts[0],
          },
          newline
        );
      });
    });
  }

  sendGradient(event) {
    event.preventDefault();
    let reader = new FileReader();
    let data = [];
    let cnt = 0;
    reader.onload = (event) => {
      data.push(...event.target.result.split("\n"));
      if (!data[data.length - 1]) data.pop();
      cnt += 1;
      if (cnt === this.state.filesProvided.length) {
        console.log("starting training process...");
        this.sendGradientByProcessing(data);
      }
    };
    Array.from(this.state.filesProvided).forEach((file) => {
      reader.readAsText(file);
    });
  }

  changeAddress(event) {
    this.setState({
      modelAddress: event.target.value,
    });
  }

  changeFiles(event) {
    this.setState({
      filesProvided: event.target.files,
    });
  }

  changeIterations(event) {
    this.setState({
      iterations: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Machine Learning Model</b>
          </h2>
          <hr />
          <form onSubmit={this.onSubmit} className="login-form">
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="model">
                    <h3>
                      <b>Model Name</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.modelAddress}
                    name="category"
                    id="model"
                    placeholder="Model Address"
                    onChange={this.changeAddress.bind(this)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="datasetfile">
                    <h3>
                      <b>Select a dataset</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7" id="storage">
                  <input
                    type="file"
                    className="form-control"
                    id="datasetfile"
                    onChange={this.changeFiles.bind(this)}
                    multiple
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="iter">
                    <h3>
                      <b>Iterations</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.iterations}
                    id="iter"
                    placeholder="Iterations"
                    onChange={this.changeIterations.bind(this)}
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
              <h3>Start Process</h3>
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StartProcess;
