import { React, Component } from "react";
import raw from "./csv.txt";

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    console.log("***********************");
    console.log(raw);
    console.log("***********************");
    // let file = event.target.files[0];
    // console.log(file);

    // if (file) {
    //   let data = new FormData();
    //   data.append('file', file);
    // console.log("***********************");
    //   console.log(data);
    //   console.log("***********************");
    //   // axios.post('/files', data)...
    // }
  }

  render() {
    return (
      <span>
        <input type="file" name="myFile" onChange={this.uploadFile} />
      </span>
    );
  }
}

export default FileInput;

