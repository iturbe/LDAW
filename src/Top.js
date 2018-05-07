import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => (
  <div className="row">
    
    <div className="col-12 col-md-6">
      <Link to='/'><h3 className="text-left"><a class="float-left"><i className="fas fa-home"></i> Home</a></h3></Link>
    </div>

    <div className="col-12 col-md-6">
      <Link to='/'><h3 className="text-right">Logout <a class="float-right"><i className="fas fa-sign-out-alt"></i> </a></h3></Link>
    </div>

  </div>
)

export default Top
