import { React, Component } from "react";
import { Web3 } from "web3";
import Header from "./Header";
import Footer from "./Footer";

class AddNewMember extends Component {
  constructor() {
    super();
  }

  sendGradient(event) {
    console.log('here');

    event.preventDefault();
    alert("Uploaded");
  }

  render() {
    return (
      <div> 
        <center>
          <Header/>
          <div className="jumbotron shadow-lg new-jumbotron">
        
          <h2><b>Add New Member</b></h2>
          <hr />

          <form onSubmit = {this.onSubmit}  className="login-form">
          <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><h3><b>Member Name</b></h3></label>
                </div>
                <div className="col-md-7">
                  <input type="text" className="form-control" value="" name="member" id="member" placeholder="Member Name" onChange="" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><h3><b>Model Name</b></h3></label>
                </div>
                <div className="col-md-7">
                  <input type="text" className="form-control" value="" name="model" id="model" placeholder="Model Name" onChange="" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><h3><b>Description</b></h3></label>
                </div>
                <div className="col-md-7">
                  <textarea className="form-control" id="description" value="" name="description" rows="5" placeholder="Add Description"
                   onChange="" required></textarea>
                </div>
              </div>
            </div>     
            
            <center> <button type="button"  onClick={this.sendGradient.bind(this)} className="btn btn-primary"><h3>Add Member</h3></button></center>
                      
          </form>
        
        </div>
      <Footer/>
      </center>
      </div>
    );
  }
}

export default AddNewMember;
