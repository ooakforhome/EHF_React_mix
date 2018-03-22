import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPet from '../../../actions/add_pet';
import AddPetForm from './AddPetForm';


export class AddPetPage extends Component {
  constructor (props){
    super (props);
    this.state = {
      newName: '',
      newSku: '',
      newPrice: ''
    }
    this.handleCreatePet = this.handleCreatePet.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSkuChange = this.handleSkuChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleNameChange(e){
    this.setState({
      newName: e.target.value
    });
  }

  handleSkuChange(e){
    this.setState({
      newSku: e.target.value
    });
  }

  handlePriceChange(e){
    this.setState({
      newPrice: e.target.value
    });
  }

  handleCreatePet(){
    const pet = {
      name: this.state.newName,
      sku: this.state.newSku,
      price: this.state.newPrice
    };
    this.props.addPet(pet)
  }

  render(){
    return(
      <AddPetForm
        createPet = {this.handleCreatePet}
        onNameChange = {this.handleNameChange}
        onSkuChange = {this.handleSkuChange}
        onPriceChange = {this.handlePriceChange}
      />
    );
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addPet: addPet
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddPetPage);
