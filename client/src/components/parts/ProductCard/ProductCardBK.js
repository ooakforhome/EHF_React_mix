import React, { Component}  from 'react';
import './productcard.css'
import API from "../../../utils/API";



class ProductBody extends Component {
  render(){
    return(
      <div className="item_container">
    		<div className="innerBody">
          <div className="item_img">
            <img className="tImg" src="https://images.homedepot-static.com/productImages/91666aaa-405b-4acd-8235-50c5e273477e/svn/white-elegant-home-fashions-bathroom-wall-cabinets-9hd930-64_1000.jpg"/>
          </div>
      	  <div><p>Furniture</p></div>
      		<div className="item_info_box">
      			<p className="item_name">Product Name: {this.props.name}</p>
            <p className="item_color"> Color: {this.props.color}</p>
            <p className="item_weight"> Shipping Weight: {this.props.product_shipping_weight} </p>
            <p className="item_weight"> Product Weight: {this.props.product_weight} </p>
            <p className="item_size"> Package Dimensions: {this.props.pkg_width}W x {this.props.pkg_height}H x {this.props.pkg_depth}D </p>
            <p className="item_size"> Actural Dimensions: {this.props.actual_width}W x {this.props.actual_height}H x {this.props.actual_depth}D </p>
      		</div>
      		<div className="edit_box">
          <hr />
          <button id={this.props._id} className="item_edit_button" onClick={e=>{API.getProduct(this.props._id).then(res=>console.log(res))}}>
            EDIT
          </button>
      		</div>
    		</div>
    	</div>
    )
  }
}



export const ProductCard = ({products}) => (
  <div>
    {products.map((product, i)=>
      <ProductBody key={i}
                {...product}/>
    )}
  </div>
)
