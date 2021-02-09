import { React, Component } from "react";

class GradientForm extends Component {
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
