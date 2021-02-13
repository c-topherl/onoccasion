import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Modal, Row, Table } from 'react-bootstrap';
import EditOccasionForm from './EditOccasionForm'

const OccasionList = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onOccasionEditFormSubmit = (e) => {
    e.prOccasionDefault();
    alert("Occasion updated");
    handleClose();
  };

  return (
      <Container>
        <Row>
              <Button onClick={handleShow} className="ml-auto">Add Occasion</Button>
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
              <tr>
                <td>Valentine's Day</td>
                <td>Valetine's Day</td>
                <td>02/15</td>
                <td><Button onClick={handleShow}>Edit</Button></td>
              </tr>
              <tr>
                <td>Test birthday 1</td>
                <td>Card type 1</td>
                <td>02/18</td>
                <td><Button onClick={handleShow}>Edit</Button></td>
              </tr>
            </tbody>
        </Table>
        </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Occasion</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditOccasionForm onSubmit={onOccasionEditFormSubmit} /></Modal.Body>
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

export default OccasionList