import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap';

const EventList = (props) => {
  return (
      <div className="content">
        <div>
              <Button className="right-button">Add Event</Button>
            </div>
            <div>
              <Table hover>
                <thead>
            <tr>
                  <th>Event</th>
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
                  <td><Button>Edit</Button></td>
              </tr>
              <tr>
                  <td>Test birthday 1</td>
                  <td>Card type 1</td>
                  <td>02/18</td>
                  <td><Button>Edit</Button></td>
              </tr>
            </tbody>
        </Table>
      </div>
      </div>
  )
}

export default EventList