import React, { Component}  from 'react';
import { Sample } from '../../parts/sample/Sample'
import Sampledata from './data.json'

export class Products extends Component {
  constructor(props) {
  super(props)
  this.state = {
    allSamples: Sampledata
  }
}

  render(){
    return(
    <div className="big_contain">
        <Sample samples={this.state.allSamples} />
    </div>
    )
  }
}
