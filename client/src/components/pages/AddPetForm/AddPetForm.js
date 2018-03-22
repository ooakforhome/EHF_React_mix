import React, { Component } from 'react'

class AddPetForm extends Component {
  render(){
    return (
      <div className="petFormBody">
        <div className="content">
          <form>
            <input
              value = {this.props.name}
              onChange = {this.props.onNameChange}
              className = "form-input"
              type = "text"
              placeholder = "Name of the product" />
            <input
              value = {this.props.sku}
              onChange = {this.props.onSkuChange}
              className = "form-input"
              type = "text"
              placeholder = "SKU" />
            <input
              value = {this.props.price}
              onChange = {this.props.onPriceChange}
              className = "form-input"
              type = "text"
              placeholder = "Price" />  

              <button
                onClick = {this.props.createPet}
                className = "btn">
                  save
              </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPetForm;
