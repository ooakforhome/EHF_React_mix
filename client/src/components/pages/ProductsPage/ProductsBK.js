import React, { Component}  from 'react';
import { ProductCard } from '../../parts/ProductCard/ProductCard';
import { ProductEdit } from '../../parts/ProductEditPart/ProductEdit';
import API from "../../../utils/API";


export class Products extends Component {
  constructor(props) {
  super(props)
  this.state = {
    datas: [],
    catetype: '',
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
  this.handleEditChange = this.handleEditChange.bind(this);
  this.abhandleNameChange = this.abhandleNameChange.bind(this);
  this.abhandleColorChange = this.abhandleColorChange.bind(this);
  this.abpWeightChange = this.abpWeightChange.bind(this);
  this.absubmitEdit = this.absubmitEdit.bind(this);
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

handleEditChange(e){
  e.preventDefault()
  console.log("this is the id: "+e.target.id)
  API.getProduct(e.target.id)
  .then(res => console.log(res))
}

abhandleNameChange = (e) => {
  e.preventDefault()
  name : e.target.value
}
abhandleColorChange = (e) => {
  e.preventDefault()
  color : e.target.value
}
abpWeightChange = (e) => {
  e.preventDefault()
  product_weight : e.target.value
}
absubmitEdit = (e) => {
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
          products={this.state.datas}
          onEditChange = {this.handleEditChange}
        />
      </div>
      <div>
      <p>{this.state.name}</p>
        <ProductEdit
          name = {this.state.name}
          color = {this.state.color}
          product_weight = {this.state.product_weight}
          handleNameChange = {this.state.abhandleNameChange}
          handleColorChange = {this.state.abhandleColorChange}
          pWeightChange = {this.state.abpWeightChange}
          submitEdit = {this.state.absubmitEdit}
        />
      </div>
    </div>
    )
  }
}

export default Products;
