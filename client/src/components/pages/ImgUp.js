import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/productsActions';
import TopNav from '../../parts/Nav/TopNav';


class ImgForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      image:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      e.preventDefault();
      const post = {
        path:'',
        originalname:'',
      };
      this.props.createPost(post);
    }

  render(){
    return(
      <div>
      <TopNav />
        <h1>ADD PRODUCT</h1>
        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
          <input
              type="file"
              name="theimage"
              onChange={this.onChange}
              value={this.state.name} />
              <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(ImgForm);
