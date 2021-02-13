import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Home = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
          <h1>On Occasion</h1>
          <p>
              Maybe some text here. Or buttons. With a nice background image!
          </p>
      </Container>
    </Jumbotron>
  )
}

export default Home