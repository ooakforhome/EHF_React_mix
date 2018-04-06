import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export class TopNav extends Component {

render(){
  return(
    <div className="topnav">
      <Link to="/" activeClassName="selected">
        <button>HOME </button>
      </Link>
      <Link to="/spd" activeClassName="selected">
        <button> PRODUCT </button>
      </Link>
      <Link to="/spdform" activeClassName="selected">
        <button> FORM </button>
      </Link>
    </div>
  )
}
}
