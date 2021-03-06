import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

class TopNav extends Component {

  render(){
    return(
      <div className="topnav">
        <NavLink to="/" activeClassName="selected">
          <button>HOME </button>
        </NavLink>
        <NavLink to="/spd" activeClassName="selected">
          <button> PRODUCT </button>
        </NavLink>
        <NavLink to="/spdform" activeClassName="selected">
          <button> FORM </button>
        </NavLink>
      </div>
    );
  }
}


export default TopNav;
