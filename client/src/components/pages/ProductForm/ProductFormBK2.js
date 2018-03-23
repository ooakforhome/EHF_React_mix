import React, { Component } from "react";
import { FormEssential, FormSize, FormFurnitureDetail } from "../../parts/Form";
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
        newpkg_width:'',
        newpkg_height:'',
        newpkg_depth:'',
        newactual_width:'',
        newactual_height:'',
        newactual_depth:'',
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
      this.handleNewPkgWChange = this.handleNewPkgWChange.bind(this);
      this.handleNewPkgHChange = this.handleNewPkgHChange.bind(this);
      this.handleNewPkgDChange = this.handleNewPkgDChange.bind(this);
      this.handleNewActWChange = this.handleNewActWChange.bind(this);
      this.handleNewActHChange = this.handleNewActHChange.bind(this);
      this.handleNewActDChange = this.handleNewActDChange.bind(this);
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
  handleNewPkgWChange(e) {
    this.setState({
       newpkg_width: e.target.value
     });
   }
   handleNewPkgHChange(e) {
     this.setState({
        newpkg_height: e.target.value
      });
    }
    handleNewPkgDChange(e) {
      this.setState({
         newpkg_depth: e.target.value
       });
     }
    handleNewActWChange(e) {
      this.setState({
        newactual_width: e.target.value
       });
     }
   handleNewActHChange(e) {
     this.setState({
        newactual_height: e.target.value
      });
    }
  handleNewActDChange(e) {
    this.setState({
       newactual_depth: e.target.value
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
        pkg_width : this.state.newpkg_width,
        pkg_height : this.state.newpkg_height,
        pkg_depth : this.state.newpkg_depth,
        actual_width : this.state.newactual_width,
        actual_height : this.state.newactual_height,
        actual_depth : this.state.newactual_depth,
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
          onPkgWChange = {this.handleNewPkgWChange}
          onPkgHChange = {this.handleNewPkgHChange}
          onPkgDChange = {this.handleNewPkgDChange}
          onActWChange = {this.handleNewActWChange}
          onActHChange = {this.handleNewActHChange}
          onActDChange = {this.handleNewActDChange}
          onShelfLengthChange = {this.handleNewShelfLengthChange}
          onShelfWidthChange = {this.handleNewShelfWidthChange}
          onIBSChange = {this.handleNewIBSChange}
          pkg_width = {this.state.newpkg_width}
          pkg_height = {this.state.newpkg_height}
          pkg_depth = {this.state.newpkg_depth}
          actual_width = {this.state.newactual_width}
          actual_height = {this.state.newactual_height}
          actual_depth = {this.state.newactual_depth}
        />
        <FormFurnitureDetail
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
