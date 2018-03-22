import React, { Component } from "react";
import { FormEssential, FormSize } from "../../parts/Form";
import API from "../../../utils/API"

export class ProductForm extends Component {
  constructor (props){
    super(props)
      this.state = {
        newname:'',
        newsku:'',
        newupc:'',
        newcolor:'',
        newproduct_weight:'',
        newproduct_shipping_weight:'',
        newpkg_size:[],
        newactual_size:[],
        newshelf_length:'',
        newshelf_width:'',
        newinches_between_shelf:''
      }
      this.handleNewonNameChange = this.handleNewonNameChange.bind(this);
      this.handleNewonSkuChange = this.handleNewonSkuChange.bind(this);
      this.handleNewonUpcChange = this.handleNewonUpcChange.bind(this);
      this.handleNewonColorChange = this.handleNewonColorChange.bind(this);
      this.handleNewonPWeightChange = this.handleNewonPWeightChange.bind(this);
      this.handleNewonPShipWeight = this.handleNewonPShipWeight.bind(this);
      this.handleNewPkgSizeChange = this.handleNewPkgSizeChange.bind(this);
      this.handleNewActSizeChange = this.handleNewActSizeChange.bind(this);
      this.handleNewShelfLengthChange = this.handleNewShelfLengthChange.bind(this);
      this.handleNewShelfWidthChange = this.handleNewShelfWidthChange.bind(this);
      this.handleNewIBSChange = this.handleNewIBSChange.bind(this);
  }

  handleNewonNameChange(e) {
    this.setState({
       newname: e.target.value
     });
   }
  handleNewonSkuChange(e) {
    this.setState({
       newsku: e.target.value
     });
   }
  handleNewonUpcChange(e) {
    this.setState({
       newupc: e.target.value
     });
   }
  handleNewonColorChange(e) {
    this.setState({
       newcolor: e.target.value
     });
   }
  handleNewonPWeightChange(e) {
    this.setState({
       newproduct_weight: e.target.value
     });
   }
  handleNewonPShipWeight(e) {
    this.setState({
       newproduct_shipping_weight: e.target.value
     });
   }
  handleNewPkgSizeChange(e) {
    this.setState({
       newpkg_size: e.target.value
     });
   }
  handleNewActSizeChange(e) {
    this.setState({
       newactual_size: e.target.value
     });
   }
  handleNewShelfLengthChange(e) {
    this.setState({
       newshelf_length: e.target.value
     });
   }
  handleNewShelfWidthChange(e) {
    this.setState({
       newshelf_width: e.target.value
     });
   }
  handleNewIBSChange(e) {
    this.setState({
       newinches_between_shelf: e.target.value
     });
   }

   OnClick = event => {
     event.preventDefault();
     const product = {
        name : this.state.newname,
        sku : this.state.newsku,
        upc : this.state.newupc,
        color : this.state.newcolor,
        product_weight : this.state.newproduct_weight,
        product_shipping_weight : this.state.newproduct_shipping_weight,
        pkg_size : this.state.newpkg_size,
        actual_size : this.state.newactual_size,
        shelf_length : this.state.newshelf_length,
        shelf_width : this.state.newshelf_width,
        inches_between_shelf : this.state.newinches_between_shelf
     };
     API.addProduct(product)
      .then(res => console.log(res))
      .catch(err => console.log(err));
   }

  render(){
    return(
      <div className="container">
        <FormEssential
          onNameChange = {this.handleNewonNameChange}
          onSkuChange = {this.handleNewonSkuChange}
          onUpcChange = {this.handleNewonUpcChange}
          onColorChange = {this.handleNewonColorChange}
          onPWeightChange = {this.handleNewonPWeightChange}
          onPShipWeight = {this.handleNewonPShipWeight}
          name = {this.state.newname}
          sku = {this.state.newsku}
          upc = {this.state.newupc}
          color = {this.state.newcolor}
          product_weight = {this.state.newproduct_weight}
          product_shipping_weight = {this.state.newproduct_shipping_weight}
        />
        <FormSize
          onPkgSizeChange = {this.handleNewPkgSizeChange}
          onActSizeChange = {this.handleNewActSizeChange}
          onShelfLengthChange = {this.handleNewShelfLengthChange}
          onShelfWidthChange = {this.handleNewShelfWidthChange}
          onIBSChange = {this.handleNewIBSChange}
          pkg_size = {this.state.newpkg_size}
          actual_size = {this.state.newactual_size}
          shelf_length = {this.state.newshelf_length}
          shelf_width = {this.state.newshelf_width}
          inches_between_shelf = {this.state.newinches_between_shelf}
        />
        <button
          onClick = {this.OnClick}>
          Save
        </button>
      </div>
    )
  }
}
