import React, { Component}  from 'react';
import { Mdetail } from './Mdetail'
import TopNav from './Nav/TopNav'

export class LogPage extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){
    return(
      <div>
        <TopNav />
        <Mdetail />
      </div>
    )
  }
}
