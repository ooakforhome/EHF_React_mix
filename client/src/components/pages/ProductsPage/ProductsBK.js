import React, { Component}  from 'react';
import { ProductCard } from '../../parts/ProductCard/ProductCard';
import API from "../../../utils/API";
import TopNav from '../../parts/Nav/TopNav';

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
          datas: res.data
        })
      )
      .catch( err => console.log(err));
  };

  render(){
    return(
    <div className="product_page_container">
      <TopNav />
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
