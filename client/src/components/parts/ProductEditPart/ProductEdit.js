import React, { Component } from "react"

export class ProductEdit extends Component{
 render(){
   return(
     <div className='productEditClass'>
       <h2>EDIT SECTION</h2>
         <p>{this.props.name}a</p>
         <p>{this.props.color}b</p>
         <p>{this.props.product_weight}c</p>
       <div>
         <input
           value = {this.props.name}
           onChange = {this.props.nameChange}
           name = "name"
           placeholder = "Change your name"
         />
         <input
           value = {this.props.color}
           onChange = {this.props.colorChange}
           name = 'color'
           placeholder = "change color"
         />
         <input
           value = {this.props.product_weight}
           onChange = {this.props.pWeightChange}
           name = 'pWeight'
           placeholder = "Change in product weight"
         />
         <button onClick={this.props.submitEdit}>
           submit
         </button>
       </div>
     </div>
   )
 }
}
