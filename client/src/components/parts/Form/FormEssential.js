import React, { Component } from 'react';

const param = {
  name:'',
  sku:'',
  upc:'',
  color:'',
  product_weight:'',
  product_shipping_weight:''
}

export class FormEssential extends Component {

  render(){
    return(
  <form className="essential_container">
    <input
      value = {this.props.name}
      onChange = {this.props.onNameChange}
      className="form-input"
      type = "text"
      placeholder = "Product Name"/>
    <input
      value = {this.props.sku}
      onChange = {this.props.onSkuChange}
      className="form-input"
      type = "text"
      placeholder = "SKU"/>
    <input
      value = {this.props.upc}
      onChange = {this.props.onUpcChange}
      className = "form-input"
      type = "text"
      placeholder = "UPS"/>
    <input
      value = {this.props.color}
      onChange = {this.props.onColorChange}
      className = "form-input"
      type = "text"
      placeholder = "Color"/>
    <input
      value = {this.props.product_weight}
      onChange = {this.props.onPWeightChange}
      className = "form-input"
      type = "number"
      placeholder = "product_weight"/>
    <input
      value = {this.props.product_shipping_weight}
      onChange = {this.props.onPShipWeight}
      className = "form-input"
      type = "number"
      placeholder = "product_shipping_weight"/>
  </form>
    )
  }
}
