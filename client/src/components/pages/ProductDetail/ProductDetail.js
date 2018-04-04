import React, { Component } from "react"
import { ProductEdit } from '../../parts/ProductEditPart/ProductEdit'
import API from "../../../utils/API"
import { Link } from 'react-router-dom'
import { backButton } from "./productDetail.css"

export class ProductDetail extends Component {
  constructor(props){
    super(props)
        this.state = {
        product: [],
        name:'',
        color:'',
        pkg_width:0,
        pkg_height:0,
        pkg_depth:0,
        product_shiping_weight:0,
        product_weight:0
      }
}

componentDidMount = () => {
  API.getProduct(this.props.match.params.id)
  .then(res =>
    this.setState({
      name: res.data.name,
      color: res.data.color,
      pkg_width: res.data.pkg_width,
      pkg_height: res.data.pkg_height,
      pkg_depth: res.data.pkg_depth,
      actual_width: res.data.actual_width,
      actual_height: res.data.actual_height,
      actual_depth: res.data.actual_depth,
      shipping_weight: res.data.shipping_weight,
      product_weight: res.data.product_weight
    }))
    .then(res=>console.log('pass the mount'))
  .catch(err => console.log(err));
}

nameChange = (e) => {
  e.preventDefault()
  this.setState({
    name: e.target.value
  })
}
colorChange = (e) => {
  e.preventDefault()
  this.setState({
    color: e.target.value
  })
}
pWeightChange = (e) => {
  e.preventDefault()
  this.setState({
    product_weight: e.target.value
  })
}
sWeightChange = (e) => {
  e.preventDefault()
  this.setState({
    shipping_weight: e.target.value
  })
}
submitEdit = (e) => {
  e.preventDefault()
  API.updateProduct(this.props.match.params.id, {
    name: this.state.name,
    color: this.state.color,
    shipping_weight: this.state.shipping_weight,
    product_weight: this.state.product_weight
  })
    .then(res => window.location.reload())
}

  render(){
    return(
      <div className="item_container" style={{visibility: 'visible'}}>
         <div className="backNav">
            <Link to="/products">
            <button className="backButton">BACK TO PRODUCTS PAGE</button>
            </Link>
         </div>
         <hr />
         <div className="innerBody">
            <div className="item_img">
               <img className="tImg" src="https://images.homedepot-static.com/productImages/91666aaa-405b-4acd-8235-50c5e273477e/svn/white-elegant-home-fashions-bathroom-wall-cabinets-9hd930-64_1000.jpg"/>
            </div>
            <div>
               <p>Furniture</p>
            </div>
            <div className="item_info_box">
               <p className="item_name">Product Name: {this.state.name}</p>
               <p className="item_color"> Color: {this.state.color}</p>
               <p className="item_weight"> Shipping Weight: {this.state.shipping_weight} </p>
               <p className="item_weight"> Product Weight: {this.state.product_weight} </p>
               <p className="item_size"> Package Dimensions: {this.state.pkg_width}W x {this.state.pkg_height}H x {this.state.pkg_depth}D </p>
               <p className="item_size"> Actural Dimensions: {this.state.actual_width}W x {this.state.actual_height}H x {this.state.actual_depth}D </p>
            </div>
         </div>
         <hr />
         <div>
            <ProductEdit
               nameChange = {this.nameChange}
               colorChange = {this.colorChange}
               pWeightChange = {this.pWeightChange}
               sWeightChange = {this.sWeightChange}
               submitEdit = {this.submitEdit}
               />
         </div>
      </div>
    )
  }
}

export default ProductDetail
