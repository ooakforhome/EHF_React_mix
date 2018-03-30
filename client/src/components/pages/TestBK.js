import React, { Component } from 'react';
import API from "../../utils/API"


export class Test extends Component {
  constructor(props){
    super(props)
      this.state = {
        selectedFile: null
      }
      this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
      this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }
  fileSelectedHandler = event => {
      event.preventDefault();
      this.setState({
        selectedFile: event.target.files[0]
      })
    }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectFile, this.state.selectedFile.name);
    API.addImage(fd, {
      onUploadProgress: progressEvent => {
        console.log{'Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100 ) + '%')
      }
    })
      .then(res=>{console.log(res)
    });

  render(){
    return(
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }

}
