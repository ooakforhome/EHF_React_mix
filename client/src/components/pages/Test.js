import React, { Component }  from 'react'
import API from "../../utils/API"


export class Test extends Component {
  constructor(props) {
  super(props)
    this.state = {
      uploadFile: ''
    }
  }

  fileChangedHandler = event => {
    event.preventDefault();
    this.setState({
      uploadFile: event.target.files[0]
    })
    console.log(event.target.files[0]);
    }

  fileUploadHandler = () => {
    
    }

  render(){
    return(
      <div className="App">
        <input
          type="file"
          onChange={this.fileChangedHandler}
        />
        <button onClick={this.fileUploadHandler}>upload</button>
      </div>
    );
  }

}
