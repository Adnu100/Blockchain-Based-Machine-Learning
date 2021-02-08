import { React, Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <h1>Learning Chain</h1>
          <p>Create your own machine learning model over blockchain!</p>
        </div>
        <p>Train your model with multiparty data!</p>
      </>
    );
  }
}

export default Header;
