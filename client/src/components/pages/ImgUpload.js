import React, { Component } from "react";
import API from "../../utils/API";

export class ImgUpload extends Component {
  constructor (props){
    super(props)
        this.state = {
          file: '',
          name: ''
        }
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let files = e.target.files[0];
    console.log(files)
      this.setState({
        file: e.target.files[0]
      });
  }
  _handleInputChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('file', this.state.file);
    formData.append('uname', this.state.name);
    console.log(this.state.file)
    console.log(this.state.name)
    API.addUpload(formData)
      .then(res => console.log(res))
  }

  render(){
    return(
      <div>
        <form
            encType="multipart/form-data"
            onSubmit={this._handleSubmit} >
          <input
            className="fileInput"
            type="file"
            name= "file"
            id="file"
            onChange={this._handleImageChange} />
          <input
            type="text"
            name="name"
            placeholder= "name"
            value= {this.state.name}
            onChange={this._handleInputChange} />
           <button
           type="submit">
              save
           </button>
        </form>

      </div>
    )
  }
}
