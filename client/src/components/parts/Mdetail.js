import React, { Component}  from 'react';
import API from '../../utils/API'

export class Mdetail extends Component {
	constructor(props) {
    super(props);
		this.state = {
			email: "apple",
			password: "12345"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange = e => {
			e.preventDefault();
			this.setState({
				[e.target.name]: e.target.value
			})
	}

	handleSubmit = event => {
    event.preventDefault();
		API.saveCompany({
			email: this.state.email,
			password: this.state.password
		})
			.then(res => window.location('/products'))
			.catch(err => console.log(err));
  }

	render(){
  	return(
  <form onSubmit={this.handleSubmit}>
    <input id='email'
						type='text'
						name='email'
						value = {this.state.email}
						onChange = {this.handleInputChange}
						placeholder='email' />
							<br />
		<input id='password'
						type='text'
						name='password'
						value = {this.state.password}
						onChange = {this.handleInputChange}
						placeholder='password' />
							<br />
		<input type="submit" value="Submit" />
							<br />
  </form >
		)
	}
}
