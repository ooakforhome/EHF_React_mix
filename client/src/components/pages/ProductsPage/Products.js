import React, { Component}  from 'react';
import { ProductCard } from '../../parts/ProductCard/ProductCard';
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
    shipping_weight:'',
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
          shipping_weight:'',
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

  render(){
    return(
    <div className="product_page_container">
      <div>
        <ProductCard
          products = {this.state.datas}
        />
      </div>
    </div>
    )
  }
}

export default Products;
