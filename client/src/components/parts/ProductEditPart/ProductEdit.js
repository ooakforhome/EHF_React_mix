import React, { Component } from "react"

export class ProductEdit extends Component{
 render(){
   return(
     <div className='productEditClass'>
       <h2>EDIT SECTION</h2>
         <br/>
       <div>
         <p>Name</p>
         <input
           value = {this.props.name}
           onChange = {this.props.nameChange}
           name = "name"
           placeholder = "Change your name"
         />
         <br/>
         <p>Color</p>
         <input
           value = {this.props.color}
           onChange = {this.props.colorChange}
           name = 'color'
           placeholder = "change color"
         />
         <br/>
         <p>Product Weight</p>
         <input
           value = {this.props.product_weight}
           onChange = {this.props.pWeightChange}
           name = 'pWeight'
           placeholder = "Change in product weight"
         />
         <br/>
         <p>Shipping Weight</p>
         <input
           value = {this.props.shipping_weight}
           onChange = {this.props.sWeightChange}
           name = 'sWeight'
           placeholder = "Change in shipping weight"
         />
         <br/>
         <button onClick={this.props.submitEdit}>
           submit
         </button>
       </div>
     </div>
   )
 }
}
