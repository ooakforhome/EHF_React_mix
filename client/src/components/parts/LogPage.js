import React, { Component}  from 'react';
import { Mdetail } from './Mdetail'

export class LogPage extends Component {
  constructor(props){
    super(props)
    this.state={
      masters: [{
        name: 'David Chen',
        email: 'david@eleganthf.net',
        password: '123456'
      },{
        name: 'Chris Jo',
        email: 'Chris@eleganthf.net',
        password: '123456'
      }]
    }
  }
  render(){
    return(
      <div>
        <Mdetail />
      </div>
    )
  }
}
