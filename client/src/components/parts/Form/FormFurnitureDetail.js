import React, { Component } from 'react';

const param = {
  shelf_length:'',
  shelf_width:'',
  inches_between_shelf:''
}

export class FormFurnitureDetail extends Component {
  render(){
    return(
  <form className="FurnitureDetail-container">
    <input
      value = {this.props.shelf_length}
      onChange = {this.props.onShelfLengthChange}
      className = "form-input"
      placeholder = "Shelf Length" />
    <input
      value = {this.props.shelf_width}
      onChange = {this.props.onShelfWidthChange}
      className = "form-input"
      placeholder = "Shelf Width" />
    <input
      value = {this.props.inches_between_shelf}
      onChange = {this.props.onIBSChange}
      className = "form-input"
      placeholder = "Inches Between Shelf" />
  </form>
    )
  }
}
