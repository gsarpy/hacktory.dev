import React from 'react';
import { Button, Container, Row, Col, Jumbotron, Form, Label, Input, FormGroup } from 'reactstrap';

const submitRegistration = (e) => {
  e.preventDefault();
  console.log("Registered!", e.target);
}

const Registration = (props) => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <h3>Register</h3>
          <p>and start organizing your learning</p>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>

            <FormGroup>
              <Label for="password_confirm">Confirm Password</Label>
              <Input type="password" name="password_confirm" id="password_confirm" />
            </FormGroup>
            <Button onClick={submitRegistration}>Sign Up</Button>
          </Form>
        </Col>
      </Row>

    </div>
  );
}

export default Registration;
