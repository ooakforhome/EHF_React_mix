import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
import API from "../../../utils/API";
import CategoriesNav from '../../parts/Nav/CategoriesNav';
import SpdForm from '../SpdForm/SpdForm'

class Spd extends Component {
  constructor(props){
    super(props)
    this.handleClickthenav = this.handleClickthenav.bind(this);
  }


  componentWillMount() {
    this.props.fetchProducts();
  }

  clickThis=(e)=>{
    e.preventDefault();
      window.location ='/productdetail/'+ e.target.id
    }

  handleClickthenav = (e) => {
    e.preventDefault();
    console.log(e.target.id)
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post._id} className="item_container">
    		<div className="innerBody">
          <div className="item_img">
            <img className="tImg" src="https://images.homedepot-static.com/productImages/91666aaa-405b-4acd-8235-50c5e273477e/svn/white-elegant-home-fashions-bathroom-wall-cabinets-9hd930-64_1000.jpg"/>
          </div>
      	  <div><p>Furniture</p></div>
      		<div className="item_info_box">
      			<p className="item_name">Product Name: {post.name}</p>
            <p className="item_color"> Color: {post.color}</p>
            <p className="item_weight"> Shipping Weight: {post.shipping_weight} </p>
            <p className="item_weight"> Product Weight: {post.product_weight} </p>
            <p className="item_size"> Package Dimensions: {post.pkg_width}W x {post.pkg_height}H x {post.pkg_depth}D </p>
            <p className="item_size"> Actural Dimensions: {post.actual_width}W x {post.actual_height}H x {post.actual_depth}D </p>
      		</div>
          <div key={post._id} className="edit_box">
          <hr />
          <button id={post._id}
                  className="item_edit_button"
                  onClick={this.clickThis.bind(this)}>
            EDIT
          </button>
      		</div>
    		</div>
    	</div>
    ));
    return(
      <div>
        <CategoriesNav
          clickthenav = {this.handleClickthenav}
        />
        <h1>Products</h1>
          {postItems}
                <SpdForm />
      </div>

    );
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchProducts })(Spd);
