import React, { Component}  from 'react';
import './productcard.css'

const abc = {
  name:'',
  image: '',
  color:'',
  product_weight:'',
  product_shipping_weight:'',
  pkg_width:'',
  pkg_height:'',
  pkg_depth:'',
  actual_width:'',
  actual_height:'',
  actual_depth:''
  };

const ProductBody = (abc) => (
	<div className="item_container">
		<div className="innerBody">
      <div className="item_img">
        <img className="tImg" src='(({abc.image} === "")? null : {abc.image})'/>
      </div>
  	  <div><p>Furniture</p></div>
  		<div className="item_info_box">
  			<p className="item_name">Product Name: {abc.name}</p>
        <p className="item_color"> Color: {abc.color}</p>
        <p className="item_weight"> Shipping Weight: {abc.product_shipping_weight} </p>
        <p className="item_weight"> Product Weight: {abc.product_weight} </p>
        <p className="item_size"> Package Dimensions: {abc.pkg_width}W x {abc.pkg_height}H x {abc.pkg_depth}D </p>
        <p className="item_size"> Actural Dimensions: {abc.actual_width}W x {abc.actual_height}H x {abc.actual_depth}D </p>
  		</div>
  		<div className="edit_box">
  			<hr />
  			<button className="item_edit_button" onClick={abc.onEditChange}>
          EDIT
        </button>
  		</div>
		</div>
	</div>
)

export const ProductCard = ({products}) => (
  <div>
    {products.map((product, i)=>
      <ProductBody key={i}
                {...product}/>
    )}
  </div>
)
