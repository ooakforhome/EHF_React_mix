import React, { Component } from "react"

export class ProductEdit extends Component{
 render(){
   return(
     <div className='productEditClass'>
       <h2>EDIT SECTION</h2>
         <p>{this.props.name}</p>
         <p>{this.props.color}</p>
         <p>{this.props.product_weight}</p>
         <br/>
       <div>
         <p>Name</p>
         <input
           value = {this.props.name}
           onChange = {this.props.nameChange}
           name = "name"
           placeholder = "Change your name"
         />
         <p>Color</p>
         <input
           value = {this.props.color}
           onChange = {this.props.colorChange}
           name = 'color'
           placeholder = "change color"
         />
         <p>Product Weight</p>
         <input
           value = {this.props.product_weight}
           onChange = {this.props.pWeightChange}
           name = 'pWeight'
           placeholder = "Change in product weight"
         />
         <p>Shipping Weight</p>
         <input
           value = {this.props.shipping_weight}
           onChange = {this.props.sWeightChange}
           name = 'sWeight'
           placeholder = "Change in shipping weight"
         />
         <button onClick={this.props.submitEdit}>
           submit
         </button>
       </div>
     </div>
   )
 }
}
