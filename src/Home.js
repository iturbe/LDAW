import React from 'react'
import Top from './Top'
import Navboxes from './Navboxes'
import { Link } from 'react-router-dom'


// REF
class Home extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props.email);
  }

  render() {
    return (
      <div className="container">
        <Top />
        <h3 className="text-center"><br/>Welcome, {this.props.userdata.name}.</h3>
        <Navboxes />
      </div>
    );
  }
}

export default Home