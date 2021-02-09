import { React, Component } from "react";
import "../static/hoveranimations.css";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron text-center myanimation">
        <h1>Learning Chain</h1>
        <p>Create your own machine learning model over blockchain!</p>
      </div>
    );
  }
}

export default Header;
