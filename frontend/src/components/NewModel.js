import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { createContract } from "../utilities/create";

class NewModel extends Component {
  constructor() {
    super();
    this.state = {
      modelName: "",
      modelDesc: "",
    };
  }

  sendGradient(event) {
    event.preventDefault();
    const Web3 = require("web3");
    let connection = new Web3("http://localhost:7545/");
    connection.eth.getAccounts().then((accounts) => {
      createContract(connection, accounts[0]);
    });
  }

  changeName(event) {
    this.setState({
      modelName: event.target.value,
    });
  }

  changeDesc(event) {
    this.setState({
      modelDesc: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <center>
          <Header />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Add New Machine Learning Model</b>
            </h2>
            <hr />
            <form onSubmit={this.onSubmit} className="login-form">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="name">
                      <h3>
                        <b>Model Name</b>
                      </h3>
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.modelName}
                      name="model"
                      id="model"
                      placeholder="Model Name"
                      onChange={this.changeName.bind(this)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="name">
                      <h3>
                        <b>Description</b>
                      </h3>
                    </label>
                  </div>
                  <div className="col-md-7">
                    <textarea
                      className="form-control"
                      id="description"
                      value={this.state.modelDesc}
                      name="description"
                      rows="5"
                      placeholder="Add Description"
                      onChange={this.changeDesc.bind(this)}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <center>
                <button
                  type="button"
                  onClick={this.sendGradient.bind(this)}
                  className="btn btn-primary"
                >
                  <h3>Add Model</h3>
                </button>
              </center>
            </form>
          </div>
          <Footer />
        </center>
      </div>
    );
  }
}

export default NewModel;
