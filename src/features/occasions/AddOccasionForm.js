import React from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router'
import { Form } from 'react-bootstrap';

const AddOccasionForm = () => {
  const [occasionName, setOccasionName] = useState("");
  const [occasionDate, setOccasionDate] = useState("");
  const [cardRecipient, setCardRecipient] = useState("");
  const [reminderEmail, setReminderEmail] = useState("");

  const onOccasionNameChanged = e => setOccasionName(e.target.value)
  const onOccasionDateChanged = e => setOccasionDate(e.target.value)
  const onCardRecipientChanged = e => setCardRecipient(e.target.value)
  const onReminderEmailChanged = e => setReminderEmail(e.target.value)

  const dispatch = useDispatch()

  const addOccasion = () => {
    console.log("CJL test");
    if (occasionName && occasionDate && cardRecipient && reminderEmail) {
      dispatch(
        occasionAdded({
          id: nanoid(),
          title: occasionName,
          occasionDate
        })
      )
    }
  }

  return (
    <Form onSubmit={addOccasion}>
      {/*...*/}
      <Form.Group controlId="addOccasionForm.occasionName">
        <Form.Label>Occasion Name</Form.Label>
        <Form.Control
          type="text"
          value={occasionName}
          onChange={(e) => setOccasionName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="addOccasionForm.occasionType">
        <Form.Label>Occasion Type</Form.Label>
        <Form.Control as="select">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Graduation</option>
          <option>Wedding</option>
          <option>...etc</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="addOccasionForm.occasionDate">
        <Form.Label>Occasion Date</Form.Label>
        <Form.Control
          type="text"
          value={occasionDate}
          onChange={(e) => setOccasionDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="addOccasionForm.cardRecipient">
        <Form.Label>Card Recipient</Form.Label>
        <Form.Control
          type="text"
          value={cardRecipient}
          onChange={(e) => setCardRecipient(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="addOccasionForm.relationship">
        <Form.Label>Relationship</Form.Label>
        <Form.Control as="select">
          <option>Mother</option>
          <option>Father</option>
          <option>Brother</option>
          <option>Sister</option>
          <option>...etc</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="addOccasionForm.reminderEmail">
        <Form.Label>Reminder email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={reminderEmail}
          onChange={(e) => setReminderEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="addOccasionForm.cardType">
        <Form.Label>Card Type</Form.Label>
        <Form.Control as="select">
          <option>Funny</option>
          <option>Sentimental</option>
          <option>Serious</option>
          <option>...etc</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="addOccasionForm">
        <Form.Check type="checkbox" label="Send me a card!" />
      </Form.Group>
    </Form>
  );
};

export default (AddOccasionForm)