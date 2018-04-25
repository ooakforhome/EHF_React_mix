import React, { Component } from "react";
import  FormBasic  from "../../parts/InputForm/FormBasic";
import API from "../../../utils/API"
import { Link } from 'react-router-dom'
import Products from '../ProductsPage'
import './productForm.css'

export class ProductForm extends Component {
  constructor (props){
    super(props)
      this.state = {
        cattype:"",
        image:"",
        shipping_weight:"",
        product_weight:"",
        color:"",
        cartons:"",
        pkg_width:"",
        pkg_height:"",
        pkg_depth:"",
        actual_width:"",
        actual_height:"",
        actual_depth:"",
        materials:"",
        care_instructions:"",
        assembly_required:"",
        Warranty:"",
        detail_measurement:"",
        features:"",
        shelf_length:"",
        shelf_width:"",
        inches_btw_shelf:"",
        drawer_length:"",
        drawer_width:"",
        drawer_height:"",
        shelf_weight_capacity:"",
        solar_panel:"",
        led_color:"",
        led:"",
        uv:"",
        battery_included:"",
        battery_type:"",
        capacity:""
      }
      this.handOnChange = this.handOnChange.bind(this);
      this.onClick = this.onClick.bind(this);
  }

   handOnChange = e => {
     e.preventDefault();
     this.setState({
       [e.target.name]: e.target.value
     })
   }

  onClick = e => {
     e.preventDefault();
     const product = {
       cattype:this.state.cattype,
       image:this.state.image,
       shipping_weight:this.state.shipping_weight,
       product_weight:this.state.product_weight,
       color:this.state.color,
       cartons:this.state.cartons,
       pkg_width:this.state.pkg_width,
       pkg_height:this.state.pkg_height,
       pkg_depth:this.state.pkg_depth,
       actual_width:this.state.actual_width,
       actual_height:this.state.actual_height,
       actual_depth:this.state.actual_depth,
       materials:this.state.materials,
       care_instructions:this.state.care_instructions,
       assembly_required:this.state.assembly_required,
       Warranty:this.state.Warranty,
       detail_measurement:this.state.detail_measurement,
       features:this.state.features,
       shelf_length:this.state.shelf_length,
       shelf_width:this.state.shelf_width,
       inches_btw_shelf:this.state.inches_btw_shelf,
       drawer_length:this.state.drawer_length,
       drawer_width:this.state.drawer_width,
       drawer_height:this.state.drawer_height,
       shelf_weight_capacity:this.state.shelf_weight_capacity,
       solar_panel:this.state.solar_panel,
       led_color:this.state.led_color,
       led:this.state.led,
       uv:this.state.uv,
       battery_included:this.state.battery_included,
       battery_type:this.state.battery_type,
       capacity:this.state.capacity
     }
     API.addProduct(product)
      .then(res => console.log(res))
      .catch(err => console.log(err));
   }

  render(){
    return(
      <div className="addProductContainer">
        <div className="addProductH1">
          <h1 >ADD NEW PRODUCT</h1>
        </div>
          <FormBasic
            cattype = {this.state.cattype}
            image = {this.state.image}
            shipping_weight = {this.state.shipping_weight}
            product_weight = {this.state.product_weight}
            color = {this.state.color}
            cartons = {this.state.cartons}
            pkg_width = {this.state.pkg_width}
            pkg_height = {this.state.pkg_height}
            pkg_depth = {this.state.pkg_depth}
            actual_width = {this.state.actual_width}
            actual_height = {this.state.actual_height}
            actual_depth = {this.state.actual_depth}
            materials = {this.state.materials}
            care_instructions = {this.state.care_instructions}
            assembly_required = {this.state.assembly_required}
            Warranty = {this.state.Warranty}
            detail_measurement = {this.state.detail_measurement}
            features = {this.state.features}
            shelf_length = {this.state.shelf_length}
            shelf_width = {this.state.shelf_width}
            inches_btw_shelf = {this.state.inches_btw_shelf}
            drawer_length = {this.state.drawer_length}
            drawer_width = {this.state.drawer_width}
            drawer_height = {this.state.drawer_height}
            shelf_weight_capacity = {this.state.shelf_weight_capacity}
            solar_panel = {this.state.solar_panel}
            led_color = {this.state.led_color}
            led = {this.state.led}
            uv = {this.state.uv}
            battery_included = {this.state.battery_included}
            battery_type = {this.state.battery_type}
            capacity = {this.state.capacity}
            onChange = {this.handleOnChange}
            />
        <Link to="/products">
        <button className="addProductBtn" onClick = {this.OnClick}>
          Save
        </button>
        </Link>
      </div>
    )
  }
}


//
