import React, { Component } from 'react';

const param = {
  pkg_size:[],
  actual_size:[],
  shelf_length:'',
  shelf_width:'',
  inches_between_shelf:''
}

export class FormSize extends Component {
  render(){
    return(
  <form className="size-container">
    <input
      value = {this.props.pkg_size[0]}
      onChange = {this.props.onPkgSizeChange.bind(this, 0)}
      classNmae = "form-input"
      placeholder = "width" />
    <input
      value = {this.props.pkg_size[1]}
      onChange = {this.props.onPkgSizeChange.bind(this, 1)}
      className = "form-input"
      placeholder = "height" />
    <input
      value = {this.props.pkg_size[2]}
      onChange = {this.props.onPkgSizeChange.bind(this, 2)}
      className = "form-input"
      placeholder = "depth" />
    <input
      value = {this.props.actual_size[0]}
      onChange = {this.props.onActSizeChange.bind(this, 0)}
      classNmae = "form-input"
      placeholder = "width" />
    <input
      value = {this.props.actual_size[1]}
      onChange = {this.props.onActSizeChange.bind(this, 1)}
      className = "form-input"
      placeholder = "height" />
    <input
      value = {this.props.actual_size[2]}
      onChange = {this.props.onActSizeChange.bind(this, 2)}
      className = "form-input"
      placeholder = "depth" />
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
