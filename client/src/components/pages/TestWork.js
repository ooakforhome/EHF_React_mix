import React, { Component } from 'react';
import API from "../../utils/API"


export class Test extends Component {
  constructor(props){
    super(props)
      this.state = {
        file: '',
        text: ''
      }
      this.haindleInputChange = this.haindleInputChange.bind(this);
      this.handleInputChangeText = this.handleInputChangeText.bind(this);
  }
handleInputChangeText = e => {
  this.setState({
    text: e.target.value
  });
};
  haindleInputChange = e =>{
    this.setState({
      file: e.target.file
    });
  };

  handleSubmit = event => {
    event.preventDefault();
      API.addUpload({
        file: this.state.file,
        text: this.state.text
      })
      .then(res => console.log(JSON.stringify(res)));
  };



  render(){
    return(
      <div>
        <p>uplaod Image</p>
        <input
          type= "file"
          value={this.state.file}
          onChange={this.handleInputChange}
          name="file"

          placeholder="file "
        />
        <input
          type= "text"
          value={this.state.text}
          onChange={this.handleInputChangeText}
          name="text"
          placeholder="text "
        />
        <button
          onClick = {this.handleSubmit} >
          SUBMIT
        </button>
      <div>
        {this.state.file}
        {this.state.text}
      </div>
      </div>
    )
  }

}
