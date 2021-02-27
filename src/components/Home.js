import React from 'react'
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
import Img1 from "../img1.jpg"

const Home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
            <h1>On Occasion</h1>
            <p>Maybe some text here. Or buttons. With a nice background image!</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <div className="ml-auto">
              <p className="ml-auto">Step 1: Enter your upcoming events.</p>
              <p>Lots of helpful info here!</p>
              <p>Read on for step 2.</p>
            </div>
          </Col>
          <Col>
            <Image src={ Img1 } fluid />
          </Col>
        </Row>
      </Container>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col>
              <Image src={ Img1 } fluid />
            </Col>
            <Col>
              <div className="ml-auto">
                <p>Step 2: Receive your cards in the mail.</p>
                <p>Lots of helpful info here!</p>
                <p>Read on for step 3.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <p>Step 3: Deliver your cards!</p>
            <p>Lots of helpful info here!</p>
            <p>You are done.</p>
          </Col>
          <Col>
            <Image src={ Img1 } fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home