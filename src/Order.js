import React, {Component} from 'react';
import Top from './Top'
import { Link } from 'react-router-dom'

var name = "NOT SET";
var category = "NOT SET";
var notes = "NOT SET";
var image = "NOT SET";
var from = "NOT SET";
var to = "NOT SET";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
  }

  handleSubmit(event) {
    event.preventDefault();

    name = document.getElementById("name").value;
    category = document.getElementById("category").value;
    notes = document.getElementById("notes").value;
    image = document.getElementById("image").value;
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;

    console.log("nam:" + name);
    console.log("cat:" + category);
    console.log("nts:" + notes);
    console.log("img:" + image);
    console.log("from:" + from);
    console.log("to:" + to);
    console.log("user:" + this.props.userdata.email);

    // ENVIAR REQUEST
    var data = {
      "name": name,
      "category": category,
      "notes": notes,
      "image": image,
      "from": from,
      "to": to
   };

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        alert("You have successfully submitted a " + name + " to be transported from " + from + " to " + to + "!");
      }
    });

    //xhr.open("POST", "http://ship-it.wake.mx/api/users/donald%40trump.us/items");
    xhr.open("POST", "http://ship-it.wake.mx/api/users/" + this.props.userdata.email + "/items");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-USER", this.props.userdata.email);
    xhr.setRequestHeader("Authorization", "Bearer WDLLQJFAisg1rjnPZn4zKZkcnoarc645W24ndSi3");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "15e5b03e-5c47-4dc9-8727-cd3c08bab2f8");
    
    xhr.send(data);

  }

  render() {
    return (
      <div className="container">
        
        <Top/>
        
        <div className="row">
          <h3>Send an item</h3>
        </div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          
          <h4>Item Info</h4>
          <div className="col-12 col-md-6">
            
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" id="name" placeholder="Enter Name"/>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Category</label>
                  <input className="form-control" id="category" placeholder="Enter Category"/>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Notes</label>
                  <textarea className="form-control" id="notes" placeholder="Notes"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Image</label>
                  <textarea className="form-control" id="image" placeholder="Image Url"/>
                </div>
              </div>
            </div>

          </div>

          <h4>Delivery Info</h4>
          
          {/* FROM SELECTOR */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>From</label>
                  <select className="form-control" id="from">
                    return({this.props.cities.map((city,idx) => <option>{city}</option>)});
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* TO SELECTOR */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>To</label>
                  <select className="form-control" id="to">
                    return({this.props.cities.map((city,idx) => <option>{city}</option>)});
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <button type="submit" value="Submit" className="btn btn-success btn-block">Add Item</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Order
