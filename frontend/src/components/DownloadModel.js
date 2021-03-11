import { React, Component } from "react";
import { Web3 } from "web3";
import Header from "./Header";
import Footer from "./Footer";

class DownloadModel extends Component {
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
        
          <h2><b>Download Machine Learning Model</b></h2>
          <hr />

          <form onSubmit = {this.onSubmit}  className="login-form">
            <center> <button type="button"  onClick={this.sendGradient.bind(this)} className="btn btn-primary">Download Model</button></center>
                      
          </form>
        
        </div>
        <Footer/>
      </center>
      </div>
    );
  }
}

export default DownloadModel;

/*
 <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><b>Category</b></label>
                </div>
                <div className="col-md-7">
                  <input type="text" className="form-control" value="" name="category" id="category" placeholder="category" onChange="" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><b>Description</b></label>
                </div>
                <div className="col-md-7">
                  <textarea className="form-control" id="description" value="" name="description" rows="5" placeholder="Add Description"
                   onChange="" required></textarea>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><b>Select a dataset</b></label>
                </div>
                <div className="col-md-7" id="storage">
                  <input type = "file" className="form-control" id = "myid" onChange="" multiple/>
                </div>
              </div>
            </div>          
*/