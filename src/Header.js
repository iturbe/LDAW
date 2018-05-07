
// YOU SHOULD NOT BE REFERENCING THIS File. DEPRECATED TO Navboxes.JS

import React from 'react'
import Home from './Home'
import Top from './Top'
import { Link } from 'react-router-dom'
import Navboxes from './Navboxes';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    
    <div className="row">
      <h3 className="text-center"><br/>I want to...</h3>
      
      <br/>

      <div className="col-12 col-md-4">
        <Link to='/ship'><button className="btn btn-primary btn-lg btn-block">Transport an item</button></Link>
      </div>
      <div className="col-12 col-md-4">
        <Link to='/order'><button className="btn btn-primary btn-lg btn-block">Send an item</button></Link>
      </div>
      <div className="col-12 col-md-4">
        <Link to='/profile'><button className="btn btn-primary btn-lg btn-block">Check my profile</button></Link>
      </div>
    </div>
  </header>
)

export default Header
