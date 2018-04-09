import React, { Component } from 'react';
import './form.css'

export class FormBasic extends Component {

  render(){
    return(
        <form className="formBasicForm">
          <input
            value = {this.props.cattype}
            onChange = {this.props.onChange}
            className = "input_block"
            type = "list"
            placeholder = "category" />
          <input
            value = {this.props.image}
            onChange = {this.props.onChange}
            className = "input_block"
            type = "file"
            placeholder = "image" />
          <input
            value = {this.props.shipping_weight}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "shipping_weight" />
          <input
            value = {this.props.product_weight}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "product_weight" />
          <input
            value = {this.props.color}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "color" />
          <input
            value = {this.props.cartons}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "cartons" />
          <input
            value = {this.props.pkg_width}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "pkg_width" />
          <input
            value = {this.props.pkg_height}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "pkg_height" />
          <input
            value = {this.props.pkg_depth}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "pkg_depth" />
          <input
            value = {this.props.actual_width}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "actual_width" />
          <input
            value = {this.props.actual_height}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "actual_height" />
          <input
            value = {this.props.actual_depth}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "text"
            placeholder = "actual_depth" />
          <input
            value = {this.props.materials}
            onChange = {this.props.onChange}
            className = "input_block"
            type = "text"
            placeholder = "materials" />
          <input
            value = {this.props.care_instructions}
            onChange = {this.props.onChange}
            className = "input_block"
            type = "text"
            placeholder = "care_instructions" />
          <input
            value = {this.props.assembly_required}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "boolean"
            placeholder = "assembly_required" />
          <input
            value = {this.props.Warranty}
            onChange = {this.props.onChange}
            className = "col-2 light-panel"
            type = "boolean"
            placeholder = "Warranty" />
            <input
              value = {this.props.detail_measurement}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "text"
              placeholder = "detail_measurement" />
            <input
              value = {this.props.features}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "text"
              placeholder = "features" />
            <input
              value = {this.props.shelf_length}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "shelf_length" />
            <input
              value = {this.props.shelf_width}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "shelf_width" />
            <input
              value = {this.props.inches_btw_shelf}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "inches_btw_shelf" />
            <input
              value = {this.props.drawer_length}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "drawer_length" />
            <input
              value = {this.props.drawer_width}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "drawer_width" />
            <input
              value = {this.props.drawer_height}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "drawer_height" />
            <input
              value = {this.props.shelf_weight_capacity}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "shelf_weight_capacity" />
            <input
              value = {this.props.solar_panel}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "boolean"
              placeholder = "solar_panel" />
            <input
              value = {this.props.led_color}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "list"
              placeholder = "led_color" />
            <input
              value = {this.props.led}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "boolean"
              placeholder = "led" />
            <input
              value = {this.props.uv}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "boolean"
              placeholder = "uv" />
            <input
              value = {this.props.battery_included}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "boolean"
              placeholder = "battery_included" />
            <input
              value = {this.props.battery_type}
              onChange = {this.props.onChange}
              className = "input_block"
              type = "text"
              placeholder = "battery_type" />
            <input
              value = {this.props.capacity}
              onChange = {this.props.onChange}
              className = "col-2 light-panel"
              type = "text"
              placeholder = "capacity" />
        </form>
    )
  }
}

export default FormBasic;


// cattype
// image
// shipping_weight
// product_weight
// color
// cartons
// pkg_width
// pkg_height
// pkg_depth
// actual_width
// actual_height
// actual_depth
// materials
// care_instructions
// assembly_required
// Warranty
// detail_measurement
// features
// shelf_length
// shelf_width
// inches_btw_shelf
// drawer_length
// drawer_width
// drawer_height
// shelf_weight_capacity
// solar_panel
// led_color
// led
// uv
// battery_included
// battery_type
// capacity
