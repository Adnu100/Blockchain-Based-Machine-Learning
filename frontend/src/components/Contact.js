import { React, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Contact extends Component {
  constructor() {
    super();
  }
  render() { 
    return (
      <div>
        <Header />
        <div className="jumbotron shadow-lg new-jumbotron">
          <h2>
            <b>Contact</b>
          </h2>
          <hr />
          <div className="jumbotron shadow-lg new-jumbotron">
            <h2>
              <b>Send a message</b>
            </h2>
            <form onSubmit={this.onSubmit} className="login-form">
                <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><h3><b>Email ID</b></h3></label>
                </div>
                <div className="col-md-7">
                  <input type="text" className="form-control" value="" name="category" id="model" placeholder="Enter your email ID" onChange="" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name"><h3><b>Message</b></h3></label>
                </div>
                <div className="col-md-7">
                  <textarea className="form-control" id="description" value="" name="description" rows="5" placeholder="Add your message"
                   onChange="" required></textarea>
                </div>
              </div>
            </div>
            
            <center> <button type="button" className="btn btn-primary"><h3>Send Message</h3></button></center>
                  
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

