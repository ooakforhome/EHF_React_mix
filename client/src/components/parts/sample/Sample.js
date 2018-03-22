import React, { Component}  from 'react';
import { PropTypes } from 'react';
import './sample.css'

const abc = {
  name:"no-name",
  image: "",
  color:"no-color",
  shipping_weight:"no-weight",
  wholesale_price:"no-price"
  };

const SampleBody = (abc) => (
	<div className="samplebody">
		<div className="innerBody">
    <div className="sampleBodyBg">
      <img className="tImg" src={abc.image}/>
    </div>
	    <div>Furniture</div>
			<div className="mid">
				<p className="heading">Product Name: {abc.name}</p>
        <p> Color: {abc.color}</p>
        <p> Weight: {abc.shipping_weight} </p>
			</div>
			<div className="priceBox">
			<hr />
			<p className="price">wholesale_price: ${abc.wholesale_price}</p>
			</div>
		</div>
	</div>
)

export const Sample = ({samples}) => (
  <div>
    {samples.map((sample, i)=>
      <SampleBody key={i}
                {...sample}/>
    )}
  </div>
)
