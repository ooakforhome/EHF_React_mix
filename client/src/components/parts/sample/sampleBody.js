import { PropTypes } from 'react';

const SampleBody = ({ name, color, shipping_weight}) => (
	<div className="samplebody">
		<div className="innerBody">
	    <div>Product Name: {name}</div>
			<div className="mid">
				<p className="heading">Color: {color}</p>
			</div>
			<div className="priceBox">
			<hr />
			<p className="price">Weight: {shipping_weight}</p>
			</div>
		</div>
	</div>
)

export const SampleReady = ({samples}) => (
  <div>
    {samples.map((sample, i)=>
      <SampleBody key={i}
                {...sample}/>
    )}
  </div>
)
