import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { addMember } from "../utilities/addMember";

class AddNewMember extends Component {
  constructor() {
    super();
    this.state = {
      memberName: "",
      memberAddress: "",
      modelAddress: "",
    };
  }

  sendGradient(event) {
    event.preventDefault();
    const Web3 = require("web3");
    console.log("adding new member");
    let connection = new Web3("http://localhost:7545/");
    connection.eth.getAccounts().then((accounts) => {
      addMember(
        {
          connection: connection,
          contractAddress: this.state.modelAddress,
          senderAddress: accounts[0],
        },
        this.state.memberAddress
      );
    });
  }

  changeName(event) {
    this.setState({
      memberName: event.target.value,
    });
  }

  changeModelAddress(event) {
    this.setState({
      modelAddress: event.target.value,
    });
  }

  changeMemberAddress(event) {
    this.setState({
      memberAddress: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <center>
          <Header />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Add New Member</b>
            </h2>
            <hr />
            <form onSubmit={this.onSubmit} className="login-form">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="member">
                      <h3>
                        <b>Member Name</b>
                      </h3>
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.memberName}
                      name="member"
                      id="member"
                      placeholder="Member Name"
                      onChange={this.changeName.bind(this)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="memberaddress">
                      <h3>
                        <b>Member Address</b>
                      </h3>
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.memberAddress}
                      id="memberaddress"
                      placeholder="Member Name"
                      onChange={this.changeMemberAddress.bind(this)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="modeladdress">
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
                      name="model"
                      id="modeladdress"
                      placeholder="Model Address"
                      onChange={this.changeModelAddress.bind(this)}
                      required
                    />
                  </div>
                </div>
              </div>
              <center>
                <button
                  type="button"
                  onClick={this.sendGradient.bind(this)}
                  className="btn btn-primary"
                >
                  <h3>Add Member</h3>
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

export default AddNewMember;
