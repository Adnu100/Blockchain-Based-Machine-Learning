import { React, Component } from "react";
import "../static/hoveranimations.css";
import logo from "./logo.png";

class Header extends Component {
  render() {
    const logostyle = {
      height: "150px",
      width: "150px",
      display: "inline-block",
    };
    const appstyle = {
      marginTop: "20px",
      fontSize: "50px",
      display: "inline-block",
    };
    return (
      <div className="jumbotron text-center">
        <img style={logostyle} src={logo} />
        <h1 style={appstyle}>Learning Chain</h1>
      </div>
    );
  }
}

export default Header;
