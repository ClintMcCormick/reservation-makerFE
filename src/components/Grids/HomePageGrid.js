import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import './HomePageGrid.css'

function HomePageGrid() {
    return (
        <div className="mainContainer">
            <Container className="grid" fluid>
                <Row>
                <Col className="cardCol" fluid>
                <Card className= "card" fluid>
                    <Card.Body className="cardBody" fluid>
                        <Card.Title><h1>Make Your Reservation Today!</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                    <Col xs={7}><Image className="image" src="https://media.cntraveler.com/photos/5d76c2de7ffc50000818c755/master/pass/Aba_JEFF-MARINI_2019_Aba_InteriorWide_creditJeffMarini.jpg" fluid/> 
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePageGrid