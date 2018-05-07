import React, {Component} from 'react';
import Top from './Top'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    console.log("These are the props:");
    console.log(this.props);
    console.log("yup.");

  }

  render() {
    return (
      <div className="container">
        
        <Top/>
        
        <div className="row">
          <h3>Profile</h3>
        </div>
        <br/>

        <center>
        <div className="card">
          <img src="https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png" width="300px"  />
          <h1>{this.props.userdata.name} {this.props.userdata.lastname}</h1>
          
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <p><button className="btn btn-info">Details</button></p>

        </div>
        </center>
      </div>
    );
  }
}

export default Profile
