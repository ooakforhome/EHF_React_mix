import React, { Component } from 'react';
import './detail.css'


export class OriginalPart extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="originalPartContainer">
        <h1>EHF</h1>
        <hr />
          <p>Name: {this.props.name}</p>
          <p>SKU: {this.props.sku}</p>
          <p>UPC: {this.props.upc}</p>
          <p>Materials: {this.props.materials}</p>
          <p>Product Weight: {this.props.product_weight}LB</p>
          <p>Product Overall Dimensions: {this.props.actual_width}in W, {this.props.actual_height}in H, {this.props.actual_depth}in D</p>
          <p>Suggest Retail Price: {this.props.retail_price}</p>
        <hr />
          <p>cartons</p>
        <hr />

          <p>Warranty: {this.props.warranty}</p>
          <p>Care Instructions: {this.props.care_instructions}</p>
          <p>Detail Measurement: {this.props.detail_measurement}</p>
        <hr />
          <p>Product Description: {this.props.product_description}</p>
          <p>Product Specification: {this.props.product_specification}</p>
      </div>
    )
  }
}
