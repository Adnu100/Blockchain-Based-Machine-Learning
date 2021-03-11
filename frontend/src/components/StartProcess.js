import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class StartProcess extends Component {
  constructor() {
    super();
    this.state = {
      modelAddress: "",
      filesProvided: [],
    };
  }

  sendGradient(event) {
    event.preventDefault();
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
