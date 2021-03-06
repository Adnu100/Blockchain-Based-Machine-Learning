import { React, Component } from "react";
import { Web3 } from "web3";

class GradientForm extends Component {
  constructor() {
    super();
  }

  sendGradient(event) {
    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="formFileLg" className="form-label">
            Upload your gradient
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>
        <button
          onClick={this.sendGradient.bind(this)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default GradientForm;
