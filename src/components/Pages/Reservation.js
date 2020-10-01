import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-bootstrap-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import './Reservation.css';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import MapContainer from './GoogleMaps';


class Reservation extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return(
      <div className="mainContainer">
          <Container fluid>
            <Row>
              <Col fluid>
              <div className="formContainer">
            <Form>
              <Form.Row>
              <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="name" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" required/>
                </Form.Group>
              </Form.Row>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required/>
              </Form.Group>

              <Form.Group as={Col} id="formGridCheckbox">
                <Form.Check type="checkbox" label="Join Mailing List" name="onEmailList"/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Restaurant</Form.Label>
                  <Form.Control as="select" name="restaurantName" required>
                  <option>Big Bob's Bistro</option>
                  <option>Pho Yo</option>
                  <option>Tour of Italy</option>
                  <option>Idian Cuisine</option>
                  <option>Not Your Average Taco</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label>Number of People</Form.Label>
                  <Form.Control type="number" placeholder="1" name="numPeople" required/>
                </Form.Group>
                </Form.Row>
                
                <Form.Row >
                <Form.Group as={Col} controlId="date">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="dob" placeholder="Date" name="date" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="time" style={{paddingLeft: 25 + "px"}}>
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="time" name="time" placeholder="time" name="time" required/>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="message" placeholder="Enter Message" name="note"/>
                  </Form.Group>
                </Form.Row>

              

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            
          </div>
              </Col>
              
              <Col className="mapContainer" fluid><div><MapContainer className="map"/></div></Col>
              
            </Row>
          </Container>
        </div>
  );
}
}

export default Reservation;