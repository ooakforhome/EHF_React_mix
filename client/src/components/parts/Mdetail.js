import React, { Component}  from 'react';

export class Mdetail extends Component {
	constructor(props) {
    super(props);
		this.state = {
			logEmail: "apple",
			logPassword: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
				[name]: value
		});
	}

	handleSubmit(event) {
    event.preventDefault();
		console.log((event.target.logEmail.value === "")?
		this.state.logEmail : event.target.logEmail.value );
		console.log(event.target.logPassword.value);
		console.log("happy day");
  }

	render(){
  	return(
  <form onSubmit={this.handleSubmit}>
    <input id='logEmail'
						type='text'
						name='logEmail'
						value = {this.state.value}
						onChange = {this.handleInputChange}
						placeholder='email' />
							<br />
		<input id='logPassword'
						type='text'
						name='logPassword'
						value = {this.state.value}
						onChange = {this.handleInputChange}
						placeholder='password' />
							<br />
		<input type="submit" value="Submit" />
							<br />
		<div>
			<p>{this.state.logEmail}</p>
			<p>{this.state.logPassword}</p>
		</div>
  </form >
		)
	}
}
