import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

console.log("TEST:" + this.props);

const Items = () => (

    

    <div id="itemContainer">
    {/* {this.props.items.map((item, idx) => 
        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src={item.image} alt="image image"/>
            <CardBody><CardTitle>{item.name}</CardTitle></CardBody>
            <CardBody><CardText>{item.notes}</CardText></CardBody>
            <button type="button" id={idx} className="btn btn-success">Add to trip</button>
          </Card>
      </div>
      )} */}
  </div>
)

export default Items
