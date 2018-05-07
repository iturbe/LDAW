import React, {Component} from 'react';
import Top from './Top';
import Items from './Items';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

var display = false;
var from = "NOT SET";
var to = "NOT SET";
var filteredItems = ["foo", "bar"];

class Ship extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
  }

  handleSubmit(event) {
    event.preventDefault();

    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    console.log(from + " " + to);

    //alert("Mostrando únicamente los items que se quieren mandar de " + from + " a " + to)

    display = true;

    filteredItems = this.props.items.filter(item => item.from == from && item.to == to);

    this.forceUpdate();

  }

  handleItemAdded(item) {
    //event.preventDefault();
    alert("You will transport " + item.name + " from " + from + " to " + to + "! An email has been sent to you with the sender's contact information.")
    console.log(item)
  }

  render() {
    return (
      <div className="container">

        <Top/>

        <div className="row">
          <h3>Transport an item</h3>
        </div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <h4>Trip Info</h4>
          
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
              <div className="col-12 col-md-4 col-md-offset-8">
                <div className="form-group">
                  <label>To</label>
                  <select className="form-control" id="to">
                    return({this.props.cities.map((city,idx) => <option>{city}</option>)});
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Start</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4 col-md-offset-8">
                <div className="form-group">
                  <label>End</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}

          {/* CARDS OLD LOCATION */}

          <div className="row justify-content-right">
            <div className="col-12 col-md-6 col-md-offset-6">
              <div className="row">
                <div className="col-12 col-md-4 col-md-offset-8">
                  <button type="submit" value="Submit" className="btn btn-primary btn-block text-right">Search</button>
                </div>
              </div>
            </div>
          </div>

        </form>
        <br/>
        <br/>

        {/* ALL ITEMS */}
        {/* {display &&
          <div>
            <h2>All items:</h2>
            <div id="cardContainer">
              {this.props.items.map((item, idx) => 
                <div className="col-12 col-md-4">
                  <Card>
                    <CardImg top width="100%" src={item.image} alt="image image"/>
                    <CardBody><CardTitle>{item.name}</CardTitle></CardBody>
                    <CardBody><CardText>{item.notes}</CardText></CardBody>
                    <button type="button" id={idx} className="btn btn-success">Add to trip</button>
                  </Card>
              </div>
              )}
            </div>
          </div>
        } */}

        {/* DESPLEGAR ITEMS FILTRADOS */}
        {filteredItems.length > 0 && display &&
          <div>
            <h2>Items that need to be shipped from {from} to {to}</h2>
            <div id="cardContainer">
              {filteredItems.map((item, idx) => 
                <div className="col-12 col-md-4">
                  <Card>
                    <CardImg top width="100%" src={item.image} alt="image image"/>
                    <CardBody><CardTitle>{item.name}</CardTitle></CardBody>
                    <CardBody><CardText>{item.notes}</CardText></CardBody>
                      <button type="button" id={idx} className="btn btn-success" onClick={() => this.handleItemAdded(item)}>Add to trip</button>
                  </Card>
              </div>
              )}
            </div>
          </div>
        }

        {/* EN CASO DE NO HABER ITEMS */}
        {display && filteredItems.length == 0 &&
          <div>
            <h2>There are currently no items that need to be shipped from {from} to {to}!</h2>
          </div>
        }

      </div>
    );
  }
}

export default Ship
