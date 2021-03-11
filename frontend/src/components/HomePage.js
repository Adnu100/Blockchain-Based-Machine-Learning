import { React, Component } from "react";
import { Web3 } from "web3";
import Header from "./Header";
import Footer from "./Footer";
class HomePage extends Component {
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
        <Header></Header>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
