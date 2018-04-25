import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOne } from '../../../actions/productsActions';
import './detail.css'

class OriginalPart extends Component {
  constructor(props){
    super(props)
    }



    componentWillMount() {
      this.props.fetchOne(this.props.match.params.id);
    }

  render(){
    const postItems = this.props.posts.map(post => (
    <div className="originalPartContainer">
      <h1>EHF</h1>
      <hr />
        <p>Name: {post.name}</p>
        <p>SKU: {post.sku}</p>
        <p>UPC: {post.upc}</p>
        <p>Materials: {post.materials}</p>
        <p>Product Weight: {post.product_weight}LB</p>
        <p>Product Overall Dimensions: {post.actual_width}in W, {post.actual_height}in H, {post.actual_depth}in D</p>
        <p>Suggest Retail Price: {post.retail_price}</p>
      <hr />
        <p>cartons</p>
      <hr />

        <p>Warranty: {post.warranty}</p>
        <p>Care Instructions: {post.care_instructions}</p>
        <p>Detail Measurement: {post.detail_measurement}</p>
      <hr />
        <p>Product Description: {post.product_description}</p>
        <p>Product Specification: {post.product_specification}</p>
      </div>
    ));
    return(
      <div>
        {postItems}
      </div>
    )
  }
}
    const mapStateToProps = state => ({
      posts: state.posts.items
    });

export default connect(mapStateToProps, { fetchOne })(OriginalPart);
