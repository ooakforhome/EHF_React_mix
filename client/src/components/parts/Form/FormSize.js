import React, { Component } from 'react';

const param = {
  pkg_width: '',
  pkg_height: '',
  pkg_depth: '',
  actual_width: '',
  actual_height: '',
  actual_depth: ''
}

export class FormSize extends Component {
  render(){
    return(
  <form className="size-container">
    <input
      value = {this.props.pkg_width}
      onChange = {this.props.onPkgWChange}
      className = "form-input"
      placeholder = "width" />
    <input
      value = {this.props.pkg_height}
      onChange = {this.props.onPkgHChange}
      className = "form-input"
      placeholder = "height" />
    <input
      value = {this.props.pkg_depth}
      onChange = {this.props.onPkgDChange}
      className = "form-input"
      placeholder = "depth" />
      <br />
    <input
      value = {this.props.actual_width}
      onChange = {this.props.onActWChange}
      className = "form-input"
      placeholder = "width" />
    <input
      value = {this.props.actual_height}
      onChange = {this.props.onActHChange}
      className = "form-input"
      placeholder = "height" />
    <input
      value = {this.props.actual_depth}
      onChange = {this.props.onActDChange}
      className = "form-input"
      placeholder = "depth" />
  </form>
    )
  }
}
