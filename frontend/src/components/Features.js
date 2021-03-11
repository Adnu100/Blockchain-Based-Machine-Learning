import { React, Component } from "react";
class Features extends Component {
  constructor() {
    super();
  }

  sendGradient(event) {
    console.log("here");
    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div>
        <h2>Train a machine learning without exchaging data</h2>
        <h2>And lot more features</h2>
      </div>
    );
  }
}

export default Features;
