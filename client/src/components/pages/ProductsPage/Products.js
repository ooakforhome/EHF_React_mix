import React, { Component}  from 'react';
import { ProductCard } from '../../parts/ProductCard/ProductCard';
import { ProductEdit } from '../../parts/ProductEditPart/ProductEdit'
import API from "../../../utils/API";


export class Products extends Component {
  constructor(props) {
  super(props)
  this.state = {
    datas: [],
    catetype: '',
    _id: '',
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
  }

}

  componentDidMount(){
    this.loadUsers();
  }

  loadUsers = () => {
    API.getProducts()
      .then( res =>
        this.setState({
          datas: res.data,
          catetype: '',
          id: '',
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
        })
      )
      .catch( err => console.log(err));
  };

  NameChange = e =>{
    e.preventDefault()
      name: e.target.value
  }

  onColorChange = e => {
    e.preventDefault()
      color: e.target.value
  }

onPWeightChange = e => {
    e.preventDefault()
      product_weight: e.target.value
  }

onSubmitEdit = e => {
  e.preventDefault()
  API.updateProduct({
    name: this.state.name,
    color: this.state.color,
    product_weight: this.state.product_weight
  })
  .then(res => console.log(res))
}

  render(){
    return(
    <div className="product_page_container">
      <div>
        <ProductCard
          products = {this.state.datas}
        />
      </div>
      <div>
        <ProductEdit
          name = {this.state.name}
          color = {this.state.color}
          product_weight = {this.state.product_weight}
          nameChange = {this.onNameChange}
          colorChange = {this.onColorChange}
          pWeightChange = {this.onPWeightChange}
          submitEdit = {this.onSubmitEdit}
        />
      </div>
    </div>
    )
  }
}

export default Products;
