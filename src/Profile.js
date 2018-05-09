import React, {Component} from 'react';
import Top from './Top';
import Items from './Items';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

var idUsuario = "NOT SET";
var filteredItems = ["foo"];

var state = this;

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemRemoved = this.handleItemRemoved.bind(this);

    idUsuario = this.props.userdata.userid;
    console.log(idUsuario);
    
    filteredItems = this.props.items.filter(item => item.userid == idUsuario);
    console.log(filteredItems);
  }

  handleItemRemoved(item) {
    //event.preventDefault();

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        alert("You have successfully removed the " + item.name + " item from the item roster.")
      }
    });

    xhr.open("DELETE", "http://ship-it.wake.mx/api/users/" + encodeURIComponent(this.props.userdata.email) + "/items/" + item.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-USER", this.props.userdata.email);
    xhr.setRequestHeader("Authorization", "Bearer WDLLQJFAisg1rjnPZn4zKZkcnoarc645W24ndSi3");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "daaf9f75-4b98-472b-9fec-6e32dcdd35a5");

    xhr.send(data);
    
    console.log(item)
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
          {/* <img src="https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png" width="300px"  /> */}
          <h1>{this.props.userdata.name} {this.props.userdata.lastname}</h1>

        </div>
        </center>

        <br/>

        {filteredItems.length > 0 &&
          <div>
            <h2>Your items that have not yet been assigned a trip:</h2>
            <br>
            </br>
            <div id="cardContainer">
              {filteredItems.map((item, idx) =>
                <div className="col-12 col-md-4">
                  <Card>
                    <CardImg top width="100%" src={item.image} alt="image"/>
                    <CardBody><CardTitle>{item.name}</CardTitle></CardBody>
                    <button type="button" id={idx} className="btn btn-danger" onClick={() => this.handleItemRemoved(item)}>Delete Item</button>
                  </Card>
              </div>
              )}
            </div>
          </div>
        }

        {/* EN CASO DE NO HABER ITEMS */}
        { filteredItems.length == 0 &&
          <div>
          <center>
            <h2>You currently have no items pending a trip allocation!</h2>
          </center>
          </div>
        }

      </div>
    );
  }
}

export default Profile
