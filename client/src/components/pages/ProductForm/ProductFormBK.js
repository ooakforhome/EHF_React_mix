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
        newpkg_size:[{
          width: 0,
          height: 0,
          depth: 0
        }],
        newactual_size:[{
          width: 0,
          height: 0,
          depth: 0
        }],
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

      this.handleNewPkgSizeChangeW = this.handleNewPkgSizeChangeW.bind(this);
      this.handleNewPkgSizeChangeH = this.handleNewPkgSizeChangeH.bind(this);
      this.handleNewPkgSizeChangeD = this.handleNewPkgSizeChangeD.bind(this);
      this.handleNewActSizeChangeW = this.handleNewActSizeChangeW.bind(this);
      this.handleNewActSizeChangeH = this.handleNewActSizeChangeH.bind(this);
      this.handleNewActSizeChangeD = this.handleNewActSizeChangeD.bind(this);

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
  handleNewPkgSizeChangeW(e) {
    this.setState({
       newpkg_sizeW: e.target.value
     });
   }
   handleNewPkgSizeChangeH(e) {
     this.setState({
        newpkg_sizeH: e.target.value
      });
    }
    handleNewPkgSizeChangeD(e) {
      this.setState({
         newpkg_sizeD: e.target.value
       });
     }

    handleNewActSizeChangeW(e) {
      this.setState({
         newactual_sizeW: e.target.value
       });
     }
   handleNewActSizeChangeH(e) {
     this.setState({
        newactual_sizeH: e.target.value
      });
    }
  handleNewActSizeChangeD(e) {
    this.setState({
       newactual_sizeD: e.target.value
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
        pkg_size.width : this.state.newpkg_sizeW,
        pkg_size.height : this.state.newpkg_sizeH,
        pkg_size.depth : this.state.newpkg_sizeD,
        actual_size.width : this.state.newactual_sizeW,
        actual_size.height : this.state.newactual_sizeH,
        actual_size.depth : this.state.newactual_sizeD,
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
          onPkgSizeChangeW = {this.handleNewPkgSizeChangeW}
          onPkgSizeChangeH = {this.handleNewPkgSizeChangeH}
          onPkgSizeChangeD = {this.handleNewPkgSizeChangeD}
          onActSizeChangeW = {this.handleNewActSizeChangeW}
          onActSizeChangeH = {this.handleNewActSizeChangeH}
          onActSizeChangeD = {this.handleNewActSizeChangeD}
          onShelfLengthChange = {this.handleNewShelfLengthChange}
          onShelfWidthChange = {this.handleNewShelfWidthChange}
          onIBSChange = {this.handleNewIBSChange}
          pkg_sizeW = {this.state.newpkg_sizeW}
          pkg_sizeH = {this.state.newpkg_sizeH}
          pkg_sizeD = {this.state.newpkg_sizeD}
          actual_sizeW = {this.state.newactual_sizeW}
          actual_sizeH = {this.state.newactual_sizeH}
          actual_sizeD = {this.state.newactual_sizeD}
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
