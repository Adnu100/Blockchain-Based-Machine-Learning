import { React, Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse_click: false,
      active_page: this.props.active_page,
    };
  }

  togglebtn = async (e) => {
    e.preventDefault();
    if (this.state.collapse_click === false) {
      this.setState({ collapse_click: true });
      console.log(this.state.collapse_click);
    } else {
      this.setState({ collapse_click: false });
      console.log(this.state.collapse_click);
    }
  };
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
    const navstyle = {
      fontSize: "20px",
      paddingLeft: "5%",
      marginTop: "-50px",
    };

    return (
      <div className="jumbotron text-center">
        <div>
          <div className="nav ml-auto" style={{ float: "center" }}>
            <Link to="/HomePage#home-section" style={navstyle}>
              HOME
            </Link>
            <Link to="/StartProcess" style={navstyle}>
              TRAIN MODEL
            </Link>
            <Link to="/DownloadModel" style={navstyle}>
              Show Model
            </Link>
            <Link to="/NewModel" style={navstyle}>
              NEW MODEL
            </Link>
            <Link to="/AddNewMember" style={navstyle}>
              ADD NEW MEMBER
            </Link>
            <Link to="/Features" style={navstyle}>
              FEATURES
            </Link>
            <Link to="/About" style={navstyle}>
              ABOUT
            </Link>
            <Link to="/Contact" style={navstyle}>
              CONTACT
            </Link>
          </div>
        </div>
        <br />
        <div style={{ paddingTop: "20px" }}>
          <img alt="learning chain logo" style={logostyle} src={logo} />
          <h1 style={appstyle}>
            <b>Learning Chain</b>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
