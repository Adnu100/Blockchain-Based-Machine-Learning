import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { gradientDescent } from "../utilities/gd";
import { addGradient } from "../utilities/addGradient";

class StartProcess extends Component {
  constructor() {
    super();
    this.state = {
      nodeNumber: 1,
      modelAddress: "",
      userAddress: "",
      filesProvided: [],
      iterations: 0,
      totalNodes: 1,
    };
    const Web3 = require("web3");
    this.connection = new Web3("http://localhost:7545/");
    this.connection.eth
      .getAccounts()
      .then((accounts) => {
        this.master = accounts[0];
      })
      .catch(() => {
        this.master = "";
      });
  }

  sendGradientByProcessing(data) {
    let connection = this.connection;

    let x = [],
      y = [];
    data.forEach((s) => {
      const [xi, yi] = s.split(",");
      x.push([Number.parseFloat(xi)]);
      y.push(Number.parseFloat(yi));
    });
    gradientDescent(
      {
        connection: connection,
        contractAddress: this.state.modelAddress,
        senderAddress: this.state.userAddress,
      },
      x,
      y,
      0.001,
      this.state.iterations,
      0.00001,
      null,
      true,
      this.state.nodeNumber,
      this.state.totalNodes
    );
  }

  sendGradient(event) {
    event.preventDefault();
    if (this.state.nodeNumber === 1) {
      addGradient(
        {
          connection: this.connection,
          contractAddress: this.state.modelAddress,
          senderAddress: this.state.userAddress,
        },
        {
          slope: "1 0",
          intercept: "0",
        }
      );
    }
    alert("reading file and starting training process!");
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

  changeNodeNumber(event) {
    this.setState({
      nodeNumber: event.target.value,
    });
  }

  changeAddress(event) {
    this.setState({
      modelAddress: event.target.value,
    });
  }

  changeUserAddress(event) {
    this.setState({
      userAddress: event.target.value,
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

  changeTotalNodes(event) {
    this.setState({
      totalNodes: event.target.value,
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
                      <b>Node Number</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.nodeNumber}
                    name="category"
                    id="model"
                    placeholder="Given Serial Number"
                    onChange={this.changeNodeNumber.bind(this)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="model">
                    <h3>
                      <b>Model Address</b>
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
                  <label htmlFor="model">
                    <h3>
                      <b>User Address</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.userAddress}
                    name="category"
                    id="model"
                    placeholder="User Address"
                    onChange={this.changeUserAddress.bind(this)}
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
                    placeholder="Number of Iterations"
                    onChange={this.changeIterations.bind(this)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="iter">
                    <h3>
                      <b>Participating Nodes</b>
                    </h3>
                  </label>
                </div>
                <div className="col-md-7">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.totalNodes}
                    id="iter"
                    placeholder="Total Number of Participating Nodes"
                    onChange={this.changeTotalNodes.bind(this)}
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
