import React, { Component } from "react"
import API from '../../../utils/API'


export class ProductEdit extends Component {
  constructor(props){
    super(props);
      this.state = {
        product: [],
        id:'',
        name:'',
        sku:'',
        upc:'',
        color:'',
        product_weight:'',
        product_shipping_weight:'',
        pkg_width:'',
        pkg_height:'',
        pkg_depth:'',
        actual_width:'',
        actual_height:'',
        actual_depth:'',
        shelf_length:'',
        shelf_width:'',
        inches_between_shelf:''
      }

  }

componentDidMount =()=> {
  API.getProducts(this.props.match.params.id)
    .then(res => this.setState({ product: res.data }))
    .catch(err => console.log(err));
}

handleNameChange =(e)=>{
  e.preventDefault()
  this.setState = {
    name: e.target.value
  }
}

handleColorChange =(e)=>{
  e.preventDefault()
  this.setState = {
    color: e.target.value
  }
}

pWeightChange =(e)=>{
  e.preventDefault()
  this.setState = {
    product_weight: e.target.value
  }
}

submitEdit = (e) => {
  e.preventDefault();
  API.updateProduct(this.props.match.params.id, {
    name: this.state.name,
    color: this.state.color,
    product_weight: this.state.product_weight
  })
  .then(res => window.location.reload())
    .catch(err => console.log(err));
}


render(){
  return(
    <div>
      <h2>EDIT SECTION</h2>
      <p>{this.state.product.name}</p>
      <p>{this.state.product.color}</p>
      <p>{this.state.product.product_weight}</p>
      <p>Apple</p>

      <div>
        <input
          value = {this.state.name}
          onChange = {this.handleNameChange}
          name = "name"
          placeholder = "Change your name"
        />
        <input
          value = {this.state.color}
          onChange = {this.handleColorChange}
          name = 'color'
          placeholder = "change color"
        />
        <input
          value = {this.state.product_weight}
          onChange = {this.pWeightChange}
          name = 'pWeight'
          placeholder = "Change in product weight"
        />
        <button onClick={this.submitEdit}>
          submit
        </button>
      </div>
    </div>
  )
}


}
