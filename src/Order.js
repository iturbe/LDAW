import React, {Component} from 'react';
import Top from './Top'
import { Link } from 'react-router-dom'


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
    alert("Data submited");
    event.preventDefault();
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
                  <input className="form-control" placeholder="Enter Name"/>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Category</label>
                  <input className="form-control" placeholder="Enter Category"/>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Notes</label>
                  <textarea className="form-control" placeholder="Notes"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Image</label>
                  <textarea className="form-control" placeholder="Image Url"/>
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
                  <select className="form-control">
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
                  <select className="form-control">
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
