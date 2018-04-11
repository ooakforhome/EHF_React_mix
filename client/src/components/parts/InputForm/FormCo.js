import React, { Component } from 'react';

class FormCo extends Component {

  render(){
    return(
      <form className="formCo">
      <input
          value = {this.props.name}
          onChange = {this.props.onChange}
          name = "name"
          className = "col-2"
          type = "text"
          placeholder = "name" />
      <input
          value = {this.props.sku}
          onChange = {this.props.onChange}
          name = "sku"
          className = "col-2"
          type = "text"
          placeholder = "sku" />
      <input
          value = {this.props.upc}
          onChange = {this.props.onChange}
          name = "upc"
          className = "col-2"
          type = "text"
          placeholder = "upc" />
      <input
          value = {this.props.product_escription}
          onChange = {this.props.onChange}
          name = "product_escription"
          className = "col-6"
          type = "text"
          placeholder = "product_escription" />
      <input
          value = {this.props.product_specification}
          onChange = {this.props.onChange}
          name = "product_specification"
          className = "col-6"
          type = "text"
          placeholder = "product_specification" />
      <input
          value = {this.props.wholesale_price}
          onChange = {this.props.onChange}
          name = "wholesale_price"
          className = "col-2"
          type = "text"
          placeholder = "wholesale_price" />
      <input
          value = {this.props.retail_price}
          onChange = {this.props.onChange}
          name = "retail_price"
          className = "col-2"
          type = "text"
          placeholder = "retail_price" />
      <input
          value = {this.props.product_info}
          onChange = {this.props.onChange}
          name = "product_info"
          className = "col-6"
          type = "text"
          placeholder = "product_info" />
      <input
          value = {this.props.client_product_info}
          onChange = {this.props.onChange}
          name = "client_product_info"
          className = "col-6"
          type = "text"
          placeholder = "client_product_info" />
      </form>
    )
  }
}

export default FormCo;
