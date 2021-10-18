import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button, Container, Modal, Row, Table } from 'react-bootstrap';
import AddOccasionForm from './AddOccasionForm'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { occasionAdded } from './occasionsSlice'

const OccasionList = () => {
  const occasions = useSelector(state => state.occasions)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderedOccasions = occasions.map(occasion => (
    <tr key={occasion.id}>
      <td>{occasion.title}</td>
      <td>{occasion.occasionDate}</td>
      <td><Button>Edit</Button></td>
    </tr>
  ))

  return (
      <Container>
        <Row>
              <Button onClick={handleShow}>Add Occasion</Button>
        </Row>
        <Row>
          <Table hover>
            <thead>
              <tr>
                <th>Occasion</th>
                <th>Card Type</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderedOccasions}
            </tbody>
        </Table>
        </Row>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Occasion</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddOccasionForm/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
  )
}

export default withAuthenticationRequired(OccasionList);