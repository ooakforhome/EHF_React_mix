import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/productsActions';
import TopNav from '../../parts/Nav/TopNav';


class SpdForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id:'',
      name:'',
      color:'',
      shipping_weight:'',
      product_weight:'',
      pkg_width:'',
      pkg_height:'',
      pkg_depth:'',
      actual_width:'',
      actual_height:'',
      actual_depth:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearForm(){
    this.setState({
      name:'',
      color:'',
      shipping_weight:'',
      product_weight:'',
      pkg_width:'',
      pkg_height:'',
      pkg_depth:'',
      actual_width:'',
      actual_height:'',
      actual_depth:''
  });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
      e.preventDefault();
      const post = {
        name: this.state.name,
        color: this.state.color,
        shipping_weight: this.state.shipping_weight,
        product_weight: this.state.product_weight,
        pkg_width: this.state.pkg_width,
        pkg_height: this.state.pkg_height,
        pkg_depth: this.state.pkg_depth,
        actual_width: this.state.actual_width,
        actual_height: this.state.actual_height,
        actual_depth: this.state.actual_depth
      };

      this.props.createPost(post);
      this.props.clearForm();
    }

  render(){
    return(
      <div>
      <TopNav />
        <h1>ADD PRODUCT</h1>
        <form onSubmit={this.onSubmit}>
          <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.onChange}
              value={this.state.name} />
              <br />
          <input
              type="text"
              name="color"
              placeholder="color"
              onChange={this.onChange}
              value={this.state.color} />
              <br />
          <input
              type="text"
              name="shipping_weight"
              placeholder="shipping_weight"
              onChange={this.onChange}
              value={this.state.shipping_weight} />
              <br />
          <input
              type="text"
              name="product_weight"
              placeholder="product_weight"
              onChange={this.onChange}
              value={this.state.product_weight} />
              <br />
          <input
              type="text"
              name="pkg_width"
              placeholder="pkg_width"
              onChange={this.onChange}
              value={this.state.pkg_width} />
              <br />
          <input
              type="text"
              name="pkg_height"
              placeholder="pkg_height"
              onChange={this.onChange}
              value={this.state.pkg_height} />
              <br />
          <input
              type="text"
              name="pkg_depth"
              placeholder="pkg_depth"
              onChange={this.onChange}
              value={this.state.pkg_depth} />
              <br />
          <input
              type="text"
              name="actual_width"
              placeholder="actual_width"
              onChange={this.onChange}
              value={this.state.actual_width} />
              <br />
          <input
              type="text"
              name="actual_height"
              placeholder="actual_height"
              onChange={this.onChange}
              value={this.state.actual_height} />
              <br />
          <input
              type="text"
              name="actual_depth"
              placeholder="actual_depth"
              onChange={this.onChange}
              value={this.state.actual_depth} />
              <br />
            <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(SpdForm);
