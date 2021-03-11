import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class DownloadModel extends Component {
  sendGradient(event) {
    console.log("here");

    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div>
        <center>
          <Header />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Download Machine Learning Model</b>
            </h2>
            <hr />

            <form onSubmit={this.onSubmit} className="login-form">
              <center>
                {" "}
                <button
                  type="button"
                  onClick={this.sendGradient.bind(this)}
                  className="btn btn-primary"
                >
                  <h3>Download Model</h3>
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

export default DownloadModel;

