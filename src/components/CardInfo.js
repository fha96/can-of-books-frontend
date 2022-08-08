import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class CardInfo extends React.Component {



  render() {

    return (
      <>
        <Card style={{ width: '18rem', margin: 'auto' }} >
          <Card.Img variant="top" src={this.props.picture} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Email: {this.props.email}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </>
    )
  }
}